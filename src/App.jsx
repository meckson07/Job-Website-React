import {BrowserRouter, Routes,Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddJobPage from './pages/AddJobPage'
import ViewJobPage from './pages/ViewJobPage'
import OutLet from './components/MainLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OutLet/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/viewjobs' element={<ViewJobPage/>}/>
        <Route path='/addjob' element={<AddJobPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
