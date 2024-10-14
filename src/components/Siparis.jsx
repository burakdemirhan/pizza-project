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
      <div class="line">-</div>

      <div>
        <h2>Position Absolute Acı Pizza</h2>
        <p> Boyut: {pizzaBoyut}</p>
        <p>Hamur: {pizzaKalinlik} </p>
        <p>Ek Malzemeler: {pizzaMalzeme.join(", ")} </p>
      </div>
      <div>
        <h1>Sipariş Toplamı</h1>
        <p>Secimler: {pizzaMalzeme.length * malzemeSec}₺ </p>
        <p>Toplam: {toplamTutar + pizzaMalzeme.length * malzemeSec}</p>
      </div>
    </div>
  );
}
