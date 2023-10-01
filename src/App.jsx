import React from "react"
import {HashRouter , Routes , Route} from 'react-router-dom'
import Home from "./home"
import Game from "./Game"

function App() {

  return (
    <>
    <HashRouter>
    <Routes>
      <Route element={<Home />} path="/"></Route>
      <Route element={<Game />} path="/game"></Route>
    </Routes>
    </HashRouter>
    </>
  )
}

export default App