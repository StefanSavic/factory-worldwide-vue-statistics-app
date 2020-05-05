<template>
  <div class="cards container d-flex pt-3">
    <div class="row">
      <div v-for="(card,i) in cards" :key="i" class="col-md-6 col-sm-6 col-xs-6 mb-4">
        <Card>
          <CardTitle>{{card.name}}</CardTitle>
          <CardNumber>{{card.number}}</CardNumber>
          <CardStatus :card="card"></CardStatus>
          <template v-slot:button>
            <CardStopButton :card="card"></CardStopButton>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CardTitle from "@/components/CardTitle.vue";
import CardNumber from "@/components/CardNumber.vue";
import CardStatus from "@/components/CardStatus.vue";
import CardStopButton from "@/components/CardStopButton.vue";
export default {
  name: "Cards",
  props: ["Card"],
  components: {
    Card,
    CardTitle,
    CardNumber,
    CardStatus,
    CardStopButton
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
  computed: {},
  mounted() {
    this.cards = this.$store.state.cards;

    setTimeout(() => {
      this.status = true;
    }, 2000);
    this.interval = setInterval(() => {
      this.cards.forEach(card => {
        this.$store.dispatch("getRandomNumber", card.name);
      });
    }, 2000);
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
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
  border: 1px solid w;
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
