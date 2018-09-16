import React, { Component } from 'react';
import { Transition } from 'react-spring';

export default class ErrorCard extends Component {
  render() {
    return (
      <div>
        <Transition
          from={{ opacity: 0, y: 200 }}
          enter={{ opacity: 1, y: 0 }}
          leave={{ opacity: 0, y: 200 }}
        >
          {ErrCard}
        </Transition>
      </div>
    );
  }
}

const ErrCard = styles => (
  <div
    style={{
      opacity: styles.opacity,
      transform: `translate3d(0, ${styles.y}px, 0)`,
      ...styles
    }}
  >
    <h1>Try searching for a different movie...</h1>
    <h3>{styles.opacity}</h3>
  </div>
);
