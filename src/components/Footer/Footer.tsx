import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* LEFT – VERTICAL MENU */}
        <div className="footer-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Gallery</a>
          <a href="#">Help</a>
        </div>

        {/* MIDDLE – DELHI */}
        <div className="footer-location">
          <h4>Delhi</h4>
          <p>B - 14, Basement, Dayanand Colony, Lajpat Nagar - 4, New Delhi - 110024, India</p>
          <div className="map-box"> <iframe
          title="Delhi Map"
          src="https://www.google.com/maps?q=B%20Block%2C%20Dayanand%20Colony%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20India&output=embed"
          loading="lazy"
        /></div>
        </div>

        {/* RIGHT – GOA */}
        <div className="footer-location">
          <h4>Goa</h4>
          <p>The Goan House SiShore, Goa, India</p>
          <div className="map-box"><iframe
          title="Goa Map"
          src="https://www.google.com/maps?q=The%20Goan%20House%20SiShore%2C%20Goa%2C%20India&output=embed"
          loading="lazy"
        /></div>
        </div>
      </div>

      <div className="footer-bottom">
        © All Rights Reserved | Make My Event Easy
      </div>
    </footer>
  );
}
