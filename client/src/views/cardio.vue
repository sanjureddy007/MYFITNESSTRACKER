<template>
    <section>
    <h1 class="title">Welcome to the cardio page</h1> 
    <container>
        <h2 class="control">stay hungry, stay fit</h2>
        
         
        
                <input class="input" type="text" placeholder="add excercise" v-model="newex" v-if="isAdmin">
                    <input class="button" type="submit" value="Add another item" @click="addcard(newex)">

                     <div class="manage" v-for="y in cardios" :key="y.cardio">
                    <h3>{{y.workout}}
                        <a class="del" @click="remove(i)" v-if="isAdmin"></a>
                    </h3>    
            </div>            
    </container>
    </section> 
</template>   

<script>
import cardio from "../models/cardio";
export default{
  data:()=>({
    newex: "",
    cardio: cardios.State.cardios,
    isAdmin: "true"
  }),
  methods: {
    
    async remove(i){
        try {
            await cardios.State.cardios.removecard(i)
        } catch (error) {
            this.error = error
        }
        }
    },
    async addEx(newex){
        try {
            await cardios.State.cardios.addcard(newex)
        } catch (error) {
            this.error = error;
        }
    },
    created(){
        cardio.Init()
    }
  }
</script>
