import react, { Component } from "react";
import axios from "axios";
r;
class postlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://schnitzeljagdar.herokuapp.com/users/getAllUser")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <div>Hello</div>;
  }
}
