import React from 'react'

import './index.css'

class Comp extends React.Component {
  render() {
    const { data=[], page, onChangePage } = this.props

    return (
      <div className="PresOut">
        <table>
          <thead>
            <tr>
              <th>stored_value</th>
              <th>stored_selection</th>
            </tr>
          </thead>

          <tbody>
            {data.slice(page * 10, page * 10 + 10).map((item, index) => (
              <tr key={index}>
                <td>{item.stored_value}</td>
                <td>{item.stored_selection.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({length: data.length/(10  + 1) + 1}).map((item, index) => (
            <a key={index}
              className={index === page ? 'active' : ''}
              onClick={e => onChangePage(index)}
            >{index + 1}</a>
          ))}
        </div> 
      </div>
    )
  }
}

export default Comp
