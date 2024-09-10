import React from "react";

const Button = ({ className, href, text, target }) => {
  const classes = `font-bold w-[15rem] bg-secondary px-[2em] py-[0.5em] rounded-none bg-[length:300%] text-primary transition-all duration-500 shadow-1 hover:bg-orange hover:shadow-2 hover:bg-left ${className} || '' `;

  const renderButton = () => <button className={classes}>{text}</button>;

  const renderLink = () => (
    <a target={target} href={href} className={classes}>
      {text}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
