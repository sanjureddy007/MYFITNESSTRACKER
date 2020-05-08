import myFetch from "./myFetch";

export default {



    State: {},
    Init() {
        myFetch('/cardio')
                         .then(x=> { 
                this.State = x;
                                  console.log(x);
     })
    },
    async addEx(newex) {
        await myFetch("/cardio/add")
},
    
async remove(i) {
    await myFetch("/cardio/remove")         
},

}