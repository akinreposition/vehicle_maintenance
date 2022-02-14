import React, { useState, useEffect } from "react";
import RountlineItem from "./RountlineItem";
import Preloader from "../layout/Preloader";

const RoutlineChecks = () => {
  const [maintenances, setMaintenances] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMaintenances();
    //eslint-disable-next-line
  }, []);

  const getMaintenances = async () => {
    setLoading(true);
    const res = await fetch("/maintenances");
    const data = await res.json();

    setMaintenances(data);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Vehicle Daily Checks</h4>
      </li>
      {!loading && maintenances.length === 0 ? (
        <p className="center">No logs here....</p>
      ) : (
        maintenances.map((maintenance) => (
          <RountlineItem maintenance={maintenances} key={maintenance.id} />
        ))
      )}
    </ul>
  );
};

export default RoutlineChecks;
