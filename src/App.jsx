
import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Anasayfa from "./components/Anasayfa";
import Secenekler from "./components/Secenekler";
import Siparis from "./components/Siparis";
import "./index.css"
import React, { useState } from "react"
import {
  Switch,
  Route,

 
} from "react-router-dom";

function App() {

  const [pizzaKalinlik, setPizzaKalinlik] = useState("")
  const [pizzaBoyut, setPizzaBoyut] = useState("")
  const [pizzaMalzeme, setPizzaMalzeme] = useState([])

  
  return (
  <Route>
  <Header/>
  <Switch>
    <Route exact path = "/">
    <Anasayfa
   
    />
  </Route>
  <Route exact path = "/secenekler">
    <Secenekler
     pizzaKalinlik = {pizzaKalinlik}
     setPizzaKalinlik = {setPizzaKalinlik}
     pizzaBoyut = {pizzaBoyut}
     setPizzaBoyut = {setPizzaBoyut}
     pizzaMalzeme = {pizzaMalzeme}
     setPizzaMalzeme = {setPizzaMalzeme}/>
  </Route>
  <Route exact path = "/siparis">
    <Siparis/>
  </Route>
  </Switch>

</Route>
  
  )
}

export default App
