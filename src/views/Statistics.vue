<template>
  <div class="statistics pt-3">
    <div class="container">
      <div class="row">
        <div v-for="(card,i) in cards" :key="i" class="col-md-6 mb-4">
          <Card>
            <CardTitle class="pb-5">{{card.name}}</CardTitle>
            <trend
              :width="450"
              :data="card.trend"
              :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
              auto-draw
              smooth
            ></trend>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Card from "@/components/Card.vue";
import CardTitle from "@/components/CardTitle.vue";

export default {
  components: {
    Card,
    CardTitle
  },
  data() {
    return {
      cards: []
    };
  },

  mounted() {
    this.cards = this.$store.state.cards;
  }
};
</script>

