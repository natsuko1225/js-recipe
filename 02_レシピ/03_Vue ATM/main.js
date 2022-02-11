// const inputbutton = document.getElementById("nyuryoku")

// inputbutton.onclick = function () {
//   console.log("あああ")
// }

Vue.createApp({
  data() {
    return {
      nyuryokugaku: "",
      zandaka: 0,
      logs: [],
    }
  },
  methods: {
    nyukin: function () {
      this.zandaka += Number(this.nyuryokugaku)
      this.logs.push({
        date: new Date(),
        type: "入金",
        money: this.nyuryokugaku,
      })
    },
    syukkin: function () {
      if (this.zandaka >= this.nyuryokugaku && this.nyuryokugaku > 0) {
        this.zandaka -= Number(this.nyuryokugaku)
        this.logs.push({
          date: new Date(),
          type: "出金",
          money: this.nyuryokugaku,
        })
      }
    },
  },
}).mount("#app")
