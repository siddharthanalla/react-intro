import React from "react";
function Footer(props) {
  return props.length === 0 ? (
    <footer>All tasks done! Good Work</footer>
  ) : (
    <footer>Just {props.length} more tasks to go!</footer>
  );
}
export default Footer;
