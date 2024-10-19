import Header from "./components/header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Anasayfa from "./components/Anasayfa";
import Secenekler from "./components/Secenekler";
import Siparis from "./components/Siparis";
import "./index.css";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const initialFormData = {
  pizzaBoyut: "Orta",
  pizzaKalinlik: "İnce Hamur",
  siparisNotu: "",
  pizzaMalzeme: ["Biber", "Sucuk", "Domates", "Sosis"],
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [pizzaKalinlik, setPizzaKalinlik] = useState("");
  const [pizzaBoyut, setPizzaBoyut] = useState();
  const [pizzaMalzeme, setPizzaMalzeme] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [secili, setSecili] = useState("/");
  const [pizzaFiyatı, setPizzaFiyatı] = useState(0);
  const [siparisNotu, setSiparisNotu] = useState();
  const [malzemeSec, setMalzemeSec] = useState(5);
  const [toplamTutar, setToplamTutar] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <Route>
      <ToastContainer />
      <Header />
      <Switch>
        <Route exact path="/">
          <Anasayfa secili={secili} setSecili={setSecili} />
        </Route>
        <Route exact path="/secenekler">
          <Secenekler
            pizzaKalinlik={pizzaKalinlik}
            setPizzaKalinlik={setPizzaKalinlik}
            pizzaBoyut={pizzaBoyut}
            setPizzaBoyut={setPizzaBoyut}
            pizzaMalzeme={pizzaMalzeme}
            setPizzaMalzeme={setPizzaMalzeme}
            count={count}
            setCount={setCount}
            error={error}
            setError={setError}
            secili={secili}
            setSecili={setSecili}
            pizzaFiyatı={pizzaFiyatı}
            setPizzaFiyatı={setPizzaFiyatı}
            formData={formData}
            setFormData={setFormData}
            siparisNotu={siparisNotu}
            setSiparisNotu={setSiparisNotu}
            malzemeSec={malzemeSec}
            setMalzemeSec={setMalzemeSec}
            toplamTutar={toplamTutar}
            setToplamTutar={setToplamTutar}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </Route>
        <Route exact path="/siparis">
          <Siparis
            pizzaBoyut={pizzaBoyut}
            pizzaKalinlik={pizzaKalinlik}
            pizzaMalzeme={pizzaMalzeme}
            malzemeSec={malzemeSec}
            toplamTutar={toplamTutar}
          />
        </Route>
      </Switch>
      <Footer />
    </Route>
  );
}

export default App;
