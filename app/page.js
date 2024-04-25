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
      
      <div className="home-projects">
        <h3>What We're Working On:</h3>
        <Link href="/projects" className="redirect-button">See More</Link>
      </div>

      <div className="home-services">
        <h3>Our Professionals:</h3>
        <Link href="/services" className="redirect-button">Learn About Our Expertise</Link>
      </div>

      <div className="home-contact">
        <h3>LETS EXPLORE HOW GUARDUCCI ASSOCIATES CAN HELP</h3>
        <Link href="/contact" className="redirect-button">Contact Us</Link>
      </div>
    </div>

  );
}

export default Home;