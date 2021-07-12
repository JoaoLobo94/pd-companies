import "./Footer.css";
import { MDBFooter } from "mdb-react-ui-kit";
import GithubIcon from "../../../components/Logos/GithubIcon";
import InstagramIcon from "../../../components/Logos/InstagramIcon";
import LinkedinIcon from "../../../components/Logos/LinkedinIcon";
import YoutubeIcon from "../../../components/Logos/YoutubeIcon";
import VectorDocumentIcon from "../../../components/Logos/VectorDocumentIcon";

const Footer = () => (
  <div>
  <MDBFooter className="text-center text-lg-left footer fixed-bottom">
    <div className="p-2 row footer-logos">
      <div className="footer-logos col-1">
        <a href="#github">
          <GithubIcon />
        </a>
      </div>
      <div className="footer-logos col-1">
        <a href="#insta">
          <InstagramIcon />
        </a>
      </div>
      <div className="footer-logos col-1">
        <a href="#linkedin">
          <LinkedinIcon />
        </a>
      </div>
      <div className="footer-logos col-1">
        <a href="#youtube">
          <YoutubeIcon />
        </a>
      </div>
      <div className="footer-logos col-1">
        <a href="https://nakamotoinstitute.org/crypto-anarchist-manifesto/">
          <VectorDocumentIcon />
        </a>
      </div>
    </div>
  </MDBFooter>
  </div>
);

export default Footer;
