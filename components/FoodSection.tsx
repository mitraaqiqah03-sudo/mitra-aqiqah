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
        <div className="food-placeholder">Foto sate</div>
        <div className="food-placeholder">Foto gulai</div>
        <div className="food-placeholder">Foto semur</div>
        <div className="food-placeholder">Foto tongseng</div>
        <div className="food-placeholder">Foto nasi box</div>
        <div className="food-placeholder">Foto nasi kebuli</div>
      </div>

      <p className="food-note">
        Terdapat berbagai pilihan menu dan olahan. Menu lainnya dapat dikonsultasikan dengan admin.
      </p>
    </section>
  );
}