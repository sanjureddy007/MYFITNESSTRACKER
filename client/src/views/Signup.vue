<template>
<form class="container" @submit="signup">
  {{error}}
  <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="text" placeholder="Username">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
    <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    
    <button class="button is-dark">
      Signup
    </button>
  </p>
</div>
</form>
</template>

<script>
import { Signer } from "../models/signinusers";

    export default {
        name: 'Signup',
        data() {
            return {
                input: {
                    
                    username: "",
                    email: "",
                    password: "",
                    error:""
                }
            }
        },
        methods: {
            signup() {
              try {
                Signer(this.siginusername,this.email, this.password);
                 window.alert(this.email);
            } catch (error) {
                this.error = error;
            }
                
            }
        }
    }
</script>

<style >
  
    
</style>