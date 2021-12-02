let { check} = require('express-validator');

module.exports = [
    check('user')
    .notEmpty()
    .withMessage("Debe ingresar un nombre de usuario").bail()
    .isLength({min: 4})
    .withMessage("Ingrese un usuario minimo de 4 caracteres"),

    check('email')
    .notEmpty()
    .withMessage("Este campo es obligatorio").bail()
    .isEmail()
    .withMessage("Debe ingresar un email valido"),

    check('postalCode')    
    .notEmpty().bail()
    .withMessage("El campo de código postal no puede estar vacío")
    .isNumeric()
    .withMessage("Debes ingresar un código postal válido"),

    check('rol')    
    .notEmpty().bail()
    .withMessage("Debe asignarle un rol al usuario"),

]