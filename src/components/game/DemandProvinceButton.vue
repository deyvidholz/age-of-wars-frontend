<template>
  <v-btn
    v-if="$store.state.demandMapMode"
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

    Demand Province ({{ $store.state.maxProvincesToDemand }})
  </v-btn>
</template>

<script>
export default {
  data: () => ({}),

  computed: {
    canSubmit() {
      return (
        !this.$store.state.isRequesting &&
        this.$store.state.province.mapRef &&
        this.$store.state.provincesAllowedToDemand.includes(
          this.$store.state.province.mapRef
        )
      );
    },
  },

  methods: {
    demandProvince() {
      const payload = {
        ...this.getBaseData(),
        countryId: this.$store.state.playerCountry.id,
        targetCountryId: this.$store.state.province.country.id,
        mapRef: this.$store.state.province.mapRef,
      };

      this.$store.state.isRequesting = true;
      this.$socket.client.emit("country:demand-province", payload);
    },
  },
  sockets: {
    "country:demand-province"(payload) {
      console.log("demand", payload);
      const { color, provinceToFill } = payload;
      this.$store.state.isRequesting = false;
      this.$store.state.provinceElementOriginalColor = color;
      document.querySelector(`#${provinceToFill}`).style.fill = color;

      this.$store.state.maxProvincesToDemand =
        payload.maxProvincesAllowedToDemand;
      this.$store.state.playerCountry.decisions = payload.decisions;
      this.$store.state.provincesAllowedToDemand = payload.remainingProvinces;
      this.$store.state.playerCountry.aggressiveness =
        payload.country.aggressiveness.current;
      this.$store.demandMapMode = false;

      // TODO change icon to "earth-box-plus" icon
      this.$store.state.notifications.push({
        icon: "mdi-information-variant",
        iconColor: "yellow",
        flag: payload.country.flag,
        countryName: payload.country.name,
        text: payload.message,
      });
    },
  },
};
</script>

<style></style>
