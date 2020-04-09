import React from 'react';
import Sidebar from './components/Sidebar'
import Main from './js/views/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import tools from './functions/tools.js'

function App() {
  return (
      <div class="app-wrapper">
      <Sidebar tools = {tools}></Sidebar>
        <div className = "main-wrapper">
          <Main tools = {tools}></Main>
        </div>
      </div>
  );
}

export default App;
