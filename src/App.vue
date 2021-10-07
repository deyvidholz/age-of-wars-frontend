<template>
  <v-app>
    <Dialog />
    <Notification
      v-for="(notification, index) in $store.state.notifications"
      :key="index"
      :index="index"
      :id="notification.id"
      :icon="notification.icon || 'mdi-information-variant'"
      :iconColor="notification.iconColor"
      :flag="notification.flag"
      :countryName="notification.countryName"
      :title="notification.text"
      :handler="
        notification.handler ||
          (() => $store.state.notifications.splice(index, 1))
      "
    />
    <Loader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Dialog from "@/components/Dialog";
import Notification from "@/components/Notification";
import Loader from "@/components/Loader";

export default {
  name: "App",

  components: {
    Dialog,
    Notification,
    Loader,
  },

  data: () => ({
    //
  }),

  sockets: {
    error(payload) {
      console.log("socket-error", payload);
      this.$store.state.dialogs.info.title =
        payload.message || "An error occurred";
      this.$store.state.dialogs.info.show = true;
    },
  },
};
</script>
