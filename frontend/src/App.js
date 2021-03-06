import React from 'react';
import { Box } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Header from './components/Header';
import Home from './components/Home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';
import SignUp from './components/User/SighUp';
import SignIn from './components/User/SighIn';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 60 }}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/details/:id' element={<DetailView />} />
          <Route exact path='/create' element={<CreateView />} />
          <Route exact path='/update/:id' element={<UpdateView />} />
          <Route exact path='/delete/:id' element={<UpdateView />} />
          <Route exact path='/adduser' element={<SignUp />} />
          <Route exact path='/loginUser' element={<SignIn />} />
        </Routes>
      </Box>
    </BrowserRouter >
  )
}

export default App;
