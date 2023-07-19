"use client";

import React from "react";

interface formProps {
  value: number;
  onChange: (amount: number) => void;
}

const Form = ({ value, onChange }: formProps) => {
  return (
    <form className="w-full flex flex-col">
      <label>Monto en ARS</label>
      <input
        className="p-2 text-right border-2 rounded-full mt-2"
        id="input"
        type="number"
        value={ value === 0 ? ' ' : value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </form>
  );
};

export default Form;
