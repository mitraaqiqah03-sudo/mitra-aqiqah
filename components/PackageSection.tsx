export default function PackageSection() {
  return (
    <section id="paket" className="section package-section">
      <div className="section-label">PAKET & HARGA</div>

      <h2>Pilih sesuai kebutuhan keluarga.</h2>

      <p className="section-intro">
        Mulai dari kambing saja sampai paket nasi box dan nasi kebuli.
        Pilih yang paling sesuai, lalu kami bantu proses selanjutnya.
      </p>

      <div className="package-grid">
        <article className="package-card">
          <span className="package-number">01</span>
          <h3>Kambing Saja</h3>
          <p>
            Pilihan kambing dengan olahan sate dan gulai untuk kebutuhan
            aqiqah keluarga. Harga Mulai dari 1,4 Juta.
          </p>
          <a href="/paket">Lihat paket →</a>
        </article>

        <article className="package-card featured">
          <span className="package-number">02</span>
          <h3>Paket Nasi Box</h3>
          <p>
            Paket aqiqah lengkap dengan nasi box dan pilihan jumlah porsi
            sesuai kebutuhan termasuk kambing aqiqah. Harga mulai 1,8 Juta.
          </p>
          <a href="/paket">Lihat paket →</a>
        </article>

        <article className="package-card">
          <span className="package-number">03</span>
          <h3>Paket Nasi Kebuli</h3>
          <p>
            Pilihan nasi kebuli termasuk kambing aqiqah. harga mulai dari 2,1 juta.
          </p>
          <a href="/paket">Lihat paket →</a>
        </article>
      </div>

      </section>
  );
}