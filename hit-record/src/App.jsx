import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import HomePage from './components/pages/HomePage'
import ListeningLogPage from './components/pages/ListeningLogPage'
import LoadingPage from './components/pages/LoadingPage'
import SearchPage from './components/pages/SearchPage'

function App() {

  return (
    <div id="body-container">
      <Header />
      <Routes>
        <Route path = "/" element = {<LoadingPage />}/>
        <Route path = "/home" element = {<HomePage />}/>
        <Route path = "listening-log" element = {<ListeningLogPage />}/>
        <Route path = "search" element = {<SearchPage />}/>
        <Route path = "*" element = {<Navigate to = "/" />}/>
      </Routes>
      <Footer />

    </div>
  )
}

export default App
