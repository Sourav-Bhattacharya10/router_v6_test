import React, { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    let prevRoute = localStorage.getItem("prevRoute");
    if(!prevRoute){
      localStorage.setItem("prevRoute", location.pathname)
    }
    
    window.onpopstate = () => {
      let prevRoute = localStorage.getItem("prevRoute");
      if(prevRoute){
        navigate(prevRoute)
      }
    }
  }, [])

  return (
    <>
      {/* <Routes>
        <Route path="*" element={<h1>No Match</h1>} />
        <Route path="/patients" element={<Names />} />
        <Route path="/contacts/2" element={<FriendName />} />
      </Routes> */}
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={'/patients/1'}>Your Name</NavLink>
            </li>
            <li>
              <NavLink to={`/contacts/2`}>Your Friend</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
};

export default Root;