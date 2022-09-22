import React from "react";
import TodoList from "./components/todoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from 'react-redux'
import store from "./store";
import Gallery from "./pages/gallery";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route index element={<TodoList />} /> */}
          {/* <Route path="about" element={<About />} />
          <Route path="*" element={<Empty />} /> */}
        </Routes>
      </div>
    </Provider>

  );
}

export default App;
