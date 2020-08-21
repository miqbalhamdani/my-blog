import React from 'react';

export default function Logo({ fill }) {
  const opacityLogo = (fill === '#000') ? 0.6 : 1;
  const styles = {
    fontSize: '35px',
    color: fill,
    opacity: opacityLogo,
  };

  return (
    <h1 style={styles}>console.log</h1>
  );
}
