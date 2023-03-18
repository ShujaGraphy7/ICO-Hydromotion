import React from "react";
import QnA_Left from "./QnA_Left";
import QnA_Right from "./QnA_Right";
import "../../Custom.css";
function QnA() {
  return (
    <>
      <div className=" QnA_bg">
        <div className=" bg-[#ffffffaf] py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between mx-auto xs:w-[90vw] md:w-[80vw] my-10">
            <QnA_Left />
            <QnA_Right />
          </div>
        </div>
      </div>
    </>
  );
}

export default QnA;
