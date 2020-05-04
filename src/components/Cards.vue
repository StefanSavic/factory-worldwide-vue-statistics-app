<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mb-1 d-flex justify-content-between align-items-center">
        <b-button variant="danger" @click="stopAll()">Stop Random Numbers</b-button>
        <b-button variant="success" @click="startAll()">Start Random Numbers</b-button>
      </div>
      <div v-for="(card,i) in cards" :key="i" class="col-md-12">
        <b-card class="mb-1">
          <b-card-text
            style="max-width=200"
            class="d-flex justify-content-between align-items-center"
          >
            <h3 class="m-0 text-uppercase">{{card.name}}</h3>
            <h3 class="m-0 text-bold">{{card.number}}</h3>
            <span v-if="status">{{statusSym(card.status)}}</span>
          </b-card-text>
          <b-button
            style="color:white;"
            href="#"
            variant="danger"
            @click="handleClickButton(card)"
          >{{startStatus(card.start)}}</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {},
  data() {
    return {
      status: false,
      cards: []
    };
  },
  methods: {
    statusSym(s) {
      return s ? "+" : "-";
    },
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
      this.cards.forEach(card => {
        this.stopRandomNumber(card);
      });
    },
    startAll() {
      this.cards.forEach(card => {
        this.startRandomNumber(card);
      });
    }
  },
  computed: {},
  mounted() {
    this.cards = this.$store.state.cards;

    setTimeout(() => {
      this.status = true;
    }, 2000);
    setInterval(() => {
      this.cards.forEach(card => {
        this.$store.dispatch("getRandomNumber", card.name);
      });
    }, 2000);
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  transition: all 0.5 linear;
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
a {
  color: #42b983;
}
</style>
