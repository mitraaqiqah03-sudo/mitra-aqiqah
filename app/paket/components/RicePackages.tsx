const nasiPutih1 = {
  Ekonomis: [
    1835000, 2050000, 2280000, 2560000, 2890000, 3220000, 3600000,
    4060000,
  ],
  Spesial: [
    1955000, 2200000, 2460000, 2770000, 3130000, 3490000, 3900000,
    4420000,
  ],
  Premium: [
    2075000, 2350000, 2640000, 2980000, 3370000, 3760000, 4200000,
    4780000,
  ],
  Mewah: [
    2275000, 2600000, 2940000, 3330000, 3770000, 4210000, 4700000,
    5380000,
  ],
};

const nasiPutih2 = {
  Ekonomis: [3710000, 3940000, 4170000, 4300000, 5190000],
  Spesial: [3920000, 4180000, 4440000, 4600000, 5580000],
  Premium: [4130000, 4420000, 4710000, 4900000, 5970000],
  Mewah: [4480000, 4820000, 5160000, 5400000, 6620000],
};

const kebuli1 = {
  Ekonomis: [
    2155000, 2450000, 2760000, 3120000, 3530000, 3940000, 4400000,
    5020000,
  ],
  Spesial: [
    2275000, 2600000, 2940000, 3330000, 3770000, 4210000, 4700000,
    5380000,
  ],
  Premium: [
    2395000, 2750000, 3120000, 3540000, 4010000, 4480000, 5000000,
    5740000,
  ],
  Mewah: [
    2595000, 3000000, 3420000, 3890000, 4410000, 4930000, 5500000,
    6340000,
  ],
};

const kebuli2 = {
  Ekonomis: [4200000, 4500000, 4800000, 5000000, 6100000],
  Spesial: [4410000, 4740000, 5070000, 5300000, 6490000],
  Premium: [4620000, 4980000, 5340000, 5600000, 6880000],
  Mewah: [4970000, 5380000, 5790000, 6100000, 7530000],
};

const porsi1 = [40, 50, 60, 70, 80, 90, 100, 120];

const porsi2 = [70, 80, 90, 100, 130];

const formatPackagePrice = (price: number) => {
  const rounded = Math.floor(price / 50000) * 50000;

  return "Rp" + rounded.toLocaleString("id-ID");
};

type PackageData = Record<string, number[]>;

const packageLevels = [
  {
    code: "A",
    name: "Ekonomis",
    description: "Paket lengkap untuk kebutuhan aqiqah sederhana.",
    image: "/nasi-ekonomis.png",
    items: [
      "Nasi putih",
      "Olahan daging kambing (sate)",
      "Olahan tulang jeroan (Gulai)",
      "Acar",
      "Pisang",
      "Kerupuk",
      "Air mineral",
    ],
  },
  {
    code: "B",
    name: "Spesial",
    description: "Lebih lengkap dengan tambahan lauk pendamping.",
    image: "/nasi-spesial.png",
    items: [
      "Nasi putih",
      "Olahan daging kambing (sate)",
      "Olahan tulang jeroan (Gulai)",
      "Kentang balado",
      "Acar",
      "Pisang",
      "Kerupuk",
      "Air mineral",
    ],
  },
  {
    code: "C",
    name: "Premium",
    description: "Pilihan lebih lengkap untuk acara yang lebih istimewa.",
    image: "/nasi-premium.png",
    items: [
      "Nasi putih",
      "Olahan daging kambing (sate)",
      "Olahan tulang jeroan (Gulai)",
      "Kentang balado",
      "Telur",
      "Acar",
      "Pisang",
      "Kerupuk",
      "Air mineral",
    ],
  },
  {
    code: "D",
    name: "Mewah",
    description: "Paket paling lengkap dengan tambahan lauk ayam.",
    image: "/nasi-mewah.png",
    items: [
      "Nasi putih",
      "Olahan daging kambing (sate)",
      "Olahan tulang jeroan (Gulai)",
      "Kentang balado",
      "Ayam potong 1/8",
      "Acar",
      "Pisang",
      "Kerupuk",
      "Air mineral",
    ],
  },
];

