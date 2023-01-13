"use strict";
function alerta(data, mensagem) {
    return `${data} - ${mensagem}`;
}
let notifica1 = alerta('12/10/2023', 'Renovar assinatura');
let notifica2 = alerta(12, 54653);
console.log(notifica1);
console.log(notifica2);
