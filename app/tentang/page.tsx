import "./tentang.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function Tentang() {
  
  return (
    <main className="tentang-page">
     <Header />

      <section className="about-page">
        <div className="section-label">CERITA MITRA AQIQAH</div>

        <h1>Berawal dari niat sederhana untuk membantu.</h1>

        <p className="about-lead">
          Mitra Aqiqah berawal dari keinginan untuk membantu lebih banyak
          keluarga dalam menjalankan salah satu sunnah dengan lebih mudah.
        </p>

        <div className="about-story">
          <h2>Awalnya bukan dari sebuah rencana bisnis.</h2>

          <p>
            Pada awalnya, ada seorang murid ngaji yang meminta bantuan
            untuk memasakkan aqiqah anaknya. Saat itu, menyelenggarakan
            aqiqah masih terasa cukup ribet. Mulai dari mencari kambing,
            menyiapkan masakan, sampai mengurus kebutuhan untuk dibagikan
            kepada keluarga dan orang lain.
          </p>

          <p>
            Setelah pesanan pertama selesai, ternyata banyak yang
            memberikan tanggapan baik. Masakannya disukai, dan semakin
            banyak orang yang kemudian meminta bantuan untuk menyiapkan
            aqiqah mereka.
          </p>

          <p>
            Dari situlah muncul keyakinan bahwa hal sederhana ini bisa
            menjadi sesuatu yang lebih besar: membantu keluarga
            menjalankan sunnah tanpa harus merasa terlalu repot
            mempersiapkannya sendiri.
          </p>

          <h2>Ingin membantu lebih banyak keluarga.</h2>

          <p>
            Mitra Aqiqah kemudian dirintis dengan tujuan yang sederhana:
            membuat aqiqah lebih mudah dijangkau dan lebih mudah
            diselenggarakan.
          </p>

          <p>
            Kami menjaga harga tetap terjangkau agar semakin banyak
            keluarga yang bisa melaksanakan aqiqah. Dalam prosesnya,
            kami juga bekerja sama dengan kandang untuk mendapatkan
            kambing yang sesuai dengan kebutuhan aqiqah.
          </p>

          <p>
            Bagi kami, aqiqah bukan sekadar pesanan makanan. Ada niat
            baik dan ibadah yang ingin ditunaikan di balik setiap
            pesanan. Karena itu kami ingin menjadi bagian yang membantu
            keluarga mewujudkannya dengan lebih mudah.
          </p>

          <div className="about-closing">
            <strong>Mudah dipesan, amanah disajikan.</strong>

            <p>
              Semoga setiap pesanan yang kami siapkan dapat menjadi
              bagian dari kebaikan untuk keluarga Anda.
            </p>
          </div>
        </div>

        <a className="whatsapp-button about-button" href="/#tentang">
          Kembali ke Beranda
        </a>
      </section>

      <Footer />
    </main>
  );
}