"use strict";
exports.__esModule = true;
var ped = require("./ts_modulo");
console.log("Nosso novo client \u00E9: ".concat(ped.cliente));
var reservaInicial = new ped.Reservas(3, 'Presidencial');
console.log(reservaInicial);
