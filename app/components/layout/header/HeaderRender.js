import React          from 'react'

export default function () {
  const { headerTitle } = this.props
  return (
    <header className="headerContainer">
      <h2>{headerTitle}</h2>
    </header>
  );
}
