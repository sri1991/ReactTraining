import React from "react";

const User = props => {
  const age = props.age ? props.age : "NA";
  if (props.name) {
    return (
      <div>
        Name: {props.name} | Age: {age}
      </div>
    );
  } else {
    return <div>Invalid Entry</div>
  }
};

export default User;

// Simple Example for Functional Components

// const User = (props) => {
//     return (
//      <div>
//         Name: {props.name} | Age: {age}
//       </div>
//     )
// }