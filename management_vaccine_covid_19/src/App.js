
import Login from "./components/Login.js"
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js"
import Register from "./components/Register.js";
import { BrowserRouter,Route, Switch } from "react-router-dom";
// import Admincalendar from "./components/Admin/CalendarAdmin.js";
// import Profile from "./components/User/Profile.js";
import React from "react";
import DetailNews from "./components/DetailNews.js";
import Profile from "./components/User/Profile.js";
import UpdateProfile from "./components/User/UpdateProfile.js";
import NewsAdmin from "./components/Admin/NewsAdmin.js";
import DetailNewsAdmin from "./components/Admin/DetailNewsAdmin.js";

function App() {
  return (
    <BrowserRouter>
        <div>
            <Navbar />  
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/detailnew/:id" component={DetailNews}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/profile" component={Profile}></Route>
              <Route path="/update-profile" component={UpdateProfile}></Route>
              <Route path="/admin-news" component={NewsAdmin}></Route>
              <Route path="/admin/detailnew/:id" component={DetailNewsAdmin}></Route>
              {/* <Route path="/profile" component={Profile}> </Route>
              <Route path="/calendar" component={Admincalendar}> </Route> */}
              {/* <Route path="/calendar" render={ () => <AdminCalendar />}> </Route> */}
            </Switch>
        </div>
      </BrowserRouter>

            
          
    
   
  );
}

export default App;
