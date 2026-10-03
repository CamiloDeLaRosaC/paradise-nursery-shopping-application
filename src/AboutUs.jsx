function AboutUs() {
  return (
    <section className="about-us" aria-labelledby="about-title">
      <p className="eyebrow">Grown with care · Delivered with love</p>
      <h2 id="about-title">A greener home starts here.</h2>
      <p>
        Paradise Nursery is a small team of plant lovers helping people bring nature indoors.
        We hand-select healthy, character-filled houseplants and pair them with practical care
        guidance, so beginners and seasoned collectors alike can grow with confidence.
      </p>
      <div className="about-stats" aria-label="Company highlights">
        <span><strong>18</strong> curated plants</span>
        <span><strong>3</strong> easy collections</span>
        <span><strong>100%</strong> plant happiness</span>
      </div>
    </section>
  );
}

export default AboutUs;
