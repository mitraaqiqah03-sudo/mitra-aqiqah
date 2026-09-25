export default function Location() {
  return (
    <section className="section location-section">
      <div className="section-label">LOKASI</div>

      <h2>Kami ada di sini.</h2>

      <p className="section-intro">
        Mitra Aqiqah melayani Jabodetabek. Untuk kunjungan langsung, sebaiknya
        konfirmasi terlebih dahulu melalui WhatsApp.
      </p>

      <div className="location-box">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4084997653154!2d106.6903926!3d-6.209729599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9904f3fe995%3A0x8a7bd4f98ac66a9a!2sMitra%20Aqiqah!5e0!3m2!1sen!2sid!4v1787457475979!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Lokasi Mitra Aqiqah"
          />
        </div>

        <div className="location-info">
          <div className="location-info-label">MITRA AQIQAH</div>

          <h3>Datang langsung ke lokasi kami.</h3>

          <p>
            Gg. Kelurahan Blok C.67 RT 05/01, Neroktog, Pinang, Kota Tangerang.
          </p>

          <a
            href="https://share.google/lHFYvfwUwKKvBMnrm"
            target="_blank"
            rel="noopener noreferrer"
            className="location-map-button"
          >
            Buka di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
