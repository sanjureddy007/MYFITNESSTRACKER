<template>
  <div class="events container">
    <h2 class="subtitle is-3">
    Features
    </h2>
    <div class="columns is-multiline">
  <div class="column is-one-quarter">
    <EventCard1 />
  </div>
  <div class="column is-one-quarter">
    <EventCard2 />
  </div>
  <div class="column is-one-quarter">
    <EventCard3 />
  </div>
</div>
  </div>
</template>
<script>
  import EventCard1 from '@/components/EventCard1';
  import EventCard2 from '@/components/EventCard2';
  import EventCard3 from '@/components/EventCard3';

  export default {
    name: 'EventsList',
    components : {
      EventCard1, EventCard2,EventCard3
    },

  }
</script>
<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>