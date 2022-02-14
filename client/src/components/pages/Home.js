import React from "react"
import Logs from "../logs/Logs";
// import RoutlineChecks from "../routlines/RoutlineChecks"
import AddBtn from "../layout/AddBtn";


const Home = () => {
  
  return (
    <div className='container'>
      {/* <RoutlineChecks /> */}
      <AddBtn />
      <Logs />
    </div>
  );
};
export default Home;
