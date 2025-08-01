import React from "react";
import Revision from "../RevisionComponent/Revision";
import { products } from "../RevisionComponent/allProducts";
export default function Test() {
//   let groupName = "Group FullStack 136 ";
  return (
    <div>
      {/* <Revision groupName={groupName}></Revision> */}
      <Revision products={products}></Revision>
    </div>
  );
}
