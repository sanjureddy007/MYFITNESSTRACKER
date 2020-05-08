import myFetch from "./myFetch";

export default {



    State: {},
    Init() {
        myFetch('/hydrate')
                         .then(x=> { 
                this.State = x;
                                  console.log(x);
     })
    },
    async add3() {
        await myFetch("/hydrate/add1")
},
    async add6() {
        await myFetch("/hydrate/add5")
},
async add15() {
    await myFetch("/hydrate/add10")
},
async add25() {
    await myFetch("/hydrate/add20")
}
}