import myFetch from "./myFetch";

export default {



    State: {},
    Init() {
        myFetch('/walk')
                         .then(x=> { 
                this.State = x;
                                  console.log(x);
     })
    },
    async addEx(newex) {
        await myFetch("/walk/addwalk")
},
    
async remove(i) {
    await myFetch("/walk/removewalk")         
},

}