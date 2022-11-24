// import React from "react";

export default function Clock(props) {
  const { date } = props;

  return (
    <div>
      <h1>Now</h1>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

// export default class Clock extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Now</h1>
//                 <h1>{this.props.date.toLocaleTimeString()}</h1>
//             </div>
//         );
//     }
// }
