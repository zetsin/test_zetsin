import React from 'react'

import './index.css'

class Comp extends React.Component {

  render() {
    const { value, selection=[], error, onChangeValue, onChangeSelection, onEnter } = this.props

    return (
      <div className="PresIn">
        <form>
          <label>stored_value *</label>
          <textarea rows="3" cols="20" value={value} onChange={e => {
            onChangeValue(e.target.value)
          }} />
          <label>stored_selection * (Press Ctrl or Command to multiselect)</label>
          <select multiple="multiple" size="5" defaultValue={selection} onChange={e => {
            onChangeSelection([...e.target.options].filter(option => option.selected).map(option => option.value))
          }}>
            {['one', 'two', 'three', 'four', 'five'].map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </form>
        <button onClick={onEnter}>Enter</button>
        <label className="error">{error}</label>
      </div>
    )
  }
}

export default Comp
