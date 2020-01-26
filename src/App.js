import React, { Component } from "react";
import Switch from "react-switch";
import Toggle from "react-toggle";
import logo from './logo.svg';
import './App.css';
import List from "./List.js"
import "react-toggle/style.css"
var data = [{
  ile: 1008,
  nazwaGrupy: "GET2FILE.PL-24H",
  przypisaneAukcje: ["24H FILESHARK UPLOADED TURBOBIT GET2FILE \n", "24H = 25GB GET2FILE TURBOBIT FILESHARK \n", "24H = 25GB GET2FILE RAPIDU FILESHARK UPLOADED \n", "24H = 25GB GET2FILE RAPIDU TURBOBIT UPLOADED"],
  rodzaj: "Konto",
  aktywnosc: true,
},
{
  ile: 1133,
  nazwaGrupy: "GET2FILE.PL-30DNI",
  przypisaneAukcje: ["48H FILESHARK UPLOADED TURBOBIT GET2FILE \n", "48H = 25GB GET2FILE TURBOBIT FILESHARK \n", "48H = 25GB GET2FILE RAPIDU FILESHARK UPLOADED \n", "48H = 25GB GET2FILE RAPIDU TURBOBIT UPLOADED"],
  rodzaj: "Konto",
  aktywnosc: true,
}
]
var act = false
function change() {
  if (act == false) {
    act = true
  }
  else {
    act = false
  }
  // console.log(ref.current.props)
  ref.current.change()
}
const ref = React.createRef()
function App() {
  return (
    <div className="App">
      <div id="divForLabel">
        <label>
          Pokaż listę przypisanych aukcji:
        </label>
        <div id="forSwitch">
          <Toggle onChange={change} />
        </div>
      </div>
      <List data={data} cType={act} ref={ref}></List>
      <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
