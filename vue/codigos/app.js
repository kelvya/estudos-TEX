// // const {createApp} = Vue 
//     import{createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
//     createApp({
//         data(){
//             return{
//                 m1: 'Bem vindo ao Vue Js!',
//                 m2: 'Bora codar juntos',
//                 count: 10
//             }
//         }
//     }).mount('#app')

// const {createApp} = Vue 
    import{createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
    // createApp({
    //     data(){
    //         return{
    //             m1: 'Bem vindo ao Vue Js!'
    //         }
    //     }
    // })//.mount('#app')

    // import calculo from './calculo.js'
    // createApp(calculo).mount('#app')

    import formUser from './formUser.js'
    createApp(formUser).mount('#app2')