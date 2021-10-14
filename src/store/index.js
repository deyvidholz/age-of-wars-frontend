import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isRequesting: false,
    alreadyPicked: false,
    alreadyPlayed: false,

    showLeftSidebar: false,
    showRightSidebar: true,
    rightSidebarMini: true,

    defaultCountryFlagPath: "http://localhost:3001/imgs/flags",
    defaultCountryFlag: "http://localhost:3001/imgs/flags/default.png",
    defaultProvinceImgPath: "http://localhost:3001/imgs/provinces/",
    defaultProvinceFlag: "http://localhost:3001/imgs/provinces/default.jpg",

    demandMapMode: false,
    demandingProvinces: [],
    provincesAllowedToDemand: [],

    selfCountryOverview: false,
    actions: [],

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
      id: null,
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
      focusType: null,
      decisions: [],
      allies: [],
      enemies: [],
      guaranteeingIndependence: [],
      independenceGuaranteedBy: [],
      messages: [],
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
      incoming: {
        balance: 0,
        oil: 0,
      },
      levels: {
        production: 0,
        taxation: 0,
      },
      country: {
        id: null,
        name: null,
        isAi: null,
        owner: {},
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
      opinionRanking: {
        show: false,
      },
      economicRanking: {
        show: false,
      },
      oilRanking: {
        show: false,
      },
      militaryRanking: {
        show: false,
      },
      aggressivenessRanking: {
        show: false,
      },
      manageActions: {
        show: false,
      },
      changeFocus: {
        show: false,
      },
      relations: {
        show: false,
      },
      shop: {
        show: false,
      },
      manageArmy: {
        show: false,
      },
      overview: {
        show: false,
      },
      province: {
        show: false,
      },
      decisions: {
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
  getters: {},
});
