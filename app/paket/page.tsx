const formatPrice = (price: number) => {
  const rounded = Math.floor(price / 50000) * 50000;
  return "Rp" + rounded.toLocaleString("id-ID");
};

const kambing = [
  { type: "A", sate: 180, gulai: 50, price: 1400000 },
  { type: "B", sate: 230, gulai: 60, price: 1500000 },
  { type: "C", sate: 280, gulai: 70, price: 1650000 },
  { type: "D", sate: 330, gulai: 80, price: 1850000 },
  { type: "E", sate: 380, gulai: 90, price: 2050000 },
  { type: "F", sate: 430, gulai: 100, price: 2300000 },
  { type: "G", sate: 480, gulai: 110, price: 2500000 },
];

const nasiPutih1 = {
  Ekonomis: [1835000, 2050000, 2280000, 2560000, 2890000, 3220000, 3600000, 4060000],
  Spesial: [1955000, 2200000, 2460000, 2770000, 3130000, 3490000, 3900000, 4420000],
  Premium: [2075000, 2350000, 2640000, 2980000, 3370000, 3760000, 4200000, 4780000],
  Mewah: [2275000, 2600000, 2940000, 3330000, 3770000, 4210000, 4700000, 5380000],
};

const nasiPutih2 = {
  Ekonomis: [3710000, 3940000, 4170000, 4300000, 5190000],
  Spesial: [3920000, 4180000, 4440000, 4600000, 5580000],
  Premium: [4130000, 4420000, 4710000, 4900000, 5970000],
  Mewah: [4480000, 4820000, 5160000, 5400000, 6620000],
};

const kebuli1 = {
  Ekonomis: [2155000, 2450000, 2760000, 3120000, 3530000, 3940000, 4400000, 5020000],
  Spesial: [2275000, 2600000, 2940000, 3330000, 3770000, 4210000, 4700000, 5380000],
  Premium: [2395000, 2750000, 3120000, 3540000, 4010000, 4480000, 5000000, 5740000],
  Mewah: [2595000, 3000000, 3420000, 3890000, 4410000, 4930000, 5500000, 6340000],
};

const kebuli2 = {
  Ekonomis: [4200000, 4500000, 4800000, 5000000, 6100000],
  Spesial: [4410000, 4740000, 5070000, 5300000, 6490000],
  Premium: [4620000, 4980000, 5340000, 5600000, 6880000],
  Mewah: [4970000, 5380000, 5790000, 6100000, 7530000],
};

const porsi1 = [40, 50, 60, 70, 80, 90, 100, 120];
const porsi2 = [70, 80, 90, 100, 130];