function PackageLevels() {
  return (
    <div className="package-levels">
      {packageLevels.map((level) => (
        <article className="level-card" key={level.code}>
          <div className="level-image">
            <img
              src={level.image}
              alt={`Paket ${level.name} Mitra Aqiqah`}
            />
          </div>

          <div className="level-content">
            <div className="level-code">
              PAKET {level.code}
            </div>

            <h3>{level.name}</h3>

            <p className="level-description">
              {level.description}
            </p>

            <div className="level-divider" />

            <span className="level-items-title">
              Isi paket
            </span>

            <ul>
              {level.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function PackageOptions({
  data,
  portions,
}: {
  data: PackageData;
  portions: number[];
}) {
  return (
    <div className="price-table-wrapper">
      <table className="price-table">
        <thead>
          <tr>
            <th>Paket</th>

            {portions.map((portion) => (
              <th key={portion}>{portion}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Object.entries(data).map(([name, prices]) => (
            <tr key={name}>
              <td>{name}</td>

              {prices.map((price, index) => (
                <td key={portions[index]}>
                  {formatPackagePrice(price)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RiceCategory({
  title,
  description,
  data1,
  data2,
  portions1,
  portions2,
  showPackageLevels = false,
  visualImages = [],
}: {
  title: string;
  description: string;
  data1: PackageData;
  data2: PackageData;
  portions1: number[];
  portions2: number[];
  showPackageLevels?: boolean;
  visualImages?: {
    src: string;
    alt: string;
  }[];
}) {
  return (
    <section className="rice-category">
      <div className="rice-category-heading">
        <h2>{title}</h2>

        <p className="section-description">
          {description}
        </p>
      </div>

      {showPackageLevels && <PackageLevels />}

      {visualImages.length > 0 && (
        <div className="rice-visuals">
          {visualImages.map((image) => (
            <div className="rice-visual-image" key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      )}

      <div className="rice-price-section">
        <h3 className="subheading">1 Ekor</h3>

        <PackageOptions
          data={data1}
          portions={portions1}
        />
      </div>

      <div className="rice-price-section">
        <h3 className="subheading">2 Ekor</h3>

        <PackageOptions
          data={data2}
          portions={portions2}
        />
      </div>
    </section>
  );
}

export default function RicePackages() {
  return (
    <>
      {/* NASI PUTIH */}

      <section className="package-section rice-section nasi-putih-section">
        <div className="section-label">
          02 — NASI PUTIH
        </div>

        <RiceCategory
          title="Paket nasi kotak untuk berbagai kebutuhan."
          description="Pilih jumlah kambing, tingkat paket, lalu tentukan jumlah porsi sesuai kebutuhan acara kamu."
          data1={nasiPutih1}
          data2={nasiPutih2}
          portions1={porsi1}
          portions2={porsi2}
          showPackageLevels
        />
      </section>

      {/* NASI KEBULI */}

      <section className="package-section rice-section nasi-kebuli-section">
        <div className="section-label">
          03 — NASI KEBULI
        </div>

        <RiceCategory
          title="Nasi kebuli untuk pilihan rasa yang berbeda."
          description="Nikmati pilihan nasi kebuli dengan olahan kambing dan pelengkap sesuai kebutuhan acara."
          data1={kebuli1}
          data2={kebuli2}
          portions1={porsi1}
          portions2={porsi2}
          visualImages={[
            {
              src: "/kebuli-1.png",
              alt: "Nasi kebuli Mitra Aqiqah",
            },
            {
              src: "/kebuli-2.png",
              alt: "Pilihan nasi kebuli Mitra Aqiqah",
            },
          ]}
        />
      </section>
    </>
  );
}