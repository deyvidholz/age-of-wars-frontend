<template>
  <v-dialog
    v-model="$store.state.dialogs.aggressivenessRanking.show"
    width="520"
    scrollable
  >
    <v-card color="grey darken-3" dark>
      <v-card-title class="justify-space-between">
        <div>
          <v-icon color="purple purple accent-2" class="mr-2">
            mdi-skull-crossbones
          </v-icon>

          Aggressiveness Ranking
        </div>

        <small class="grey--text">({{ items.length }} countries)</small>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="py-4" style="height: 390px;">
        <v-list flat color="transparent">
          <v-list-item-group v-model="selectedItem" color="orange">
            <v-list-item v-for="(item, index) in items" :key="item.id">
              <v-list-item-content>
                <v-list-item-title class="d-flex justify-space-between">
                  <div class="d-flex">
                    <span class="mr-2 font-weight-bold orange--text"
                      >{{ formatRanking(index + 1) }}.</span
                    >
                    <v-img
                      :src="
                        `${$store.state.defaultCountryFlagPath}/${item.flag}`
                      "
                      class="mr-2 flag-bordered"
                      height="22"
                      width="36"
                    ></v-img>
                    <span>{{ item.name }}</span>
                  </div>

                  <div>
                    <span class="purple--text text--lighten-3">{{
                      formatMoney(item.value, true, false)
                    }}</span>
                  </div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
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
  data: () => ({
    selectedItem: 1,
    items: [],
  }),

  computed: {
    isShowing() {
      return this.$store.state.dialogs.aggressivenessRanking.show;
    },
  },

  methods: {
    getRanking() {
      this.http
        .get(`/countries/rankings/CURRENT_AGGRESSIVENESS`)
        .then((res) => {
          const { countries } = res.data.data;

          this.items = countries.map((target) => {
            return {
              id: target.id,
              flag: target.flag,
              name: target.name,
              value: target.aggressiveness.current,
            };
          });
        })
        .catch((err) => {
          console.log(err);
          this.$store.state.dialogs.info.title = err.response.data.message;
          this.$store.state.dialogs.info.isError = true;
          this.$store.state.dialogs.info.show = true;
        });
    },

    close() {
      this.$store.state.dialogs.aggressivenessRanking.show = false;
    },
  },

  watch: {
    isShowing(newValue) {
      if (!newValue) {
        this.selectedItem = null;
        return;
      }

      this.getRanking();
    },
  },
};
</script>
