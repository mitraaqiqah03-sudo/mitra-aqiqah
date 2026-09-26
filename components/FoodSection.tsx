export default function FoodSection() {
  return (
    <section className="section food-section">
      <div className="section-label">MASAKAN</div>

      <h2>Masakan yang kami sajikan.</h2>

      <p className="section-intro">
        Aqiqah bukan cuma tentang memenuhi kebutuhan ibadah.
        Kami juga ingin makanan yang diterima keluarga benar-benar
        enak dan dinikmati.
      </p>

      <div className="food-grid">
  <div className="food-card">
    <img src="/sate.png" alt="Sate kambing" />
  </div>

  <div className="food-card">
    <img src="/gulai.png" alt="Gulai kambing" />
  </div>

  <div className="food-card">
    <img src="/semur.png" alt="Semur kambing" />
  </div>

  <div className="food-card">
    <img src="/tongseng.png" alt="Tongseng kambing" />
  </div>

</div>

      <p className="food-note">
        Terdapat berbagai pilihan menu dan olahan. Menu lainnya dapat dikonsultasikan dengan admin.
      </p>
    </section>
  );
}
