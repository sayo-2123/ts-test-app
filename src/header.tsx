import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="siteName">
        <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
          Blog
        </Link>
      </div>
      <div className="toSupportPage">
        <Link
          to={`/contact`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          お問い合わせ
        </Link>
      </div>
    </header>
  );
};