export default function Paket() {
  return (
    <main>
      <header>
        <div>
          <img
            src="/logo-mitra-aqiqah.png"
            alt="Mitra Aqiqah"
            className="logo-image"
          />
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="/paket">Paket & Harga</a>
          <a href="/#faq">FAQ</a>
          <a href="/#tentang">Tentang</a>
        </nav>
      </header>

      <section className="page-hero">
        <div className="section-label">PAKET AQIQAH</div>

        <h1>
          Pilih paket yang
          <br />
          sesuai kebutuhan.
        </h1>

        <p>
          Mau kambing saja, nasi putih, atau nasi kebuli?
          Pilih sesuai kebutuhan acara kamu.
        </p>
      </section>

      <section className="package-page">

        <div className="section-label">01 — KAMBING SAJA</div>

        <h2>Kambing tanpa paket nasi</h2>

        <p className="section-description">
          Bisa pesan kambing saja untuk dibungkus, prasmanan,
          atau diolah sesuai kebutuhan.
        </p>

        <div className="kambing-grid">
          {kambing.map((item) => (
            <article className="kambing-card" key={item.type}>
              <div className="package-code">TIPE {item.type}</div>

              <h3>Kambing {item.type}</h3>

              <p>
                Sate {item.sate} tusuk
                <br />
                Gulai {item.gulai} porsi
              </p>

              <strong>{formatPrice(item.price)}</strong>
              <small> / ekor</small>
            </article>
          ))}
        </div>

        <div className="section-label package-label">
          02 — PAKET NASI PUTIH
        </div>

        <div className="package-explanation">
  <h2>Pilih paket sesuai kebutuhan</h2>
  <p>
    Setiap paket sudah dilengkapi nasi putih, kambing aqiqah olahan daging,
    olahan tulang & jeroan), serta pelengkap lainnya.
    Perbedaan setiap paket terletak pada tambahan lauknya.
  </p>
</div>
        <div className="package-levels">
        <div className="level-card">
  <div className="level-card-photo">
    <img
      src="/nasi-ekonomis.png"
      alt="Paket Ekonomis nasi putih"
    />
  </div>

  <span>A</span>
  <h3>Ekonomis</h3>
  <p>
    Nasi putih, olahan daging, olahan tulang & jeroan,
    acar, pisang, kerupuk, dan air mineral.
  </p>
</div>

  <div className="level-card">
  <div className="level-card-photo">
  <img src="/nasi-spesial.png" alt="Paket Spesial nasi putih" />
</div>
    <span>B</span>
    <h3>Spesial</h3>
    <p>
      Semua isi Ekonomis + kentang balado.
    </p>
  </div>

  <div className="level-card">
  <div className="level-card-photo">
  <img src="/nasi-premium.png" alt="Paket Premium nasi putih" />
</div>
    <span>C</span>
    <h3>Premium</h3>
    <p>
      Semua isi Spesial + telur.
    </p>
  </div>

  <div className="level-card">
  <div className="level-card-photo">
  <img src="/nasi-mewah.png" alt="Paket Mewah nasi putih" />
</div>
    <span>D</span>
    <h3>Mewah</h3>
    <p>
      Semua isi Spesial + ayam potong 8.
    </p>
  </div>
  
</div>
<div className="portion-note">
  <span className="package-code">PILIHAN PORSI</span>

  <h3>1 ekor atau 2 ekor?</h3>

  <p>
  Pilih 1 atau 2 ekor, lalu tentukan jumlah porsi
          dan tingkat paket yang kamu inginkan.
  </p>

  <p>
  paket kambing 2 ekor sate 5 tusuk per porsi,
  paket kambing 1 ekor sate 4 tusuk per porsi
  </p>
        </div>

        <h3 className="subheading">1 Ekor</h3>

        <div className="price-table-wrapper">
          <table className="price-table">
            <thead>
              <tr>
                <th>Paket</th>
                {porsi1.map((porsi) => (
                  <th key={porsi}>{porsi}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Object.entries(nasiPutih1).map(([paket, prices]) => (
                <tr key={paket}>
                  <td>{paket}</td>

                  {prices.map((price, index) => (
                    <td key={index}>{formatPrice(price)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="subheading">2 Ekor</h3>

        <div className="price-table-wrapper">
          <table className="price-table">
            <thead>
              <tr>
                <th>Paket</th>
                {porsi2.map((porsi) => (
                  <th key={porsi}>{porsi}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Object.entries(nasiPutih2).map(([paket, prices]) => (
                <tr key={paket}>
                  <td>{paket}</td>

                  {prices.map((price, index) => (
                    <td key={index}>{formatPrice(price)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section-label package-label">
          03 — PAKET NASI KEBULI
        </div>

  
        <div className="package-explanation kebuli-explanation">
  
  <h2>Nasi kebuli untuk pilihan rasa yang berbeda</h2>
  <p>
    Nasi kebuli menjadi pilihan bagi keluarga yang ingin
    menyajikan aqiqah dengan cita rasa rempah yang lebih
    khas. Tersedia pilihan paket Ekonomis sampai Mewah
    dengan isi yang disesuaikan pada masing-masing paket.
  </p>
  <p>
      Nasi kebuli menjadi pilihan bagi keluarga yang ingin
      menyajikan aqiqah dengan cita rasa rempah yang khas.
      Tersedia pilihan Ekonomis, Spesial, Premium, dan Mewah.
    </p>
  </div>

  <div className="kebuli-photo">
    <img
      src="/nasi-kebuli.png"
      alt="Paket nasi kebuli Mitra Aqiqah"
    />

</div>
<div className="package-levels">

  <div className="level-card">
    <div className="level-card-content">
      <span>Paket A</span>
      <h3>Ekonomis</h3>
      <p>
        Paket kebuli dengan isi lengkap untuk kebutuhan aqiqah.
      </p>

      <ul className="package-contents">
        <li>Nasi kebuli</li>
        <li>Olahan daging</li>
        <li>Olahan tulang & jeroan</li>
        <li>Acar</li>
        <li>Pisang</li>
        <li>Kerupuk</li>
        <li>Air mineral</li>
      </ul>
    </div>
  </div>

  <div className="level-card">
    <div className="level-card-content">
      <span>Paket B</span>
      <h3>Spesial</h3>
      <p>
        Paket kebuli dengan tambahan kentang balado.
      </p>

      <ul className="package-contents">
        <li>Nasi kebuli</li>
        <li>Olahan daging</li>
        <li>Olahan tulang & jeroan</li>
        <li>Acar</li>
        <li>Pisang</li>
        <li>Kerupuk</li>
        <li>Air mineral</li>
        <li>Kentang balado</li>
      </ul>
    </div>
  </div>

  <div className="level-card">
    <div className="level-card-content">
      <span>Paket C</span>
      <h3>Premium</h3>
      <p>
        Paket kebuli dengan tambahan kentang balado dan telur.
      </p>

      <ul className="package-contents">
        <li>Nasi kebuli</li>
        <li>Olahan daging</li>
        <li>Olahan tulang & jeroan</li>
        <li>Acar</li>
        <li>Pisang</li>
        <li>Kerupuk</li>
        <li>Air mineral</li>
        <li>Kentang balado</li>
        <li>Telur</li>
      </ul>
    </div>
  </div>

  <div className="level-card">
    <div className="level-card-content">
      <span>Paket D</span>
      <h3>Mewah</h3>
      <p>
        Paket kebuli dengan tambahan kentang balado dan ayam potong 8.
      </p>

      <ul className="package-contents">
        <li>Nasi kebuli</li>
        <li>Olahan daging</li>
        <li>Olahan tulang & jeroan</li>
        <li>Acar</li>
        <li>Pisang</li>
        <li>Kerupuk</li>
        <li>Air mineral</li>
        <li>Kentang balado</li>
        <li>Ayam potong 8</li>
      </ul>
    </div>
  </div>

</div>

        <p className="section-description">
          Semua paket kebuli sudah termasuk olahan kambing aqiqah
          dan pelengkap sesuai tingkat paket.
        </p>

        <h3 className="subheading">1 Ekor</h3>

        <div className="price-table-wrapper">
          <table className="price-table">
            <thead>
              <tr>
                <th>Paket</th>
                {porsi1.map((porsi) => (
                  <th key={porsi}>{porsi}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Object.entries(kebuli1).map(([paket, prices]) => (
                <tr key={paket}>
                  <td>{paket}</td>

                  {prices.map((price, index) => (
                    <td key={index}>{formatPrice(price)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="subheading">2 Ekor</h3>

        <div className="price-table-wrapper">
          <table className="price-table">
            <thead>
              <tr>
                <th>Paket</th>
                {porsi2.map((porsi) => (
                  <th key={porsi}>{porsi}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Object.entries(kebuli2).map(([paket, prices]) => (
                <tr key={paket}>
                  <td>{paket}</td>

                  {prices.map((price, index) => (
                    <td key={index}>{formatPrice(price)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <section className="single-box-section">
  <div className="section-label">NASI KOTAK SATUAN</div>

  <h2>Nasi kotak untuk berbagai kebutuhan.</h2>

  <p className="single-box-intro">
    Tidak mengambil paket aqiqah? Tetap bisa pesan nasi kotak
    untuk acara keluarga, pengajian, syukuran, kantor, dan kebutuhan lainnya.
  </p>

  <div className="single-box-grid">
    <article className="single-box-card">
      <span className="box-label">A</span>
      <p>Nasi, acar, pisang, air mineral gelas, & kerupuk</p>
      <strong>Rp13.000</strong>
    </article>

    <article className="single-box-card">
      <span className="box-label">B</span>
      <p>Nasi, acar, pisang, kerupuk, & kentang balado</p>
      <strong>Rp16.000</strong>
    </article>

    <article className="single-box-card">
      <span className="box-label">C</span>
      <p>Nasi, acar, pisang, kerupuk, kentang balado, & telur</p>
      <strong>Rp19.000</strong>
    </article>

    <article className="single-box-card">
      <span className="box-label">D</span>
      <p>Nasi, acar, pisang, kerupuk, kentang balado, & ayam potong 8</p>
      <strong>Rp24.000</strong>
    </article>

    <article className="single-box-card">
      <span className="box-label">E</span>
      <p>Nasi, acar, pisang, kerupuk, telur, & ayam potong 8</p>
      <strong>Rp25.000</strong>
    </article>

    <article className="single-box-card">
      <span className="box-label">F</span>
      <p>Nasi, acar, pisang, kerupuk, kentang balado, telur, & ayam potong 8</p>
      <strong>Rp27.000</strong>
    </article>

    <article className="single-box-card">
      <span className="box-label">G</span>
      <p>Nasi, pisang, kerupuk, ayam potong 4 atau daging, sambal, & lalap</p>
      <strong>Rp28.000</strong>
    </article>

    <article className="single-box-card">
      <span className="box-label">H</span>
      <p>Nasi, pisang, kerupuk, kentang balado, ayam potong 4 atau daging, sambal, & lalap</p>
      <strong>Rp31.000</strong>
    </article>

    <article className="single-box-card">
      <span className="box-label">I</span>
      <p>Nasi, pisang, kerupuk, kentang balado, telur, ayam potong 4 atau daging, sambal, & lalap</p>
      <strong>Rp34.000</strong>
    </article>
  </div>

  <div className="rice-upgrade">
    <span>UPGRADE NASI</span>
    <p>
      Ganti nasi putih menjadi <strong>nasi kebuli</strong> atau
      <strong> nasi bakar</strong>
    </p>
    <strong className="upgrade-price">+ Rp8.000</strong>
    <small>
      Nasi kebuli dengan irisan daging · Nasi bakar dengan isian teri atau ayam suwir
    </small>
  </div>
</section>
        <section className="package-note">
          <h2>Butuh yang beda?</h2>

          <p>
            Jumlah nasi bisa disesuaikan. Mau kambing saja,
            tambah nasi, prasmanan, atau punya kebutuhan khusus?
            Konsultasikan dengan admin.
          </p>

          <a
            className="whatsapp-button"
            href="https://wa.me/6285102473444?text=Halo%20Mitra%20Aqiqah%2C%20saya%20mau%20konsultasi%20paket%20aqiqah."
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi via WhatsApp
          </a>
        </section>
        <footer>
  <div>
    <strong>Mitra Aqiqah</strong>
    <p>Mudah Dipesan, Amanah Disajikan.</p>
  </div>

  <div className="footer-links">
    <a href="/paket">Paket & Harga</a>
    <a href="#faq">FAQ</a>
    <a href="#tentang">Tentang</a>

    <a
      href="https://wa.me/6285102473444"
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
    </a>

    <a
      href="https://instagram.com/mitra_aqiqah"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>

    <a
      href="https://www.tiktok.com/@mitra_aqiqah"
      target="_blank"
      rel="noopener noreferrer"
    >
      TikTok
    </a>

    <a
      href="https://share.google/iJsA8TAK1xvVCYAhv"
      target="_blank"
      rel="noopener noreferrer"
    >
      Lokasi
    </a>
  </div>

  <p className="copyright">
    © 2026 Mitra Aqiqah. Melayani Jabodetabek.
  </p>
</footer>
      </section>
    </main>
  );
}