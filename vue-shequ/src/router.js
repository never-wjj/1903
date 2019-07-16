import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home.vue"
import Topic from "./components/Topic.vue"
import CreateTopic from "./components/CreateTopic.vue"
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/topic/create",
      component: CreateTopic
    },
    {
      path: "/topic/:id",
      component: Topic
    }
  ],
  mode: "history"
})
