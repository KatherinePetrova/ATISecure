<template>
  <div id="app">
    <transition name="fade">
      <div class="nav" v-if="$route.params.title && user">
        <div class="item logo" @click="$router.push('/')">
          <img src="/static/icons/logo.png" />
          ATI Secure
        </div>
        <div
          class="item"
          v-for="(item, index) in navigation"
          :key="'navigation-item' + index"
          @click="item.opened = !item.opened"
        >
          <div class="label">
            <img :src="item.icon" v-if="item.icon" />
            {{ item.title }}
            <img
              src="/static/icons/arrow.png"
              :class="{opened: item.opened}"
              class="arrow"
            />
          </div>
          <template v-if="item.opened">
            <div
              class="sub-item"
              v-for="(sub_item, sub_index) in item.items"
              :key="`sub-navigaton-item${index}${sub_index}`"
              @click.stop="$router.push(`/temp/${index}_${sub_index}`)"
              :class="{active: $route.params.title && index == $route.params.title.split('_')[0] && sub_index == $route.params.title.split('_')[1]}"
            >
              <img :src="sub_item.icon" alt v-if="sub_item.icon" />
              {{ sub_item.title }}
            </div>
          </template>
        </div>
      </div>
    </transition>
    <div class="content">
      <transition name="fade">
        <div class="header" v-if="$route.params.title && user">
          <img src="/static/icons/search.png" />
          <input type="text" />
          <div class="lang">Русский</div>
          <div class="profile">
            <div class="text">
              <div>{{ user.Имя + " " + user.Фамилия }}</div>
              <div style="font-size: 0.8em">{{ user.type }}</div>
            </div>
            <div class="avatar"></div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="routes" v-if="$route.params.title && user">
          <div class="main">{{ navigation[routes.main].title }}</div>
          <div class="sub">
            <img
              :src="navigation[routes.main].icon ? navigation[routes.main].icon : navigation[routes.main].items[routes.sub].icon"
            />
            <img src="/static/icons/arrows-right.png" />
            {{ navigation[routes.main].items[routes.sub].title }}
          </div>
        </div>
      </transition>
      <transition name="fade">
        <router-view v-if="router_visibillity"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "ATIsecure",
  data() {
    return {
      router_visibillity: true
    };
  },
  watch: {
    async "$route.path"(newValue) {
      this.router_visibillity = false;
      await setTimeout(() => {}, 1000);
      this.router_visibillity = true;
    }
  },
  computed: {
    user() {
      return this.$store.state.user_store.authed_user;
    },
    navigation() {
      return this.$store.state.main.navigation;
    },
    routes() {
      return {
        main: this.$route.params.title.split("_")[0],
        sub: this.$route.params.title.split("_")[1]
      };
    }
  }
};
</script>

<style lang="sass">
@import "~@/assets/style/app.sass"

.fade-enter,
.fade-leave-to 
  opacity: 0
  position: absolute
  transform: translateY(50%)


.fade-enter-active,
.fade-leave-active 
  transition: 0.5s

</style>
