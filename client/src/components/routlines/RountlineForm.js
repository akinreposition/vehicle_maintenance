import React, { useState } from "react";

const RountlineForm = () => {
  const [vehicleChecks, setVehicleChecks] = useState({
    // tyres: "bad",
    // sideMirrors: "",
    // engineOil: "",
    // gearOil: "",
    // radiator: "",
    // seatBelt: "",
    type : "Good"
  });

//   const { tyres, sideMirrors, engineOil, gearOil, radiator, seatBelt } =
//     vehicleChecks;

    // const { type } = vehicleChecks;

  const onChange = (e) =>
    setVehicleChecks({ ...vehicleChecks, [e.target.name]: e.target.value });
  return (
    <div>
      <form>
        Tyres{" "}
        <input
          type="radio"
          name="tyres"
          value="good"
        //   onChange={onChange}
        />{" "}
        Side Mirrors{" "}
        <input
          type="checkbox"
          name="sideMirrors"
          value="sideMirrors"
          // checked={type === "master"}
          onChange={onChange}
        />{" "}
        Engine oil{" "}
        <input
          type="radio"
          name="engineOil"
        //   value={engineOil}
          // checked={type === "master"}
          onChange={onChange}
        />
        Gear oil{" "}
        <input
          type="radio"
          name="gearOil"
        //   value={gearOil}
          // checked={type === "master"}
          onChange={onChange}
        />
        Radiator{" "}
        <input
          type="radio"
          name="radiator"
        //   value={radiator}
          // checked={type === "master"}
          onChange={onChange}
        />
        Seat Belt{" "}
        <input
          type="radio"
          name="seatBelt"
        //   value={seatBelt}
          // checked={type === "master"}
          onChange={onChange}
        />
        <div>
            <input
                type='submit'
                value="Log"
                className="btn btn-primary btn-block"
            />
            </div>
      </form>
    </div>
  );
};

export default RountlineForm;
