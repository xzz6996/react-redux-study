// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div
//           className="App-link"
//         >
//           Learn React
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react"
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer';

const App = () => {
  return (<div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>)
}

export default App;

