import React from 'react';

import Header from './components/Header/Header.js';
import TodoList from './components/TodoList/TodoList.js';
import Footer from './components/Footer/Footer.js';
import './App.css';


function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
