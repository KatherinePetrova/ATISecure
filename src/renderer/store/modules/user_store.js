const secret = "secret_key";

const Cryptr = require("cryptr");
const cryptr = new Cryptr(secret);

const jwt = require("jsonwebtoken");

import db from "../../datastore.js";
const { user_db } = db;

function encryptData(data) {
  for (let key in data) {
    if (!state.keys.find(el => el == key)) {
      data[key] = cryptr.encrypt(data[key]);
    }
  }

  return data;
}

function decryptData(data) {
  for (let key in data) {
    if (!state.keys.find(el => el == key)) {
      data[key] = cryptr.decrypt(data[key]);
    }
  }

  return data;
}

const state = {
  initial_user: {
    username: "admin",
    password: "admin",
    Имя: "Мансур",
    Фамилия: "Нуруллаев",
    Отчество: "Маратович",
    type: "admin",
    image: ""
  },

  types: ["admin"],
  keys: ["username"],

  authed_user: null
};
const getters = {};
const mutations = {
  setAuthed_user(state, payload) {
    state.authed_user = payload;
  }
};

const actions = {
  async addInitialUser({ state, commit }) {
    try {
      let initial_user = await user_db.findOne({ username: "admin" });

      if (!initial_user) {
        let data = { ...state.initial_user };
        data = encryptData(data);
        await user_db.insert(data);
      }
    } catch (error) {
      throw error;
    }
  },

  async auth({ state, commit }, payload) {
    let { username, password } = payload;

    try {
      let user = await user_db.findOne({ username });

      if (user && cryptr.decrypt(user.password) == password) {
        let data = decryptData(user);
        return await jwt.sign(data, secret);
      } else {
        throw new Error("Неверный логин или пароль");
      }
    } catch (error) {
      throw error;
    }
  },

  async setUser({ state, commit }, payload) {
    try {
      let data = await jwt.verify(payload, secret);
      commit("setAuthed_user", data);
    } catch (error) {
      throw error;
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
