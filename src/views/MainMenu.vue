<template>
  <div class="h100 centralized-container">
    <div>
      <v-card color="grey darken-3" dark tile width="400px">
        <v-card-title class="justify-center display-1 red--text">
          <strong>Age of Wars</strong>
        </v-card-title>

        <v-divider />

        <v-card-text>
          <div class="d-flex flex-column">
            <v-btn tile color="blue-grey darken-1 mb-2" @click="newGame()">
              New Game
            </v-btn>

            <v-btn tile color="blue-grey darken-1 mb-2" @click="loadGame()">
              Load Game
            </v-btn>

            <v-btn tile color="blue-grey darken-1 mb-2" @click="joinGame()">
              Join Game
            </v-btn>

            <v-btn tile color="blue-grey darken-1 mb-2" @click="settings()">
              Settings
            </v-btn>
          </div>
        </v-card-text>
      </v-card>

      <div class="text-right blue-grey--text text--lighten-2 mr-3">
        <small @click="openGithub()" class="cursor-pointer"
          >v2.0 (Alpha) - Created by Deyvid Holz</small
        >
      </div>
    </div>

    <NewGameDialog />
  </div>
</template>

<script>
import NewGameDialog from "@/components/main-menu/NewGameDialog";

export default {
  components: {
    NewGameDialog,
  },

  data: () => ({}),

  methods: {
    openGithub() {
      window.open("https://github.com/deyvidholz");
    },
    newGame() {
      console.log("newGame");
      this.$store.state.mainMenu.dialogs.newGame.show = true;
    },
    loadGame() {
      console.log("loadGame");
      this.$store.state.mainMenu.dialogs.loadGame.show = true;
    },
    joinGame() {
      console.log("joinGame");
      this.$store.state.mainMenu.dialogs.joinGame.show = true;
    },
    settings() {
      console.log("settings");
      this.$store.state.mainMenu.dialogs.settings.show = true;
    },
  },
};
</script>
