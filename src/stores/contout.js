export default {
  state: {
    page: 0
  },

  actions: {
    update: function (data) {
      const { dispatch } = this

      dispatch({
        type: 'contout/save',
        payload: data
      })
    }
  },

  reducers: {
    save: (state, payload) => {
      return {
        ...state,
        ...payload
      }
    }
  }
}