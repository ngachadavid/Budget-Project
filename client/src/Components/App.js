import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import NavBar from "./NavBar"
import Home from "./Home";


function App() {

  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      } else {
        setUser(null);
      }
    });
  }, []);


  function onLogin(loguser){
    setUser(loguser)
    navigate("/home")
  }

  return (
    <div>
      <NavBar user={user}/>
      <Routes>
        <Route exact path="/" element={<LoginForm onLogin={onLogin} user={user} />} />
        <Route exact path="/sign" element={<SignUpForm onLogin={onLogin} />}/>
        <Route exact path="/home" element={<Home setUser={setUser} user={user} />} />
      </Routes>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import LoginForm from './LoginForm';
// import SignUpForm from './SignUpForm';
// import NavBar from "./NavBar"
// import Home from "./Home";


// function App() {

//   const [user, setUser] = useState(null);
//   let navigate = useNavigate();

//   useEffect(() => {
//   fetch("/me").then((res) => {
//    if (res.ok) {
//     res.json().then((user) => setUser(user));
//     }
//    });
//   }, []);


//   function onLogin(loguser){
//     setUser(loguser)
//     navigate("/home")
//   }

//   if (!user){
//     return (
//     <div>
//       <Routes>
//       <Route exact path="/" element={<LoginForm onLogin={onLogin} user={user} />}/>
//       {/* <LoginForm onLogin={onLogin} user={user}/> */}
//       {/* </Route> */}
//       <Route exact path="/sign" element={<SignUpForm onLogin={onLogin} />}/>
//       {/* <SignUpForm onLogin={onLogin}/> */}
//       {/* </Route> */}
//       </Routes>
//     </div>
//     );
//   }

//   return (
//     <div>
//       <NavBar user={user}/>
//       <Routes>
//       <Route exact path="/home" element={<Home setUser={setUser} user={user} />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



