import React, { Component } from 'react'

export class subjects extends Component {
  render() {
    return (
      <main>
        {this.props.subjects.map(subject => (
            <h1 key={subject.id} className="subject-title">{subject.name}</h1>
        ))
        }
      </main>
    )
  }
}

export default subjects