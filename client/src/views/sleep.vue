<template>
    <section>
    <h1 class="title">Welcome to the sleep tracking  page</h1> 
    <container>
        <h2 class="control">stay hungry, stay fit</h2>
                <input class="input" type="text" placeholder="add excercise" v-model="newsleep" v-if="isAdmin">
                    <input class="button" type="submit" value="Add another item" @click="addcard(newsleep)">

                     <div class="manage" v-for="y in sleeps" :key="y.sleep">
                    <h3>{{y.sleep}}
                        <a class="del" @click="remove(i)" v-if="isAdmin"></a>
                    </h3>    
            </div>            
    </container>
    </section> 
</template>   

<script>
import sleep from "../models/sleep";
export default{
  data:()=>({
    newsleep: "",
    sleep: sleeps.State.sleeps,
    isAdmin: "true"
  }),
  methods: {
    
    async remove(i){
        try {
            await sleeps.State.sleeps.sleep(i)
        } catch (error) {
            this.error = error
        }
        }
    },
    async addEx(newsleep){
        try {
            await sleeps.State.sleeps.sleep(newsleep)
        } catch (error) {
            this.error = error;
        }
    },
    created(){
        sleep.Init()
    }
  }
</script>