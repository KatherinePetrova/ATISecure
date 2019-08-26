<template>
  <div class="auth-page">
    <form @submit.prevent="auth">
      <label @click="$router.push('/temp/0_0')">
        <img src="/static/icons/logo.png" />
        <span>ATI Secure</span>
      </label>
      <input
        type="text"
        placeholder="Имя пользователя"
        v-model="model.username"
        @focus="error=null"
      />
      <input type="password" placeholder="Пароль" v-model="model.password" @focus="error=null" />
      <input type="submit" value="Войти" class />
      <label style="font-size: 1rem" v-if="error">{{ error }}</label>
    </form>
  </div>
</template>

<script>
export default {
  name: "auth-page",
  data() {
    return {
      model: {
        username: null,
        password: null
      },

      error: null
    };
  },
  methods: {
    async auth() {
      let payload = { ...this.model };
      try {
        let token = await this.$store.dispatch("auth", payload);
        document.cookie = `token=${token}`;
        await this.$store.dispatch("setUser", token);
        this.$router.push("/temp/0_0");
      } catch (error) {
        this.error = error.message;
      }
    }
  },
  async created() {
    await this.$store.dispatch("addInitialUser");
  }
};
</script>

<style lang="sass">
  @import "~@/assets/style/auth-page.sass"
</style>
