import { instance } from "./base.api";

//agregamos una constante que representa al endpoint de la api
const endpoint: string = "character"; //ejemplo:

//se crea como un objeto por que podemos obtener muchas funciones.
export const characters = {
  getAll: function ({page = 1} : {page ?: number}) {
    //lo que hace a continuación la función get es pegarle strings a la api, para acceder a la información.
    return instance.get(endpoint, {
        params : { //aqui pasamos como parametro la página a la que queremos acceder del "endpoint"
            page
        }
    })
  },

  getById : function ({id} : {id : number}) {
    return instance.get(`${endpoint}/${id}`)
  }
};

//dentro de este objeto podemos tener varios métodos que permiten acceder de manera distinta a la api.


