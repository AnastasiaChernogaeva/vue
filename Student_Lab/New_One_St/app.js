const App={

    // метод, который  возвращает объект с ключом-переменной
    // В любую ключ-переменную  можно класть  что-угодно, но главное, чтобы значение приводилось к строке!!
    data(){
        return {
            // 1-ый пример
            // counter:0,
            // title:"Счетчик",

            // 2-ой пример
            title:"Список заметок",
            placeholderString:"Введите  название заметки",
            inputValue:'',
            notes:['Заметка 1', 'Заметка 2', 'Заметка 999999']
        }

    },


    methods:{
        // inputChangeHandler(event){
        //     this.inputValue=event.target.value  //обращаемся к переменной
        // },

        addNewNote(){
            if(this.inputValue)
            this.notes.push(this.inputValue)
            this.inputValue=''
        },

        deleteNote(index){

            this.notes.splice(index,1)

        },

        toUpperCase(item){
            return item.toUpperCase()
        },

        // doubleCount(){
        //     console.log('dbCount')
        //   return  this.notes.length*2
        // }

        // inputKeyPress(event){
        //     if(event.key==='Enter')
        //     this.addNewNote()
        // }

    },

    // computed свойства обязательно что-то возвращают!!! и являются заисимыми от наших свойств(что-то из дата)

    computed:{
      
        doubleCountComputed(){
            console.log("dbCountComputes")
            return  this.notes.length*2
          }
    },


    // следим за изменениями любых переменных
    watch:{

        // метод называем точно так же, как и называется сама перемнная, за которой буеи следить

        inputValue(value){
            if(value.length>10){
                this.inputValue=''
            }
        },


    }


}


// // Первый способ связть html и js  с помощью Vue:

// // создаем объект  с помощью метода у Vue Vue.createApp({}), передавая объект (в данном случае объектом является App) 
// // Кладем в константу объект app
// const app = Vue.createApp(App)  
// // У объекта есть метод .mount("css-селектор корневого узла")
// app.mount("#app")



// Второй способ
Vue.createApp(App).mount("#app")