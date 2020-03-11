<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome to THE FITNESSTRACKER APP        
        </h1>
        <h2 class="subtitle">
          Get fit. Have fun. Repeat.
        </h2>
        
        
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .hero {  
    text-align: center;
    background-image: url('https://1kqgkv25axmak8hvkywxt71e-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/group-fitness-classes-768x512.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
</style>