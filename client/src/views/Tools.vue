<template>
    
    <div class="tools">
        
        <div class="tile is-ancestor is-8 notification">
            
            <div class="tile is-parent">
                
                <article class="tile is-child box notification is-warning">
                    <p class="title">Target Weight</p>
                    <p class="subtitle">Dial in Your Target Weight</p>
                    <!-- v-on: binding button click to add a lb to tWeight data object, listening for click event -->
                    <!-- v-bind to elements and control the value via the Vue-->
                    <!-- @ is shorthand for v:on -->
                    <div class="buttons">
                        <button class="button is-primary" @click="add(1)">Add 1 lb</button>
                        <!-- v-on: binding button click to sub a lb from tWeight data object --> 
                        <button class="button is-danger" v-on:click="sub(1)">Lose 1 lb</button>
                        <!-- v-on: double click adds 10 lbs, listening for click event -->
                        <!-- @ is shorthand for v:on -->
                        <button class="button is-primary" @dblclick="add(10)">Add 10 lbs</button>
                        <!-- v-on: double click subs 10 lbs --> 
                        <button class="button is-danger" v-on:dblclick="sub(10)">Lose 10 lbs</button>  
                    </div>
                    <p class="subtitle">Target Weight is <strong>{{ targetWeight }}</strong> lbs</p>
                    <p>(Click for 1, double click for 10)</p>
                </article>

            </div>
            
            <div class="tile is-parent">
                <article class="tile is-child box notification is-info">
                <p class="title">BMI Calculator</p>
                <p class="subtitle">Calculate Your BMI</p>
                    
                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="height" placeholder="Height" v-model="heightBMI">
                            <span class="icon is-small is-left">
                                <i class="fas fa-ruler-vertical"></i>
                            </span>
                        </div>
                            <p class="help">Enter your height (in inches)</p>
                    </div>

                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="weight" placeholder="Weight" v-model="weightBMI">
                            <span class="icon is-small is-left">
                                <i class="fas fa-weight-hanging"></i>
                            </span>
                        </div>
                            <p class="help">Enter your weight (in pounds)</p>
                    </div>

                    <div class="subtitle">Your BMI = <strong>{{ bmi(heightBMI, weightBMI) }}</strong></div>
                </article>
                
            </div>
            
            
        
        </div> <!-- tile is-ancestor closing div -->
    
    </div> <!-- class="tools" closing div -->

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