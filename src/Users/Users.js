import React, { Component } from "react";
import User from "./user";

class Users extends Component {
  state = {
    users: [
      { name: "Sri", age: 25 },
      { name: "Kishore", age: 40 },
      { name: "XYZ", age: 35 },
      { name: "Sri", age: 25 },
      { name: "Kishore", age: 40 },
      { name: "XYZ", age: 35 },
      { name: "Sri", age: 25 },
      { name: "Kishore", age: 40 },
      { name: "XYZ", age: 35 },
      { name: "Sri", age: 25 },
      { name: "Kishore", age: 40 },
      { name: "XYZ", age: 35 }
    ],
    title: "User List"
  };

  changeTitle = () => {
    this.setState({
     title:"New User List"
    })
  }

  makemeYounger = () => {
    // this.setState({
    // users: [
    //   { name: "Sri", age: 15 },
    //   { name: "Kishore", age: 30 },
    //   { name: "XYZ", age: 25 }
    // ]
    // })

    const newState = this.state.users.map((user) => {
      const tempUser = user;
      tempUser.age-=5;
      return tempUser;
    })

    this.setState({users:newState})

  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1> {/* accessing title from the state */}
        <button onClick={this.changeTitle}>Change Title</button>
        <br />
        {
        this.state.users.map((user)=>{
         return <User name={user.name} age={user.age} />
        })
        }
        <button onClick={this.makemeYounger}>Reduce my age by 5</button>
      </div>
    );
  }
}

export default Users;
