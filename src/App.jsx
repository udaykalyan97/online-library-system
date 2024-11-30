import Header from "./components/Header.jsx"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import userContext from "./utils/useContext.js"
import { Provider } from "react-redux"
import appStore from "./utils/appStore.js"
import './index.css';

function App() {

  const [userName, setUserName] = useState("Uday Kalyan")
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{loggedInUser: userName, setUserName}}>
        <Header />
        <Outlet />
      </userContext.Provider>
    </Provider>
  )
}

export default App
