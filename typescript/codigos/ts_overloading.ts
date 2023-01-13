function alerta(data:string, mensagem:string):string;

function alerta(data: number, mensagem: number): string;

function alerta(data:any, mensagem:any){
    return `${data} - ${mensagem}`
}

let notifica1 = alerta('12/10/2023', 'Renovar assinatura');
let notifica2 = alerta(12, 54653);

console.log(notifica1);
console.log(notifica2);

