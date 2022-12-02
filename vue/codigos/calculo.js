    export default{
        data(){
            return{
                m2: 'Bora codar juntos',
                count: 10,
                n: 0
            }
        }, 
        methods: {
            multiplicar(){
                this.n = this.count *4
            }
        }
    }