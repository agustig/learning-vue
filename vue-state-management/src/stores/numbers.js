import { defineStore } from "pinia";

export const useNumbers = defineStore("numbers", {
  state: () => ({
    numbers: [11, 12, 13, 14, 15],
  }),
  actions: {
    addNumber() {
      this.numbers.push(this.numbers.slice(-1)[0] + 1);
    },
  },
  getters: {
    filterNumber: (state) => {
      return minNumber => state.numbers.filter(num => num >= minNumber);
    },
  },
});
