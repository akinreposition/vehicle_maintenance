import React, { useEffect } from "react";
import SearchBar from "../layout/SearchBar";
import Logs from "../logs/Logs";
import AddBtn from "../layout/AddBtn";
import AddLogModal from "../logs/AddLogModal";
import EditLogModal from "../logs/EditLogModal";
import AddTechModal from "../techs/AddTechModal";
import TechListModal from "../techs/TechListModal";
import { loadUser } from "../../actions/authAction";

const Home = () => {
   
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  },[])
  return (
    <div>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </div>
  );
};
export default Home;
