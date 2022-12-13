import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
   let {tittle,mod_text,mod,text_color,tooglemod}=this.props;
    return (
      <>
      <nav className={`navbar navbar-expand-lg bg-${mod} text-${text_color}`}>
  <div className="container-fluid ">
    <a className={`navbar-brand text-${text_color}`} href="/">{tittle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${text_color}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item ">
          <a className={`nav-link active text-${text_color}`} href="/about">about</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="form-check form-switch">
            <div>
              <input onClick={tooglemod} className="form-check-input"  type="checkbox" role="switch"/>
            </div>
            <div>
            {mod_text}
            </div>

  </div>

  <div>
  </div>
</nav>
      </>
    )
  }
}
