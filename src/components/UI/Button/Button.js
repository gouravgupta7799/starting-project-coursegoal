import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick} style={{ background: !props.isValid ? 'rgb(173, 17, 17)' : 'black' }}>
      {props.children}
    </button>
  );
};

export default Button;
