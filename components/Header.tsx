import Link from "next/link";

type HeaderProps = {
  active?: "home" | "paket" | "pesan";
};

export default function Header({ active }: HeaderProps) {
  return (
    <header className="site-header">
      <Link href="/" className="site-logo">
        <img
          src="/logo-mitra-aqiqah.png"
          alt="Mitra Aqiqah"
        />
      </Link>

      <nav className="site-nav">
        <Link
          href="/"
          className={active === "home" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          href="/paket"
          className={active === "paket" ? "active" : ""}
        >
          Paket & Harga
        </Link>

        <Link
          href="/pesan"
          className={active === "pesan" ? "active" : ""}
        >
          Pesan Sekarang
        </Link>

        <Link href="/#testimoni">
          Testimoni
        </Link>

        <Link href="/#faq">
          Pertanyaan
          </Link>

        <a
          href="https://wa.me/6285102473444?text=Halo%20Mitra%20Aqiqah%2C%20saya%20mau%20bertanya%20tentang%20aqiqah."
          target="_blank"
          rel="noopener noreferrer"
          className="header-whatsapp"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}