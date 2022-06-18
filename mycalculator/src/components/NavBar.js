import React from 'react';
import logo from './logo.png';

function NavBar() {

  const toggleMode = (mode) => {
    //document.body.classList.add('bg-' + mode);
    document.body.style.backgroundColor = mode;   
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#4e4f4e' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} className="ms-2 me-1 pb-1" alt="Logo" style={{ width:32, height:35 }}></img>
              <b className="mx-3 pt-5" style={{ color:'wheat', fontSize:25 }}>MyCalculator Application</b>
            </a>
            
            <div className="d-flex">
              <label className="pt-1" style={{ fontSize: 18, color:'wheat'}}>Themes :- </label>&ensp;
              <div className="rounded mx-1 my-1" onClick={() => toggleMode('#ed7777')} style={{backgroundColor: '#ed7777', width:25, height:25, border: '2px solid black'}} />
              <div className="rounded mx-1 my-1" onClick={() => toggleMode('#85db6e')} style={{backgroundColor: '#85db6e', width:25, height:25, border: '2px solid black'}} />
              <div className="rounded mx-1 my-1" onClick={() => toggleMode('#8298d1')} style={{backgroundColor: '#8298d1', width:25, height:25, border: '2px solid black'}} />
              <div className="rounded mx-1 my-1" onClick={() => toggleMode('#ede858')} style={{backgroundColor: '#ede858', width:25, height:25, border: '2px solid black'}} />
            </div>

          </div>
      </nav>
    </>
  )
}

export default NavBar