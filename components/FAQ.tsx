const faqItems = [
    {
      question: "Berapa harga paket Mitra Aqiqah?",
      answer:
        "Harga paket aqiqah dapat dilihat pada halaman daftar paket. Harga sudah disesuaikan dengan pilihan kambing dan paket yang tersedia. Harga kambing saja mulai dari 1,4 juta dan harga paket nasi kotak sudah temasuk kambing aqiqah mulai dari 1,8 juta. Jika masih bingung memilih paket, silakan konsultasikan dengan admin melalui WhatsApp.",
    },
  
    {
      question: "Apakah ada biaya tambahan di luar harga paket?",
      answer:
        "Tidak ada biaya tambahan. Harga paket sudah mencakup kebutuhan yang tertera pada detail paket. Untuk wilayah Jabodetabek juga sudah termasuk gratis ongkir.",
    },
  
    {
      question: "Apakah ada biaya ongkir?",
      answer:
        "Gratis ongkir untuk wilayah Jabodetabek. Untuk pengiriman ke luar Jabodetabek, silakan konsultasikan terlebih dahulu dengan admin.",
    },
  
    {
      question: "Mitra Aqiqah berlokasi di mana?",
      answer:
        "Mitra Aqiqah berlokasi di Pinang, Kota Tangerang, dan melayani pesanan untuk wilayah Jabodetabek. Lokasi kami juga dapat dilihat melalui Google Maps.",
    },
  
    {
      question: "Apakah bisa datang langsung ke Mitra Aqiqah?",
      answer:
        "Bisa. Jika ingin datang langsung, kami menyarankan untuk konfirmasi terlebih dahulu melalui WhatsApp agar kami dapat memastikan ada yang bisa melayani. Anda juga dapat mencicipi masakan secara langsung sesuai ketersediaan pada saat kunjungan.",
    },
  
    {
      question: "Apakah bisa melihat kambing sebelum memesan?",
      answer:
        "Bisa. Jika ingin melihat kambing secara langsung, silakan konfirmasikan terlebih dahulu dengan admin melalui WhatsApp agar kami dapat mengatur waktu kunjungan.",
    },
  
    {
      question: "Apakah kambing yang digunakan memenuhi syarat aqiqah?",
      answer:
        "Iya. Kami memastikan kambing yang digunakan memenuhi syarat aqiqah sesuai syariat, termasuk kondisi dan kelayakannya.",
    },
  
    {
      question: "Kambingnya jantan atau betina?",
      answer:
        "Bisa pilih kambing jantan atau betina tanpa biaya tambahan. Pilihan dapat disampaikan saat melakukan pemesanan.",
    },
  
    {
      question: "Apakah proses aqiqah mendapatkan dokumentasi?",
      answer:
        "Tentu. Setiap pesanan mendapatkan dokumentasi foto dan video sebagai bukti pelaksanaan aqiqah, sehingga keluarga tetap dapat melihat prosesnya meskipun tidak datang langsung.",
    },
  
    {
      question: "Apakah bisa melihat proses penyembelihan secara langsung atau lewat video call?",
      answer:
        "Bisa. Jika ingin datang langsung ke lokasi atau menyaksikan proses melalui video call, silakan konfirmasikan terlebih dahulu dengan admin. Dokumentasi foto dan video juga diberikan kepada pelanggan.",
    },
  
    {
      question: "Apa saja souvenir yang didapat?",
      answer:
        "Tersedia beberapa pilihan souvenir seperti kartu ucapan yang dapat di-request atau di-custom, sertifikat aqiqah berbingkai, mug dengan foto pilihan sendiri, boneka domba, dan totebag. Pilihan souvenir menyesuaikan paket yang dipilih.",
    },
  
    {
      question: "Bisa test food sebelum pesan?",
      answer:
        "Bisa. Kami menyediakan free test food untuk calon pelanggan. Untuk jadwal dan ketersediaannya, silakan konfirmasikan terlebih dahulu melalui WhatsApp.",
    },
  
    {
      question: "Bisa pilih menu olahan sendiri?",
      answer:
        "Bisa. Kami menyediakan beberapa pilihan olahan daging serta olahan tulang dan jeroan yang dapat dipilih sesuai menu yang tersedia.",
    },
  
    {
      question: "Bagaimana cara memesan aqiqah di Mitra Aqiqah?",
      answer:
        "Pemesanan bisa dilakukan sepenuhnya melalui WhatsApp, mulai dari konsultasi, memilih paket, menentukan menu, tanggal dan lokasi, hingga konfirmasi pesanan. Jika lebih nyaman datang langsung, Anda juga dipersilakan berkunjung. Kami menyarankan untuk konfirmasi terlebih dahulu melalui WhatsApp sebelum datang.",
    },
  
    {
      question: "Bagaimana cara pembayarannya?",
      answer:
        "Pembayaran dapat dilakukan melalui transfer maupun cash bayar di tempat. Tersedia pilihan pembayaran dengan DP atau tanpa DP sesuai kesepakatan dengan admin.",
    },
    {
      question: "Bisa pesan untuk disalurkan atau dikirim ke panti?",
      answer:
        "Bisa. Kami juga memiliki panti yang biasa menjadi tujuan penyaluran. Setelah penyerahan, keluarga akan mendapatkan dokumentasi sebagai bukti penyaluran.",
    },
    {
      question: "Kenapa harga Mitra Aqiqah bisa lebih murah?",
      answer:
        "Karena kami memiliki dapur sendiri dan bekerja sama dengan peternak kambing. Proses yang lebih terintegrasi membantu kami menyediakan aqiqah dengan harga yang tetap terjangkau sekaligus memudahkan keluarga dalam menjalankan sunnah aqiqah.",
    },
  ];

export default function FAQPage() {
  return (
    <main>
      <section id="faq" className="faq-section">
        <div className="section-label">PERTANYAAN</div>

        <h1>
          Yang sering
          <br />
          ditanyakan.
        </h1>

        <p>
          Seputar kambing, menu, pemesanan, pengiriman, dan hal-hal lain
          yang perlu kamu ketahui sebelum memesan aqiqah di Mitra Aqiqah.
        </p>
      </section>

      <section className="faq-page">
        <div className="faq-page-list">
          {faqItems.map((item, index) => (
            <details className="faq-page-item" key={item.question}>
              <summary>
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="faq-question">
                  {item.question}
                </span>

                <span className="faq-icon">+</span>
              </summary>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

        </main>
  );
}