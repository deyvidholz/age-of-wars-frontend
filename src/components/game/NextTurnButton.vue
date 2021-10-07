<template>
  <v-btn
    class="next-turn"
    tile
    color="orange darken-2"
    dark
    v-if="$store.state.game.stage === 'RUNNING'"
    :disabled="$store.state.isRequesting || $store.state.alreadyPlayed"
    @click="nextTurn()"
  >
    <v-icon>
      mdi-chevron-right
    </v-icon>
    Next Turn
  </v-btn>
</template>

<script>
export default {
  methods: {
    clearActions() {
      this.$store.state.actions = [];
    },
    getActions() {
      return this.$store.state.actions.map((action) => action.action);
    },
    nextTurn() {
      this.$socket.client.emit("player:next-turn", {
        ...this.getBaseData(),
        actions: this.getActions(),
      });

      this.clearActions();

      return;
      const payload = {
        actions: this.getActions(),
      };

      this.http
        .post("/games/next-turn", payload)
        .then((res) => {
          // TODO check if it's necessary do something here
          console.log("res", res);
          this.clearActions();
        })
        .catch((err) => {
          console.log(err);
          this.$store.state.dialogs.info.title = err.response.data.message;
          this.$store.state.dialogs.info.isError = true;
          this.$store.state.dialogs.info.show = true;
        });
    },
  },
  sockets: {
    "country:get@province": (payload) => {
      console.log("getProvince", payload);
    },
  },
};
</script>

<style></style>
