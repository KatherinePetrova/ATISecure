const state = {
  navigation: [
    {
      title: "Панель управления",
      opened: false,
      icon: "/static/icons/panel.png",
      items: [
        { title: "Online", active: false, icon: "/static/icons/circle.png" },
        { title: "Архив", active: false, icon: "/static/icons/circle.png" }
      ]
    },
    {
      title: "Камеры",
      opened: false,
      items: [
        {
          title: "Камера 1",
          active: false,
          icon: "/static/icons/camera-icon.png"
        },
        {
          title: "Камера 2",
          active: false,
          icon: "/static/icons/camera-icon.png"
        }
      ]
    },
    {
      title: "Распознование лиц",
      opened: false,
      items: [
        { title: "Ученики", active: false, icon: "/static/icons/pupils.png" },
        { title: "Учителя", active: false, icon: "/static/icons/pupils.png" },
        {
          title: "Персонал",
          active: false,
          icon: "/static/icons/pupils.png"
        },
        {
          title: "Неизвестные",
          active: false,
          icon: "/static/icons/pupils.png"
        },
        { title: "Все", active: false, icon: "/static/icons/pupils.png" }
      ]
    },
    {
      title: "Настройки",
      opened: false,
      items: [
        {
          title: "Личный кабинет",
          active: false,
          icon: "/static/icons/pupils.png"
        },
        { title: "FAQ", active: false, icon: "/static/icons/pupils.png" },
        { title: "Ошибки", active: false, icon: "/static/icons/pupils.png" },
        {
          title: "Конфиденциальность",
          active: false,
          icon: "/static/icons/pupils.png"
        },
        {
          title: "О компании",
          active: false,
          icon: "/static/icons/pupils.png"
        },
        {
          title: "Служба поддержки",
          active: false,
          icon: "/static/icons/pupils.png"
        }
      ]
    }
  ]
};

const getters = {};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};
