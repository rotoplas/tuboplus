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
                //image : rawData[0].hasOwnProperty('img_tablet') && rawData[0].hasOwnProperty('img_movil') ? DeviceInfo.isTablet() ? { 'url' : rawData[0].img_tablet } : { 'url' : rawData[0].img_movil } : null,
                image: rawData[0].hasOwnProperty('img_tablet') && rawData[0].hasOwnProperty('img_movil') ? DeviceInfo.isTablet() ? rawData[0].img_tablet : rawData[0].img_movil : null,
                equivalence : rawData[0].hasOwnProperty('correspondencias') ? this.toEquivalence(rawData[0].correspondencias) : [],
                //plane : rawData[0].hasOwnProperty('planos') ? { url : rawData[0].planos } : null,
                plane : rawData[0].hasOwnProperty('planos') ? rawData[0].planos : null,
                codes : rawData[0].hasOwnProperty('codigos') ? [
                  {
                    labels: rawData[0].codigos[0].listado,
                    values: this.toTable3(rawData[0].codigos)
                  }
                ] : []
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

  static toContactPayload(rawData) {
            try {
              return {
                  header : rawData.hasOwnProperty('img_tablet') && rawData.hasOwnProperty('img_movil') ? DeviceInfo.isTablet() ? { url : rawData.img_tablet } : { url : rawData.img_movil } : null,
                  schedule_of_attention : rawData.hasOwnProperty('horario_atencion') ? {
                    days : rawData.horario_atencion.dias,
                    schedule : rawData.horario_atencion.horarios
                  } : {
                    days : "",
                    schedule : ""
                  },
                  phones : rawData.hasOwnProperty('telefonos') ?  {
                    phone : rawData.telefonos.telefono,
                    cellphone : rawData.telefonos.celular
                  } : {
                    phone : "",
                    cellphone : ""
                  },
                  call : rawData.hasOwnProperty('telefonos') ? {
                    cellphone : rawData.telefonos.celular
                  } : {
                    cellphone : ""
                  }
              };
            } catch (err) {
                console.log(err);
                return {};
            }
  }

  static toTimeLifePayload(rawData) {
            try {
              return {
                  title : rawData.hasOwnProperty('titulo') ? rawData.titulo : "",
                  description : rawData.hasOwnProperty('descripcion') ? rawData.descripcion : "",
                  header : rawData.hasOwnProperty('img_tablet') && rawData.hasOwnProperty('img_movil') ? DeviceInfo.isTablet() ? rawData.img_tablet : rawData.img_movil : null,
                  filters : rawData.hasOwnProperty('filtros') ? this.toFilter(rawData.filtros) : [],
                  pressures : rawData.hasOwnProperty('tabla_presiones') ? this.toPressures(rawData.tabla_presiones) : []
              };
            } catch (err) {
                console.log(err);
                return {};
            }
  }

  static toBenefitsPayload(rawData) {
            try {
              return Object.keys(rawData).reduce((out, key) => {
                          out.push({
                            key : rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                            url : rawData[key].hasOwnProperty('img_tablet') && rawData[key].hasOwnProperty('img_movil') ? DeviceInfo.isTablet() ? rawData[key].img_tablet :  rawData[key].img_movil : null,
                            caption : rawData[key].hasOwnProperty('descripcion') ? rawData[key].descripcion : ""
                          });
                return out;
              }, []);
            } catch (err) {
                console.log(err);
                return [];
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

  static toContactForm(rawData) {
        try {
          return {
            input_1 : rawData.hasOwnProperty('placeholderNombre') ? rawData.placeholderNombre : "",
            input_2 : rawData.hasOwnProperty('placeholderMunicipio') ? rawData.placeholderMunicipio : "",
            input_3 : rawData.hasOwnProperty('placeholderEmail') ? rawData.placeholderEmail : "",
            input_4 : rawData.hasOwnProperty('placeholderColonia') ? rawData.placeholderColonia : "",
            input_5 : rawData.hasOwnProperty('placeholderTelefono') ? rawData.placeholderTelefono : "",
            input_6 : rawData.hasOwnProperty('placeholderCalle') ? rawData.placeholderCalle : "",
            input_7 : rawData.hasOwnProperty('placeholderPais') ? rawData.placeholderPais : "",
            input_8 : rawData.hasOwnProperty('placeholderEstado') ? rawData.placeholderEstado : "",
            input_9 : rawData.hasOwnProperty('placeholderCP') ? rawData.placeholderCP : "",
            input_11 : rawData.hasOwnProperty('placeholderDirigidoA') ? rawData.placeholderDirigidoA : "",
            input_12 : rawData.hasOwnProperty('placeholderMensaje') ? rawData.placeholderMensaje : "",
            input_13 : rawData.hasOwnProperty('placeholderTerminos') ? rawData.placeholderTerminos : "",
            input_14 : rawData.hasOwnProperty('placeholderRecibir') ? rawData.placeholderRecibir : "",
            IDForm : 1
          };
        } catch (err) {
            console.log(err);
            return {};
        }
  }

  static toSubscribeForm(rawData) {
        try {
          return {
            email_address: rawData.hasOwnProperty('placeholderEmail') ? rawData.placeholderEmail : "",
            status: "subscribed",
            merge_fields: {
               "FNAME": rawData.hasOwnProperty('placeholderNombres') ? rawData.placeholderNombres : "",
               "LNAME": rawData.hasOwnProperty('placeholderApellidos') ? rawData.placeholderApellidos : "",
            }
          };
        } catch (err) {
            console.log(err);
            return {};
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
                        //image: rawData[key].hasOwnProperty('img_tablet') && rawData[key].hasOwnProperty('img_movil') ? DeviceInfo.isTablet() ? { url : rawData[key].img_tablet } : { url : rawData[key].img_movil } : null
                        image: rawData[key].hasOwnProperty('img_tablet') && rawData[key].hasOwnProperty('img_movil') ? DeviceInfo.isTablet() ? rawData[key].img_tablet : rawData[key].img_movil : null
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
                        captionLarge: rawData[key].hasOwnProperty('descripcion_larga') ? rawData[key].descripcion_larga : "",
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

  static toPressures(rawData) {
        try {
            return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key: rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        idTemperature : rawData[key].hasOwnProperty('idTemperatura') ? rawData[key].idTemperatura : this.makeid(),
                        innerLeft: rawData[key].hasOwnProperty('duracion') ? rawData[key].duracion : "",
                        innerRight: rawData[key].hasOwnProperty('presion') ? rawData[key].presion : "",
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

  static toTable3(rawData) {
        try {
            return Object.keys(rawData).reduce((out, key) => {
                      out.push({
                        key : rawData[key].hasOwnProperty('id') ? rawData[key].id : this.makeid(),
                        items : rawData[key].hasOwnProperty('listado') && rawData[key].hasOwnProperty('valor') ? rawData[key].listado.map((val, idx) => { return { key : idx,  valor: rawData[key].valor[idx] } }) : []
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
