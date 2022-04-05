import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechnicians } from "../../actions/technicianAction";

const TechSelectOptions = ({ getTechnicians, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechnicians();
    // eslint-disable-next-line
  }, []);

  return (
    (!loading || techs !== null) ||
    techs.map((technician) => (
      <option
        key={technician.id}
        value={` ${technician.firstName} ${technician.lastName}`}
      >
        {technician.firstName} {technician.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechnicians: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechnicians })(TechSelectOptions);
