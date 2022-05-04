import React from "react";
import PropTypes from "prop-types";

const Maintenance = () => {
  return (
    <div>
      <h4 className="head-maintenance text-center">Maintenance Check</h4>
      
    </div>
  );
};

Maintenance.prototype = {
  maintenance: PropTypes.object.isRequired,
};
export default Maintenance;
