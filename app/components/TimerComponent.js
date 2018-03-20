import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TimerComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      started: false,
      remainingTime: props.totalDuration,
      enableClick: true
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.formatTime = this.formatTime.bind(this);

    this.addSecond = this.addSecond.bind(this);
    this.substractSecond = this.substractSecond.bind(this);
    this.addMinute = this.addMinute.bind(this);
    this.substractMinute = this.substractMinute.bind(this);

    const width = props.msecs ? 220 : 150;
    this.defaultStyles = {
      container: {
        backgroundColor: '#000',
        padding: 5,
        borderRadius: 5,
        width: width,
      },
      text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
      }
    };
  }

  componentDidMount() {
    if(this.props.start) {
      this.start();
    }
  }

  componentWillReceiveProps(newProps) {

    if(newProps.start) {
      this.start();
    } else {
      this.stop();
    }
    if(newProps.reset) {
      this.reset(newProps.totalDuration);
    }
  }

  start() {
    const handleFinish = this.props.handleFinish ? this.props.handleFinish : () => alert("Timer Finished");
    const endTime = new Date().getTime() + this.state.remainingTime;
    this.interval = setInterval(() => {
      const remaining = endTime - new Date();
      if(remaining <= 1000) {
        this.setState({remainingTime: 0, enableClick: true});
        this.stop();
        handleFinish();
        return;
      }
      this.setState({remainingTime: remaining, enableClick: false});
    }, 1);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset(newDuration) {
    this.setState({
      remainingTime:
        this.props.totalDuration !== newDuration ?
          newDuration :
          this.props.totalDuration
      });
  }

  //1 minute is 60000 milliseconds
  //1 second is 1000 milliseconds

  addMinute(){
    if(this.state.enableClick && this.state.remainingTime < 3540000){
      let nmunutes = this.state.remainingTime + 60000;
      this.setState({remainingTime: nmunutes});
    }
  }

  substractMinute() {
    if(this.state.enableClick && this.state.remainingTime >= 60000){
      let nmunutes = this.state.remainingTime - 60000;
      this.setState({remainingTime: nmunutes});
    }
  }

  addSecond() {
    if(this.state.enableClick && this.state.remainingTime < 3599000){
      let nmunutes = this.state.remainingTime + 1000;
      this.setState({remainingTime: nmunutes});
    }
  }

  substractSecond() {
    if(this.state.enableClick && this.state.remainingTime >= 1000){
      let nmunutes = this.state.remainingTime - 1000;
      this.setState({remainingTime: nmunutes});
    }
  }

  formatTime() {

    let now = this.state.remainingTime;
    let seconds = Math.floor(now / 1000);
    let minutes = Math.floor(now / 60000);
    let hours = Math.floor(now / 3600000);

    seconds = seconds - (minutes * 60);
    minutes = minutes - (hours * 60);

    let formatted;

    formatted = (<View style={styles.timerContainer}>
                    <View>
                        <TouchableHighlight style={styles.arrowTimer} underlayColor={'transparent'}
                              onPress={() => this.addMinute()}>
                            <Icon name='angle-up' size={30}></Icon>
                        </TouchableHighlight>

                          <Text style={styles.minutos}>{minutes < 10 ? 0 : ""}{minutes}</Text>
                          <Text style={styles.cronometroText}>Minutos</Text>

                          <TouchableHighlight style={styles.arrowTimer} underlayColor={'transparent'}
                                onPress={() => this.substractMinute()}>
                              <Icon name='angle-down' size={30}></Icon>
                          </TouchableHighlight>

                        </View>
                        <View>
                          <Text style={styles.puntos}>:</Text>
                        </View>
                        <View>
                        <TouchableHighlight style={styles.arrowTimer} underlayColor={'transparent'}
                              onPress={() => this.addSecond()}>
                            <Icon name='angle-up' size={30}></Icon>
                          </TouchableHighlight>
                          <Text style={styles.segundos}>{seconds < 10 ? 0 : ""}{seconds}</Text>
                          <Text style={styles.cronometroText}>Segundos</Text>
                          <TouchableHighlight style={styles.arrowTimer} underlayColor={'transparent'}
                                onPress={() => this.substractSecond()}>
                              <Icon name='angle-down' size={30}></Icon>
                            </TouchableHighlight>
                        </View>
                  </View>);

    return formatted;
  }

  render() {

    const styles = this.props.options ? this.props.options : this.defaultStyles;

    return(
      <View style={styles.container}>
        {this.formatTime()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    timerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      },
      minutos:{
        fontFamily: 'Signika-Regular',
        fontSize: 50,
        color: '#0e3979',
        fontWeight: '600',
      },
      segundos:{
        fontFamily: 'Signika-Regular',
        fontSize: 50,
        color: '#2f75b7',
        fontWeight: '600',
      },
      puntos:{
        fontFamily: 'Signika-Regular',
        fontSize: 50,
        color: '#2f75b7',
        fontWeight: '400',
        },
        arrowTimer: {
          alignItems: 'center',
        },
        cronometroText: {
          fontFamily: 'Signika-Regular',
          fontSize: 14,
          color: '#666666',
          },
  });


export default TimerComponent;
