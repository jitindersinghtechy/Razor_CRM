import React from "react";

const MenuItem = ({ title }: { title: string }) => {
  return (
    <li>
      <span className="menu-name">{title}</span>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.03596 1.13594C1.29224 0.879655 1.70776 0.879655 1.96404 1.13594L5 4.1719L8.03596 1.13594C8.29224 0.879655 8.70776 0.879655 8.96404 1.13594C9.22032 1.39222 9.22032 1.80773 8.96404 2.06401L5.46404 5.56401C5.34097 5.68709 5.17405 5.75623 5 5.75623C4.82595 5.75623 4.65903 5.68709 4.53596 5.56401L1.03596 2.06401C0.77968 1.80773 0.77968 1.39222 1.03596 1.13594Z"
          fill="#99A5B2"
        />
      </svg>
    </li>
  );
};

export default MenuItem;
