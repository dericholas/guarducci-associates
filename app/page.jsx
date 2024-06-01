import Link from "next/link";

const Home = () => {
  return (
    <div className="home-main">
      <div className="greeting">
        <h1>WELCOME</h1>
        <h3>Guarducci Associates</h3>
        <h5>Stained glass restoration and repair</h5>
        <Link href={"/about"} className="redirect-button">Learn More</Link>
      </div>
      
      <div className="home-services">
        <h3>What We Do</h3>
        <p>
          At Guarducci Associates, we specialize in breathing new life into 
          historical and cherished stained glass pieces. With meticulous 
          attention to detail and a passion for preserving cultural heritage, 
          we expertly repair and restore stained glass windows, panels, and 
          artworks to their former glory. Our skilled artisans utilize traditional 
          techniques alongside modern restoration methods to ensure the longevity 
          and beauty of each restored piece, providing clients with timeless 
          craftsmanship to be admired for generations to come.
        </p>
        <Link href="/services" className="redirect-button">Our Expertise</Link>
      </div>

      <div className="home-projects">
        <h3>Recent Work</h3>
        {/* <{projectTiles}/>  */}
        {/* CREATE PROJECT TILES */}
        <Link href="/projects" className="redirect-button">See More</Link>
      </div>

      <div className="home-contact">
        <h3>LETS EXPLORE HOW GUARDUCCI ASSOCIATES CAN HELP</h3>
        <Link href="/contact" className="redirect-button">Contact Us</Link>
      </div>
    </div>

  );
}

export default Home;