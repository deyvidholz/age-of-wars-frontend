<template>
  <v-btn
    class="next-turn"
    tile
    color="orange darken-2"
    dark
    v-if="$store.state.game.stage === 'RUNNING'"
    :disabled="$store.state.isRequesting"
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
    nextTurn() {
      const payload = {
        // TODO mount actions
        actions: [],
      };

      this.http
        .post("/games/next-turn", payload)
        .then((res) => {
          // TODO check if it's necessary do something here
          console.log("res", res);
        })
        .catch((err) => {
          console.log(err);
          this.$store.state.dialogs.info.title = err.response.data.message;
          this.$store.state.dialogs.info.isError = true;
          this.$store.state.dialogs.info.show = true;
        });
    },
  },
};
</script>

<style></style>
