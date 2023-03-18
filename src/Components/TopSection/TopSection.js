import React from "react";
import Left from "./Left";
import Right from "./Right";
import SocialMedia from "./SocialMedia";

function TopSection() {
  return (
    <div>
      <div className="p-2 md:p-12 grid xs:grid-cols-1 lg:grid-cols-2 lg:mx-24">
        
        <Left />
        
        <div id="BuyNow">

        <Right />
        </div>
      </div>
        <div className="pb-5">
          <SocialMedia />
        </div>
    </div>
  );
}

export default TopSection;
