import React, { Fragment, useState } from "react";
import car_inspection from "../../asset/car_inspection.jpg";
import M from "materialize-css/dist/js/materialize.min.js";

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
    if (driver === "") {
      M.toast({ html: "Input driver name" });
    } else {
      console.log(driver, vehicleName, vehicleModel, plateNumber);
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
      <h6 className="text-center"> Vehicle Status</h6>
      <div className="grid-2">
        <div className="py-3">
          <img
            src={car_inspection}
            width="auto"
            height="auto"
            alt="vehicle inspection"
          />
        </div>
        <div >
          <section className="grid-2" style={modalStyle}>
            <form className="m-card">
              <span>
                <div className="row">
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
                </div>

                <div className="row">
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
                </div>

                <div className="row">
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
                </div>

                <div className="row">
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
                </div>
              </span>
              <span>
                <div className="row">
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
                </div>

                <div className="row">
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
                </div>

                <div className="row">
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
                </div>
              </span>

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
          </section>
        </div>
      </div>
    </Fragment>
  );
};

const modalStyle = {
  width: "90%",
  height: "75%",
};
export default AddMaintenanceModal;
