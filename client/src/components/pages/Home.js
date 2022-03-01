import React, { Fragment } from "react";
import SearchBar from "../layout/SearchBar";
import Logs from "../logs/Logs";
import AddBtn from "../layout/AddBtn";
import AddLogModal from "../logs/AddLogModal";
import EditLogModal from "../logs/EditLogModal";
import AddTechModal from "../techs/AddTechModal";
import TechListModal from "../techs/TechListModal";

const Home = () => {
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};
export default Home;
