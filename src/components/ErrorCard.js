import React, { Component } from 'react';
import { Transition } from 'react-spring';

export default class ErrorCard extends Component {
  render() {
    return (
      <div>
        <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }}>
          {ErrCard}
        </Transition>
      </div>
    );
  }
}

const ErrCard = styles => (
  <div
    style={{
      opacity: styles.opacity
    }}
  >
    <h1>Try searching for a different movie...</h1>
    <h3>{styles.opacity}</h3>
  </div>
);
