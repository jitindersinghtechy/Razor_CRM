import React from "react";

interface HeadquartersInfo {
  location: string;
  number: string;
  street: string;
  country: string;
  zipCode: string;
}

const headquartersData: HeadquartersInfo = {
  location: "1693 Alice Court, Annapolis MD 21401",
  number: "74 H",
  street: "Concorde Park",
  country: "Jefferson",
  zipCode: "17662",
};

const AddressInfoItem = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <div className="address-list">
    <span className="title">{title}</span>
    <p className="sub-title">{value}</p>
  </div>
);

const Headquarters = ({ frameMap }: { frameMap: string }) => {
  return (
    <>
      <div className="contact-items">
        <div className="row mb-0">
          <div className="col-6">
            <img src={frameMap} alt="Map" className="w-full" />
          </div>
          <div className="col-6">
            <div className="map-info">
              <AddressInfoItem
                title="Location"
                value={headquartersData.location}
              />
              <div className="one-line-info">
                <AddressInfoItem
                  title="Number"
                  value={headquartersData.number}
                />
                <AddressInfoItem
                  title="Street"
                  value={headquartersData.street}
                />
              </div>
              <div className="one-line-info">
                <AddressInfoItem
                  title="Country"
                  value={headquartersData.country}
                />
                <AddressInfoItem
                  title="ZIP Code"
                  value={headquartersData.zipCode}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headquarters;
