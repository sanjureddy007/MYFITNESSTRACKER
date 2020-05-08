<template>
    <section>
    <h1 class="title">Welcome to the walk tracking  page</h1> 
    <container>
        <h2 class="control">stay hungry, stay fit</h2>
                <input class="input" type="text" placeholder="add walk" v-model="newwalk" v-if="isAdmin">
                    <input class="button" type="submit" value="Add another item" @click="addcard(newwalk)">

                     <div class="manage" v-for="y in walks" :key="y.walk">
                    <h3>{{y.walk}}
                        <a class="del" @click="remove(i)" v-if="isAdmin"></a>
                    </h3>    
            </div>            
    </container>
    </section> 
</template>   

<script>
import walk from "../models/walk";
export default{
  data:()=>({
    newwalk: "",
    walk: walks.State.walks,
    isAdmin: "true"
  }),
  methods: {
    
    async remove(i){
        try {
            await walks.State.walks.walk(i)
        } catch (error) {
            this.error = error
        }
        }
    },
    async addEx(newwalk){
        try {
            await walks.State.walks.walk(newwalk)
        } catch (error) {
            this.error = error;
        }
    },
    created(){
        walk.Init()
    }
  }
</script>
