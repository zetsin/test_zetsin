import { Contin } from './'

export default {
  state: {
    data: JSON.parse(localStorage.getItem('data') || '[]')
  },

  actions: {
    enter: function ({ stored_value, stored_selection }) {
      const { dispatch, getState } = this
      const { storage } = getState()

      dispatch({
        type: 'storage/save',
        payload: {
          data: [...storage.data, { stored_value, stored_selection }]
        }
      })

      dispatch(Contin.update({
        value: '',
        selection: []
      }))
    }
  },

  reducers: {
    save: (state, payload) => {
      localStorage.setItem('data', JSON.stringify(payload.data))
      return {
        ...state,
        ...payload
      }
    }
  }
}