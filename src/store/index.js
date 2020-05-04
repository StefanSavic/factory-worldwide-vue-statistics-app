import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [{
        name: "a",
        number: 3,
        status: true,
        start: true,
        trend: []
      }, {
        name: "b",
        number: 3,
        status: true,
        start: true,
        trend: []
      }, {
        name: "c",
        number: 3,
        status: true,
        start: true,
        trend: []
      }, {
        name: "d",
        number: 3,
        status: true,
        start: true,
        trend: []
      }, {
        name: "f",
        number: 3,
        status: true,
        start: true,
        trend: []
      },
      {
        name: "g",
        number: 3,
        status: true,
        start: true,
        trend: []
      },
      {
        name: "h",
        number: 3,
        status: true,
        start: true,
        trend: []
      },
      {
        name: "j",
        number: 3,
        status: true,
        start: true,
        trend: []
      },
      {
        name: "k",
        number: 3,
        status: true,
        start: true,
        trend: []
      },
      {
        name: "l",
        number: 3,
        status: true,
        start: true,
        trend: []
      }
    ]
  },
  mutations: {
    GET_RANDOM_NUMBER(state, payload) {
      let cardInCards = state.cards.find(cardInCards => {
        return cardInCards.name == payload;
      });

      let oldNumber = cardInCards.number;
      cardInCards.trend.push(oldNumber);
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
    STOP_ALL(state) {
      state.cards.forEach(card => {
        card.start = false;
      })


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
    stopAll(context, payload) {
      context.commit("STOP_ALL", payload);
    },
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