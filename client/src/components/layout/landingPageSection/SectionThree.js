import React from "react";

const SectionThree = () => {
  return (
    <div className="container">
      <section className="card">
        <h4 className="text-center text-primary">FATALITY</h4>
        <ol className="my-3 text-gray">
          <li>
            {" "}
            Inform Line Manager, Safety, Security & Legal -immediately.
          </li>
          <li>
            Inform clinic / Ambulance (immediately) for site related incident{" "}
          </li>
          <li>Inform Insurance - for road traffic related incident </li>
          <li>
            Line Manager to inform -Safety/Security/Legal/Insurance{" "}
          </li>
          <li>
            The Functional Head / Director notifies the Managing Director(immediately)
            (within the hour). {" "}
          </li>
          {/* <li>The Managing Director notifies Group Leadership Team & MD Diageo Africa (within the Hour) {" "}</li>
          <li>Africa Execs are notified with 24 hours</li> */}
        </ol>
      </section>
    </div>
  );
};

export default SectionThree;
