
class FormatUtil {

  static toGrid(rawData) {
        try {
          return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key: rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        name: rawData[key].hasOwnProperty('title') ? rawData[key].title : "",
                        description: rawData[key].hasOwnProperty('body')  ? rawData[key].body : "",
                        image: rawData[key].hasOwnProperty('url')  ? { 'url' : rawData[key].url } : { 'url' : '../../assets/img/producto1.jpg' }
                      });
            return out;
          }, []);
        } catch (err) {
            return [];
        }
  }

  static toCategoryPayload(rawData) {
        try {
          console.log(rawData);
          return [];
          /*return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key: rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        name: rawData[key].hasOwnProperty('title') ? rawData[key].title : "",
                        description: rawData[key].hasOwnProperty('body')  ? rawData[key].body : "",
                        image: rawData[key].hasOwnProperty('url')  ? { 'url' : rawData[key].url } : { 'url' : '../../assets/img/producto1.jpg' }
                      });
            return out;
          }, []);*/
        } catch (err) {
            return [];
        }
  }

  static toFiltro(rawData) {
        try {
          return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key: rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        value: rawData[key].hasOwnProperty('titulo') ? rawData[key].titulo : ""
                      });
            return out;
          }, []);
        } catch (err) {
            return [];
        }
  }

  static toCategory(rawData) {
        try {
            return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key: rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        title: rawData[key].hasOwnProperty('titulo') ? rawData[key].titulo : "",
                        description: rawData[key].hasOwnProperty('descripcion') ? rawData[key].descripcion : "",
                        imgTablet: rawData[key].hasOwnProperty('img_tablet') ? rawData[key].img_tablet : "",
                        imgMobile: rawData[key].hasOwnProperty('img_movil') ? rawData[key].img_movil : ""
                      });
            return out;
          }, []);
        } catch (err) {
            return [];
        }
  }

  static toSlider(rawData) {
        try {
            return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key: rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        title: rawData[key].hasOwnProperty('titulo') ? rawData[key].titulo : "",
                        description: rawData[key].hasOwnProperty('descripcion') ? rawData[key].descripcion : "",
                        imgTablet: rawData[key].hasOwnProperty('img_tablet') ? rawData[key].img_tablet : "",
                        imgMobile: rawData[key].hasOwnProperty('img_movil') ? rawData[key].img_movil : ""
                      });
            return out;
          }, []);
        } catch (err) {
            return [];
        }
  }

  static makeid() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
  }

}

module.exports = FormatUtil;
