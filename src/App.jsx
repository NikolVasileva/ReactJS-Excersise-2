import Preloader from './Components/Preloader.jsx'
import Header from './Components/Header.jsx'
import WelcomeArea from './Components/WelcomeArea.jsx'
import Features from './Components/Features.jsx'
import Blocks from './Components/Blocks.jsx'
import WorkProcess from './Components/WorkProcess.jsx'
import Testimonials from './Components/Testimonials.jsx'
import Plans from './Components/Plans.jsx'
import Accents from './Components/Accents.jsx'
import Blog from './Components/Blog.jsx'
import ContactForm from './Components/ContactForm.jsx'

function App() {

  return (
    <div>
      {/* <Preloader /> */}
      <Header />
      <WelcomeArea />
      <Features />
      <Blocks />
      <WorkProcess />
      <Testimonials />
      <Plans />
      <Accents />
      <Blog />
      <ContactForm />




    
    {/* <!-- ***** Footer Start ***** --> */}
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="social">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-rss"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p className="copyright">Copyright &copy; 2020 Softy Pinko Company - Design: TemplateMo</p>
                </div>
            </div>
        </div>
    </footer>


    </div>
  )
}

export default App
