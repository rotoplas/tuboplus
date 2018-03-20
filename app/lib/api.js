import Config from 'react-native-config';
import base64 from 'base-64';

class Api {

  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhrPost(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static postCF(route, params, headers = []) {
    return this.xhrCF(route, params, 'POST', headers)
  }

  static xhr(route, params, verb) {
    const host = "http://35.168.212.248/wp-json/servicios";
    const url = `${host}${route}`;

    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers();
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json );
  }

  static xhrPost(route, params, verb) {
    const url = "http://35.168.212.248/wp-json/servicios/guardar-datos-formularios";
    //let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );

    var formData = new FormData();

    for (var k in params) {
       formData.append(k, params[k]);
    }

    var request = {
       method: 'POST',
       headers: Api.headers(),
       body: formData
    };

    return fetch(url, request).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json );
  }

  static xhrCF(route, params, verb, headers = []) {
      let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
      options.headers = Api.headers();

      if(typeof headers["Authorization"] !== "undefined"){
        let authorization = base64.encode(headers["Authorization"]);
        options.headers["Authorization"] = `Basic ${authorization}`;
      }

      return fetch(route, options).then(resp => {
        let json = resp.json();
        if (resp.ok) {
          return json
        }
        return json.then(err => {throw err});
      }).then( json => json );
    }
}

export default Api;
