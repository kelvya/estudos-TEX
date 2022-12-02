export default{
    data(){
        return{
            m1: 'Bem vindo ao Vue Js!',
            nome: '',
            inputUser_nome: ''
        }
    },
    methods: {
        inputUser_click(e){
            e.preventDefault()
            this.nome = this.inputUser_nome
            console.log(this.inputUser_nome)
        }
    },
}