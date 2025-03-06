import React from "react";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  image?: string;
  classname?: string;
  withHeaderBorderClass?:string
}

const Card: React.FC<CardProps> = ({ children, title, image, classname, withHeaderBorderClass }) => {
  return (
    <>
      <div className={`${classname}`}>
        <div className={`card-item w-full text-left ${withHeaderBorderClass}`}>
          <div className="header">
            <img src={image} alt="" />
            <span className="title">{title}</span>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
