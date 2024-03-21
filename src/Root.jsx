import React from "react";
import { NavLink } from "react-router-dom";

const Root = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/contacts/1" element={<YourName />} />
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
              <NavLink to={`/contacts/1`}>Your Name</NavLink>
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