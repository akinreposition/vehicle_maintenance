import React from 'react'
import RountlineForm from './RountlineForm'
import Moment from 'react-moment';
import PropTypes from 'prop-types'

const RountineItem =({ maintenance }) => {
    
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            maintenance.attention ? "red-text" : "blue-text"
          } key=${maintenance.id}`}
        >
          {maintenance.message}
        </a>
        {' '}
        <span className="grey-text">
            <span className='black-text'>VEHICLE ID #{maintenance.id}</span> last checked by {' '}
            <span className={`black-text key={maintenance.id}`}>{maintenance.driver}</span> on{' '}
            <Moment format='MMMM Do YYYY, h:mm:ss a'>{maintenance.date}</Moment>
        </span>
        <span>
            <RountlineForm />
        </span>
      </div>
    </li>
  )
}

RountineItem.propTypes = {
    RoutineCheck: PropTypes.object.isRequired
}

export default RountineItem