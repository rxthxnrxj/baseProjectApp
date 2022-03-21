import React from "react";

function Footer() {
  return (
    <div className="text-center mb-3">
      A project showcase by{" "}
      <a
        href="https://github.com/rxthxnrxj"
        className="footerTag"
        style={{ color: "#2444bc", textDecoration: "none !important" }}
      >
        @yourUserName
      </a>
    </div>
  );
}

export default Footer;
