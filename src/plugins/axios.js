import axios from "axios";
import Vue from "vue";

export const http = axios.create({
  baseURL: `http://localhost:3001`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Country-ID": `${localStorage.getItem("countryId")}`,
    "Game-ID": `${localStorage.getItem("gameId")}`,
    "Player-ID": `${localStorage.getItem("playerId")}`,
  },
});

Vue.prototype.http = http;
