import React from "react";
import InfoItem from "../common/InfoItem";

interface BillingAddressInfo {
  location: string;
  hnumber: string;
  street: string;
  country: string;
  zipCode: string;
  vat: string;
  code: string;
  city: string;
}
const BillingAddress = () => {
  const billingAddressInfo: BillingAddressInfo = {
    location: "IBM Corporation",
    hnumber: "Rob T.",
    street: "Emily W.",
    country: "-",
    zipCode: "30 Days",
    vat: "Net 0",
    code: "IM1222322",
    city: "IM1222322",
  };

  return (
    <>
      <ul>
        <InfoItem label="Location" value={billingAddressInfo.location} />
        <InfoItem label="Number" value={billingAddressInfo.hnumber} />
        <InfoItem label="Street" value={billingAddressInfo.street} />
        <InfoItem label="Country" value={billingAddressInfo.country} />
        <InfoItem label="Zip Code" value={billingAddressInfo.zipCode} />
        <InfoItem label="Phone" value={billingAddressInfo.vat} />
        <InfoItem label="VAT" value={billingAddressInfo.code} />
        <InfoItem label="Code" value={billingAddressInfo.city} />
      </ul>
    </>
  );
};
export default BillingAddress;
