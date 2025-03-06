import React from "react";

const InfoItem = ({ label, value }: { label: string; value?: string }) => {
  return (
    <li>
      <span className="title">{label}</span>
      <span className="sub-title">{value}</span>
    </li>
  );
};

export default InfoItem;
