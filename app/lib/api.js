import Config from 'react-native-config';

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

  static xhr(route, params, verb) {
    const host = Config.BASE_URL;
    const url = `${host}${route}`;

    console.log("Ruta",url);
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
    console.log("params", params);
    const url = Config.BASE_POST_FORM;
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
    //options.headers = Api.headers();

    return fetch(url, request).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json );
  }
}

export default Api;
