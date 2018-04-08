import React from 'react'
import { connect } from 'react-redux'

import PresOut from 'components/PresOut'
import { Contout } from 'stores'

class Comp extends React.Component {
  render() {
    const { dispatch, contout, storage } = this.props
    return (
      <div>
        <PresOut
          data={storage.data}
          page={contout.page}
          onChangePage={page => {
            dispatch(Contout.update({page}))
          }}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contout: state.contout,
    storage: state.storage
  }
}

export default connect(mapStateToProps)(Comp)
