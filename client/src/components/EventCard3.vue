<template>
  <div class="event-card">
    <div class="card">
      <div class="card-content">
        <h2 class="is-size-4 has-text-weight-bold">Cardio </h2>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="scss" scoped>
  .card {
    background-image: url('https://1kqgkv25axmak8hvkywxt71e-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/group-fitness-classes-768x512.jpg');
    height: 200px;
    background-position: center;
    background-size: cover;
    text-align: center;
  }
  .card-content {
    padding-top: 50px;
    position: absolute;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.35);
    top: 0;
    padding: 10px;
    height: 200px;
    width: 100%;
    span {
      font-size: 18px;
      text-align: center;
      width: 100%;
      position: absolute;
      bottom: 10px;
      right: 0;
    }
    h2 {
      margin-top: 10px;
    }
  }
  .event-date {
    background-color: #151515;
    color: #FFF;
    font-size: .75em;
    padding: 2px 10px;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>