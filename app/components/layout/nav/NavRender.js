import React                from 'react'
import { NavLink }          from 'react-router-dom'

export default function () {
  return (
    <nav className="tabbar">
      <ul>
        <li><NavLink exact={true} to="/" className="nav-link" activeClassName="nav-link--active"><i className="icon icon-home"></i>Home</NavLink></li>
        <li><NavLink to="/news" className="nav-link" activeClassName="nav-link--active"><i className="icon icon-newspaper-o"></i>News</NavLink></li>
      </ul>
    </nav>
  );
}
