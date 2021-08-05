const app={
    data(){
        return{
            steps:[
                {mode:'start',text:'Предлагаем пройти наш курс еще раз для лучшего усвоения материала. '},
                {mode:'1',text:'Знакомство с Vue 3.'},
                {mode:'2',text:'Основы Vue 3.'},
                {mode:'3',text:'Как устроен Vue 3.'},
                {mode:'4',text:'Жизненные циклы Vue 3.'},
                {mode:'5',text:'Приложение на Vue 3.'},
            ],
            stepsRender:[1,2,3,4,5],
            activeNow:'1',
            previousSteps:[],
            forwardButton:['Вперед', 'Закончить ',],
            forwardBtn:'Вперед',
            text:'Знакомство с Vue 3.',
            styleClass:'steps-item'

        }
    },

    methods:{
        
        moveBack(){
            let need
            if(typeof(this.activeNow)!="object")
             need=this.activeNow
            else
             need=this.activeNow.mode
            if(need!='start'){
                if(need==='5'){
                    this.forwardBtn=this.forwardButton[0]
                    this.previousSteps.splice(need,1)
                    // this.activeNow=this.steps[5]
                    

                }
                    if(need==='4')
                    this.forwardBtn=this.forwardButton[0]
                    this.previousSteps.splice(need,1)
                    this.activeNow=this.steps[need*1-1].mode
                    this.text=this.steps[need*1-1].text


            }
        },

        moveForward(){
            let need
            if(typeof(this.activeNow)!="object")
             need=this.activeNow
            else
             need=this.activeNow.mode
            if(need!='start'){
                if(need==='5'){
                    this.forwardBtn=''
                    this.text=this.steps[0].text
                    this.activeNow=this.steps[0]
                    this.previousSteps.push(need)

                }
                else{
                    if(need==='4'){
                        this.forwardBtn=this.forwardButton[1]
                }
                this.text=this.steps[need*1+1].text
                    this.previousSteps.push(need)
                    this.activeNow=this.steps[need*1+1].mode
                }
               
                    

            
            }
            else{
                this.forwardBtn=this.forwardButton[0]
                    this.activeNow=this.steps[1].mode
                    this.previousSteps=[]
                    this.text=this.steps[1].text
            }
        },

        changeStep(step){
            if(step==='4'){
                this.forwardBtn=this.forwardButton[1]
        }
            if(step!='1')
            this.previousSteps.push(step-1)
          

            this.activeNow=step
            this.text=this.steps[step].text
            
        },

     

        // classes(step){
        //     if(step===this.activeNow){
        //         return 'steps-item active'
        //     }
        //     else if(step in this.previousSteps){
        //         return 'steps-item done'
        //     }
        //     else{
        //         return 'steps-item'
        //     }

        //     // (step==activeNow)?'steps-item active ':'steps-item '
        // }
    },

  

    mounted(){
        // getText()
        // this.forwardBtn=forwardButton[0]
        // this.activeNow=this.steps[1].mode
    },
    

}

Vue.createApp(app).mount('#app')