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
</style>
