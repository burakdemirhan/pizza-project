import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./secenekler.css";
import React, { useEffect, useState } from "react";
import Siparis from "./Siparis.jsx";

import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
export default function Secenekler(props) {
  const {
    pizzaKalinlik,
    setPizzaKalinlik,
    pizzaBoyut,
    setPizzaBoyut,
    pizzaMalzeme,
    setPizzaMalzeme,
    count,
    setCount,
    error,
    setError,
    secili,
    setSecili,
    pizzaFiyatı,
    setPizzaFiyatı,
    formData,
    setFormData,
    siparisNotu,
    setSiparisNotu,
    malzemeSec,
    setMalzemeSec,
    toplamTutar,
    setToplamTutar,
    ınputValue,
    setInputValue,
  } = props;

  const history = useHistory();
  const [malzemeError, setMalzemeError] = useState();
  const [boyutError, setBoyutError] = useState();
  const [kalınlıkError, setKalınlıkError] = useState();
  const [isimError, setIsımError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });

    // Make a request for a user with a given ID
    axios
      .post("https://reqres.in/api/pizza")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const handelSiparisClick = (event) => {
    if (pizzaMalzeme.length < 4) {
      setMalzemeError("Lütfen en az 4 malzeme seçin!");
    } else if (!pizzaBoyut) {
      setBoyutError("Pizzanız için bir boy seçin");
    } else if (!pizzaKalinlik) {
      setKalınlıkError("Lütfen hamur kalınlığı seçiniz");
    } else {
      setMalzemeError("");
      setBoyutError("");
      history.push("/siparis");
      toast.success("Siparişiniz Alındı", {
        theme: "colored",
      });
    }
  };
  const handlePizaBoyutChange = (event, index) => {
    const { value } = event.target;
    setPizzaBoyut(value);
    setBoyutError("");
  };
  const handlePizzaKalinlikChange = (event) => {
    const { value } = event.target;
    setPizzaKalinlik(value);
    setKalınlıkError("");
  };
  const handleMalzemeChange = (event, index) => {
    const { value, checked } = event.target;
    if (checked) {
      if (pizzaMalzeme.length < 10) {
        setPizzaMalzeme((prev) => [...prev, value]);
        setMalzemeError("");
      } else {
        setMalzemeError("En fazla 10 malzeme seçebilirsiniz 🍕");
      }
    } else {
      setPizzaMalzeme((prev) => prev.filter((malzeme) => malzeme !== value));
      setMalzemeError("");
    }
  };

  const handleLinkClick = (page) => {
    setSecili(page);
  };
  useEffect(() => {
    setSecili("/secenekler");
  }, [formData]);
  const malzemler = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Sogan",
    "Sucuk",
    "Biber",
    "Kabak ",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
    " Sucuk",
  ];

  const boyutlar = ["Küçük", "Orta", "Büyük"];
  const kalınlık = ["İnce Hamur", "Kalın Hamur", "Ekstra İnce Hamur"];

  const handleArttırClick = () => {
    setCount((event) => event + 1);
    setToplamTutar((prevFiyat) => prevFiyat + 85);
  };
  const handleAzaltClick = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
    setToplamTutar((prevFiyat) => prevFiyat - 85);
  };

  useEffect(() => {
    if (pizzaMalzeme.length < 4) {
      setMalzemeError("Lütfen en az 4 malzeme seçin 🍕");
    } else if (pizzaMalzeme.length >= 10) {
      setMalzemeError("10 malzemeden fazla seçemezsiniz 🍕");
    } else {
      setMalzemeError("");
    }
  }, [pizzaMalzeme]);

  useEffect(() => {
    if (!pizzaBoyut) {
      setBoyutError("Lütfen pizzanız için bir boy seçiniz");
    } else {
      setBoyutError("");
    }
  }, [pizzaBoyut]);
  useEffect(() => {
    if (!pizzaKalinlik) {
      setKalınlıkError("Lütfen hamur tipini seçiniz");
    } else {
      setKalınlıkError("");
    }
  }, [pizzaKalinlik]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length < 3) {
      setIsımError("Lütfen en az üç karakter giriniz");
    } else {
      setIsımError("");
    }
  };
  const isFormValid = () => {
    return (
      pizzaMalzeme.length > 4 &&
      pizzaMalzeme.length > 10 &&
      ınputValue.length > 3 &&
      pizzaBoyut &&
      pizzaKalinlik
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="back-wrapper">
        <div className="siparis-alt">
          <img src="/src/assets/form-banner.png" />
          <nav className="nav-links">
            <Link
              to="/"
              className={secili === "/" ? "active" : ""}
              onClick={() => handleLinkClick}
            >
              Anasayfa
            </Link>
            <span>-</span>
            <Link
              to="/secenekler"
              className={secili === "/secenekler" ? "active" : ""}
              onClick={() => handleLinkClick}
            >
              Sipariş Oluştur
            </Link>
          </nav>

          <div>
            <h1>Position Absolute Acı Pizza</h1>
          </div>
          <div className="pizza-info">
            <h3>85₺</h3>
            <p>4.9</p>
            <p>(200)</p>
          </div>
          <div className="main-p">
            <p>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
        </div>
      </div>

      <div className="siparis-form">
        <FormGroup className="first-secim">
          <div>
            <Label tag={"h5"}>Boyut Seç*</Label> <br />
            {boyutlar.map((boyut, index) => (
              <Label className="boy" key={index} htmlFor={boyut}>
                <Input
                  name="boyut"
                  type="radio"
                  key={boyut}
                  value={boyut}
                  onChange={(event) => handlePizaBoyutChange(event, index)}
                />
                <span>{boyut}</span>
              </Label>
            ))}
            {!pizzaBoyut && <div className="error-message">{boyutError}</div>}
          </div>
          <div>
            <Label tag={"h5"}> Kalınlık Seç*</Label> <br />
            <Input
              type="select"
              value={pizzaKalinlik}
              onChange={handlePizzaKalinlikChange}
            >
              <option value="" disabled>
                Hamur Kalınlığı
              </option>
              {kalınlık.map((size, index) => (
                <option value={size} key={index}>
                  {size}
                </option>
              ))}
            </Input>
            {!pizzaKalinlik && (
              <div className="error-message">{kalınlıkError}</div>
            )}
          </div>
        </FormGroup>
        <div>
          <h4>Ek Malzemeler</h4>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        {malzemeError && <div className="error-message">{malzemeError}</div>}
        <FormGroup className="malzemos">
          {malzemler.map((malzeme, index) => (
            <Label className="malzem" key={index} htmlFor={malzeme}>
              <Input
                type="checkbox"
                id={malzeme}
                value={malzeme}
                onChange={(event) => handleMalzemeChange(event, index)}
                checked={pizzaMalzeme.includes(malzeme)}
              />
              <span className="input-label">{malzeme}</span>
            </Label>
          ))}
        </FormGroup>
        <FormGroup>
          <Label tag={"h5"}>İsim Giriniz</Label>
          <Label htmlFor="isim"></Label>
          <Input onChange={handleInputChange} />
          {isimError && <div className="error-message">{isimError}</div>}
        </FormGroup>

        <FormGroup>
          <Label tag={"h5"}>Sipariş Notu</Label>
          <Label htmlFor="not">
            <Input
              className="siparis-info"
              type="textArea"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={siparisNotu}
            ></Input>
          </Label>
        </FormGroup>
        <FormGroup>
          <Button className="artıButon" onClick={handleArttırClick}>
            +
          </Button>{" "}
          {count}{" "}
          <Button
            className="eksiButon"
            onClick={handleAzaltClick}
            disabled={count === 0}
          >
            {" "}
            -
          </Button>
        </FormGroup>

        <Container>
          <Row>
            <Col sm="12">
              <div className="total">
                <h4>Sipariş Toplamı</h4>
                <p>Seçimler: {pizzaMalzeme.length * malzemeSec}₺</p>
                <p className="toplam-tutar">
                  Toplam: {toplamTutar + pizzaMalzeme.length * malzemeSec}₺
                </p>
                <Button
                  className="siparis-ver"
                  onClick={handelSiparisClick}
                  disabled={isFormValid()}
                >
                  Sipariş Ver
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </form>
  );
}
