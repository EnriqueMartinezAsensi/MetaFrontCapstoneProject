import { Link } from "react-router-dom"
import footerLogo from "../../../assets/images/logo-vertical-white.png"
import { FooterWrapper, FooterMenu, FooterBertical, FooterItem, FooterTitle } from "./Footer.styled"

const Footer = () => {
  return <FooterWrapper>
    <FooterMenu>
      <FooterItem className="img-footer">
        <img src={footerLogo} alt="Logo of the restaurant" height={200}/>
      </FooterItem>
      <FooterItem className="contact">
        <FooterTitle className="footer-header">Navigation</FooterTitle>
        <FooterBertical className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/order">Order</Link>
          <Link to="/login">Login</Link>
        </FooterBertical>
      </FooterItem>

      <FooterItem>
        <FooterTitle className="footer-header">Contact</FooterTitle>
        <FooterBertical className="footer-links">
          <li>2395 Maldove Way,</li>
          <li>Chicago Illinois</li>
          <br></br>
          <li>(629)-243-6827</li>
          <br></br>
          <a
            href="mailto: info@littlelemon.com"
            target="_blank"
            rel="noreferrer"
          >
            info@littlelemon.com
          </a>
        </FooterBertical>
      </FooterItem>
      <FooterItem>
        <FooterTitle className="footer-header">Connect</FooterTitle>
        <FooterBertical className="footer-links">
          <a
            href="https://www.facebook.com/thelittlelemonshop/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/littlelemonmoon/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/watch?v=3Li-FfypZYE"
            target="_blank"
            rel="noreferrer"
          >
            Join us!
          </a>
        </FooterBertical>
      </FooterItem>
    </FooterMenu>
  </FooterWrapper>
}

export default Footer