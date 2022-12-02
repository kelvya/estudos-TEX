# 2.8.8 – Conceito Model-View-ViewModel

Model-View-ViewModel é uma arquitetura para ser utilizada nas aplicações front end.

Ao utilizar o script com CDN, estamos criando uma instância de Vue e com a CLI acontecerá a mesma coisa.

## Sobre a View:

![sobre a View do Vue](/vue/Images/view.png)

A div que será visualizada pelo usuário será a nossa view.

O Model é onde ficam os dados, as informações. Esses dados sempre vêem de um lugar externo (uma API, um WEB SERVICE um DATA BASE - BACK END).

Quando esses dados são recuperados existe uma bata-binding (a informação que existe no model coincide com a informação que é utilizado na interface).

A viewmodel permite gerenciar informações de forma isolada, por partes, desaclopada, dando a oprtunidade de fazer testes unitários sem precisar trabalhar com todos os elementos ao mesmo tempo.

## MVVM (model-view-view-model)

![MVVM](/vue/Images/mvvm.png)

Nesse conceito de model-view-view-model a VielModel controla a interface(View) observando e assistindo o tempo todo para que possa interagir atualizando a Model ou influenciar a View(interface).

Por exemplo:

Se o usuário está preenchendo um campo de formulário e interagindo com a interface a ViewModel está controlando (independente do back-end) sem obrigar o sistema a fazer submissões e requisições no servidor.


Os dados são recuperados pra model por um WebService, uma API ou um DataBase Back-end.

Toda vez que a View envia um comportamento do usuário existe uma ação, esta ação interfere na ViewModel e a os elementos das variáveis são conectados com os elementos dentro do template HTML. A ViewModel faz o consumo da Model (recuperando as informações externas) notifica e Lê para passar para a View e as ações realizadas pelo usuário são assistidas pela ViewModel, que trata essas informações e dados para atualizar a Model que atualiza as informações externas.