// we are using Es6 modules
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";


function App() {

  return (
    <>
    <BrowserRouter basename="/">
     <Routes>
        {/* Parent here is Body they should render the children using outlet*/}
        {/* <Route path="/" element={<Body/>}/> */}
        < Route path="/" element={<Body/>}>
          < Route path="/login" element={<Login/>}></Route>
          < Route path="/profile" element={<Profile/>}></Route>
        </Route>
     </Routes>
    </BrowserRouter>

    {/* <NavBar /> */}
    {/* <h1 className="text-3xl font-bold">Hello World!</h1> */}
    </>
  )
}

export default App
