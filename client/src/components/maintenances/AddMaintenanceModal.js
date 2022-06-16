import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import car_inspection from "../../asset/car_inspection.jpg";
import M from "materialize-css/dist/js/materialize.min.js";
import { AddMaintenance } from "../../actions/maintenanceAction";
import PropTypes from "prop-types";

const AddMaintenanceModal = () => {
  const [vehicleInspection, setVehicleInspection] = useState({
    driver: "",
    vehicleName: "",
    vehicleModel: "",
    plateNumber: "",
    tyres: "",
    engineOil: "",
    radiatorWater: "",
  });
  const {
    driver,
    vehicleName,
    vehicleModel,
    plateNumber,
    tyres,
    engineOil,
    radiatorWater,
  } = vehicleInspection;

  const onChange = (e) =>
    setVehicleInspection({
      ...vehicleInspection,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      driver === "" ||
      vehicleName === "" ||
      vehicleModel === "" ||
      plateNumber === "" ||
      engineOil === "" ||
      radiatorWater === ""
    ) {
      M.toast({ html: 'Incomplete vehicle credential!' });
    } else {
      AddMaintenance({
        driver,
        vehicleName,
        vehicleModel,
        plateNumber,
        engineOil,
        radiatorWater,
      });
      console.log(
        driver,
        vehicleName,
        vehicleModel,
        plateNumber,
        engineOil,
        radiatorWater
      );
    }
    setVehicleInspection({
      driver: "",
      vehicleName: "",
      vehicleModel: "",
      plateNumber: "",
      tyres: "",
      engineOil: "",
      radiatorWater: "",
    });
  };
  return (
    <Fragment>
      <h5
        className="text-center head-maintenance"
        style={{ fontWeight: "18px" }}
      >
        {" "}
        VEHICLE STATUS
      </h5>
      <div className="grid-2">
        <div className="my-6 py-3">
          <img
            src={car_inspection}
            width="auto"
            height="auto"
            alt="vehicle inspection"
          />
        </div>
        <div>
          <form className="m-card">
            <div className="form-group">
              <label htmlFor="driver">Driver Name</label>
              <input
                type="text"
                name="driver"
                value={driver}
                onChange={onChange}
                placeholder="e.g John Smith"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="driver">Vehicle Name</label>
              <input
                type="text"
                name="vehicleName"
                value={vehicleName}
                onChange={onChange}
                placeholder="e.g Lexus Rx350"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="driver">Vehicle model</label>
              <input
                type="number"
                name="vehicleModel"
                value={vehicleModel}
                onChange={onChange}
                placeholder="e.g 2015"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="driver">Plate Number</label>
              <input
                type="text"
                name="plateNumber"
                value={plateNumber}
                onChange={onChange}
                placeholder="e.g KJA123 EP"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="driver">Engine Oil</label>
              <input
                type="text"
                name="engineOil"
                value={engineOil}
                onChange={onChange}
                placeholder="e.g Good, poor, Bad"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="driver">Radiator Water</label>
              <input
                type="text"
                name="radiatorWater"
                value={radiatorWater}
                onChange={onChange}
                placeholder="e.g full / empty"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="driver">Tyres</label>
              <input
                type="text"
                name="tyres"
                value={tyres}
                onChange={onChange}
                placeholder="e.g Good, poor, Bad"
                required
              />
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
          </form>
        </div>
      </div>
    </Fragment>
  );
};

AddMaintenance.propTypes = {
  AddMaintenance: PropTypes.func.isRequired,
};
export default connect(null, { AddMaintenance })(AddMaintenanceModal);
