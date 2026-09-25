import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">AQIQAH JABODETABEK</p>

        <h1>
          Mudah Dipesan,
          <br />
          <span>Amanah Disajikan.</span>
        </h1>

        <p className="hero-description">
          Aqiqah keluarga sejak 2010. Pilih paket sesuai kebutuhan,
          kami bantu siapkan dengan rasa yang nikmat dan proses yang mudah.
        </p>

        <div className="hero-actions">
          <a href="#paket" className="btn btn-primary">
            Lihat Paket
          </a>

          <a
            href="https://wa.me/6285102473444?text=Halo%20Mitra%20Aqiqah%2C%20saya%20mau%20tanya%20paket%20aqiqah."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
          <Image
            src="/images/logo-mitra-aqiqah.png"
            alt="Mitra Aqiqah"
            width={600}
            height={450}
            priority
          />
        </div>
      </div>
    </section>
  );
}