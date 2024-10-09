
import "./Anasayfa.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
export default function Anasayfa() {
    const history = useHistory()
    const HandleClickButton = () => {
        history.push("/secenekler")

    }
   

    return (
        <div className="first-page">
             <p className="kod-pizza">KOD ACIKTIRIR <br /> PİZZA, DOYURUR</p>
            <button className="aciktim-button" onClick={HandleClickButton} >ACIKTIM</button>
        </div>
        
    )
       
    
}