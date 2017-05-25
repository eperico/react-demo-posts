import React    from 'react'
import { Link } from 'react-router-dom'

export default function () {

  return (
    <div className="page-not-found">
      <i className="icon icon-search"/>
      <h2>Unable to find the page you are looking for.</h2>
      <Link to="/" className="btn btn--main">Go back Home</Link>
    </div>
  )

}
