<template>
  <v-btn
    v-if="true || $store.state.demandMapMode"
    class="demand-province"
    color="red darken-2"
    tile
    dark
    :disabled="!canSubmit"
    @click="demandProvince()"
  >
    <v-icon>
      mdi-chevron-right
    </v-icon>

    Demand Province
  </v-btn>
</template>

<script>
export default {
  data: () => ({}),

  computed: {
    canSubmit() {
      return this.$store.state.province.id;
    },
  },

  methods: {
    demandProvince() {
      this.$store.state.isRequesting = true;
      this.$socket.client.emit("player:pick-country", {
        ...this.getBaseData(),
        countryId: this.$store.state.province.country.id,
      });
    },
  },
};
</script>

<style></style>
