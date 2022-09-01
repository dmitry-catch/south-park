// import React, { Component } from "react";
// import GetData from "../../services/getData";

// import "./familie.sass";

// export default class Familie extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "So come on down",
//       sex: "to South Park!",
//       age: "and meet some friends of mine",
//       //{}
//       loading: true,
//     };
//     this.asyncGetChar = this.asyncGetChar.bind(this);
//   }

//   GetData = new GetData();

//   getRandomChar() {
//     const random = Math.floor(1 + Math.random() * 207); //208 characters all
//     this.GetData.fetchRequest(`characters`, random).then(this.charLoaded);
//   }

//   charLoaded = (resp) => {
//     this.setState({
//       name: resp.data.name,
//       age: resp.data.age,
//       sex: resp.data.sex,
//       loading: false,
//     });
//   };

//   asyncGetChar() {
//     this.interval = setInterval(() => {
//       this.getRandomChar();
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     const { loading } = this.state;
//     const content = loading ? (
//       <h2>loading</h2>
//     ) : (
//       <View age={this.state.age} name={this.state.name} sex={this.state.sex} />
//     );
//     return (
//       <>
//         {content}
//         <Button onClick={this.asyncGetChar}>Roll!</Button>
//       </>
//     );
//   }
// }
