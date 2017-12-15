import DeviceInfo from 'react-native-device-info';

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
            console.log(err);
            return [];
        }
  }

  static toCategoryPayload(rawData) {
        try {
          return {
              slides : rawData.hasOwnProperty('slider') ?  this.toSlider(rawData.slider) : [] ,
              filters : rawData.hasOwnProperty('filtros') ?  this.toFilter(rawData.filtros) : [],
              categories : rawData.hasOwnProperty('categorias') ?  this.toCategory(rawData.categorias) : []
          };
        } catch (err) {
            console.log(err);
            return [];
        }
  }

  static toProductPayload(rawData) {
          try {
            return {
                title : rawData[0].hasOwnProperty('titulo') ?  rawData[0].titulo : "",
                category : rawData[0].hasOwnProperty('categoria') ?  rawData[0].categoria : "",
                description : rawData[0].hasOwnProperty('descripcion') ?  rawData[0].descripcion : "",
                image : rawData[0].hasOwnProperty('img_tablet') && rawData[0].hasOwnProperty('img_movil') ? DeviceInfo.isTablet() ? { 'url' : rawData[0].img_tablet } : { 'url' : rawData[0].img_movil } : null,
                equivalence : rawData[0].hasOwnProperty('correspondencias') ? this.toEquivalence(rawData[0].correspondencias) : [],
                plane : rawData[0].hasOwnProperty('planos') ? { url : rawData[0].planos } : null,
                codes : rawData[0].hasOwnProperty('codigos') ? this.toCode(rawData[0].codigos) : []
            };
          } catch (err) {
              console.log(err);
              return {};
          }
  }

  static toEquivalencePayload(rawData) {
            try {
              return {
                  description : rawData.hasOwnProperty('descripcion') ?  rawData.descripcion : "",
                  equivalences : rawData.hasOwnProperty('medidas') ? rawData.medidas.map((val, idx) => { return { key : val.id, innerLeft : val.milimetros, innerRight : val.pulgadas } }) : []
              };
            } catch (err) {
                console.log(err);
                return {};
            }
  }

  static toTermofusionPayload(rawData) {
            try {
              return {
                  slides : rawData.hasOwnProperty('slider') ?  this.toSlider(rawData.slider) : [],
                  filters : rawData.hasOwnProperty('filtros') ? this.toFilter(rawData.filtros) : [],
                  diameters : rawData.hasOwnProperty('diametros') ? this.toDiameter(rawData.diametros) : [],
              };
            } catch (err) {
                console.log(err);
                return {};
            }
  }

  static toFilter(rawData) {
        try {
          return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key : rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        value : rawData[key].hasOwnProperty('titulo') ? rawData[key].titulo : rawData[key].id
                      });
            return out;
          }, []);
        } catch (err) {
            console.log(err);
            return [];
        }
  }

  static toDiameter(rawData) {
        try {
          return rawData.map((val, idx) => {
             return {
               key : val.id,
               values : rawData[idx]
             }
          });
        } catch (err) {
            console.log(err);
            return [];
        }
  }

  static toCategory(rawData) {
        try {
            return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key: rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        name: rawData[key].hasOwnProperty('titulo') ? rawData[key].titulo : "",
                        description: rawData[key].hasOwnProperty('descripcion') ? rawData[key].descripcion : "",
                        category: rawData[key].hasOwnProperty('idCat') ? rawData[key].idCat : 0,
                        image: rawData[key].hasOwnProperty('img_tablet') && rawData[key].hasOwnProperty('img_movil') ? DeviceInfo.isTablet() ? { url : rawData[key].img_tablet } : { url : rawData[key].img_movil } : null
                      });
            return out;
          }, []);
        } catch (err) {
            console.log(err);
            return [];
        }
  }

  static toSlider(rawData) {
        try {
            return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key: rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        title: rawData[key].hasOwnProperty('titulo') ? rawData[key].titulo : "",
                        caption: rawData[key].hasOwnProperty('descripcion') ? rawData[key].descripcion : "",
                        url: rawData[key].hasOwnProperty('img_tablet') && rawData[key].hasOwnProperty('img_movil') ? DeviceInfo.isTablet() ? rawData[key].img_tablet : rawData[key].img_movil : null
                      });
            return out;
          }, []);
        } catch (err) {
            console.log(err);
            return [];
        }
  }

  static toEquivalence(rawData) {
        try {
            return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key: rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        innerLeft: rawData[key].hasOwnProperty('milimetros') ? rawData[key].milimetros : "",
                        innerRight: rawData[key].hasOwnProperty('pulgadas') ? rawData[key].pulgadas : "",
                      });
            return out;
          }, []);
        } catch (err) {
            console.log(err);
            return [];
        }
  }

  static toCode(rawData) {
        try {
            return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key : rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        values: rawData[key].hasOwnProperty('listado') && rawData[key].hasOwnProperty('valor') ? rawData[key].listado.map((val, idx) => { return { key : idx, innerLeft : val, innerRight : rawData[key].valor[idx] } }) : []
                      });
            return out;
          }, []);
        } catch (err) {
            console.log(err);
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
