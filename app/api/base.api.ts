//se instala axios con "npm i axios", y luego se importa.
import axios from "axios"

const BASE_URL : string = "" //URL de la api base va aqui.

//aqui se exporta la conexión de axios, se hace mediante una instanciación.
export const instance = axios.create({
    baseURL : BASE_URL
})

//de este modo se accede a la url base de la api, luego mediante otros archivos accedemos a los distintos endpoint.

