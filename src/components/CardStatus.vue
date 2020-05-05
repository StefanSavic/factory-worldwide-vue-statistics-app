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