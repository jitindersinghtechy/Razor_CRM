import React from "react";
import InfoItem from "../common/InfoItem";

interface AccountSummaryProps {
  balance: {
    date: string;
    value: string;
  };
  lastPayment: {
    date: string;
    value: string;
  };
  credits: string;
  prePayments: string;
}

const AccountSummary = () => {
  const summary: AccountSummaryProps = {
    balance: {
      date: "09/02/2020",
      value: "-",
    },
    lastPayment: {
      date: "09/02/2020",
      value: "-",
    },
    credits: "-",
    prePayments: "-",
  };

  return (
    <ul>
      <InfoItem label="Balance" value={summary.balance.date} />
      <InfoItem label="Last Payment" value={summary.lastPayment.date} />
      <InfoItem label="Credits" value={summary.credits} />
      <InfoItem label="Pre-Payments" value={summary.prePayments} />
    </ul>
  );
};

export default AccountSummary;
