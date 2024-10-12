
import Header from "./components/header"
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Anasayfa from "./components/Anasayfa";
import Secenekler from "./components/Secenekler";
import Siparis from "./components/Siparis";
import "./index.css"
import React, { useEffect, useState } from "react"
import {
  Switch,
  Route,

 
} from "react-router-dom";

function App() {

  const [pizzaKalinlik, setPizzaKalinlik] = useState("")
  const [pizzaBoyut, setPizzaBoyut] = useState(null)
  const [pizzaMalzeme, setPizzaMalzeme] = useState([])
  const [count, setCount] = useState(0)
  const [error , setError] = useState("")
 const [secili, setSecili] = useState("/")


  
  return (
  <Route>
  <Header/>
  <Switch>
    <Route exact path = "/">
    <Anasayfa
    secili = {secili}
    setSecili = {setSecili}
  
   
    />
  </Route>
  <Route exact path = "/secenekler">
    <Secenekler
     pizzaKalinlik = {pizzaKalinlik}
     setPizzaKalinlik = {setPizzaKalinlik}
     pizzaBoyut = {pizzaBoyut}
     setPizzaBoyut = {setPizzaBoyut}
     pizzaMalzeme = {pizzaMalzeme}
     setPizzaMalzeme = {setPizzaMalzeme}
     count = {count}
     setCount = {setCount}
     error = {error}
     setError = {setError}
     secili = {secili}
     setSecili = {setSecili}
   
     

     />
  </Route>
  <Route exact path = "/siparis">
    <Siparis/>
  </Route>
  </Switch>
<Footer/>
</Route>
  
  )
}

export default App
