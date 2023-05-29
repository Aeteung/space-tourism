import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Crew, Home, Destination, Technology, Header } from './components';
import data from "./data.json"

function App() {

  return (
    <div className="app text-white">
      <BrowserRouter>
        <Header></Header>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/destination" element={<Destination destinationsData={data.destinations}/>}/>
            <Route path="/crew" element={<Crew crewData={data.crew}/>}/>
            <Route path="/technology" element={<Technology technologyData={data.technology}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
