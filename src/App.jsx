import './App.css'
import Best from './components/Best/Best'
import BestDeal from './components/BestDeal/BestDeal'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Video from './components/Video/Video'

function App() {

  return (
    <>
    <div className='app'></div>
    <Header/>
    <Navbar/>
    <Slider/>
    <Best/>
    <Video/>
    <BestDeal/>
    </>
  )
}

export default App
