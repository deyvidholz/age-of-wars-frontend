<template>
  <v-dialog v-model="$store.state.dialogs.province.show" width="520">
    <v-card color="grey darken-3" dark scrollable>
      <v-card-title>
        <v-icon color="pink" class="mr-2">
          mdi-earth-box
        </v-icon>

        Provinces
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="py-4" style="height: 390px;">
        <h2>Card content</h2>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="justify-end">
        <v-btn color="red" text @click="close()">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({}),

  computed: {
    isShowing() {
      return this.$store.state.dialogs.province.show;
    },
  },

  methods: {
    getRanking() {
      // this.http
      //   .get(`/countries/rankings/INCOMING_OIL`)
      //   .then((res) => {
      //     const { countries } = res.data.data;
      //     this.items = countries.map((target) => {
      //       return {
      //         id: target.id,
      //         flag: target.flag,
      //         name: target.name,
      //         value: target.incoming.oil,
      //       };
      //     });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     this.$store.state.dialogs.info.title = err.response.data.message;
      //     this.$store.state.dialogs.info.isError = true;
      //     this.$store.state.dialogs.info.show = true;
      //   });
    },

    close() {
      this.$store.state.dialogs.province.show = false;
    },
  },
};
</script>
