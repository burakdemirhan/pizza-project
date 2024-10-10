import "./Footer.css"

export default function Footer(){
 


    return(
        <div className="footer-container">
            
         <div className="footer-first">
         <h1>Teknolojik <br /> Yemekler</h1>
            <img src="/footer/icons/icon-1.png" alt="adres"/>
           <p>341 Londonderry Road, <br />
           Istanbul Türkiye</p>
           <img src="/footer/icons/icon-2.png" alt="mail" />
           <p>aciktim@teknolojikyemekler.com</p>
           <img src="/footer/icons/icon-3.png" alt="telefon" />
           <p>+90 216 123 45 67</p>
         </div>
         <div className="footer-second">
         <h2>Hot Menu</h2>
         <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz  Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
        
         </ul>
    
         </div>
         <div className="footer-third">
            <h2>Instagram</h2>
             <div className="img-first">

             <img src="/footer/insta/li-0.png" />
            <img src="/footer/insta/li-1.png" />
            <img src="/footer/insta/li-2.png" />

             </div>
            <div className="img-second">
            <img src="/footer/insta/li-3.png" />
            <img src="/footer/insta/li-4.png" />
            <img src="/footer/insta/li-5.png" />

            </div>
            
           
         </div>
         <div className="son">
            <p>© 2023 Teknolojik Yemekler.</p>
         </div>
         
        </div>
    )
}