import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTechnicians } from "../../actions/technicianAction";
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({ tech: { id, firstName, lastName }, deleteTechnician }) => {

  const onDelete = () => {
    deleteTechnicians(id);
    M.toast({ html: 'Technician Deleted'});
  }
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a
          href="#!"
          className="secondary-content"
          onClick={onDelete}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTechnician: PropTypes.func.isRequired,
};

export default connect(null, { deleteTechnicians })(TechItem);
