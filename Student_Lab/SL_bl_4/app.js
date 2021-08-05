const h=Vue.h



const app=Vue.createApp({

    data(){
        return{
            title:'Vue 3',
        }
    },

    // шаблон template для html
    // template:`
    //     <div class='card center'>
    //         <h1>{{title}}</h1>
    //         <button class='btn' @click="title='Мы отсюда!'">Изменить</button>
    //     </div>
    // `

    methods:{
        changeTitle(){
            this.title=' Изменили!'
        }
    },


    render (){
        return h('div',{
            class:'card center'
        }, [
            h('h1',{}, this.title),
            h('button',{
                class:'btn',
                onClick:this.changeTitle,
                }, 'Изменить'),
           ])
    },

     //  еще нет доступа к html-дереву
    beforeCreate(){
        console.log('beforeCreate')
    },

     //  еще нет доступа к html-дереву
     created(){
        console.log('created')
    },


    // вызывается перед тем, как vue пытается засунуть все в DOM-дерево+ еще нет доступа к html-дереву
    beforeMount(){
        console.log('beforeCreate')
    },

    // уже есть доступ к html-дереву
    mounted(){
        console.log('mounted')
    },

    // чистим все ресурсы, удаляеи слушателей(перед размонтированием)
    beforeUnmount(){
        console.log('beforeUnmount')
    },

    // удален
    unmounted(){
        console.log('unmounted')
    },

    // если происходят точечные изменения в Virtual Dom, будет вызываться следующие
    beforeUpdate(){
        console.log('beforeUpdate')
    },

    updated(){
        console.log('updated')
    },
})

// setTimeout(()=>{app.unmount()},2000)

app.mount('#app')

// const data={
//     title:'react',
//     message:'сейчас работает react'
// };

// const proxy= new Proxy(data, handler:{
//         set(target, key, value,){
//         if(key==='title'){
//             target[key]=value
//             target.message='сейчас работает '+value
//         }

//     },
// },)


// proxy.title="angular 10"

// console.log(proxy)