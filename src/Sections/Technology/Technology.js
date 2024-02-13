import React from "react";
import { Card, ModalCard, Spinner } from "../../Components/index";
const Technology = ({ technology }) => {
  return (
    <>
      {technology == null ? (
        <Spinner />
      ) : (
        technology?.map((ele, index) => {
          ele.index = index;
          return <Card key={index} article={ele} />;
        })
      )}
      {technology?.map((ele, index) => {
        ele.index = index;
        return <ModalCard key={index} article={ele} />;
      })}
    </>
  );
};

export default Technology;
