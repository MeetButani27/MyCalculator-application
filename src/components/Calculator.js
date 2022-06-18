import React,{ useState } from 'react';

function Projects() {

  let myStyle = {
    fontSize: 37,
    width: 284,
    height: 70,
    backgroundColor: "#dedcdc",
    textAlign: 'right'
  }

  let design = {
    fontSize: 18
  }

  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
  }

  const userInput = (e) => {
    setResult(e.target.value);
  }
  
  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = (e) => {
    try {
      setResult(eval(result).toString());
    }
    catch(err) {
      setResult("Error");
    }
  }

  return (
    <>
      <div className="container bg-dark rounded-4" style={{width: 340, marginTop:35, backgroundColor: "#b0f5df"}}>
          <form className="my-3">
              <br />
              <center><input className="form-control my-2 mb-4" type="text" id="answer" onChange={userInput} value={result} placeholder="0" style={myStyle} /></center>
          </form>
          <div className="buttons" style={{paddingBottom: 22}}>
            <button type="submit" onClick={clear} className="btn btn-secondary m-2 p-4" value="3" style={{width: 135, fontSize: 18}}>Clear</button>
            <button type="submit" onClick={backspace} className="btn btn-secondary m-2 p-4" value="+" style={design}>C</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="%" style={design}>%</button>
            <br />
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="1" style={design}>1</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="2" style={design}>2</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="3" style={design}>3</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="+" style={design}>+</button>
            <br />
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="4" style={design}>4</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="5" style={design}>5</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="6" style={design}>6</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="-" style={design}>-</button>
            <br />
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="7" style={design}>7</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="8" style={design}>8</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="9" style={design}>9</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="*" style={design}>x</button>
            <br />
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="." style={design}>.</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="0" style={design}>0</button>
            <button type="submit" onClick={calculate} className="btn btn-primary m-2 p-4" style={design}>=</button>
            <button type="submit" onClick={clickHandler} className="btn btn-primary m-2 p-4" value="/" style={design}>/</button>
            <br />
          </div>
      </div>
    </>
  )
  
}

export default Projects