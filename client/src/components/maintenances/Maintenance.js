import React from "react";
import PropTypes from "prop-types";
import AddMaintenanceModal from "./AddMaintenanceModal";

const Maintenance = () => {
  return (
    <div>
      <h4 className="head-maintenance text-center">Maintenance Check</h4>
      <AddMaintenanceModal />
    </div>
  );
};

Maintenance.prototype = {
  maintenance: PropTypes.object.isRequired,
};
export default Maintenance;
