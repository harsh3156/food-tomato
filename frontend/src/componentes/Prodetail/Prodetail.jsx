import React, { useEffect, useState } from "react";
import p1 from "../../assets/p1.webp";
import p2 from "../../assets/p2.webp";
import p3 from "../../assets/p3.webp";
import './Prodetail.css';

function Prodetail() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Pmain-prodetail">
      <div className="container">
        <div className="Prow Pheading">
          <div className="Pcolumn">
            <div className="Pprice">
              From <span className="Pprice-value">17</span><span className="Pcurrency">₹</span>
            </div>
            <h2 className="Ptitle">beef classic</h2>
            <h3 className="Psubtitle">burgers</h3>
            <div className="Pdescription">
              Try this delicious burger containing two fried parts of a whole-grain bun, a juicy piece of beef, cheese, and lettuce
            </div>
            <div className="Padd-button">
              <a href="#"><span>+</span></a>
            </div>
            <div className="Pimage-container">
              <img src={p2} alt="beef classic" />
            </div>
          </div>

          <div className="Pcolumn">
            <div className="Pimage-container center">
              <img src={p1} alt="The best pasta" />
            </div>
            <div className="text-content">
              <div className="Pprice">
                From <span className="Pprice-value">12.00</span><span className="currency">₹</span>
              </div>
              <h2 className="Ptitle">The best pasta</h2>
              <div className="Pdescription">
                Try this delicious pasta containing a juicy piece of beef, cheese, and lettuce
              </div>
              <div className="Padd-button">
                <a href="#"><span>+</span></a>
              </div>
            </div>
          </div>

          <div className="Pcolumn">
            <div className="text-content">
              <div className="Pprice">
                From <span className="price-value">13.50</span><span className="currency">₹</span>
              </div>
              <h2 className="Ptitle">Season soup</h2>
              <div className="Pdescription">
                We offer you a special dish – our season soup containing seasonal vegetables
              </div>
              <div className="Padd-button">
                <a href="#"><span>+</span></a>
              </div>
            </div>
            <div className="image-container center">
              <img src={p3} alt="Season soup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prodetail;
