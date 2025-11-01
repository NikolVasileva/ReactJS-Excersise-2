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
import Footer from './Components/Footer.jsx'

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
      <Footer />
    </div>
  )
}

export default App
