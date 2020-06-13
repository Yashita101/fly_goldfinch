import React from "react";
import {Link} from "react-router-dom";

const App_Home = () => {
  return (
    <div>
      <h4>WELCOME!!</h4>
      <Link to="/home" ><button type="button">Page 1</button></Link>
    </div>
  );
};
export default App_Home;
