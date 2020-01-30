import React from "react";

export class Navigation extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Schnitzeljagd AR
          </p>
        </div>
      </div>
    );
  }
}
