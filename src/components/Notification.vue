<template>
  <div class="notification">
    <v-card dark width="400px" color="blue-grey darken-3" @click="handler()">
      <v-card-text>
        <v-icon :color="iconColor">{{ icon }}</v-icon>
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
  },
};
</script>

<style></style>
