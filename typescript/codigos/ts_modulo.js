"use strict";
exports.__esModule = true;
exports.Reservas = exports.cliente = void 0;
exports.cliente = 'Peter Pan';
var Reservas = /** @class */ (function () {
    function Reservas(codigo, acomodacao) {
        this.codigo = codigo;
        this.acomodacao = acomodacao;
    }
    return Reservas;
}());
exports.Reservas = Reservas;
var reservas = new Reservas(4, "Luxo");
