import myFetch from "./myFetch";

export default {



    State: {},
    Init() {
        myFetch('/walking')
                         .then(x=> { 
                this.State = x;
                                  console.log(x);
     })
    },
    async addEx(newex) {
        await myFetch("/walking/add")
},
    
async remove(i) {
    await myFetch("/walking/remove")         
},

}