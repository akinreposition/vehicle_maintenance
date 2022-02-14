import React from "react";
import Moment from 'react-moment';
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          } key=${log.id}`}
        >
          {log.message}
        </a>
        {' '}
        <span className="grey-text">
            <span className='black-text'>TECH ID #{log.id}</span> last maintenance by {' '}
            <span className={`black-text key={technician.id}`}>{log.technician}</span> on{' '}
            <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
            <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
