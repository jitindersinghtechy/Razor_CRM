import React from "react";

const PageHeaderTitle = () => {
  return (
    <div className="header-navigation">
      <a className="back-icon">
        <svg
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.12994 0.46967C6.42283 0.762563 6.42283 1.23744 6.12994 1.53033L2.66027 5L6.12994 8.46967C6.42283 8.76256 6.42283 9.23744 6.12994 9.53033C5.83705 9.82322 5.36217 9.82322 5.06928 9.53033L1.06928 5.53033C0.776386 5.23744 0.776386 4.76256 1.06928 4.46967L5.06928 0.46967C5.36217 0.176777 5.83705 0.176777 6.12994 0.46967Z"
            fill="#1F76EF"
          />
        </svg>
      </a>
      <h1>Account Details</h1>
    </div>
  );
};

export default PageHeaderTitle;
