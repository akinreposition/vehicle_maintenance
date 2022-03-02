import React from "react";

const SectionOne = () => {
  return (
    <div className="container">
      <section className="card">
        <h4 className="text-center text-primary">
          INCIDENT ESCALATION PROCEDURE
        </h4>
        <h6 className="text-center text-gray">
          <strong>FIRST AID CASES </strong>{" "}
        </h6>
        <ol className="my-3 text-gray">
          <li>
            {" "}
            Use the First Aid kit from the First Aid box for treatment, and log
            it on the First Aid Book (minor First Aid)
          </li>
          <li>
            Send the injured to the clinic or nearby hospital immediately for
            medical assistance (for non-minor First Aid){" "}
          </li>
          <li>Notify Line manager within the Hour </li>
          <li>This is discussed in Departmental / Divisional meeting </li>
          <li>To be discussed in Leadership Team meeting</li>
        </ol>
      </section>
    </div>
  );
};

export default SectionOne;
