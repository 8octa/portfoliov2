import React from "react";

const Button = ({ className, href, text }) => {
  const classes = `relative infline-flex font-bold tracking-tighter text-primary bg-secondary px-[2em] py-[0.5em] rounded-none bg-[length:300%] shadow-1 transition-all duration-500 hover:bg-orange hover:shadow-2 hover:bg-left ${className} || '' `;

  const renderButton = () => <button className={classes}>{text}</button>;

  const renderLink = () => (
    <a href={href} className={classes}>
      {text}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
