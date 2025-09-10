"use client";
import { Fragment } from "react";

const BeverageMenu = () => {
  return (
    <Fragment>
      <div className="w-full h-screen">
        <iframe
          src="/images/beverage Menu.pdf"
          className="w-full h-full border-0"
          title="Beverage Menu PDF"
        />
      </div>
    </Fragment>
  );
};
export default BeverageMenu;