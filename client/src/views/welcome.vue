<template>
  <div class="welcome">
    <div class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-3"> welcome to The FITNESSTRACKER APP</h1>    
        </div>
      </div>
    </div>
    <section class="container">
      <p class="org-description is-size-4">HERE IS YOUR ACHEIVED GOALS.</p>
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
  .org-description {
    margin-top: 50px;
  }
</style>
