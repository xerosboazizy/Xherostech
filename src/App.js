
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Services from './Component/service/Services';
import Portfolio from './Component/portfolio/Portfolio'
import Team from './Component/team/Team';
import Blog from './Component/blog/Blog';
import Contact from './Component/contact/Contact';
import Accordion from './Component/accordion/Accordion';
import About from './Component/about/About';
import './index.css'
import useLocalStorage from 'use-local-storage'


function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const swithctheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div className='app' data-theme={theme}>
      <Header swithctheme={swithctheme} setTheme={setTheme} theme={theme} />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Accordion />
      <Team />
      <Contact />
    </div>

  );
}

export default App;
