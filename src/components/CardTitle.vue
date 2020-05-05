<template>
  <h3 class="m-0 card__details--name text-uppercase">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: "CardTitle",

  data() {
    return {
      status: false,
      cards: [],
      interval: null
    };
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.card__details--name {
  color: #264348;
  font-weight: 600;
}
</style>
