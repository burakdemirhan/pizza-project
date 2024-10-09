import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./secenekler.css"
import React, { useState } from "react"
import Siparis from "./Siparis"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
export default function Secenekler(props) {
    const {pizzaKalinlik, setPizzaKalinlik, pizzaBoyut, setPizzaBoyut, pizzaMalzeme, setPizzaMalzeme} = props;
   
    
      const history = useHistory()

  const handeSiparisClick = () => {
    history.push("/siparis")
  }
  const handlePizaBoyutChange = (event) => {
    event.preventDefault()
    setPizzaBoyut(event.target.value)
  }
  const handlePizzaKalinlikChange = (event) => {
    setPizzaKalinlik(event.target.value)
  }
  const handleMalzemeChange = (event , index) => {
    const {value, checked} = event.target
    if(checked) {
        setPizzaMalzeme((prev) => [...prev, value])
        
    } else {
        setPizzaMalzeme((prev)  => prev.filter((malzeme) => malzeme !== value))
    }
  }
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
  


    return (
        <div>
            <h1>Position Absolute Acı Pizza</h1>
            <h3>85.50₺</h3>
            <p>4.9</p>
            <p>(200)</p>
            <div>
            <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>
        <FormGroup>
        <Label tag={"h5"}>Boyut Seç*</Label>
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
        </FormGroup>

        <FormGroup>
        <Label tag={"h5"}> Kalınlık Seç*</Label>
        <Input type="select"  value={pizzaKalinlik} onChange={handlePizzaKalinlikChange}>
        <option value="Kalın Kenar">Kalın Kenar</option>
        <option value="İnce Kenar">İnce Kenar</option>
        <option value="Ekstra İnce Kenar">Ekstra İnce Kenar</option>
        </Input>
        </FormGroup>
        <div>
            <h4>Ek Malzemeler</h4>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        <FormGroup className="malzemos">
            {malzemler.map((malzeme, index) => (
            <Label key={index} htmlFor={malzeme}>
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
                <Input type="textArea" placeholder="Siparişine eklemek istediğin bir not var mı?"></Input>
            </Label>
        </FormGroup>
        <FormGroup>
          <Input className="artıButon" type="button"></Input>
        </FormGroup>


        </div>
   
    


)
}