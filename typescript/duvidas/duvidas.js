//STRING LITERALS
var jogadores = {
  j1: "Pedro",
  j2: "Ana",
  j3: "Afonso",
  j4: "Eldora",
};
jogadores.j2 = "Denise";
console.log("jogadores: ".concat(jogadores));
console.log("_______________________________________________________");

(function (Status1) {
  Status1["Ativo"] = "ON";
  Status1[(Status1["Bloqueado"] = 0)] = "Bloqueado";
  Status1[(Status1["Pendente"] = 1)] = "Pendente";
})(Status1 || (Status1 = {}));
console.log("Status1 com template Literals ".concat(Status1));
console.log("Status1", Status1);
console.log("Status1 do cliente ".concat(Status1.Ativo));
console.log("Status1 do cliente ".concat(Status1.Bloqueado));
console.log("Status1 do cliente ".concat(Status1.Pendente));
