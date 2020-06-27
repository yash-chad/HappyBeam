import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capilatize font-weight-bold ">
          <strong className="text-blue mx-3">{name}</strong>
          {title}
        </h1>
      </div>
    </div>
  );
}
