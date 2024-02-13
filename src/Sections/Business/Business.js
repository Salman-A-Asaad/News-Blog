import React from "react";
import { Card, ModalCard, Spinner } from "../../Components/index";
const Business = ({ business }) => {
  return (
    <>
      {business == null ? (
        <Spinner />
      ) : (
        business?.map((ele, index) => {
          ele.index = index;
          return <Card key={index} article={ele} />;
        })
      )}
      {business?.map((ele, index) => {
        ele.index = index;
        return <ModalCard key={index} article={ele} />;
      })}
    </>
  );
};

export default Business;
