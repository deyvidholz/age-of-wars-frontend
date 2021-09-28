<template>
  <v-dialog
    v-model="$store.state.mainMenu.dialogs.newGame.show"
    width="520"
    persistent
  >
    <v-card color="grey darken-3" dark>
      <v-card-title>
        <v-icon color="green accent-3" class="mr-2">
          mdi-earth-box-plus
        </v-icon>

        Create New Game
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="py-4">
        <v-text-field
          v-model="fieldValues.name"
          label="Name"
          type="text"
          dark
          clearable
          autocomplete="off"
          :rules="[
            (value) =>
              value && value.match(/^[\w ]{4,16}$/)
                ? ruleValid('name')
                : ruleInvalid('name', 'Invalid name'),
          ]"
        ></v-text-field>

        <v-switch
          v-model="fieldValues.allowCheats"
          label="Allow Cheats"
          color="red"
          value="true"
        ></v-switch>

        <v-select
          v-model="fieldValues.maxPlayers"
          label="Max Players Allowed"
          :items="maxPlayersSelectValues"
        />

        <v-combobox
          v-model="fieldValues.blacklistedCountries"
          :items="blacklistedCountriesComboboxValues"
          label="Blacklisted Countries"
          multiple
          chips
        ></v-combobox>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="justify-end">
        <v-btn color="red" text @click="cancel()">
          Cancel
        </v-btn>

        <v-btn
          :disabled="!canSubmit"
          color="green accent-3"
          text
          @click="submit()"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    fieldValues: {
      name: null,
      allowCheats: null,
      maxPlayers: "Max",
      blacklistedCountries: [],
    },
    validFields: {
      name: false,
    },
    maxPlayersSelectValues: ["Max", 2, 4, 8, 10, 16, 24, 48, 64, 100],
    blacklistedCountriesComboboxValues: [
      "United States",
      "United Kingdom",
      "China",
      "India",
    ],
  }),

  computed: {
    canSubmit() {
      return this.validFields.name && !this.$store.state.isRequesting;
    },
  },

  methods: {
    clear() {
      this.fieldValues.name = null;
      this.fieldValues.allowCheats = null;
      this.fieldValues.maxPlayers = "Max";
      this.fieldValues.blacklistedCountries = [];
      this.validFields.name = false;
    },
    ruleValid(fieldName) {
      this.validFields[fieldName] = true;
      return true;
    },
    ruleInvalid(fieldName, text) {
      this.validFields[fieldName] = false;
      return text;
    },
    cancel() {
      this.$store.state.mainMenu.dialogs.newGame.show = false;
      this.clear();
    },
    submit() {
      const payload = {
        name: this.fieldValues.name,
        options: {
          allowCheats: Boolean(this.fieldValues.allowCheats),
          maxPlayers: this.fieldValues.maxPlayers,
          blacklistedCountries: this.fieldValues.blacklistedCountries,
        },
      };

      this.http
        .post("/games", payload)
        .then((res) => {
          localStorage.setItem("gameId", res.data.data.game.id);

          this.$store.state.dialogs.info.handler = () => {
            this.http
              .get(`/games/start/${res.data.data.game.id}`)
              .then((response) => {
                this.$router.push({ name: "Game" });
              })
              .catch((err) => {
                this.$store.state.dialogs.info.title =
                  err.response.data.message;
                this.$store.state.dialogs.info.isError = true;
                this.$store.state.dialogs.info.show = true;
              });
          };

          this.$store.state.dialogs.info.onClose = () => {
            this.cancel();
          };

          this.$store.state.dialogs.info.title = res.data.message;
          this.$store.state.dialogs.info.show = true;
        })
        .catch((err) => {
          this.$store.state.dialogs.info.title = err.response.data.message;
          this.$store.state.dialogs.info.isError = true;
          this.$store.state.dialogs.info.show = true;
        });
    },
  },
};
</script>
