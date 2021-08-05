Vue.createApp({

    // data(){
    //     return{

    //     }
    // }


    // data:()=>{
    //     return{

    //     }
    // }

    // es6
    // возвращает сам объект

    data:()=>({
        title:'Я есть Грут',
        iValue:'',
        myHTML:'<h1>Vue 3 App</h1>',
        person:{
            firstName:'Nastya',
            lastName:'Cher',
             age:'20',
            },
        items:[1,2,]
    }) ,

    methods:{
        change(event){
            this.value=event.target.value
            this.title=this.value
        },

        addItem(event){
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value=''
            console.log(event.key)
        },


        //  stopPropagation(event){
        //     event.stopPropagation()
        // },

        removeItem(i){
            this.items.splice(i,1)

        },

        log(item){
            console.log('Log item:',item)
        }
    },


    // computed-свойства геттеры, которе возвращают
    computed:{
        evenItems(){
            return this.items.filter(i=> i%2===0)
        }
    },

}).mount('#app')