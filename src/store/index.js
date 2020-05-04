import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [{
        name: "a",
        number: 3,
        status: true,
        start: true
      }, {
        name: "b",
        number: 3,
        status: true,
        start: true
      }, {
        name: "c",
        number: 3,
        status: true,
        start: true
      }, {
        name: "d",
        number: 3,
        status: true,
        start: true
      }, {
        name: "f",
        number: 3,
        status: true,
        start: true
      },
      {
        name: "g",
        number: 3,
        status: true,
        start: true
      },
      {
        name: "h",
        number: 3,
        status: true,
        start: true
      },
      {
        name: "j",
        number: 3,
        status: true,
        start: true
      },
      {
        name: "k",
        number: 3,
        status: true,
        start: true
      },
      {
        name: "l",
        number: 3,
        status: true,
        start: true
      }
    ]
  },
  mutations: {
    GET_RANDOM_NUMBER(state, payload) {
      let cardInCards = state.cards.find(cardInCards => {
        return cardInCards.name == payload;
      });

      let oldNumber = cardInCards.number;
      if (cardInCards.start) {
        cardInCards.number = Math.floor(Math.random() * 2) + 1;
      }
      if (cardInCards.number > oldNumber) {
        cardInCards.status = true
      } else {
        cardInCards.status = false
      }
      // console.log("from get random num", card.name, oldNumber, card.status)
    },
    STOP_RANDOM_NUMBER(state, payload) {
      let cardInCards = state.cards.find(cardInCards => {
        return cardInCards.name == payload;
      });

      cardInCards.start = false;
      console.log("stop", cardInCards);
    },
    START_RANDOM_NUMBER(state, payload) {
      let cardInCards = state.cards.find(cardInCards => {
        return cardInCards.name == payload;
      });

      cardInCards.start = true;
      console.log("start", cardInCards);
    }
  },
  actions: {
    getRandomNumber(context, payload) {
      context.commit("GET_RANDOM_NUMBER", payload);
    },
    stopRandomNumber(context, payload) {
      context.commit("STOP_RANDOM_NUMBER", payload);
    },
    startRandomNumber(context, payload) {
      context.commit("START_RANDOM_NUMBER", payload);
    },
  },
  modules: {}
})