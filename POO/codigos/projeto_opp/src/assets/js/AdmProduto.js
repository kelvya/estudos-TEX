//ADM PRODUTO

export class AdmProduto{
    constructor(){

    }
    removerProduto(e){
        console.log(e.parentNode.parentNode)
        e.parentNode.parentNode.remove()
    }
}