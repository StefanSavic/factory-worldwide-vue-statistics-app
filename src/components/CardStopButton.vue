<template>
  <div class="col-md-12">
    <b-button
      style="color:white;"
      href="#"
      class="stopButton text-capitalize font-weight-bold"
      @click="handleClickButton(card)"
    >{{startStatus(card.start)}}</b-button>
  </div>
</template>

<script>
// import CardTitle from "@/components/CardTitle.vue";
// import CardNumber from "@/components/CardNumber.vue";
export default {
  name: "CardStopButton",
  props: ["card"],

  data() {
    return {
      interval: null
    };
  },
  methods: {
    startRandomNumber(n) {
      this.$store.dispatch("startRandomNumber", n.name);
    },
    stopRandomNumber(n) {
      this.$store.dispatch("stopRandomNumber", n.name);
    },
    startStatus(s) {
      return s ? "stop" : "start";
    },
    handleClickButton(c) {
      if (c.start) {
        this.stopRandomNumber(c);
      } else if (!c.start) {
        this.startRandomNumber(c);
      }
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.stopButton {
  background: #842700 !important;
  border: 1px solid #9d2933;
}
</style>
