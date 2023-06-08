//steps for validating forms with yup:

//1. install yup with "npm install yup" or "npm i yup" => i = install

//2. create a .ts file for holding the logic of the validation. For our case = "formValidation.ts".


// ***WHITHIN THE .TS FILE***
//3. import all yup things as follows
import * as yup from "yup";

//4. define the functions that wil validate your forms, here we have one per form.

    //4.1 define the validation function as follows "export const formValidation = yup.object().shape({ "shape of the object that you got form the form "})"
    //4.2 validate the fields of the object as shown below.

export const loginValidation = yup.object().shape({
  email: yup.string().trim().required("El campo correo está vacio."),
  password: yup.string().trim().required("El campo contraseña está vacio."),
});

export const registerValidation = yup.object().shape({
  name: yup.string().trim().required("El campo nombre está vacio."),
  lastName: yup.string().trim().required("El campo apellido está vacio."),
  email: yup.string().trim().required("El campo correo está vacio."),
  password: yup.string().trim().required("El campo contraseña está vacio."),
  confirmPassword: yup.string().trim().required("El campo confirmación de contraseña está vacio."),
});


// ***WHITHIN THE FORM FILE***
//5. use the functions defined above. Within the form we have to call'em within the "onClick" or "onSubmit" events hanlders. For this purpose, we have to use
//the validation functions as follow.

    //5.1 formValidation.validate(data).then (() => {...logic here}).catch ((error) => {...logic here})