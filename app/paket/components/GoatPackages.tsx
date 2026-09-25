const kambing = [
  { type: "A", sate: 180, gulai: 50, price: 1400000 },
  { type: "B", sate: 230, gulai: 60, price: 1500000 },
  { type: "C", sate: 280, gulai: 70, price: 1650000 },
  { type: "D", sate: 330, gulai: 80, price: 1850000 },
  { type: "E", sate: 380, gulai: 90, price: 2050000 },
  { type: "F", sate: 430, gulai: 100, price: 2300000 },
  { type: "G", sate: 480, gulai: 110, price: 2500000 },
];

const formatPrice = (price: number) => {
  const rounded = Math.floor(price / 50000) * 50000;
  return "Rp" + rounded.toLocaleString("id-ID");
};

export default function GoatPackages() {
  return (
    <section className="package-section">
      <div className="section-label">01 — KAMBING SAJA</div>

      <div className="package-section-heading">
        <div>
          <h2>Kambing tanpa paket nasi</h2>
          <p>
            Pilih kambing saja untuk dibungkus, prasmanan,
            atau diolah sesuai kebutuhan.
          </p>
        </div>
      </div>

      <div className="goat-grid">
        {kambing.map((item) => (
          <article className="goat-card" key={item.type}>
            <div className="goat-card-top">
              <span>TIPE {item.type}</span>
            </div>

            <h3>Kambing {item.type}</h3>

            <div className="goat-detail">
              <div>
                <span>Sate</span>
                <strong>{item.sate} tusuk</strong>
              </div>

              <div>
                <span>Gulai</span>
                <strong>{item.gulai} porsi</strong>
              </div>
            </div>

            <div className="goat-price">
              <span>Mulai dari</span>
              <strong>{formatPrice(item.price)}</strong>
              <small>/ ekor</small>
            </div>
                    </article>
        ))}
      </div>
      <div className="goat-benefits">
  <div className="goat-benefit">
    <strong>Acar</strong>
    <span>Sudah termasuk</span>
  </div>

  <div className="goat-benefit">
    <strong>Bungkus Per Porsi</strong>
    <span>Bisa Request Bungkus per porsi</span>
  </div>

  <div className="goat-benefit">
    <strong>Pilih Menu Olahan</strong>
    <span>Menu masakan sesuai kebutuhan dan selera</span>
  </div>

  <div className="goat-benefit">
    <strong>Kartu Ucapan</strong>
    <span>Sudah termasuk dan bisa disertakan</span>
  </div>

  <div className="goat-benefit">
    <strong>Souvenir</strong>
    <span>Free Souvenir Sertifikat, Mug, Boneka Domba, dan lainnya</span>
  </div>

  <div className="goat-benefit">
    <strong>Gratis Ongkir</strong>
    <span>Jabodetabek</span>
  </div>
</div>
    </section>
  );
}