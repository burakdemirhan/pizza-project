import "./Footer.css"

export default function Footer(){
 


    return(
        <footer>
         <div className="footer-content">
         <div className="footer-first">
         <h1 className="footer-title">Teknolojik <br /> Yemekler</h1>
            <div className="footer-item">
         
            <img src="/src/assets/icon-1.png" alt="adres"/>
           <p>341 Londonderry Road, <br />
           Istanbul Türkiye</p>
           </div>
           <div className="footer-item">
           <img src="/src/assets/icon-2.png" alt="mail" />
           <p>aciktim@teknolojikyemekler.com</p>
           </div>
           <div className="footer-item">
           <img src="/src/assets/icon-3.png" alt="telefon" />
           <p>+90 216 123 45 67</p>
           </div>
         </div>
         <div className="footer-second">
         <p>Hot Menu</p>
       
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz  Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
        
    
         </div>
         <div className="footer-third">
            <p>Instagram</p>
             <div className="img-first">

             <img src="/src/assets/li-0.png" />
            <img src="/src/assets/li-1.png" />
            <img src="/src/assets/li-2.png" />

             </div>
            <div className="img-second">
            <img src="/src/assets/li-3.png" />
            <img src="/src/assets/li-4.png" />
            <img src="/src/assets/li-5.png" />

         
            </div>
            </div>
           
         </div>
         <div className="son">
            <p>© 2023 Teknolojik Yemekler.</p>
            <i class="fa fa-twitter"></i>
         </div>
         
        </footer>
    )
}