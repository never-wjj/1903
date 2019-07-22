<<<<<<< HEAD
import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import filter from "./modules/filter";
Vue.use(Vuex);
=======
import Vue from "vue"
import Vuex from "vuex"
import todos from "./modules/todos"
import filter from "./modules/filter"
Vue.use(Vuex)
>>>>>>> upstream/master

export default new Vuex.Store({
  modules: {
    todos,
    filter
  }
});
