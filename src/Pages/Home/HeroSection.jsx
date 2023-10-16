

export default function HeroSection() {
  const onButtonClick = () => {
        const pdfUrl = "Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Aadarsh</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Wed Developer</span>
          </h1>
          <p className="hero--section-description">
          I craft digital experiences through code and creativity.<br/><br/>
          🌐 With a passion for all things web, I specialize in translating
            ideas into beautifully designed, functional websites that not only
            look stunning but also deliver exceptional user experiences.
          </p>
        </div>
        <div className="btn-hero">
        <button className="btn btn-primary" onClick={onButtonClick}>Download Resume</button>
        </div>
      </div>
      
    </section>
  );
}
