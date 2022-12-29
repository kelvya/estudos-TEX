//Main_lista.js

import { ListaProduto } from './ListaProduto.js'

let listaProduto = new ListaProduto(document.querySelector('form'))

listaProduto.ListarItens(
    JSON.parse(localStorage.getItem('cadastro')),
    document.querySelector('.boxListagem__info')
)
