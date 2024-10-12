import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./secenekler.css"
import React, { useEffect, useState } from "react"
import Siparis from "./Siparis"
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
export default function Secenekler(props) {
    const {pizzaKalinlik, setPizzaKalinlik, pizzaBoyut, setPizzaBoyut, pizzaMalzeme, setPizzaMalzeme, count, setCount, error, setError,
    secili, setSecili} = props;
   
    
      const history = useHistory()

  const handelSiparisClick = (event) => {
    
    if(pizzaMalzeme.length < 4) {
      setError("Lütfen en az 4 malzeme seçin!")
    } else {
      history.push("/siparis")
    }
   
  }
  const handlePizaBoyutChange = (event) => {
    if(pizzaBoyut === null){
      setError("Lütfen pizza için boyut seçin")
    }
    event.preventDefault()
    setPizzaBoyut(event.target.value)
  }
  const handlePizzaKalinlikChange = (event) => {
    setPizzaKalinlik(event.target.value)
   
   
  }
  const handleMalzemeChange = (event , index) => {
    const {value, checked} = event.target
    if(checked && pizzaMalzeme.length < 10) {
      setPizzaMalzeme((prev) => [...prev, value])
      setError("")
    } else if(!checked){
      setPizzaMalzeme((prev)=> prev.filter((malzeme) => malzeme !== value))
      setError("")
    } else if(checked && pizzaMalzeme.length >= 10){
      setError("En fazla 10 ürün seçebilirsiniz")
    }
  }

  const handleLinkClick  = (page) => {
 
 setSecili(page)
  }
  useEffect(() => {
    setSecili("/secenekler")
  }, [])
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

  ]
  const handleArttırClick = (event) => {
    setCount((event) => event + 1 )
  }
  const handleAzaltClick = (event) => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }
  
  const pizzaFiyatı = 85.5
  const malzemeFiyatı = 5
  const toplamTutar = pizzaFiyatı + pizzaMalzeme.length * malzemeFiyatı

    return (
      <form>
        <div className="back-wrapper">
       
          <div className="siparis-alt">
            <img src="/src/assets/form-banner.png" />
         <nav className="nav-links">
          <Link 
          to = "/" 
          className = {secili === "/" ? "active" : "notActive"}
          onClick = { () => handleLinkClick} 
      
          >
            Anasayfa
          
          </Link> 
          <span>-</span>
          <Link
          to = "/secenekler"
          className = {secili === "/secenekler" ? "active" : ""}
          onClick =  { ()=> handleLinkClick} >Sipariş Oluştur</Link>
         </nav>
           
            
            <div>
            <h1>Position Absolute Acı Pizza</h1>
            </div>
            <div className="pizza-info">
           
            <h3>{pizzaFiyatı}₺</h3>
            <p>4.9</p>
            <p>(200)</p>
            </div>
            <div className="main-p">
            <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>
        </div>
      </div>
        
    

        <div className="siparis-form">
        <FormGroup className="first-secim">
          <div>
            
        <Label tag={"h5"}>Boyut Seç*</Label> <br />
        <Label htmlFor="kucuk">
        <Input type="radio"  id= "kucuk"  value= "Küçük" name="Pizza Boyutu" onChange={handlePizaBoyutChange} checked = {pizzaBoyut === "Küçük"} /> Küçük
        </Label>
        <br />
        <Label htmlFor="orta">
        <Input type="radio" id="orta"   value="Orta" name="Pizza Boyutu" onChange={handlePizaBoyutChange} checked = {pizzaBoyut === "Orta"} /> Orta
        </Label>
          <br />
          <Label htmlFor="buyuk">
          <Input type="radio" id="buyuk" value="Büyük" name="Pizza Boyutu" onChange={handlePizaBoyutChange} checked = {pizzaBoyut === "Büyük"} /> Büyük
          </Label>
          </div>
          <div>

        <Label tag={"h5"}> Kalınlık Seç*</Label> <br />
        <Input  className= "kalınlık-secim" type="select"  value={pizzaKalinlik} onChange={handlePizzaKalinlikChange}>
        <option value="Kalın Kenar">Kalın Kenar</option>
        <option value="İnce Kenar">İnce Kenar</option>
        <option value="Ekstra İnce Kenar">Ekstra İnce Kenar</option>
        </Input>
        </div>
        </FormGroup>
        <div>
            <h4>Ek Malzemeler</h4>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        <FormGroup className="malzemos">
            {malzemler.map((malzeme, index) => (
            <Label className="malzem" key={index} htmlFor={malzeme}>
             <Input 
             type="checkbox"
             id={malzeme}
             value={malzeme}
             onChange={(event) => handleMalzemeChange(event, index)}
             checked= {pizzaMalzeme.includes(malzeme)}
             />
              <span className="input-label">{malzeme}</span>

            </Label>
    
            ))}
        </FormGroup>

        <FormGroup>
            <Label tag={"h5"}>Sipariş Notu</Label>
            <Label htmlFor="not">
                <Input  className = "siparis-info"type="textArea" placeholder="Siparişine eklemek istediğin bir not var mı?"></Input>
            </Label>
        </FormGroup>
        <FormGroup>
          <Button  className="artıButon"onClick={handleArttırClick}>+</Button> {count} <Button className="eksiButon" onClick={handleAzaltClick}>-</Button>
        </FormGroup>
       
    <Container>
        <Row>
          <Col sm="12">
            <div className="total">
              <h4>Sipariş Toplamı</h4>
              <p>Seçimler: {pizzaMalzeme.length* malzemeFiyatı}₺</p>
              <p className="toplam-tutar">Toplam: {toplamTutar.toFixed(2)}₺</p>
              <Button className="siparis-ver" onClick={handelSiparisClick}>
              Sipariş Ver
            </Button>
            </div>
          </Col>
        </Row>
        
      </Container>
       </div>
       </form>

     
 
   
    


)
}