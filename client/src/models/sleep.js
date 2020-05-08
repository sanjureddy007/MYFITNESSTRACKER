import myFetch from "./myFetch";

export default {



    State: {},
    Init() {
        myFetch('/sleep')
                         .then(x=> { 
                this.State = x;
                                  console.log(x);
     })
    },
    async addF(newfood) {
        await myFetch("/sleep/addsleep")
},
    
async remove(i) {
    await myFetch("/sleep/removesleep")         
},

}