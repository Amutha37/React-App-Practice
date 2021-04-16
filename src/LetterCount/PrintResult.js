import React from "react";
// import App from "./App"

const PrintResult = ({ allResult, allMost, allStatus, allText }) => {
  if (!allText) {
    allMost = "";
    allResult = [];
  }

  return (
    <div className="listing">
      {/* console.log({allResult} */}
      {allStatus ? (
        <p>
          Favourite letters are : {allResult} counts : {allMost}
        </p>
      ) : (
        <p>
          Favourite letter is : {allResult} count : {allMost}
        </p>
      )}
    </div>
  );
};

export default PrintResult;
