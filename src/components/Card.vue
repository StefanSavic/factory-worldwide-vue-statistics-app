<template>
  <b-card body-class="card shadow">
    <b-card-text class="d-flex justify-content-between align-items-center">
      <slot></slot>
    </b-card-text>
    <slot name="button"></slot>
  </b-card>
</template>

<script>
export default {
  name: "Card",
  props: ["card"],
  components: {
    // CardTitle,
    // CardNumber
  },
  data() {
    return {
      status: false,
      cards: [],
      interval: null
    };
  },
  methods: {}
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.card {
  min-height: 134px;
}
</style>
