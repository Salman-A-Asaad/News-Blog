import React from "react";
import { Card, ModalCard, Spinner } from "../../Components/index";
const Sports = ({ sports }) => {
  return (
    <>
      {sports == null ? (
        <Spinner />
      ) : (
        sports?.map((ele, index) => {
          ele.index = index;
          return <Card key={index} article={ele} />;
        })
      )}
      {sports?.map((ele, index) => {
        ele.index = index;
        return <ModalCard key={index} article={ele} />;
      })}
    </>
  );
};

export default Sports;
