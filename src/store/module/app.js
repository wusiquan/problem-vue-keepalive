
export default {
  state: {
    tagNavList: []
  },

  mutations: {
    setTagNavList (state, list) {
    
    },

    addTag(state, { route }) {
      // if (!state.includes(route))
      state.tagNavList.push(route)
      console.log('addtag', route)
    }
  }
}