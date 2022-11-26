import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
function App() {
  const handleClick = (e) => {
    document.querySelectorAll(".navigation").forEach((element) => {
      if (!element.style.display || element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  };
  return (
    <div>
      <header>
        <nav>
          <ul className="navbar">
            <li>
              <Link id="logo" to="/" />
            </li>
            <li onClick={(e) => handleClick(e)} className="nav-menu-icon">
              <GiHamburgerMenu />
            </li>
            <li className="navigation">
              <Link className="nav-item" to="/">
                Home
              </Link>
            </li>
            <li className="navigation">
              <Link className="nav-item" to="/about">
                About
              </Link>
            </li>
            <li className="navigation">
              <Link className="nav-item" to="/cart">
                Cart
                <ImCart />
              </Link>
            </li>
            <li className="navigation">
              <Link className="nav-item" to="/signin">
                Sign In/Up
              </Link>
            </li>
          </ul>
        </nav>
        <div className="welcome">
          Welcome To GingerX Cocktail Bar. You are in the right place for
          entertainment.
        </div>
      </header>
      <main>
        <section className="discover">
          <h3>Discover</h3>
          <p>The right choice</p>
          <h4>Cocktails</h4>
          <div className="cards">
            <div className="card-item">
              <img
                src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
                alt="drink"
              />
              <Link to="/cocktail">
                <h5>Egg Cream</h5>
              </Link>
            </div>
            <div className="card-item">
              <img
                src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
                alt="drink"
              />
              <Link to="/cocktail">
                <h5>Egg Cream</h5>
              </Link>
            </div>
            <div className="card-item">
              <img
                src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
                alt="drink"
              />
              <Link to="/cocktail">
                <h5>Egg Cream</h5>
              </Link>
            </div>
            <div className="card-item">
              <img
                src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
                alt="drink"
              />
              <Link to="/cocktail">
                <h5>Egg Cream</h5>
              </Link>
            </div>
          </div>
        </section>
        <section className="weekly-deals">
          <h3>Weekly Deals</h3>
          <p>The place of quality</p>
          <div className="image-tab">
            <img
              src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
              alt="drink"
            />
            <img
              src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
              alt="drink"
            />
            <img
              src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
              alt="drink"
            />
            <img
              src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
              alt="drink"
            />
          </div>
          <div className="short-menu">
            <h5>Menu</h5>
            <section className="menu-content">
              <div className="menu-item">
                <h5>Egg Cream </h5>
                <p>
                  Mix syrup and milk in a fountain glass. Add soda water, serve
                  with a straw.
                </p>
              </div>
              <div className="menu-item">
                <h5>Egg Cream </h5>
                <p>
                  Mix syrup and milk in a fountain glass. Add soda water, serve
                  with a straw.
                </p>
              </div>
              <div className="menu-item">
                <h5>Egg Cream </h5>
                <p>
                  Mix syrup and milk in a fountain glass. Add soda water, serve
                  with a straw.
                </p>
              </div>
              <div className="menu-item">
                <h5>Egg Cream </h5>
                <p>
                  Mix syrup and milk in a fountain glass. Add soda water, serve
                  with a straw.
                </p>
              </div>
              <div className="menu-item">
                <h5>Egg Cream </h5>
                <p>
                  Mix syrup and milk in a fountain glass. Add soda water, serve
                  with a straw.
                </p>
              </div>
              <div className="menu-item">
                <h5>Egg Cream </h5>
                <p>
                  Mix syrup and milk in a fountain glass. Add soda water, serve
                  with a straw.
                </p>
              </div>
            </section>
            <Link className="menu-btn" to="/menu">
              View the full menu
            </Link>
          </div>
        </section>
      </main>
      <footer>
        <div className="subcription">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className="email-section">
            <input type="email" placeholder="Write your email..." />
            <a href="/send">Subcribe</a>
          </div>
        </div>
        <div className="contact">
          <div className="logo">
            <Link to="/" />
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <BsLinkedin />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <BsInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <BsTwitter />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <BsYoutube />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
