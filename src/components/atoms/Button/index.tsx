import React, { VFC } from 'react';
import './index.css';

type Props = {
  onClick?: () => void;
  label: string;
  typeProp: 'positive' | 'negative' | 'neutral';
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: VFC<Props> = (props: Props) => {
  return (
    <button
      type={props.type}
      className={props.typeProp}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
