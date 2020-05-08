import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/Users')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    }
}