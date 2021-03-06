import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const reactNativePackage = require('react-native/package.json');
const splitVersion = reactNativePackage.version.split('.');
const majorVersion = +splitVersion[0];
const minorVersion = +splitVersion[1];


export default class SlidesTilesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      height: Dimensions.get('window').width * (2 / 9),
      width: Dimensions.get('window').width,
      scrolling: false,
    };
  }

  _onRef(ref) {
    this._ref = ref;
    if (ref && this.state.position !== this._getPosition()) {
      this._move(this._getPosition());
    }
  }

  _move(index) {
    const isUpdating = index !== this._getPosition();
    const x = this.state.width * index;
    if (majorVersion === 0 && minorVersion <= 19) {
      this._ref.scrollTo(0, x, true); // use old syntax
    } else {
      this._ref.scrollTo({x: this.state.width * index, y: 0, animated: true});
    }
    this.setState({position: index});
    if (isUpdating && this.props.onPositionChanged) {
      this.props.onPositionChanged(index);
    }
  }

  _getPosition() {
    if (typeof this.props.position === 'number') {
      return this.props.position;
    }
    return this.state.position;
  }

  _next() {
    const pos = this.state.position === this.props.dataSource.length-1 ? 0 : this.state.position + 1;
    this._move(pos);
    this.setState({position: pos});
  }

  _prev() {
    const pos = this.state.position === 0 ? this.props.dataSource.length-1 : this.state.position - 1;
    this._move(pos);
    this.setState({position: pos});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.position !== this.props.position) {
      this._move(this.props.position);
    }
  }

  componentWillMount() {
    const width = this.state.width;

    let release = (e, gestureState) => {
      const width = this.state.width;
      const relativeDistance = gestureState.dx / width;
      const vx = gestureState.vx;
      let change = 0;

      if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
        change = 1;
      } else if (relativeDistance > 0.5 || (relativeDistance > 0 && vx >= 0.5)) {
        change = -1;
      }
      const position = this._getPosition();
      if (position === 0 && change === -1) {
        change = 0;
      } else if (position + change >= this.props.dataSource.length) {
        change = (this.props.dataSource.length) - (position + change);
      }
      this._move(position + change);
      return true;
    };

    this._panResponder = PanResponder.create({
      onPanResponderRelease: release
    });

    this._interval = setInterval(() => {
      const newWidth = Dimensions.get('window').width;
      if (newWidth !== this.state.width) {
        this.setState({width: newWidth});
      }
    }, 16);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    const width = this.state.width;
    const height = this.props.height || this.state.height;
    const position = this._getPosition();
    return (
      <View style={[
          this.props.containerStyle,
          { height: height }
        ]}>
        {/* SECTION IMAGE */}
        <ScrollView
          ref={ref => this._onRef(ref)}
          decelerationRate={0.99}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={this.props.scrollEnabled}
          {...this._panResponder.panHandlers}
          style={[
            styles.container,
            { height: height }
          ]}>

          {this.props.dataSource.map((image, index) => {

            const textComponent = (
              <View style={styles.layoutText}>
                {image.caption === undefined ? null : <Text style={styles.textCaption}>{image.captionLarge}</Text>}
              </View>
            );

            const btnComponent = (
              <View style={styles.layoutText}>
                <TouchableOpacity
                  onPress={() => this.props.onPress({image, index})}
                  delayPressIn={200}>
                  <Text>{`+ info`}</Text>
                </TouchableOpacity>
              </View>
            );

            const imageComponent = (
              <View key={index} style={styles.containerImage}>
                <View style={styles.overlay}>
                  <Image
                    source={image.url}
                     style={styles.imageSlider}/>
                </View>
                {textComponent}
              </View>
            );

            return imageComponent;

          })}
        </ScrollView>
      </View>
    );
  }
}

SlidesTilesComponent.defaultProps = {
  height: 350,
  indicatorSize: 8,
  indicatorColor: '#CCCCCC',
  indicatorSelectedColor: '#FFFFFF',
  scrollEnabled: true,
  arrowSize: 16,
}

SlidesTilesComponent.propTypes = {
	dataSource: PropTypes.arrayOf(PropTypes.shape({
	    title: PropTypes.string,
	    caption: PropTypes.string,
	    url: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })).isRequired,
	indicatorSize: PropTypes.number,
	indicatorColor: PropTypes.string,
	indicatorSelectedColor: PropTypes.string,
	height: PropTypes.number,
	position: PropTypes.number,
  scrollEnabled: PropTypes.bool,
  containerStyle: PropTypes.object,
  overlay: PropTypes.bool,
	arrowSize: PropTypes.number,
  arrowLeft: PropTypes.object,
  arrowRight: PropTypes.object,
	onPress: PropTypes.func,
	onPositionChanged: PropTypes.func,
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  layoutIndicator: {
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  indicadorNumbers:{
    fontFamily: 'Signika-Bold',
    fontSize: 18,
    color: '#ffffff',
    },
  indicator: {
    margin: 3,
    opacity: 0.9
  },
  containerImage : {
    width: Dimensions.get('window').width,
  },
  indicatorSelected: {
    opacity: 1,
  },
  overlay: {
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  imageSlider:{
    width:'90%',
    height:350,
    backgroundColor: '#ffffff',
    },
  layoutText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0075bc',
    width:'90%',
    marginLeft:'5%',
    marginRight:'5%',
    paddingTop: 5,
    paddingBottom: 5,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  textCaption: {
    width: '90%',
    fontWeight: '400',
    fontFamily: 'Signika-Bold',
    fontSize: 16,
    color:'#ffffff',
    textAlign: 'center',
  }
});
