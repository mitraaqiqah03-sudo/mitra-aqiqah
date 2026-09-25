import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <strong>Mitra Aqiqah</strong>
        <p>Mudah Dipesan, Amanah Disajikan.</p>
      </div>

      <div className="footer-links">
        <Link href="/paket">Paket & Harga</Link>
        <Link href="/pesan">Pesan Sekarang</Link>

        <Link href="/#faq">FAQ</Link>
        <Link href="/tentang">Tentang</Link>

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
          href="https://share.google/IeSSwDfs4re26gVka"
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
  );
}