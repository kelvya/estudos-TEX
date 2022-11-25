// const {createApp} = Vue 
    import{createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
    createApp({
        data(){
            return{
                m1: 'Bem vindo ao Vue Js!',
                m2: 'Bora codar todos os dias'
            }
        }
    }).mount('#app')