<template>
  <div class="d-flex card__details--symbol">
    <div class="m-0 card__details text-uppercase mr-1">
      <transition name="fade">
        <b-icon
          scale="1.5"
          v-if="card.status"
          class="green"
          animation="fade"
          icon="plus"
          aria-hidden="true"
        ></b-icon>
        <b-icon
          scale="1.5"
          v-if="!card.status"
          animation="fade"
          icon="dash"
          class="red"
          aria-hidden="true"
        ></b-icon>
      </transition>
    </div>
    <div class="m-0 card__details text-uppercase">
      <div v-if="status">
        <b-icon
          scale="1.5"
          v-if="card.status"
          animation="fade"
          class="green"
          icon="arrow-up"
          aria-hidden="true"
        ></b-icon>
        <b-icon
          scale="1.5"
          v-if="!card.status"
          animation="fade"
          class="red"
          icon="arrow-down"
          aria-hidden="true"
        ></b-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardStatus",
  props: ["card"],
  data() {
    return {
      status: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.status = true;
    }, 2000);
  }
};
</script>
<style lang="scss">
.card__details--name,
.card__details--symbol {
  transform: translateY(22px);
}
.card__details--name {
  color: #264348;
  font-weight: 600;
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

.green {
  color: #264348;
}

.red {
  color: #842700;
}
</style>