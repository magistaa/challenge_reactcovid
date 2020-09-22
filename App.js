import React from 'react';
import Utama from './utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div> <hr />
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a className="navbar-brand" href="#">
    <h3><img src="1.png" width="80rem"></img>&nbsp;&nbsp;Covid 19</h3> 
  </a>

  <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="Beranda"><Link to='/'>Beranda</Link><span className="sr-only"></span></a>
      </li>
    <li className="nav-item active">
      <a className="nav-link" href="Protokol"><Link to='Protokol'>Protokol</Link><span className="sr-only"></span></a>
    </li>
    <li className="navbar-nav active">
      <a className="nav-link" href="Pesebaran"><Link to='Pesebaran'>Pesebaran</Link> <span className="sr-only"></span></a>
    </li>
    
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="Protokol">Protokol</a>
        <a className="dropdown-item" href="Pesebaran">Pesebaran</a>
      </div>
    </li>
  </ul>

</nav>
      <p><Utama /></p>
      </div>

    );
  }
}

export default App;
