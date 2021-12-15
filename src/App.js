import React from 'react';
import './App.css';
import TodoListContextProvider from './context/TodoListContext';
import TodoApp from './components/TodoApp/TodoApp';

function App() {

    return (
        <TodoListContextProvider>
          <div className='App'>
          <div className='row'>
                <div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                  <TodoApp />
                </div>
          </div>
              
            </div>
        </TodoListContextProvider>
    );
}

export default App;
