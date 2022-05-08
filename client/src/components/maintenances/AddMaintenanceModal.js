import React, { useState } from "react";
import TechSelectOptions from "../techs/TechSelectOptions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMaintenance } from "../../actions/maintenanceAction";
import M from "materialize-css/dist/js/materialize.min.js";

const AddMaintenanceModal = ({ addMaintenance }) => {
  const [attention, setAttention] = useState(false);
  const [radiatorWater, setRadiatorWater] = useState(false);
  const [tyre, setTyre] = useState(true);
  const [engineOil, setEngineOil] = useState(true);
  const [headLight, setHeadLight] = useState(true);

  const [dailyChecks, setDailyChecks] = useState({
    driver: "",
    technician: "",
    mileage: "",
    message: "",
  });
  const onChange = (e) =>
    setDailyChecks({ ...dailyChecks, [e.target.name]: e.target.value });

  const { driver, mileage, message, technician } = dailyChecks;

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "") {
      M.toast({ html: "please enter a message" });
    } else if (driver === "") {
      M.toast({ html: "please enter a driver name" });
    } else if (mileage === "") {
      M.toast({ html: "please enter a mileage" });
    } else {
      const newMaintenace = {
        attention,
        message,
        driver,
        radiatorWater,
        tyre,
        engineOil,
        headLight,
        date: new Date(),
      };

      addMaintenance(newMaintenace);

      M.toast({ html: `Maintenace checked by ${driver}` });

      // Clear Fields
      setDailyChecks({
        driver: "",
        mileage: "",
        message: "",
      });
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4> Vehicle Daily Check</h4>

        <div className="row>">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={onChange}
            />
            <label htmlFor="message" className="active">
              Vehicle state
            </label>
          </div>
        </div>

        <div className="row>">
          <div className="input-field">
            <input
              type="number"
              name="mileage"
              value={mileage}
              onChange={onChange}
            />
            <label htmlFor="mileage" className="active">
              Mileage
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="driver"
              value={driver}
              className="browser-default"
              onChange={onChange}
            >
              <option value="" disabled>
                Select Driver
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tehcnician"
              value={technician}
              className="browser-default"
              onChange={onChange}
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
                {" "}
                Radiator
                <input
                  type="radio"
                  className="radio"
                  checked={radiatorWater}
                  onChange={(e) => setRadiatorWater(!radiatorWater)}
                />
              </label>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                {" "}
                Tyre
                <input
                  type="radio"
                  className="radio"
                  checked={tyre}
                  onChange={(e) => setTyre(tyre)}
                />
              </label>
            </p>
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
AddMaintenanceModal.propTypes = {
  addMaintenance: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "75%",
  height: "75%",
};
export default connect(null, { addMaintenance })(AddMaintenanceModal);
