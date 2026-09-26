const paketSatuan = [
  {
    type: 'A',
    price: 13000,
    desc: 'Nasi, pisang, air mineral gelas, & kerupuk',
  },
  {
    type: 'B',
    price: 16000,
    desc: 'Nasi, pisang, kerupuk, & kentang balado',
  },
  {
    type: 'C',
    price: 19000,
    desc: 'Nasi, pisang, kerupuk, kentang balado, & telur',
  },
  {
    type: 'D',
    price: 24000,
    desc: 'Nasi, pisang, kerupuk, kentang balado, & ayam potong 8',
  },
  {
    type: 'E',
    price: 25000,
    desc: 'Nasi, pisang, kerupuk, telur, & ayam potong 8',
  },
  {
    type: 'F',
    price: 27000,
    desc: 'Nasi, pisang, kerupuk, kentang balado, telur, & ayam potong 8',
  },
  {
    type: 'G',
    price: 28000,
    desc: 'Nasi, pisang, kerupuk, ayam potong 4 atau daging, sambal, & lalap',
  },
  {
    type: 'H',
    price: 31000,
    desc: 'Nasi, pisang, kerupuk, kentang balado, ayam potong 4 atau daging, sambal, & lalap',
  },
  {
    type: 'I',
    price: 34000,
    desc: 'Nasi, pisang, kerupuk, kentang balado, telur, ayam potong 4 atau daging, sambal, & lalap',
  },
];

const pilihanMenuDaging = [
  { name: 'Sate', image: '/sate.png' },
  { name: 'Semur', image: '/semur.png' },
  { name: 'Rendang', image: '/rendang.png' },
  { name: 'Teriyaki', image: '/teriyaki.png' },
  { name: 'Rica-rica', image: '/rica-rica.png' },
  { name: 'Kambing Guling', image: '/kambing-guling.png' },
];

const pilihanMenuTulang = [
  { name: 'Gulai', image: '/gulai.png' },
  { name: 'Sop', image: '/sop.png' },
  { name: 'Tongseng', image: '/tongseng.png' },
];

export default function SatuanMenu() {
  return (
    <>
      {/* NASI KOTAK SATUAN */}

      <section className="single-box-section">
        <div className="section-label">NASI KOTAK SATUAN</div>

        <h2>Nasi kotak untuk berbagai kebutuhan.</h2>

        <p className="single-box-intro">
          Tidak mengambil paket aqiqah? Tetap bisa pesan nasi kotak untuk acara
          keluarga, pengajian, syukuran, kantor, dan kebutuhan lainnya.
        </p>

        <div className="single-box-grid">
          {paketSatuan.map((item) => (
            <article className="single-box-card" key={item.type}>
              <span className="box-label">{item.type}</span>

              <p>{item.desc}</p>

              <strong>Rp{item.price.toLocaleString('id-ID')}</strong>
            </article>
          ))}
        </div>

        <div className="rice-upgrade">
          <span>UPGRADE NASI</span>

          <p>
            Ganti nasi putih menjadi <strong>nasi kebuli</strong> atau
            <strong> nasi bakar</strong>
          </p>

          <strong className="upgrade-price">+ Rp8.000</strong>

          <small>
            Nasi kebuli dengan irisan daging · Nasi bakar dengan isian teri atau
            ayam suwir
          </small>
        </div>
      </section>

      {/* PILIHAN OLAHAN */}

      <section className="menu-section">
        <div className="section-label">PILIHAN OLAHAN</div>

        <div className="menu-heading">
          <h2>Lengkapi aqiqah dengan olahan favorit keluarga.</h2>

          <p>
            Kamu bisa memilih olahan sesuai selera. Beberapa menu menggunakan
            bagian daging, sementara menu lainnya menggunakan bagian kambing
            bertulang.
          </p>
        </div>

        {/* DAGING */}

        <div className="menu-category">
          <div className="menu-category-heading">
            <span>01</span>

            <div>
              <h3>Olahan daging</h3>

              <p>Pilihan menu yang menggunakan bagian daging kambing.</p>
            </div>
          </div>

          <div className="menu-grid">
            {pilihanMenuDaging.map((menu) => (
              <article className="menu-card" key={menu.name}>
                <img src={menu.image} alt={menu.name} />

                <div className="menu-card-name">{menu.name}</div>
              </article>
            ))}
          </div>
        </div>

        {/* TULANG */}

        <div className="menu-category">
          <div className="menu-category-heading">
            <span>02</span>

            <div>
              <h3>Olahan tulang</h3>

              <p>Pilihan menu yang menggunakan bagian kambing bertulang.</p>
            </div>
          </div>

          <div className="menu-grid menu-grid-small">
            {pilihanMenuTulang.map((menu) => (
              <article className="menu-card" key={menu.name}>
                <img src={menu.image} alt={menu.name} />

                <div className="menu-card-name">{menu.name}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* YANG DIDAPATKAN */}

      <section className="included-section">
        <div className="souvenir-showcase">
          <div className="souvenir-hero-image">
            <img
              src="/souvenir-mitra-aqiqah.png"
              alt="Souvenir Mitra Aqiqah"
            />
          </div>

          <div className="souvenir-description">
            <div className="section-label">YANG DIDAPATKAN</div>

            <h2>Kenang-kenangan untuk keluarga.</h2>

            <p>
              Setiap pemesanan aqiqah mendapatkan souvenir khusus sebagai
              kenang-kenangan untuk keluarga dan si kecil.
            </p>

            <div className="souvenir-items">
              <div className="souvenir-item">
                <span>01</span>

                <div>
                  <strong>Sertifikat aqiqah berbingkai</strong>

                  <p>
                    Sertifikat sebagai kenang-kenangan momen aqiqah si kecil.
                  </p>
                </div>
              </div>

              <div className="souvenir-item">
                <span>02</span>

                <div>
                  <strong>Totebag souvenir</strong>

                  <p>
                    Totebag untuk menyimpan perlengkapan souvenir dari
                    Mitra Aqiqah.
                  </p>
                </div>
              </div>

              <div className="souvenir-item">
                <span>03</span>

                <div>
                  <strong>Boneka domba atau mug foto</strong>

                  <p>
                    Kenang-kenangan khusus yang dapat menjadi bagian dari
                    momen kelahiran si kecil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UNTUK SETIAP PORSI */}

        <div className="included-groups">
          <div className="included-group">
            <div className="included-group-heading">
              <div>
                <h3>Untuk setiap porsi</h3>

                <p>
                  Pelengkap yang disiapkan bersama nasi kotak untuk dibagikan
                  kepada keluarga dan tamu.
                </p>
              </div>
            </div>

            <div className="included-grid">
              <article className="included-card">
                <div className="included-card-number">01</div>

                <h4>Kartu dan buku ucapan</h4>

                <p>
                  Pelengkap ucapan yang disiapkan untuk setiap nasi kotak
                  yang dibagikan.
                </p>
              </article>

              <article className="included-card">
                <div className="included-card-number">02</div>

                <h4>Kantong plastik nasi kotak</h4>

                <p>
                  Kantong plastik disiapkan untuk memudahkan membawa dan
                  membagikan nasi kotak.
                </p>
              </article>
            </div>
          </div>
        </div>

        <p className="included-note">
          Jenis souvenir dapat dikonfirmasi kepada admin saat melakukan
          pemesanan.
        </p>
      </section>
    </>
  );
}
