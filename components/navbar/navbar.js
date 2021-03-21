import styles from "./navbar.module.scss";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default function NavbarComponent() {
  return (
    <Navbar
     //sticky="top" 
     style={{position:'fixed', width:'100%', zIndex:55}}
      expand="lg">
      <Navbar.Brand className={styles.custombrand} href="#about">
        <p className={styles.title}>
          Cool name <br /> & Lastname
        </p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#education">Formation</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          {/* //link for a pdf version of the cv */}
          <Nav.Link target='_blank' href="/">Download CV</Nav.Link>

          <div className={styles.rrsscont}>
            <a target="_blank" href="/">
              <Icon size="sm" color='#283ff5' icon={faGithub} className={styles.icon} />
            </a>
            <a target="_blank" href="/">
              <Icon size="sm" color='#283ff5' icon={faLinkedin} className={styles.icon} />
            </a>
            <a target="_blank" href="/">
              <Icon size="sm" color='#283ff5' icon={faInstagram} className={styles.icon} />
            </a>
            <a target="_blank" href="/">
              <Icon size="sm" color='#283ff5' icon={faWhatsapp} className={styles.icon} />
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
}
