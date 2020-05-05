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
  methods: {},
  destroyed() {
    clearInterval(this.interval);
    this.status = true;
  },
  mounted() {
    setTimeout(() => {
      this.status = true;
    }, 2000);
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.card {
  min-height: 134px;
}
.card__details {
  max-width: 30px;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  font-weight: 600;
}
.card__details--number {
  transform: translateX(22px);
  font-size: 20px;
  border: 1px solid whitesmoke;
  border-radius: 3px;
}

.stopButton {
  background: #9d2933 !important;
  border: 1px solid #9d2933;
}

.green {
  color: #264348;
}

.red {
  color: #9d2933;
}
</style>
