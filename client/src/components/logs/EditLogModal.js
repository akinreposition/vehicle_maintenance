import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "" || technician === "") {
      M.toast({ html: "please enter a message and technician" });
    } else {
      console.log(message, technician, attention);

      
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
              className="browser default"
              onChange={(e) => setTechnician(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="Musa mohammed">Musa Mohammed</option>
              <option value="Fatai Balogun">Fatai Balogun</option>
              <option value="Sokoto Adewale">Sokoto Adewale</option>
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

const modalStyle = {
  width: "75%",
  height: "75%",
};
export default EditLogModal;
