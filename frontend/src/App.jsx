import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateParty from './pages/CreateParty';
import EditParty from './pages/EditParty';
import DeleteParty from './pages/DeleteParty';
import ShowParty from './pages/ShowParty';
import Register from './pages/Register';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/partys/create' element={<CreateParty />}></Route>
      <Route path='/partys/details/:id' element={<ShowParty />}></Route>
      <Route path='/partys/edit/:id' element={<EditParty />}></Route>
      <Route path='/partys/delete/:id' element={<DeleteParty />}></Route>
      <Route path='/partys/register' element={<Register />}></Route>
    </Routes>
    <Footer /></>
  )
}

export default App;
