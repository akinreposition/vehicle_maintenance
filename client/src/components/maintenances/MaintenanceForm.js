import React, { useState } from "react";

const MaintenanceForm = () => {
  const [tyres, setTyres] = useState(false);
  const [engineOil, setEngineOil] = useState(false);
  const [gearOil, setGearOil] = useState(false);
  const [brakes, setBrakes] = useState(false);
  const [sideMirrors, setSideMirrors] = useState(false);
  const [attention, setAttention] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const checkList = {
      tyres,
      engineOil,
      brakes,
      sideMirrors,
      attention,
      gearOil,
    };
    console.log(checkList);
  };
  return (
    <div>
      <form>
        <div className="input-field col s12">
          <select onChange={(e) => setTyres(e.target.value)}>
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Poor">Poor</option>
            <option value="Bad">Bad</option>
          </select>
          <label>Tyres</label>
        </div>

        <div className="input-field col s12">
          <select onChange={(e) => setSideMirrors(e.target.value)}>
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Poor">Poor</option>
            <option value="Bad">Bad</option>
          </select>
          <label>Side Mirrors</label>
        </div>

        <div className="input-field col s12">
          <select onChange={(e) => setEngineOil(e.target.value)}>
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Poor">Poor</option>
            <option value="Bad">Bad</option>
          </select>
          <label>Engine oil</label>

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

        <div className="input-field col s12">
          <select onChange={(e) => setGearOil(e.target.value)}>
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Poor">Poor</option>
            <option value="Bad">Bad</option>
          </select>
          <label>Gear oil</label>
        </div>

        <div className="input-field col s12">
          <select onChange={(e) => setBrakes(e.target.value)}>
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Poor">Poor</option>
            <option value="Bad">Bad</option>
          </select>
          <label>Brakes</label>
        </div>
        {/* Switch  */}
        <div class="switch">
          <span>Head Lights </span>{" "}
          <label>
            Off
            <input type="checkbox" />
            <span class="lever"></span>
            On
          </label>
        </div>
        <div class="switch">
          <span>Brake Lights </span>{" "}
          <label>
            Off
            <input type="checkbox" />
            <span class="lever"></span>
            On
          </label>
        </div>
        <div class="switch">
          <span>Caution Lights </span>{" "}
          <label>
            Off
            <input type="checkbox" />
            <span class="lever"></span>
            On
          </label>
        </div>
        <div class="switch">
          <span>Reverse Lights </span>{" "}
          <label>
            Off
            <input type="checkbox" />
            <span class="lever"></span>
            On
          </label>
        </div>
        <input
          type="submit"
          onClick={onSubmit}
          value="Log"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default MaintenanceForm;
