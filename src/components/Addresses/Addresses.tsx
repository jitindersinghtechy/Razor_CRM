import React from "react";

interface Address {
  addressType: string;
  address: string;
}

type AddressesType = Array<Address>;

const Addresses = ({ addIcon }: { addIcon: string }) => {

   const addresses: AddressesType = [
        { addressType: "Main Address", address: "5331 Rexford Court, Montgomery AL 36116" },
        { addressType: "Store 1", address: "1693 Alice Court, Annapolis MD 21401" },
        { addressType: "Warehouse", address: "915 Heath Drive Court, Montgomery AL 36108" },
        { addressType: "Razor", address: "19141 Pine Ridge Circle, Anchorage AK 99516" },
        { addressType: "Office", address: "8642 Yule Street Court, Arvada CO 80007" },
        { addressType: "Office", address: "8642 Yule Street Court, Arvada CO 80007" },
        { addressType: "Office", address: "8642 Yule Street Court, Arvada CO 80007" },
        { addressType: "Office", address: "8642 Yule Street Court, Arvada CO 80007" }
    ];

  return (
    <>
      <div className="contact-items">
        <div className="row">
          {addresses.map((address: Address, index: number) => (
            <div className="col-6">
              <div className="address-list">
                <span className="title">{address.addressType}</span>
                <p className="sub-title">{address.address}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="" className="view-action">
          View All Addresses
        </a>
      </div>
      <a href="" className="add-icon">
        <img src={addIcon} alt="" />
      </a>
    </>
  );
};

export default Addresses;
