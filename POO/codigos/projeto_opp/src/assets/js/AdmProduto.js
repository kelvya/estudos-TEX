//ADM PRODUTO

export class AdmProduto{
    constructor(){

    }
    removerProduto(e, id){
        e.parentNode.parentNode.remove()
        let cadastro = JSON.parse(localStorage.getItem('cadastro'))
        const item = cadastro.findIndex((obj)=>{
            return obj.id === parseInt(id)
        })
        cadastro.splice(item, 1)
        localStorage.setItem('cadastro', JSON.stringify(cadastro))
        console.log(cadastro)
    }
}