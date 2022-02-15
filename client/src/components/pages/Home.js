import React from "react"
import Logs from "../logs/Logs";
// import RoutlineChecks from "../routlines/RoutlineChecks"
import AddBtn from "../layout/AddBtn";
import AddLogModal from "../logs/AddLogModal";


const Home = () => {
  
  return (
    <div className='container'>
      {/* <RoutlineChecks /> */}
      <AddBtn />
      <AddLogModal />
      <Logs />
    </div>
  );
};
export default Home;
