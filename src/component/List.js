import React from "react";
import CardCst from "./CardCst";

const List = ({ Object }) => {
  return (
    <div>
      {Object.articles.map((elt) => (
        <CardCst key={elt.id} article={elt} />
      ))}
      <h3>somme: {Object.somme} </h3>
    </div>
  );
};

export default List;
