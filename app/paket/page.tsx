import "./package.css";
import Header from "../../components/Header";
import GoatPackages from "./components/GoatPackages";
import RicePackages from "./components/RicePackages";
import PackageCTA from "./components/PackageCTA";
import SatuanMenu from "./components/SatuanMenu";
import Footer from "../../components/Footer";
export default function Paket() {
  return (
    <>
      <Header active="paket" />

      <main className="package-page-new">
        <section className="package-intro">
          <div className="section-label">PAKET AQIQAH</div>

          <h1>
            Pilih paket yang
            <br />
            sesuai kebutuhan.
          </h1>

          <p>
            Mau kambing saja, nasi putih, atau nasi kebuli?
            Pilih sesuai kebutuhan acara keluarga.
          </p>
        </section>

        <GoatPackages />

        <RicePackages />

        <SatuanMenu />

        <PackageCTA />
        <section className="order-final-cta">
  <div className="section-label">
    SUDAH MENEMUKAN PAKET?
  </div>

  <h2>
    Sudah menemukan paket yang cocok?
  </h2>

  <p>
    Isi formulir pemesanan sekarang agar kami bisa
    menyiapkan aqiqah sesuai kebutuhan dan tanggal acara.
  </p>

  <a
    href="/pesan"
    className="order-form-button"
  >
    Isi Formulir Pemesanan Sekarang
  </a>
  </section>

<a
  href="https://wa.me/6285102473444"
  target="_blank"
  rel="noopener noreferrer"
  className="package-whatsapp"
>
  <span className="package-whatsapp-icon">
    💬
  </span>

  <span className="package-whatsapp-text">
    <small>Butuh bantuan?</small>
    <strong>Konsultasi WhatsApp</strong>
  </span>
</a>

</main>

<Footer />
    </>
  );
}