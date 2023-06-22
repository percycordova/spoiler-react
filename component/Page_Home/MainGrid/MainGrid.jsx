import React from "react";
import MediumCard from "../MediumCard/MediumCard";
import SmallCard from "../SmallCard/SmallCard";
import DegradedCard from "../DegradedCard/DegradedCard";

const MainGrid = ({ data }) => {
  const dataOne = data?.articles?.data[0];
  const dataTwo = data?.articles?.data[1];
  const dataThree = data?.articles?.data[2];
  let cardOne = null;
  console.log("dataOne", dataOne);

  if (data?.articles?.data.length > 0) {
    if (dataOne) {
      cardOne = <DegradedCard 
      title={"test"}  
      sectionName={"test sections"}
      />;
    }
  } else {
    return null;
  }

  return (
    <>
      <div className="container__main"></div>
      {cardOne}
      <style>{`
      .container__main {
        display:flex;
        margin-bottom:24px;
        justify-content: space-between;
        flex-direction: column;
        gap:16px;
      }
      .firstColumn__container {
        display: flex;
        flex-direction: column;
        gap:16px;
      }
      .thirdColumn__container {
        display: flex;
        flex-direction: column;
        gap:16px;
        margin-bottom:24px;
      }
      .firstColumn__container .container__two{
        display: flex;
        flex-direction: row;
        gap:16px
      }
      .secondColumn__container {
        display: flex;
        flex-direction: row;
        gap:16px;
      }
      
      @media (min-width: 999px) {
        .container__main {
          flex-direction: row;
        }
        .firstColumn__container {
          flex-direction: row-reverse;
          width:742px;
          justify-content: space-between;
        }
        .firstColumn__container .container__one{
           width:516px;
        }
        .firstColumn__container .container__two{
          flex-direction: column;
          width: calc(100% - 532px);
       }
        .secondColumn__container{
          width: calc(100% - 758px);
        }
        .secondColumn__container {
          flex-direction: column;
        }
        .thirdColumn__container {
          flex-direction: row;
        }
      }

      `}</style>
    </>
  );
};

export default MainGrid;
