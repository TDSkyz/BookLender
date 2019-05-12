import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import SingleBook from './components/SingleBook';
import CheckOrders from './components/CheckOrders';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup}/>
          <Route path="/shop/:bookId" component={SingleBook} />
          <Route path="/edit/:bookId" component={EditBook} />

          <Route exact path="/orders" component={CheckOrders} />
          <Route exact path="/addbook" component={AddBook}/>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
