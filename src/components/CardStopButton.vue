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
    },
    stopAll() {
      this.$store.dispatch("stopAll");
      clearInterval(this.interval);
    },
    startAll() {
      this.cards.forEach(card => {
        this.startRandomNumber(card);
      });
      this.interval = setInterval(() => {
        this.cards.forEach(card => {
          this.$store.dispatch("getRandomNumber", card.name);
        });
      }, 2000);
    }
  },
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
<style  lang="scss">
.card__details--name,
.card__details--symbol {
  transform: translateY(22px);
}
.card__details--name {
  color: #264348;
  font-weight: 600;
}
.cards,
.home {
  background: #264348;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.card {
  // border: 1px solid #100c08;
  // background: #eaeaea;
  // background: #e8eaf6 !important;
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
