import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Home() {
  return (
    <div classNameName="home page">
      <nav className="panel">
        <p className="panel-heading">
          This setup comes with
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input" type="text" placeholder="Search" />
            <span className="icon is-left">
              <FaSearch />
            </span>
          </p>
        </div>
        <a className="panel-block" target="_blank" rel="noopener noreferrer" href="https://bulma.io/documentation/">
          Builma.io for bootstrap-like styling
        </a>
        <a className="panel-block" target="_blank" rel="noopener noreferrer" href="https://react-icons.netlify.com/">
          React-icons for icons that include Font Awesome, Iconicons etc.
        </a>
        <a className="panel-block" target="_blank" rel="noopener noreferrer" href="https://www.highcharts.com/demo/pie-basic">
          Highcharts for charts
        </a>
        <a className="panel-block" target="_blank" rel="noopener noreferrer" href="https://reacttraining.com/react-router/web/guides/quick-start">
          React Router for routing needs
        </a>
      </nav>
    </div>
  )
}
