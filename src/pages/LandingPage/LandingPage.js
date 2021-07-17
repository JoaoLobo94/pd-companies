import NavBar from './components/NavBar'
import BodyIntro from './components/BodyIntro'
import BodyWhatIs from './components/BodyWhatIs'
import BodyParticipate from './components/BodyParticipate'
import Footer from './components/Footer'
import "./LandingPage.css"

//TODO: put types of components in folders. Add text and formatting to the rest of the body. Pure styling

const LandingPage = () => {
  return (
    <div className='container'>
      <NavBar />
      <BodyIntro />
      <BodyWhatIs />
      <BodyParticipate />
      <Footer />
    </div>
  );
};

export default LandingPage;
