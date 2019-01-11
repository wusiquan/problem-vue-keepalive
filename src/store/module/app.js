

export default {
  state: {
    tagNavList: []
  },

  mutations: {
    setTagNavList (state, list) {
    
    },

    addTag(state, { route }) {
      let hasTag = state.tagNavList.some(tagNav => {
        return tagNav.name == route.name
      })

      if (!hasTag) {
        state.tagNavList.push(route)
      }

    }
  }
}