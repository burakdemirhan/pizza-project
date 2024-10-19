import "./siparis.css";

export default function Siparis(props) {
  const { pizzaBoyut, pizzaKalinlik, pizzaMalzeme, malzemeSec, toplamTutar } =
    props;
  return (
    <div className="siparis-page">
      <h1 className="yol">lezzetin yolda</h1>
      <h1 class="tebrik">
        <br />
        SİPARİŞ ALINDI
      </h1>

      <hr />

      <h2>Position Absolute Acı Pizza</h2>
      <div className="inc">
        <p> Boyut: {pizzaBoyut}</p>
        <p>Hamur: {pizzaKalinlik} </p>
        <p>Ek Malzemeler: {pizzaMalzeme.join(", ")} </p>
      </div>
      <div className="toplamm">
        <p>Sipariş Toplamı</p>
        <p>
          Secimler: <span class="killa"></span>{" "}
          {pizzaMalzeme.length * malzemeSec}₺{" "}
        </p>
        <p>
          Toplam: <span class="ceza"></span>{" "}
          {toplamTutar + pizzaMalzeme.length * malzemeSec}₺
        </p>
      </div>
    </div>
  );
}
