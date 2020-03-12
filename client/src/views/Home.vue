<template>

<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
         INTRODUCING THE FITNESSTRACKER APP        
        </h1>
        <h2 class="subtitle">
          Get fit. Have fun. Repeat.
        </h2>
        
        
        
      </div>
    </div>
  </section>
    <EventsList />

</div>

</template>
<script>
import EventsList from '../components/EventsList';
export default {
  name: 'home',
  components: {
    EventsList
  }
}
</script>

<style lang="scss" scoped>
  .hero {  
    text-align: center;
    background-image: url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1568757836.jpg?crop=0.668xw:1.00xh;0.287xw,0&resize=980:*');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
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