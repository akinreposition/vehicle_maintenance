import React from "react";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from "prop-types";
import { deleteLogs, setCurrent } from "../../actions/logAction";
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLogs, setCurrent }) => {

  const onDelete = () => {
    deleteLogs(log.id);
    M.toast({html: 'Log Deleted'});
  }
  
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          } key=${log.id}`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        {' '}
        <span className="grey-text">
            <span className='black-text'>TECH ID #{log.id}</span> last maintenance by {' '}
            <span className={`black-text key={technician.id}`}>{log.technician}</span> on{' '}
            <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
            <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLogs: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteLogs, setCurrent })(LogItem);
