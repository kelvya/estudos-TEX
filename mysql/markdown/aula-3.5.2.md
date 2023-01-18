# 3.5.2 – ACID – Propriedades de transação


## Atomicidade

- A parte indivisível (atômica)
- a transação concluída não deve refletir resultados parciais
- transação com sucesso: todas as operações devem ser concluídas no banco
- transações com falha: as operações devem ser ignoradas
- EXEMPLO:
  - ocorrência de débito no cartão de crédito:
    - da conta do responsável, seja retirado o valor X referente a compra
    - da deste cartão seja subtraído o mesmo valor X
    - as duas operações devem ser concluídas sem erros
    - se ocorrer um erro, todas as alterações feitas nessa operação devem ser desfeitas

## Consistência

- manter seu estado de integrdade dos dados
- respeitar seus identificadores chaves e restrições lógicas exixtentes
- todos os dados escritos no banco de dados devem ser válidos
- estarem de acordo com todas as regras definidas
- EXEMPLO:
  - cadastro de informações de cliente:
    - o CPF é um campo chave, portanto pode haver outro CPF com a mesma sequência numérica;
    - a entrada de um número já existente impedirá um novo registro
    - a entrada de uma sequência de zeros ativará uma restrição de integridade lógica

## Isolamento

- diversos usuários fazem várias transações
- várias transações vindas do mesmo usuário podem acessas o mesmo registro ao mesmo tempo
- técnicas que tentam evitar transações paralelas interfiram umas nas outras
- garantem que as transações sejam executadas em uma sequência
- EXEMPLO:
  - Cenário 1:
    - Fornecer um desconto de R$100,00 na primeira compra para o usuário cadastrado com o número 1022 para o produto no valor de R$1000,00
    - Fluxo:
      - selecionar usuário com código igual à 1022
      - aplicar desconto
      - alterar o valor da compra subtraindo R$100,00
      - fazer o commit (confirmar a gravação no banco de dados)
  - Cenário 2:
    - Fornecer um voucher de 10% na primeira compra para o susário cadastrado com o número 1022 para um produto no valor de R$1000,00
    - Fluxo:
      - selecionar usuário com código igual à 1022
      - aplicar voucher
      - alterar o valor da compra subtraindo 10%
      - fazer o commit (confirmar a gravação no banco de dados)

Atenção! Dependendo da ordem teremos resultados diferentes

Executar os dois cenários sem isolamento pode acarretar em falhas, uma transação sobrescrevendo a outra.

## Durabilidade

- mesmo em casos de quedas de energia, travamentos ou erros
- garantir que os dados estejam disponíveis definitivamente
