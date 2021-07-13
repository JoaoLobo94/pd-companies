import NavBar from './components/NavBar'
import BodyIntro from './components/BodyIntro'
import BodyWhatIs from './components/BodyWhatIs'
import BodyParticipate from './components/BodyParticipate'
import Footer from './components/Footer'
import "./LandingPage.css"

const Login = () => {
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

export default Login;
