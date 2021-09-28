import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isRequesting: false,
    alreadyPicked: false,

    showLeftSidebar: false,
    showRightSidebar: true,
    rightSidebarMini: true,

    defaultCountryFlagPath: "http://localhost:3001/imgs/flags",
    defaultCountryFlag: "http://localhost:3001/imgs/flags/default.png",
    defaultProvinceImgPath: "http://localhost:3001/imgs/provinces/",
    defaultProvinceFlag: "http://localhost:3001/imgs/provinces/default.jpg",

    game: {
      id: null,
      name: null,
      stage: null,
      stageCount: -1,
      owner: {
        id: null,
        name: null,
      },
      players: [],
    },

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
      id: null,
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
        id: null,
        name: null,
        aggressiveness: {},
        army: {},
        estimatedArmy: {},
        opinions: {},
        focus: {},
        personality: {},
      },
    },

    svgpanzoom: null,

    notifications: [],

    dialogs: {
      info: {
        show: false,
        title: null,
        description: null,
        isError: false,
        handler: () => {},
        onClose: () => {},
      },
      startPickingPhase: {
        show: false,
      },
    },

    mainMenu: {
      dialogs: {
        newGame: {
          show: false,
        },
        loadGame: {
          show: false,
        },
        joinGame: {
          show: false,
        },
        settings: {
          show: false,
        },
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
