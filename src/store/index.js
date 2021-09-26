import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showLeftSidebar: false,
    showRightSidebar: true,
    rightSidebarMini: true,

    defaultCountryFlagPath: "http://localhost:3001/imgs/flags",
    defaultCountryFlag: "http://localhost:3001/imgs/flags/default.png",
    defaultProvinceImgPath: "http://localhost:3001/imgs/provinces/",
    defaultProvinceFlag: "http://localhost:3001/imgs/provinces/default.jpg",

    playerCountry: {
      flag: null,
      name: "{COUNTRY_NAME}",
      balance: 0,
      balanceIncoming: 0,
      oil: 0,
      oilIncoming: 0,
      divisions: 0,
      tanks: 0,
      aircrafts: 0,
      warships: 0,
      aggressiveness: 0,
      decisions: [],
    },

    isRequestingProvince: false,
    provinceElement: null,
    provinceElementOriginalColor: "#ffffff",
    province: {
      mapRef: null,
      img: null,
      name: null,
      description: null,
      isCapital: null,
      hasCoast: null,
      isIsland: null,
      passives: [],
      incoming: {},
      levels: {
        production: 0,
        taxation: 0,
      },
      country: {
        aggressiveness: {},
        army: {},
        estimatedArmy: {},
        opinions: {},
        focus: {},
        personality: {},
      },
    },

    svgpanzoom: null,

    notifications: [
      {
        icon: "mdi-information-variant",
        text: "Hello World 1",
      },
      {
        icon: "mdi-information-variant",
        text: "Hello World 2",
      },
      {
        icon: "mdi-information-variant",
        text: "Hello World 3",
      },
    ],

    dialogs: {
      info: {
        show: false,
        title: null,
        description: null,
        isError: false,
        handler: () => {},
      },
      error: {
        show: false,
        title: null,
        description: null,
      },
    },

    mainMenu: {
      dialogs: {
        newGame: {
          show: true,
        },
        loadGame: {
          show: true,
        },
        joinGame: {
          show: true,
        },
        settings: {
          show: true,
        },
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
