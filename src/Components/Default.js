import React, { Component } from "react";

export default class Default extends Component {
  render() {
    const url = this.props.location.pathname;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 col-mx-auto text-center text-title text-uppercase pt-5">
              <h1 className="dispaly-3"> 404</h1>
              <h1>Error!</h1>
              <h2>page not found</h2>
              <h3>
                The requested URL <span className="text-danger">{url}</span> was
                not found
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
