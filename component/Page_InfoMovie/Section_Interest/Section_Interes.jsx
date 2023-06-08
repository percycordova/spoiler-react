import React from "react";

const SectionInteres = () => {
  return (
    <section className="section_interes">
      <h3 className="section_interes-title">También te puede interesar</h3>
      <div className="section_interes-imgs">
        <div className="container__imgs">
          <img src="static/prueba_spoiler/interes_1.png" alt="" />
          <img src="static/prueba_spoiler/interes_2.png" alt="" />
          <img src="static/prueba_spoiler/interes_3.png" alt="" />
        </div>
      </div>
      <style jsx>
        {`
          .section_interes {
          }
          .section_interes-title {
            font-family: "Roboto Condensed";
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 22px;
            color: #ffffff;
            margin-bottom: 8px;
          }
          .container__imgs {
            display: flex;
            gap: 16px;
            flex-direction: column;
          }
          @media (min-width: 999px) {
            .container__imgs {
              justify-content: space-between;
              flex-direction: row;
            }
          }
        `}
      </style>
    </section>
  );
};

export default SectionInteres;
