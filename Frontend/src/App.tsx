import {BrowserRouter , Route , Routes} from  "react-router-dom";
import { Landing } from "./Pages/Landing";
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin";
import { Dashboard } from "./Pages/Dashboard";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Landing/>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/signin" element = {<Signin/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
