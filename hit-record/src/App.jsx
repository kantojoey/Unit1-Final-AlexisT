import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Header from './components/common/Header'
import LoadingPage from './components/pages/LoadingPage'
import HomePage from './components/pages/Home/HomePage'
import ExpandedDetailsPage from './components/pages/Home/ExpandedDetailsPage'
import ListeningLogPage from './components/pages/ListeningLogPage'
import SearchPage from './components/pages/Search/SearchPage'
import AboutPage from './components/pages/AboutPage'
import ProfilePage from './components/pages/ProfilePage'
import BottomNavBar from './components/common/BottomNavBar'
import Footer from './components/common/Footer'

function App() {

  return (
    <div id="body-container">
      <Header />
      <Routes>
        <Route path = "/" element = {<LoadingPage />}/>
        <Route path = "/home" element = {<HomePage />}/>
        <Route path = "/home/album" element = {<ExpandedDetailsPage />}/>
        <Route path = "/listening-log" element = {<ListeningLogPage />}/>
        <Route path = "/about" element = {<AboutPage />}/>
        <Route path = "/search" element = {<SearchPage />}/>
        <Route path = "/profile" element = {<ProfilePage />}/>
        <Route path = "*" element = {<Navigate to = "/" />}/>
      </Routes>
      <BottomNavBar />
      <Footer />

    </div>
  )
}

export default App
