<template>
  <v-btn
    v-if="$store.state.game.stage === 'PICKING_PHASE'"
    class="next-turn"
    color="red darken-2"
    tile
    dark
    :disabled="!canSubmit"
    @click="pickCountry()"
  >
    <v-icon>
      mdi-chevron-right
    </v-icon>

    <span class="mr-3">Pick</span>

    <v-img
      :src="
        $store.state.province.country.flag
          ? `${$store.state.defaultCountryFlagPath}/${$store.state.province.country.flag}`
          : $store.state.defaultCountryFlag
      "
      class="mr-1 flag-bordered"
      width="36"
    ></v-img>

    {{ $store.state.province.country.name }}
  </v-btn>
</template>

<script>
export default {
  data: () => ({
    alreadyPicked: false,
  }),

  computed: {
    canSubmit() {
      return (
        this.$store.state.province.country.id &&
        this.$store.state.province.country.isAi &&
        !this.$store.state.alreadyPicked &&
        !this.$store.state.isRequesting &&
        !this.$store.state.isRequestingProvince
      );
    },
  },

  methods: {
    pickCountry() {
      this.$store.state.isRequesting = true;
      this.$socket.client.emit("player:pick-country", {
        ...this.getBaseData(),
        countryId: this.$store.state.province.country.id,
      });

      return;

      const payload = {
        countryId: this.$store.state.province.country.id,
      };

      this.http
        .post("/players/pick-country", payload)
        .then((res) => {
          localStorage.setItem("countryId", res.data.data.country.id);
          this.$store.state.alreadyPicked = true;
          this.$store.state.notifications.push({
            flag: res.data.data.country.flag,
            countryName: res.data.data.country.name,
            text: res.data.message,
          });
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
