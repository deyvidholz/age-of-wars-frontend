<template>
  <v-navigation-drawer
    v-model="$store.state.showLeftSidebar"
    absolute
    temporary
    dark
    class="left-sidebar"
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img
          :src="
            this.$store.state.playerCountry.flag ||
              $store.state.defaultCountryFlag
          "
        ></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{
          this.$store.state.playerCountry.name || "{COUNTRY_NAME}"
        }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon :color="item.color || 'blue-grey lighten-2'">{{
            item.icon
          }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="d-flex justify-space-between">
            <span>{{ item.title }}</span>
            <small v-if="item.shortcut" class="blue-grey--text">
              {{ item.shortcut }}
            </small>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        shortcut: "Q",
        title: "Manage Actions",
        icon: "mdi-format-list-bulleted",
        color: "indigo accent-2",
      },
      {
        shortcut: "C",
        title: "Change Focus",
        icon: "mdi-adjust",
        color: "deep-purple lighten-2",
      },
      {
        shortcut: "A",
        title: "Relations",
        icon: "mdi-handshake",
        color: "orange",
      },
      {
        shortcut: "X",
        title: "Shop",
        icon: "mdi-currency-usd",
        color: "green accent-3",
      },
      {
        shortcut: "D",
        title: "Manage Army",
        icon: "mdi-arrow-bottom-right-thick",
        color: "red",
      },
      {
        shortcut: "H",
        title: "Overview",
        icon: "mdi-folder-open",
        color: "yellow accent-3",
      },
      {
        shortcut: "F",
        title: "Provinces",
        icon: "mdi-earth-box",
        color: "pink",
      },
      // { title: "Missions", icon: "mdi-tree", "deep-orange lighten-1" },
    ],
  }),
};
</script>
