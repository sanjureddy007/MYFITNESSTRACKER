<template>
    
    <div class="BMI">
        
        <div class="tile is-ancestor is-8 notification">
            
            <div class="tile is-parent">
                <article class="tile is-light">
                <p class="title">BMI Calculator</p>
                    
                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="height" placeholder="Height" v-model="heightBMI">
                            <span class="icon is-small is-left">
                                <i class="fas fa-ruler-vertical"></i>
                            </span>
                        </div>
                            <p class="help">Enter your height (in cm)</p>
                    </div>

                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="weight" placeholder="Weight" v-model="weightBMI">
                            <span class="icon is-small is-left">
                                <i class="fas fa-weight-hanging"></i>
                            </span>
                        </div>
                            <p class="help">Enter your weight (in kg)</p>
                    </div>

                    <div class="subtitle"> <p>Your BMI = <strong>{{ bmi(heightBMI, weightBMI) }}</strong></p></div>
                </article>
                
            </div>
            
            
        
        </div> 
    
    </div> 

</template>

<script>
export default {
    data: () => ({
        
        targetWeight: 200,
        heightBMI: '',
        weightBMI: ''
    }),
    
    methods: {
        
        bmi: function(heightBMI, weightBMI) {
            return (weightBMI/(heightBMI*heightBMI) * 703).toFixed(2);
        },
        
        add: function(inc) {
            this.targetWeight += inc;
        },
        
        sub: function(dec) {
            this.targetWeight -= dec;
        },
    }
}
</script>

<style>
    .tools {
        padding: 50px 0;
    }

    #centerButtonsP {
        text-align: center;
    }

    #centerButtonsC {
        margin: auto 0;
    }
</style>

