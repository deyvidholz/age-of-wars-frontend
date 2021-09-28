<template>
  <div>
    <Toolbar />
    <div class="toolbar-margin-fix"></div>

    <LeftSidebar />
    <RightSidebar />

    <WorldMap />
    <TargetInfo />

    <StartPickingPhaseDialog />

    <PickCountryButton />
    <NextTurnButton />

    <!-- <Chip color="blue" icon="mdi-account" title="Account" />

    <LinearLoading />
    <CircularLoading />

    <Notification />

    <ErrorAlert />
    <InfoAlert />
    <SuccessAlert />
    <WarningAlert />

    <Avatar />

    <Tabs :data="tabContent">
      <v-tab-item value="tab-1">
        <v-card flat dark tile>
          <v-card-text>Here's my content</v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item value="tab-2">
        <v-card flat dark tile>
          <v-card-text>Here's my content 2</v-card-text>
        </v-card>
      </v-tab-item>
    </Tabs> -->
  </div>
</template>

<script>
import { getPlayerCountry } from "@/helpers/country";
import { fillProvinces, getAllProvinceElements } from "@/helpers/map";

import LinearLoading from "@/components/LinearLoading";
import CircularLoading from "@/components/CircularLoading";
import Notification from "@/components/Notification";
import Chip from "@/components/Chip";
import Avatar from "@/components/Avatar";

import ErrorAlert from "@/components/alerts/ErrorAlert";
import InfoAlert from "@/components/alerts/InfoAlert";
import SuccessAlert from "@/components/alerts/SuccessAlert";
import WarningAlert from "@/components/alerts/WarningAlert";

import Toolbar from "@/components/game/Toolbar";
import LeftSidebar from "@/components/game/LeftSidebar";
import RightSidebar from "@/components/game/RightSidebar";
import Tabs from "@/components/game/Tabs";
import WorldMap from "@/components/game/maps/World";
import TargetInfo from "@/components/game/TargetInfo";

import StartPickingPhaseDialog from "@/components/game/dialogs/StartPickingPhaseDialog";
import PickCountryButton from "@/components/game/PickCountryButton";
import NextTurnButton from "@/components/game/NextTurnButton";

export default {
  name: "Game",

  data: () => ({
    tabContent: [
      {
        id: "tab-1",
        icon: "mdi-phone",
        title: "Recents",
        content: `Not found`,
      },
      {
        id: "tab-2",
        icon: "mdi-account-multiple",
        title: "Contacts",
        content: `List of contacts`,
      },
    ],
  }),

  components: {
    Chip,
    LinearLoading,
    CircularLoading,
    Notification,
    ErrorAlert,
    InfoAlert,
    SuccessAlert,
    WarningAlert,
    Avatar,
    Toolbar,
    LeftSidebar,
    RightSidebar,
    Tabs,
    WorldMap,
    TargetInfo,
    StartPickingPhaseDialog,
    PickCountryButton,
    NextTurnButton,
  },

  methods: {
    setGameData(game) {
      this.$store.state.game.id = game.id;
      this.$store.state.game.name = game.name;
      this.$store.state.game.stage = game.stage;
      this.$store.state.game.stageCount = game.stageCount;
      this.$store.state.game.owner.id = game.owner.id;
      this.$store.state.game.owner.name = game.owner.nickname;

      this.$store.state.game.players = game.players.map((player) => ({
        id: player.id,
        name: player.name,
      }));
    },
    setPlayerCountryData(playerCountry) {
      this.$store.state.playerCountry.flag = `${this.$store.state.defaultCountryFlagPath}/${playerCountry.flag}`;
      this.$store.state.playerCountry.name = playerCountry.name;

      this.$store.state.playerCountry.balance = playerCountry.economy.balance;
      this.$store.state.playerCountry.balanceIncoming =
        playerCountry.incoming.balance;
      this.$store.state.playerCountry.oil = playerCountry.resources.oil;
      this.$store.state.playerCountry.oilIncoming = playerCountry.incoming.oil;

      this.$store.state.playerCountry.divisions = playerCountry.army.divisions;
      this.$store.state.playerCountry.tanks = playerCountry.army.tanks;
      this.$store.state.playerCountry.aircrafts = playerCountry.army.aircrafts;
      this.$store.state.playerCountry.warships = playerCountry.army.warships;

      this.$store.state.playerCountry.aggressiveness =
        playerCountry.aggressiveness.current;

      this.$store.state.playerCountry.decisions = playerCountry.decisions;
    },
  },

  mounted() {
    document.querySelector("body").addEventListener("keyup", (event) => {
      if (event.code !== "Space") {
        return;
      }

      event.preventDefault();
      this.$store.state.svgpanzoom.center();
      this.$store.state.svgpanzoom.fit();
    });

    this.http
      .get(`/games/find/${localStorage.getItem("gameId")}`)
      .then(({ data }) => {
        const game = data.data.game;
        const playerId = localStorage.getItem("playerId");
        const playerCountry = getPlayerCountry(playerId, game.countries);

        fillProvinces(game);
        this.setGameData(game);

        if (["CLOSED", "IN_LOBBY"].includes(game.stage)) {
          this.$store.state.dialogs.startPickingPhase.show = true;
        }

        if (!playerCountry) {
          this.$store.state.alreadyPicked = false;
          return;
        }

        this.$store.state.alreadyPicked = true;
        this.setPlayerCountryData(playerCountry);
      })
      .catch((err) => {
        console.log(err.response);
        this.$store.state.dialogs.info.title = err.response.data.message;
        this.$store.state.dialogs.info.isError = true;
        this.$store.state.dialogs.info.show = true;
      });

    const elements = getAllProvinceElements();

    elements.map((element) => {
      element.addEventListener("click", () => {
        if (
          this.$store.state.provinceElement &&
          this.$store.state.provinceElementOriginalColor
        ) {
          this.$store.state.provinceElement.style.fill = this.$store.state.provinceElementOriginalColor;
        }

        this.$store.state.provinceElementOriginalColor = element.style.fill;
        this.$store.state.provinceElement = element;

        element.style.fill = "red";

        this.$store.state.isRequestingProvince = true;
        this.http
          .get(`/countries/provinces/${element.id}`)
          .then(({ data }) => {
            const province = data.data.province;
            this.$store.state.province = province;
            this.$store.state.isRequestingProvince = false;
          })
          .catch((error) => {
            this.$store.state.isRequestingProvince = false;
            this.$store.state.dialogs.info.title = "An error occurred";
            this.$store.state.dialogs.info.description =
              error.response.data.message;

            this.$store.state.dialogs.info.show = true;
            element.style.fill = "#ffffff";
          });
      });
    });
  },
};
</script>
