
const Items={

    data(){
        return{
            title:'Товары',
            text:'Введите новый товар',
            meaning:'',
            inputValue:'',
            textType:'Введите вид товар',
            inputAmount:'',
            textAmount:'Введите количество товар',
            info:[{type:'Рыба', name:'Кит',amount:'25',}],
            dayOfNewGoods:15,

        }
    },


    methods:{

        newValue(event){
            this.meaning=event.target.value
        },

        addNewItem(){
            if(this.meaning!=''&& this.meaning !='')
        this.info.push({type:this.inputValue, name:this.meaning, amount:this.inputAmount})
        this.inputValue=''
        this.meaning=''
        this.inputAmount=''
        },

        changeIcriment(idx){
            this.info[idx].amount=Number(this.info[idx].amount)+1
        },

        removeItem(idx){
            this.info.splice(idx,1)
        }

    },

    computed:{

        getInfo(){
            return (this.dayOfNewGoods-2)*0.25;
        }

    },

    watch:{

        meaning(value){
            if (value.length>5){
                this.meaning=''
            }
        },

        inputValue(value){
            if (value.length>8){
                this.inputValue=''
            }
        },

        inputAmount(value){
            if (value.length>2){
                this.inputAmount=''
            }
        },
    },
}








Vue.createApp(Items).mount('#myVue')
