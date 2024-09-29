import './App.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './navbar';
import Content from './Content';

function App() { 

  return (
    <>
      <div className="container">
        <Navbar/>
        <Content/>
      </div>
    </>
  )
}

export default App
