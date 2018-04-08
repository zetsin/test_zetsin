export default {
  state: {
    value: '',
    selection: [],
    error: ''
  },

  actions: {
    update: function (data) {
      const { dispatch } = this

      dispatch({
        type: 'contin/save',
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