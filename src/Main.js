import React, { Component } from 'react'

function convert(str) {
  let myList = str
    .toLowerCase()
    .split('')
    .reverse()
    .join('')

    .replace(/\s\s+/g, ' ')
    .replace(/[a]/g, 'A')
    .replace(/[e]/g, 'E')
    .replace(/[i]/g, 'I')
    .replace(/[o]/g, 'O')
    .replace(/[u]/g, 'U')

  return myList
}

class MyString extends React.Component {
  constructor(props) {
    super(props)

    let self = this

    self.state = {
      name: 'I will reverse',
    }
  }

  updateName(evt) {
    let self = this

    self.setState({
      name: evt.target.value,
    })
  }

  render() {
    let self = this

    return (
      <div className="outer">
        <div>
          <div>
            <label className="c-label" htmlFor="name_field">
              String to Reverse
            </label>
          </div>
          <input
            className="c-input-field"
            type="text"
            id="name_field"
            value={self.state.name}
            onChange={self.updateName.bind(self)}
          />
        </div>
        <article className="about_content">
          {self.state.name ? <p>{convert(self.state.name)}</p> : null}
        </article>
      </div>
    )
  }
}

export default MyString
