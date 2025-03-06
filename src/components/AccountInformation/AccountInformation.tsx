import React from "react";
import InfoItem from "../common/InfoItem";

interface AccountInfo {
  customer: string;
  rep: string;
  csrRep: string;
  reference: string;
  soTerms: string;
  poTerms: string;
  accountCode: string;
}

const AccountInformation = () => {
  const accountInfo: AccountInfo = {
    customer: "IBM Corporation",
    rep: "Rob T.",
    csrRep: "Emily W.",
    reference: "-",
    soTerms: "30 Days",
    poTerms: "Net 0",
    accountCode: "IM1222322",
  };

  return (
    <>
      <ul>
        <InfoItem label="Customer" value={accountInfo.customer} />
        <InfoItem label="REP" value={accountInfo.rep} />
        <InfoItem label="CSR REP" value={accountInfo.csrRep} />
        <InfoItem label="Reference" value={accountInfo.reference} />
        <InfoItem label="SO Terms" value={accountInfo.soTerms} />
        <InfoItem label="PO Terms" value={accountInfo.poTerms} />
        <InfoItem label="Account Code" value={accountInfo.accountCode} />
      </ul>
    </>
  );
};
export default AccountInformation;
