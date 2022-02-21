import React from "react";
import Logs from "../logs/Logs";
// import RoutlineChecks from "../routlines/RoutlineChecks";
import AddBtn from "../layout/AddBtn";
import AddLogModal from "../logs/AddLogModal";
import EditLogModal from "../logs/EditLogModal"

const Home = () => {
  return (
    <div className="container">
      {/* <RoutlineChecks /> */}
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
      <Logs />
    </div>
  );
};
export default Home;
