import React from 'react'
import { connect } from 'react-redux'

import PresIn from 'components/PresIn'
import { Contin, Storage } from 'stores'

class Comp extends React.Component {
  render() {
    const { dispatch, contin } = this.props

    return (
      <div>
        <PresIn
          value={contin.value}
          selection={contin.selection}
          error={contin.error}
          onChangeValue={value => {
            dispatch(Contin.update({
              value,
              error: ''
            }))
          }}
          onChangeSelection={selection => {
            dispatch(Contin.update({
              selection,
              error: ''
            }))
          }}
          onEnter={data => {
            if(contin.value && contin.selection.length) {
              dispatch(Storage.enter({
                stored_value: contin.value,
                stored_selection: contin.selection
              }))
            }
            else {
              dispatch(Contin.update({
                error: 'Value and selection are required'
              }))
            }
          }}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contin: state.contin
  }
}

export default connect(mapStateToProps)(Comp)
