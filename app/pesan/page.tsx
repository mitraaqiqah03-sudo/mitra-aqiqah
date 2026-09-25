"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./pesan.css";

type OrderItem = {
  id: number;
  category: "Paket Aqiqah" | "Nasi Kotak Satuan" | "Kambing Saja";
  nasi?: "Nasi Putih" | "Nasi Kebuli";
  paket?: "Ekonomis" | "Spesial" | "Premium" | "Mewah";
  ekor?: 1 | 2;
  porsi?: number;
  boxType?: string;
  kambingType?: string;
  jumlah?: number;
  menuDaging?: string;
  menuTulang?: string;
  menuTambahan?: string;
  price: number;
};

const porsi1 = [40, 50, 60, 70, 80, 90, 100, 120];
const porsi2 = [70, 80, 90, 100, 130];

const nasiPutih1: Record<string, number[]> = {
  Ekonomis: [1835000, 2050000, 2280000, 2560000, 2890000, 3220000, 3600000, 4060000],
  Spesial: [1955000, 2200000, 2460000, 2770000, 3130000, 3490000, 3900000, 4420000],
  Premium: [2075000, 2350000, 2640000, 2980000, 3370000, 3760000, 4200000, 4780000],
  Mewah: [2275000, 2600000, 2940000, 3330000, 3770000, 4210000, 4700000, 5380000],
};

const nasiPutih2: Record<string, number[]> = {
  Ekonomis: [3710000, 3940000, 4170000, 4300000, 5190000],
  Spesial: [3920000, 4180000, 4440000, 4600000, 5580000],
  Premium: [4130000, 4420000, 4710000, 4900000, 5970000],
  Mewah: [4480000, 4820000, 5160000, 5400000, 6620000],
};

const kebuli1: Record<string, number[]> = {
  Ekonomis: [2155000, 2450000, 2760000, 3120000, 3530000, 3940000, 4400000, 5020000],
  Spesial: [2275000, 2600000, 2940000, 3330000, 3770000, 4210000, 4700000, 5380000],
  Premium: [2395000, 2750000, 3120000, 3540000, 4010000, 4480000, 5000000, 5740000],
  Mewah: [2595000, 3000000, 3420000, 3890000, 4410000, 4930000, 5500000, 6340000],
};

