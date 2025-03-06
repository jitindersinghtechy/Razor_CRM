import React from "react";

interface ActivityProps {
  infoIcon: string;
  avatar: string;
}

interface ActivityItemProps {
  infoIcon: string;
  avatar: string;
  invoiceId: string;
  title: string;
  dateRange: string;
  userName: string;
  amount: string;
  badge: string;
  note: string;
}

const activityData: ActivityItemProps[] = [
  {
    infoIcon: "/path/to/info-icon.png",
    avatar: "/path/to/avatar.png",
    invoiceId: "INV-2376",
    title: "Sales Invoices",
    dateRange: "11/04/2013 - 11/19/2013",
    userName: "Robert T.",
    amount: "USD 6.26",
    badge: "History",
    note: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    infoIcon: "/path/to/info-icon.png",
    avatar: "/path/to/avatar.png",
    invoiceId: "INV-2377",
    title: "Purchase Order",
    dateRange: "12/10/2013 - 12/20/2013",
    userName: "Alice B.",
    amount: "USD 10.50",
    badge: "Approved",
    note: "Duis aute irure dolor in reprehenderit",
  },
];

const ActivityItem = ({
  infoIcon,
  avatar,
  invoiceId,
  title,
  dateRange,
  userName,
  amount,
  badge,
  note,
}: ActivityItemProps) => (
  <li className="item">
    <span className="step"></span>
    <div className="step-info">
      <span className="top-tag">{invoiceId}</span>
      <div className="info">
        <p className="title">{title}</p>
        <p className="sub-info">
          <span className="date">{dateRange}</span>
          <span className="separator">&bull;</span>
          <span className="profile">
            <img src={avatar} alt="" />
            <span>{userName}</span>
          </span>
          <span className="separator">&bull;</span>
          <span className="price">{amount}</span>
          <span className="separator">&bull;</span>
          <span className="badge-tag">{badge}</span>
        </p>
      </div>
      <div className="alert-box">
        <span className="title">
          <img src={infoIcon} alt="" />
          <span>Notes</span>
        </span>
        <p className="description">{note}</p>
      </div>
    </div>
  </li>
);

const Activity = ({ infoIcon, avatar }: ActivityProps) => {
  return (
    <ul className="timeline">
      {activityData.map((activity, index) => (
        <ActivityItem
          key={index}
          {...activity}
          infoIcon={infoIcon}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};

export default Activity;
