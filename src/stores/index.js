import { combineReducers, thunkActions } from 'redux-thunk-it'

import storage from './storage'
import contin from './contin'
import contout from './contout'

export default combineReducers({
  storage,
  contin,
  contout
})

export const Storage = thunkActions(storage)
export const Contin = thunkActions(contin)
export const Contout = thunkActions(contout)