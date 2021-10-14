import React from "react";
import FilterLink from "../containers/FilterLink";

const Footer = () => {
    return  <div>
        <FilterLink filter='SHOW_ALL'>SHOW_ALL</FilterLink>
        <FilterLink filter='SHOW_ACTIVE'>SHOW_ACTIVE</FilterLink>
        <FilterLink filter='SHOW_COMPLETED'>SHOW_COMPLETED</FilterLink>
    </div>
}

export default Footer