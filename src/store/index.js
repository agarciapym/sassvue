import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        users: [],
        todos: [],
        posts: []
    },
    getters: {
        getUsers: state => {
            return state.users
        },
        getTodos: state => {
            return state.todos
        },
        getPosts: state => {
            return state.posts
        }
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload.data
        },
        setTodos(state, payload) {
            state.todos = payload.data
        },
        setPosts(state, payload) {
            state.posts = payload.data
        }
    },
    actions: {
        setUsers(context) {
            axios.get("users").then(response => {
                context.commit("setUsers", {data: response.data})
            })
        },
        setTodos(context) {
            axios.get("todos").then(response => {
                context.commit("setTodos", {data: response.data})
            })
        },
        setPosts(context) {
            axios.get("posts").then(response => {
                context.commit("setPosts", {data: response.data})
            })
        }
    },
    modules: {}
})
