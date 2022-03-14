import React, { VFC, useState, useEffect } from 'react';
import './index.css';

type Props = {
  id: string;
  value: string;
  type: string;
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
  errorMessage?: string;
};

const Input: VFC<Props> = (props: Props) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    if(!props.value) setValue('')
  }, [props.value])
  
  return (
    <div className="input-default">
      <label
        htmlFor="input-default"
        style={{ color: props.error ? 'red' : '' }}
      >
        {props.required ? props.label +'*' : props.label}
      </label>
      <input
        required={props.required}
        id={props.id}
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          props.onChange(target.value);
        }}
        type={props.type}
        placeholder={props.placeholder}
        style={{ border: props.error ? '1px solid red' : '' }}
      />
      {props.error && <span>{props.errorMessage}</span>}
    </div>
  );
};

export default Input;
