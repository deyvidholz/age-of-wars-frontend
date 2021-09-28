<template>
  <div class="notification">
    <v-card dark width="400px" color="blue-grey darken-3" @click="handler()">
      <v-card-text class="d-flex">
        <v-icon v-if="!flag" :color="iconColor">{{ icon }}</v-icon>

        <template v-else>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <div>
                <v-img
                  :src="`${$store.state.defaultCountryFlagPath}/${flag}`"
                  class="mr-2 flag-bordered"
                  height="22"
                  width="36"
                  v-bind="attrs"
                  v-on="on"
                ></v-img>
              </div>
            </template>
            <span>{{ countryName }}</span>
          </v-tooltip>
        </template>

        <span>{{ title }}</span>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      required: true,
    },
    iconColor: {
      default: "yellow",
    },
    icon: {
      default: "mdi-information-variant",
    },
    title: {
      default: "{TITLE}",
    },
    handler: {
      default: () => {},
    },
    flag: {
      default: "",
    },
    countryName: {
      default: null,
    },
  },
};
</script>

<style></style>
