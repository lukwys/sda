import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    userPosts: []
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
    },
    setPosts(state, payload){
      state.userPosts = payload
    }
  },
  actions: {
    async fetchUsers(context) {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json();
      context.commit('setUsers', data)
    },
    async fetchPosts(context, id) {
      const result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
      const data = await result.json();
      context.commit('setPosts', data)
    }
  },
  getters: {
    getUserById: (state) => (id) => {
      return state.users.find(user => id === user.id)
    }
  }
})