const kebuli2: Record<string, number[]> = {
  Ekonomis: [4200000, 4500000, 4800000, 5000000, 6100000],
  Spesial: [4410000, 4740000, 5070000, 5300000, 6490000],
  Premium: [4620000, 4980000, 5340000, 5600000, 6880000],
  Mewah: [4970000, 5380000, 5790000, 6100000, 7530000],
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

const nasiKotak = [
  { type: "A", price: 13000, desc: "Nasi, pisang, air mineral gelas, & kerupuk" },
  { type: "B", price: 16000, desc: "Nasi, pisang, kerupuk, & kentang balado" },
  { type: "C", price: 19000, desc: "Nasi, pisang, kerupuk, kentang balado, & telur" },
  { type: "D", price: 24000, desc: "Nasi, pisang, kerupuk, kentang balado, & ayam potong 8" },
  { type: "E", price: 25000, desc: "Nasi, pisang, kerupuk, telur, & ayam potong 8" },
  { type: "F", price: 27000, desc: "Nasi, pisang, kerupuk, kentang balado, telur, & ayam potong 8" },
  { type: "G", price: 28000, desc: "Nasi, pisang, kerupuk, ayam potong 4 atau daging, sambal, & lalap" },
  { type: "H", price: 31000, desc: "Nasi, pisang, kerupuk, kentang balado, ayam potong 4 atau daging, sambal, & lalap" },
  { type: "I", price: 34000, desc: "Nasi, pisang, kerupuk, kentang balado, telur, ayam potong 4 atau daging, sambal, & lalap" },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function Pesan() {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [nextId, setNextId] = useState(1);

  const [category, setCategory] = useState("");
  const [kota, setKota] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const kecamatanByKota: Record<string, string[]> = {
    "Jakarta Selatan": [
      "Cilandak",
      "Jagakarsa",
      "Kebayoran Baru",
      "Kebayoran Lama",
      "Mampang Prapatan",
      "Pancoran",
      "Pasar Minggu",
      "Pesanggrahan",
      "Setiabudi",
      "Tebet",
    ],
    "Jakarta Timur": [
      "Cakung",
      "Cipayung",
      "Ciracas",
      "Duren Sawit",
      "Jatinegara",
      "Kramat Jati",
      "Makasar",
      "Matraman",
      "Pasar Rebo",
      "Pulo Gadung",
    ],
    "Jakarta Pusat": [
      "Cempaka Putih",
      "Gambir",
      "Johar Baru",
      "Kemayoran",
      "Menteng",
      "Sawah Besar",
      "Senen",
      "Tanah Abang",
    ],
    "Jakarta Barat": [
      "Cengkareng",
      "Grogol Petamburan",
      "Kali Deres",
      "Kebon Jeruk",
      "Kembangan",
      "Palmerah",
      "Taman Sari",
      "Tambora",
    ],
    "Jakarta Utara": [
      "Cilincing",
      "Kelapa Gading",
      "Koja",
      "Pademangan",
      "Penjaringan",
      "Tanjung Priok",

    ],
    "Kota Bekasi": [
      "Bekasi Barat",
      "Bekasi Selatan",
      "Bekasi Timur",
      "Bekasi Utara",
      "Bantar Gebang",
      "Jatiasih",
      "Jatisari",
      "Medan Satria",
      "Mustika Jaya",
      "Pondok Gede",
      "Pondok Melati",
      "Rawalumbu",
    ],
    "Kabupaten Bekasi": [
      "Cikarang Barat",
      "Cikarang Pusat",
      "Cikarang Selatan",
      "Cikarang Timur",
      "Cikarang Utara",
      "Tambun Selatan",
      "Tambun Utara",
      "Tarumajaya",
    ],
    "Kota Bogor": [
      "Bogor Barat",
      "Bogor Selatan",
      "Bogor Tengah",
      "Bogor Timur",
      "Bogor Utara",
      "Tanah Sareal",
    ],
    "Kabupaten Bogor": [
      "Cibinong",
      "Cileungsi",
      "Citeureup",
      "Gunung Putri",
      "Jonggol",
      "Parung",
      "Sentul",
    ],
    "Kota Depok": [
      "Beji",
      "Bojongsari",
      "Cilodong",
      "Cimanggis",
      "Cinere",
      "Limo",
      "Pancoran Mas",
      "Sawangan",
      "Sukmajaya",
      "Tapos",
    ],
    "Kota Tangerang": [
      "Batuceper",
      "Benda",
      "Cibodas",
      "Ciledug",
      "Cipondoh",
      "Jatiuwung",
      "Karang Tengah",
      "Karawaci",
      "Larangan",
      "Neglasari",
      "Periuk",
      "Pinang",
      "Tangerang",
    ],
    "Kabupaten Tangerang": [
      "Balaraja",
      "Cikupa",
      "Curug",
      "Kelapa Dua",
      "Pasar Kemis",
      "Rajeg",
      "Sepatan",
      "Tigaraksa",
    ],
    "Kota Tangerang Selatan": [
      "Ciputat",
      "Ciputat Timur",
      "Pamulang",
      "Pondok Aren",
      "Serpong",
      "Serpong Utara",
      "Setu",
    ],
  };
  const kelurahanByKecamatan: Record<string, string[]> = {
    "Cilandak": ["Cilandak Barat", "Cilandak Timur", "Gandaria Selatan", "Lebak Bulus", "Pondok Labu"],
    "Jagakarsa": ["Ciganjur", "Cipedak", "Jagakarsa", "Lenteng Agung", "Srengseng Sawah", "Tanjung Barat"],
    "Kebayoran Baru": ["Cipete Utara", "Gandaria Utara", "Gunung", "Kramat Pela", "Melawai", "Petogogan", "Pulo", "Rawa Barat", "Senayan"],
    "Kebayoran Lama": ["Cipulir", "Grogol Selatan", "Grogol Utara", "Kebayoran Lama Selatan", "Kebayoran Lama Utara", "Pondok Pinang"],
    "Mampang Prapatan": ["Bangka", "Kuningan Barat", "Mampang Prapatan", "Pela Mampang", "Tegal Parang"],
    "Pancoran": ["Cikoko", "Duren Tiga", "Kalibata", "Pancoran", "Pengadegan", "Rawajati"],
    "Pasar Minggu": ["Cilandak Timur", "Jati Padang", "Kebagusan", "Pasar Minggu", "Pejaten Barat", "Pejaten Timur", "Ragunan"],
    "Pesanggrahan": ["Bintaro", "Pesanggrahan", "Petukangan Selatan", "Petukangan Utara", "Ulujami"],
    "Setiabudi": ["Guntur", "Karet", "Karet Kuningan", "Karet Semanggi", "Menteng Atas", "Pasar Manggis", "Setiabudi"],
    "Tebet": ["Bukit Duri", "Kebon Baru", "Manggarai", "Manggarai Selatan", "Menteng Dalam", "Tebet Barat", "Tebet Timur"],
  
    "Bekasi Barat": ["Bintara", "Bintara Jaya", "Jakasampurna", "Kota Baru", "Kranji"],
    "Bekasi Selatan": ["Jaka Mulya", "Jaka Setia", "Kayuringin Jaya", "Marga Jaya", "Pekayon Jaya"],
    "Bekasi Timur": ["Aren Jaya", "Bekasi Jaya", "Duren Jaya", "Margahayu"],
    "Bekasi Utara": ["Harapan Baru", "Harapan Jaya", "Kaliabang Tengah", "Marga Mulya", "Perwira", "Teluk Pucung"],
  
    "Beji": ["Beji", "Beji Timur", "Kemiri Muka", "Kukusan", "Pondok Cina", "Tanah Baru"],
    "Pancoran Mas": ["Depok", "Depok Jaya", "Mampang", "Pancoran Mas", "Rangkapan Jaya", "Rangkapan Jaya Baru"],
    "Sukmajaya": ["Abadijaya", "Bakti Jaya", "Cisalak", "Cisalak Pasar", "Mekarjaya", "Sukmajaya"],
  
    "Ciputat": ["Ciputat", "Jombang", "Sawah Baru", "Sawah Lama", "Serua"],
    "Pamulang": ["Bambu Apus", "Benda Baru", "Kedaung", "Pamulang Barat", "Pamulang Timur", "Pondok Benda", "Pondok Cabe Ilir", "Pondok Cabe Udik"],
    "Serpong": ["Buaran", "Ciater", "Cilenggang", "Lengkong Gudang", "Lengkong Gudang Timur", "Rawa Buntu", "Serpong"],
    "Pondok Aren": ["Jurumudi Baru", "Parigi", "Parigi Baru", "Pondok Aren", "Pondok Betung", "Pondok Jaya", "Pondok Kacang Barat", "Pondok Kacang Timur"],
  
    "Tangerang": ["Babakan", "Buaran Indah", "Cikokol", "Kelapa Indah", "Sukasari", "Sukarasa", "Tanah Tingal"],
    "Cipondoh": ["Cipondoh", "Cipondoh Indah", "Gondrong", "Gondrong Petir", "Kenanga", "Ketapang", "Poris Plawad", "Poris Plawad Indah", "Poris Plawad Utara"],
    "Karawaci": ["Bojong Jaya", "Bugel", "Cimone", "Cimone Jaya", "Gerendeng", "Karawaci", "Karawaci Baru", "Koang Jaya", "Margasari", "Nambo Jaya", "Nusa Jaya", "Pabuaran", "Sukajadi"],
  };
  const [menuDaging, setMenuDaging] = useState("");
  const [menuTulang, setMenuTulang] = useState("");
  const [menuTambahan, setMenuTambahan] = useState("");
  
  const [nasi, setNasi] = useState<"Nasi Putih" | "Nasi Kebuli">("Nasi Putih");
  const [paket, setPaket] = useState("Ekonomis");
  const isiPaket: Record<string, string[]> = { Ekonomis: [ "Nasi", "Oalahan daging", "Olahan tulang jeroan", "Acar", "Pisang", "Kerupuk", "Air mineral", ], Spesial: [ "Nasi", "Oalahan daging", "Olahan tulang jeroan", "Acar", "Pisang", "Kerupuk", "Air mineral", "Kentang balado", ], Premium: [ "Nasi", "Oalahan daging", "Olahan tulang jeroan", "Acar", "Pisang", "Kerupuk", "Air mineral", "Kentang balado", "Telur", ], Mewah: [ "Nasi", "Oalahan daging", "Olahan tulang jeroan", "Acar", "Pisang", "Kerupuk", "Air mineral", "Kentang balado", "Ayam potong 8", ], };
  const [ekor, setEkor] = useState<1 | 2>(1);
  const [porsi, setPorsi] = useState("");
  const nasiKotak = [
    {
      type: "A",
      price: 13000,
      desc: "Nasi, pisang, air mineral gelas, & kerupuk",
    },
    {
      type: "B",
      price: 16000,
      desc: "Nasi,pisang, kerupuk, & kentang balado",
    },
    {
      type: "C",
      price: 19000,
      desc: "Nasi, pisang, kerupuk, kentang balado, & telur",
    },
    {
      type: "D",
      price: 24000,
      desc: "Nasi, pisang, kerupuk, kentang balado, & ayam potong 8",
    },
    {
      type: "E",
      price: 25000,
      desc: "Nasi, pisang, kerupuk, telur, & ayam potong 8",
    },
    {
      type: "F",
      price: 27000,
      desc: "Nasi, pisang, kerupuk, kentang balado, telur, & ayam potong 8",
    },
    {
      type: "G",
      price: 28000,
      desc: "Nasi, pisang, kerupuk, ayam potong 4 atau daging, sambal, & lalap",
    },
    {
      type: "H",
      price: 31000,
      desc: "Nasi, pisang, kerupuk, kentang balado, ayam potong 4 atau daging, sambal, & lalap",
    },
    {
      type: "I",
      price: 34000,
      desc: "Nasi, pisang, kerupuk, kentang balado, telur, ayam potong 4 atau daging, sambal, & lalap",
    },
  ];
  const [boxType, setBoxType] = useState("A");
const [boxJumlah, setBoxJumlah] = useState("");
  const [kambingType, setKambingType] = useState("A");
  const [kambingJumlah, setKambingJumlah] = useState("1");
  const pilihanMenuDaging = [
    "Sate",
    "Semur",
    "Rendang",
    "Teriyaki",
    "Rica-rica",
    "Kambing Guling",
    "Gulai",
    "Sop",
    "Tongseng",
  ];
  
  const pilihanMenuTulang = [
    "Gulai",
    "Sop",
    "Tongseng",
  ];
  const [promoChecked, setPromoChecked] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);

  function addItem() {
    let item: OrderItem | null = null;

    if (category === "Paket Aqiqah") {
      if (!porsi) return;

      const portions = ekor === 1 ? porsi1 : porsi2;
      const index = portions.indexOf(Number(porsi));

      if (index === -1) return;

      const priceTable =
        nasi === "Nasi Putih"
          ? ekor === 1
            ? nasiPutih1
            : nasiPutih2
          : ekor === 1
            ? kebuli1
            : kebuli2;

      const price = priceTable[paket][index];

      item = {
        id: nextId,
        category: "Paket Aqiqah",
        nasi,
        paket: paket as OrderItem["paket"],
        ekor,
        porsi: Number(porsi),
        menuDaging,
        menuTulang,
        menuTambahan,
        price,
      };
      
      }

    if (category === "Nasi Kotak Satuan") {
      const selected = nasiKotak.find((item) => item.type === boxType);
      const jumlah = Number(boxJumlah);

      if (!selected || !jumlah || jumlah < 1) return;

      item = {
        id: nextId,
        category: "Nasi Kotak Satuan",
        boxType,
        jumlah,
        price: selected.price * jumlah,
      };
    }

    if (category === "Kambing Saja") {
      const selected = kambing.find((item) => item.type === kambingType);
      const jumlah = Number(kambingJumlah);

      if (!selected || !jumlah || jumlah < 1) return;

      item = {
        id: nextId,
        category: "Kambing Saja",
        kambingType,
        jumlah,
        price: selected.price * jumlah,
      };
    }

    if (!item) return;

    setItems((current) => [...current, item!]);
    setNextId((current) => current + 1);
    setPorsi("");
    setBoxJumlah("");
    setKambingJumlah("1");
  }

  function removeItem(id: number) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  const total = items.reduce((sum, item) => sum + item.price, 0);

  function sendToWhatsApp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (items.length === 0) {
      alert("Silakan tambahkan minimal satu pesanan.");
      return;
    }

    const form = new FormData(event.currentTarget);

    const nama = form.get("nama")?.toString() || "-";
    const telepon = form.get("telepon")?.toString() || "-";
    const pembayaran = form.get("pembayaran")?.toString() || "-";

    const alamat = form.get("alamat")?.toString() || "-";
    const tanggal = form.get("tanggal")?.toString() || "-";
    const waktu = form.get("waktu")?.toString() || "-";

    const namaAnak = form.get("namaAnak")?.toString() || "-";
    const tanggalLahir = form.get("tanggalLahir")?.toString() || "-";
    const namaAyah = form.get("namaAyah")?.toString() || "-";
    const namaIbu = form.get("namaIbu")?.toString() || "-";

    const catatan = form.get("catatan")?.toString() || "-";

    const daftarPesanan = items
      .map((item, index) => {
        if (item.category === "Paket Aqiqah") {
          return `${index + 1}. ${item.paket} - ${item.nasi}
   ${item.ekor} ekor, ${item.porsi} porsi
   ${formatPrice(item.price)}`;
        }

        if (item.category === "Nasi Kotak Satuan") {
          return `${index + 1}. Nasi Kotak Satuan Tipe ${item.boxType}
   ${item.jumlah} porsi
   ${formatPrice(item.price)}`;
        }

        return `${index + 1}. Kambing Tipe ${item.kambingType}
   ${item.jumlah} ekor
   ${formatPrice(item.price)}`;
      })
      .join("\n\n");


      const message = `*FORMULIR PEMESANAN MITRA AQIQAH*
      
      *1. DATA PEMESAN*
      • Atas nama: ${nama}
      • Nomor WhatsApp: ${telepon}
      • Metode pembayaran: ${pembayaran}
      
      *2. DATA PENGIRIMAN*
• Alamat: ${alamat}, ${kelurahan}, ${kecamatan}, ${kota}
• Tanggal pengiriman: ${tanggal}
• Waktu tiba: ${waktu}

Setelah mengirim pesanan ini, saya akan mengirimkan share location melalui WhatsApp kepada admin.
      
      *3. DATA AQIQAH*
      • Nama anak: ${namaAnak}
      • Nama ayah: ${namaAyah}
      • Nama ibu: ${namaIbu}
      • Tanggal lahir: ${tanggalLahir}
      
      *4. PESANAN*
      
      ${daftarPesanan}
      
      *TOTAL SEMENTARA*
      ${formatPrice(total)}
      
      *5. CATATAN*
      ${catatan}
      
      Pesanan ini masih menunggu konfirmasi admin.
      Total akhir, ketersediaan, promo, dan pembayaran akan dikonfirmasi melalui WhatsApp.
      
      Jika pembayaran menggunakan transfer, nomor rekening dan nominal pembayaran akan diberikan setelah pesanan dikonfirmasi.
      
      Mohon admin membantu mengecek pesanan ini.`;

    const url =
      "https://wa.me/6285102473444?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");
  }

  const currentPorsi = ekor === 1 ? porsi1 : porsi2;

  return (
    <>
      <main className="pesan-page">
        <Header active="pesan" />
  
      <section className="order-page">
        <div className="section-label">PEMESANAN</div>

        <h1>Pesan aqiqah dengan lebih mudah.</h1>

        <p className="order-intro">
          Pilih pesanan yang kamu butuhkan. Kamu bisa menambahkan
          lebih dari satu jenis pesanan dalam satu pemesanan.
        </p>

        <form className="order-form" onSubmit={sendToWhatsApp}>
          <div className="form-section">
            <h2>1. Pesanan</h2>

            <label>
              Jenis pesanan
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="">Pilih jenis pesanan</option>
                <option value="Paket Aqiqah">Paket Aqiqah</option>
                <option value="Nasi Kotak Satuan">
                  Nasi Kotak Satuan
                </option>
                <option value="Kambing Saja">Kambing Saja</option>
              </select>
            </label>

            {category === "Paket Aqiqah" && (
              <>
                <label>
                  Jenis nasi
                  <select
                    value={nasi}
                    onChange={(event) =>
                      setNasi(event.target.value as "Nasi Putih" | "Nasi Kebuli")
                    }
                  >
                    <option value="Nasi Putih">Nasi Putih</option>
                    <option value="Nasi Kebuli">Nasi Kebuli</option>
                  </select>
                </label>

                <label>
                  Paket
                  <select
                    value={paket}
                    onChange={(event) => setPaket(event.target.value)}
                  >
                    <option value="Ekonomis">Ekonomis</option>
                    <option value="Spesial">Spesial</option>
                    <option value="Premium">Premium</option>
                    <option value="Mewah">Mewah</option>
                  </select>
                </label>
                <div className="package-contents"> <strong>Isi Paket {paket}</strong> <p> {isiPaket[paket].map((isi, index) => ( <span key={isi}> {isi === "Nasi" ? nasi : isi} {index < isiPaket[paket].length - 1 ? ", " : "."} </span> ))} </p> </div>
                <label>
                  Jumlah kambing
                  <select
                    value={ekor}
                    onChange={(event) =>
                      setEkor(Number(event.target.value) as 1 | 2)
                    }
                  >
                    <option value={1}>1 ekor</option>
                    <option value={2}>2 ekor</option>
                  </select>
                </label>

                <label>
                  Jumlah porsi
                  <select
                    value={porsi}
                    onChange={(event) => setPorsi(event.target.value)}
                  >
                    <option value="">Pilih jumlah porsi</option>
                    {currentPorsi.map((jumlah) => (
                      <option key={jumlah} value={jumlah}>
                        {jumlah} porsi
                      </option>
                    ))}
                  </select>
                </label>
                
                <label>
  Olahan daging
  <select
    value={menuDaging}
    onChange={(event) => setMenuDaging(event.target.value)}
  >
    <option value="">Pilih olahan daging</option>

    {pilihanMenuDaging.map((menu) => (
      <option key={menu} value={menu}>
        {menu}
      </option>
    ))}
  </select>
</label>

<label>
  Olahan tulang & jeroan
  <select
    value={menuTulang}
    onChange={(event) => setMenuTulang(event.target.value)}
  >
    <option value="">Pilih olahan tulang & jeroan</option>

    {pilihanMenuTulang.map((menu) => (
      <option key={menu} value={menu}>
        {menu}
      </option>
    ))}
  </select>
</label>

{paket === "Premium" && (
  <label>
    Olahan telur
    <select
      value={menuTambahan}
      onChange={(event) => setMenuTambahan(event.target.value)}
    >
      <option value="">Pilih olahan telur</option>
      <option value="Telur Balado">Telur Balado</option>
      <option value="Telur Pindang">Telur Pindang</option>
    </select>
  </label>
)}

{paket === "Mewah" && (
  <label>
    Olahan ayam
    <select
      value={menuTambahan}
      onChange={(event) => setMenuTambahan(event.target.value)}
    >
      <option value="">Pilih olahan ayam</option>
      <option value="Ayam Goreng">Ayam Goreng</option>
      <option value="Ayam Bakar">Ayam Bakar</option>
    </select>
  </label>
)}
              </>
            )}

{category === "Nasi Kotak Satuan" && (
  <>
    <label>
      Tipe nasi kotak
      <select
        value={boxType}
        onChange={(event) => setBoxType(event.target.value)}
      >
        {nasiKotak.map((item) => (
          <option key={item.type} value={item.type}>
            Tipe {item.type} — {formatPrice(item.price)}
          </option>
        ))}
      </select>

      <p className="form-note">
        {nasiKotak.find((item) => item.type === boxType)?.desc}
      </p>
    </label>

                <p className="form-note">
                  Kamu bisa mengetik jumlah porsi sesuai kebutuhan.
                </p>

                <label>
                  Jumlah porsi
                  <input
                    type="number"
                    min="1"
                    value={boxJumlah}
                    onChange={(event) => setBoxJumlah(event.target.value)}
                    placeholder="Contoh: 35"
                  />
                </label>
              </>
            )}

            {category === "Kambing Saja" && (
              <>
                <label>
                  Tipe kambing
                  <select
                    value={kambingType}
                    onChange={(event) => setKambingType(event.target.value)}
                  >
                    {kambing.map((item) => (
                      <option key={item.type} value={item.type}>
                        Tipe {item.type} — {formatPrice(item.price)} / ekor
                      </option>
                    ))}
                  </select>
                  <p className="form-note">
  {(() => {
    const selected = kambing.find(
      (item) => item.type === kambingType
    );

    if (!selected) return "";

    return `Isi: ${selected.sate} tusuk sate & ${selected.gulai} porsi gulai.`;
  })()}
</p>
                </label>

                <label>
                  Jumlah kambing
                  <input
                    type="number"
                    min="1"
                    value={kambingJumlah}
                    onChange={(event) =>
                      setKambingJumlah(event.target.value)
                    }
                  />
                </label>
              </>
            )}

            {category && (
              <button
                type="button"
                className="add-order-button"
                onClick={addItem}
              >
                + Tambah Pesanan
              </button>
            )}

            {items.length > 0 && (
              <div className="order-summary">
                <h3>Pesanan kamu</h3>

                {items.map((item, index) => (
                  <div className="order-item" key={item.id}>
                    <div>
                      <strong>
                        {index + 1}.{" "}
                        {item.category === "Paket Aqiqah"
                          ? `${item.paket} — ${item.nasi}`
                          : item.category === "Nasi Kotak Satuan"
                            ? `Nasi Kotak Tipe ${item.boxType}`
                            : `Kambing Tipe ${item.kambingType}`}
                      </strong>

                      <p>
  {item.category === "Paket Aqiqah" ? (
    <>
      {item.ekor} ekor · {item.porsi} porsi
      <br />
      Daging: {item.menuDaging || "-"}
      <br />
      Tulang & jeroan: {item.menuTulang || "-"}
      {item.menuTambahan && (
        <>
          <br />
          Tambahan: {item.menuTambahan}
        </>
      )}
    </>
  ) : item.category === "Nasi Kotak Satuan" ? (
    `${item.jumlah} porsi`
  ) : (
    `${item.jumlah} ekor`
  )}
</p>
                    </div>

                    <div>
                      <strong>{formatPrice(item.price)}</strong>

                      <button
                        type="button"
                        className="remove-order"
                        onClick={() => removeItem(item.id)}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}

                <div className="order-total">
                  <span>Total sementara</span>
                  <strong>{formatPrice(total)}</strong>
                </div>
              </div>
            )}
          </div>

          <div className="form-section">
          <div className="form-section">
  <h2>2. Data Pemesan</h2>

  <label>
    Nama pemesan
    <span className="required-label">Wajib</span>
    <input
      name="nama"
      type="text"
      placeholder="Nama lengkap"
      required
    />
  </label>

  <label>
    Nomor WhatsApp / Telepon
    <span className="required-label">Wajib</span>
    <input
      name="telepon"
      type="tel"
      placeholder="Contoh: 081234567890"
      required
    />
    <p className="form-note">
      Nomor yang aktif dan bisa dihubungi admin untuk konfirmasi
      pesanan dan pengiriman.
    </p>
  </label>

  <label>
    Metode pembayaran
    <select name="pembayaran">
      <option value="Cash">Cash</option>
      <option value="Transfer">Transfer</option>
    </select>
  </label>
</div>
  <h2>3. Data Pengiriman</h2>

  <label>
    Kota/Kabupaten
    <span className="required-label">Wajib</span>
    <select
      name="kota"
      value={kota}
      onChange={(event) => {
        setKota(event.target.value);
        setKecamatan("");
        setKelurahan("");
      }}
      required
    >
      <option value="">Pilih kota/kabupaten</option>
      <option value="Jakarta Selatan">Jakarta Selatan</option>
      <option value="Jakarta Timur">Jakarta Timur</option>
      <option value="Jakarta Pusat">Jakarta Pusat</option>
      <option value="Jakarta Barat">Jakarta Barat</option>
      <option value="Jakarta Utara">Jakarta Utara</option>
      <option value="Kota Bekasi">Kota Bekasi</option>
      <option value="Kabupaten Bekasi">Kabupaten Bekasi</option>
      <option value="Kota Bogor">Kota Bogor</option>
      <option value="Kabupaten Bogor">Kabupaten Bogor</option>
      <option value="Kota Depok">Kota Depok</option>
      <option value="Kota Tangerang">Kota Tangerang</option>
      <option value="Kabupaten Tangerang">Kabupaten Tangerang</option>
      <option value="Kota Tangerang Selatan">
        Kota Tangerang Selatan
      </option>
    </select>
  </label>

  <label>
  Kecamatan
  <span className="required-label">Wajib</span>
  <select
  name="kecamatan"
  value={kecamatan}
  onChange={(event) => {
    setKecamatan(event.target.value);
    setKelurahan("");
  }}
  required
>
  <option value="">Pilih kecamatan</option>

  {(kecamatanByKota[kota] || []).map((namaKecamatan) => (
    <option key={namaKecamatan} value={namaKecamatan}>
      {namaKecamatan}
    </option>
  ))}
</select>
</label>

<label>
  Kelurahan
  <span className="optional-label">Opsional</span>
  <select
  name="kelurahan"
  value={kelurahan}
  onChange={(event) => setKelurahan(event.target.value)}
>
  <option value="">Pilih kelurahan</option>

  {(kelurahanByKecamatan[kecamatan] || []).map((namaKelurahan) => (
    <option key={namaKelurahan} value={namaKelurahan}>
      {namaKelurahan}
    </option>
  ))}
</select>
</label>
<label>
  Alamat detail
  <span className="required-label">Wajib</span>
  <textarea
    name="alamat"
    rows={4}
    placeholder="Nama jalan, nomor rumah, RT/RW, patokan, dan detail lainnya"
    required
  />
</label>

<p className="form-note">
  Tulis alamat selengkap mungkin agar pengantaran lebih mudah. 
  Setelah mengirim pesanan melalui WhatsApp, silakan kirim
  share location melalui WhatsApp kepada admin agar lokasi
  pengantaran dapat dipastikan.
</p>

  <label>
    Tanggal pengiriman
    <span className="required-label">Wajib</span>
    <input name="tanggal" type="date" required />
  </label>

  <label>
    Waktu tiba
    <span className="required-label">Wajib</span>
    <input name="waktu" type="time" required />
  </label>

  <p className="form-note">
    Disarankan makanan tiba 1–2 jam sebelum acara.
    Setelah melakukan pemesanan, silakan sertakan
    share location kepada admin.
  </p>
</div>

          <div className="form-section">
            <h2>4. Data Aqiqah</h2>

            <label>
              Nama yang diaqiqahkan
              <span className="required-label">Wajib</span>
              <input
                name="namaAnak"
                type="text"
                placeholder="Nama anak"
                required
              />
            </label>

            <label>
              Tanggal lahir
              <span className="optional-label">Opsional</span>
              <input name="tanggalLahir" type="date" />
            </label>

            <label>
              Nama Ayah
              <span className="required-label">Wajib</span>
<input
  name="namaAyah"
  type="text"
  placeholder="Nama ayah"
  required
/>
            </label>

            <label>
              Nama Ibu
              <span className="optional-label">Opsional</span>
              <input name="namaIbu" type="text" placeholder="Nama ibu" />
            </label>

            <p className="form-note">
  Data tambahan bersifat opsional, misalnya foto anak untuk kartu
  ucapan atau sertifikat, tulisan/nama yang ingin dicetak pada kartu
  ucapan, serta request khusus lainnya.
</p>
          </div>

          <div className="form-section">
            <h2>5. Catatan</h2>

            <label>
              Catatan khusus
              <span className="optional-label">Opsional</span>
              <textarea
                name="catatan"
                rows={5}
                placeholder="Request kartu ucapan, suvenir, atau kebutuhan lainnya"
              />
            </label>
          </div>

          <div className="final-summary">
            <span>Total sementara</span>
            <strong>{formatPrice(total)}</strong>

          </div>

          <button className="submit-order" type="submit">
            Kirim Pesanan ke WhatsApp →
          </button>
        </form>
      </section>
      <a
        href="https://wa.me/6285102473444"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Hubungi Mitra Aqiqah melalui WhatsApp"
      >
        <span className="floating-whatsapp-icon">☏</span>

        <span className="floating-whatsapp-text">
          <small>Butuh bantuan?</small>
          <strong>Chat WhatsApp</strong>
        </span>
      </a>
    </main>

    <Footer />
  </>
);
}