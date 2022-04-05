import React, { useState, useEffect } from "react";
import TechSelectOptions from "../techs/TechSelectOptions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateLog } from "../../actions/logAction";

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTechnician(current.technician);
    }
  }, [current]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "" || technician === "") {
      M.toast({ html: "please enter a message and technician" });
    } else {
      const updatedCurrentLog = {
        id: current.id,
        message,
        attention,
        technician,
        date: new Date(),
      };
      updateLog(updatedCurrentLog);
      M.toast({ html: `Log updated by ${technician}` });

      setMessage("");
      setTechnician("");
      setAttention(false);
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4> Enter Vehicle Log</h4>

        <div className="row>">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="technician"
              value={technician}
              className="browser-default"
              onChange={(e) => setTechnician(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect green
          btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

EditLogModal.prototype = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});
export default connect(mapStateToProps, {
  updateLog,
})(EditLogModal);
