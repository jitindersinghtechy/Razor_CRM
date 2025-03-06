import React from "react";
import avtar from "../../assets/img/Avatar.png";

const AccountSummary = () => {
  return (
    <div className="info">
      <img src={avtar} alt="IBM Logo" />
      <div>
        <h3 className="title">IBM Corporation</h3>
        <p className="sub-title">General Manager</p>
      </div>
    </div>
  );
};

const LeftArrow = () => {
  return (
    <a href="" className="icon">
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.853478 5.3536C0.658215 5.15834 0.658216 4.84176 0.853478 4.64649L4.64637 0.853602C4.96135 0.53862 5.49992 0.761703 5.49992 1.20716L5.49992 8.79294C5.49992 9.23839 4.96135 9.46148 4.64637 9.1465L0.853478 5.3536Z"
          fill="#A1A9B2"
        />
      </svg>
    </a>
  );
};

const RightArrow = () => {
  return (
    <a href="" className="icon">
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.14645 5.3536C5.34171 5.15834 5.34171 4.84176 5.14645 4.64649L1.35355 0.853602C1.03857 0.53862 0.5 0.761703 0.5 1.20716L0.5 8.79294C0.5 9.23839 1.03857 9.46148 1.35355 9.1465L5.14645 5.3536Z"
          fill="#434D59"
        />
      </svg>
    </a>
  );
};

const PaginationControls = () => {
  return (
    <div className="pagination">
      <span className="count">1 of 29</span>
      <div>
        <LeftArrow />
        <RightArrow />
      </div>
    </div>
  );
};

const UserInfoCard = () => {
  return (
    <div className="profile-details">
      <AccountSummary />
      <PaginationControls />
    </div>
  );
};

export default UserInfoCard;
