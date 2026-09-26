const testimonials = [
  "/testimoni-1.png",
  "/testimoni-2.png",
  "/testimoni-3.png",
  "/testimoni-4.png",
  "/testimoni-5.png",
  "/testimoni-6.png",
  "/testimoni-7.png",
  "/testimoni-8.png",
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="testimonial-section">
      <div className="testimonial-heading">
        <div className="section-label">KATA KELUARGA</div>

        <h2>Kepercayaan yang kembali.</h2>

        <p>
          Terima kasih kepada keluarga yang telah mempercayakan
          momen aqiqah bersama Mitra Aqiqah.
        </p>
      </div>

      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((image, index) => (
            <div
              className="testimonial-image"
              key={`${image}-${index}`}
            >
              <img
                src={image}
                alt="Testimoni pelanggan Mitra Aqiqah"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
