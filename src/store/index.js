import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [{ id: 1, titulo: 'Ir ao mercado', concluido: false }]
  },
  mutations: {
    adicionaTarefa(state, titulo) {
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })
        //this.campoInput = null
      }
    },
    removeTarefa(state, id) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    }
  },
  actions: {},
  modules: {}
})
