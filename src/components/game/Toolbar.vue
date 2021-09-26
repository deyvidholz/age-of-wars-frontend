<template>
  <v-toolbar dense dark elevation="1" class="toolbar pr-12" height="64px">
    <v-app-bar-nav-icon
      @click="$store.state.showLeftSidebar = true"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <div class="d-flex align-center">
        <v-img
          :src="
            $store.state.playerCountry.flag || $store.state.defaultCountryFlag
          "
          class="mr-3 flag-bordered"
          height="22"
          width="36"
        ></v-img>

        <span>
          {{ $store.state.playerCountry.name || "{COUNTRY_NAME}" }}
        </span>
      </div>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined
          tile
          color="green"
          class="mr-5"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-cash</v-icon>
          <span>{{ $store.state.playerCountry.balance }}</span>
          <small class="ml-2"
            >(+{{ $store.state.playerCountry.balanceIncoming }})</small
          >
        </v-btn>
      </template>
      <span>Balance</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined
          tile
          color="brown"
          class="mr-5"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-water</v-icon>
          <span>{{ $store.state.playerCountry.oil }}</span>
          <small class="ml-2"
            >(+{{ $store.state.playerCountry.oilIncoming }})</small
          >
        </v-btn>
      </template>
      <span>Oil</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined
          tile
          color="yellow"
          class="mr-5"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-account-multiple</v-icon>
          <span>{{ $store.state.playerCountry.divisions }}</span>
        </v-btn>
      </template>
      <span>Divisions</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined tile color="teal" class="mr-5" v-bind="attrs" v-on="on">
          <v-icon>mdi-tank</v-icon>
          <span>{{ $store.state.playerCountry.tanks }}</span>
        </v-btn>
      </template>
      <span>Tanks</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined tile color="red" class="mr-5" v-bind="attrs" v-on="on">
          <v-icon>mdi-airplane</v-icon>
          <span>{{ $store.state.playerCountry.aircrafts }}</span>
        </v-btn>
      </template>
      <span>Aircrafts</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined tile color="blue" class="mr-5" v-bind="attrs" v-on="on">
          <v-icon>mdi-ferry</v-icon>
          <span>{{ $store.state.playerCountry.warships }}</span>
        </v-btn>
      </template>
      <span>Warships</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined
          tile
          color="purple"
          class="mr-5"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-skull-crossbones</v-icon>
          <span>{{ $store.state.playerCountry.aggressiveness }}</span>
        </v-btn>
      </template>
      <span>Aggressiveness</span>
    </v-tooltip>

    <span class="mr-5 grey--text">|</span>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined
          tile
          color="orange"
          class="mr-5"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-notebook-edit</v-icon>
          <span>{{ $store.state.playerCountry.decisions.length }}</span>
        </v-btn>
      </template>
      <span>Decisions</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    countryFlag: {
      default: "",
    },
  },
};
</script>
