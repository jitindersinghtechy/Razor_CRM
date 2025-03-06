import React from "react";

interface Contact {
  initials: string;
  name: string;
  mobile: string;
  email: string;
}

type Contacts = Array<Contact>;

const Contacts = ({ addIcon }: { addIcon: string }) => {
    
    const contacts: Contact[] = [
        { initials: "EH", name: "Ethan Hall", mobile: "(901) 266-0573", email: "ethanhall7@gmail.com" },
        { initials: "MH", name: "Marcus Horrison", mobile: "(901) 266-0573", email: "ethanhall7@gmail.com" },
        { initials: "MV", name: "Max Verstappen", mobile: "(901) 266-0573", email: "ethanhall7@gmail.com" },
        { initials: "JD", name: "John Dought", mobile: "(901) 266-0573", email: "ethanhall7@gmail.com" },
        { initials: "EB", name: "Emily Buttler", mobile: "(901) 266-0573", email: "ethanhall7@gmail.com" },
        { initials: "EB", name: "Emily Buttler", mobile: "(901) 266-0573", email: "ethanhall7@gmail.com" },
        { initials: "EB", name: "Emily Buttler", mobile: "(901) 266-0573", email: "ethanhall7@gmail.com" },
        { initials: "EB", name: "Emily Buttler", mobile: "(901) 266-0573", email: "ethanhall7@gmail.com" },
        { initials: "RT", name: "Robert T.", mobile: "(901) 266-0573", email: "ethanhall7@gmail.com" },
        { initials: "RT", name: "Robert T.", mobile: "(901) 266-0573", email: "ethanhall7@gmail.com" }
      ];

  return (
    <>
      <div className="contact-items">
        <div className="row bottom-blur">
          {contacts.map((contact: Contact, index: number) => (
            <div className="col-6">
              <div className="contact-list">
                <span className="initial">{contact.initials}</span>
                <div className="info">
                  <span className="title">{contact.name}</span>
                  <p className="sub-title">
                    <span className="contact">{contact.mobile}</span>
                    <span className="separator">&bull;</span>
                    <span className="email">{contact.email}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="" className="view-action">
          View All Contact
        </a>
      </div>
      <a href="" className="add-icon">
        <img src={addIcon} alt="" />
      </a>
    </>
  );
};

export default Contacts;
