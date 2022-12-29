//ADM PRODUTO

export class AdmProduto{
    cadastro
    boxListagem
    constructor(){
        //
    }
    removerProduto(e){
        this.cadastro = JSON.parse(localStorage.getItem('cadastro'))
        e.parentNode.parentNode.remove()
        const item = this.cadastro.findIndex((obj)=>{
            return obj.id === parseInt(e.parentNode.parentNode.getAttribute('data-id'))
        })
        this.cadastro.splice(item, 1)
        localStorage.setItem('cadastro', JSON.stringify(this.cadastro))
    }
    editarProduto(e, form){
        this.cadastro = JSON.parse(localStorage.getItem('cadastro'))
        this.boxListagem = e.parentNode.parentNode.querySelectorAll('div')
        console.log(e.parentNode.parentNode)
        for (const child of e.parentNode.parentNode.parentNode.querySelectorAll('div')){
            child.classList.remove('bg-light')
        }
        e.parentNode.parentNode.classList.add('bg-ligtht')
        form.produto.value = this.boxListagem[1].innerText
        form.valor_produto.value =  this.boxListagem[2].innerText.substring(
                3,
                this.boxListagem[2].innerText.length-3
            )
        //btnEditar
        form.btnEditar.classList.remove('d-none')
        form.btnEditar.onclick = (el)=>{
            this.boxListagem[1].innerText = form.produto.value
            this.boxListagem[2].innerText = `R$ ${form.valor_produto.value},00`
            el.target.classList.add('d-none')
            //Editar LocalStorage
            for(const cad in this.cadastro){
                if(this.cadastro[cad]['id'] ===
                parseInt(e.parentNode.parentNode.getAttribute('data-id'))){
                    this.cadastro[cad]['nome'] = form.produto.value
                    this.cadastro[cad]['valor'] = form.valor_produto.value
                }
            }
            localStorage.setItem('cadastro', JSON.stringify(this.cadastro))
        }
    }
}