//ADM PRODUTO

export class AdmProduto{
    cadastro = JSON.parse(localStorage.getItem('cadastro'))
    boxListagem
    constructor(){

    }
    removerProduto(e){
        e.parentNode.parentNode.remove()
        const item = this.cadastro.findIndex((obj)=>{
            return obj.id === parseInt(e.parentNode.parentNode.getAttribute('data-id'))
        })
        this.cadastro.splice(item, 1)
        localStorage.setItem('cadastro', JSON.stringify(this.cadastro))
    }
    editarProduto(e, form){
        this.boxListagem = e.parentNode.parentNode.querySelectorAll('div')
        form.produto.value = this.boxListagem[1].innerText
        form.valor_produto.value =  this.boxListagem[2]
            .innerText.substring(
                3,
                this.boxListagem[2].innerText.length-3
            )
        //btnEditar
        form.btnEditar.classList.remove('d-none')
        form.btnEditar.onclick = (e)=>{
            this.boxListagem[1].innerText = form.produto.value
            this.boxListagem[2].innerText = `R$ ${form.valor_produto.value},00`
            e.target.classList.add('d-none')
        }
        
    }
}