<template>
  <div class="statistics">
    <h1>This is an statistics page</h1>
    <div class="container">
      <div class="row">
        <div v-for="(card,i) in cards" :key="i" class="col-md-12">
          <b-card class="mb-1">
            <b-card-text
              style="max-width=200"
              class="d-flex justify-content-between align-items-center"
            >
              <h4>
                Card
                <span>{{card.name}}</span>
              </h4>
              <trend
                :data="card.trend"
                :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                auto-draw
                smooth
              ></trend>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cards: []
    };
  },

  mounted() {
    this.cards = this.$store.state.cards;
    // this.$store.dispatch("stopAll");
  }
};
</script>
