import { Ref } from "react";

type TextareaControlProps = {
  value: string;
  setValue: (value: string) => void;
  label: string;
  placeholder?: string;
  innerRef?: Ref<HTMLTextAreaElement>;
};

export const TextareaControl = ({
  value,
  setValue,
  label,
  placeholder,
  innerRef,
}: TextareaControlProps) => {
  const id = Math.random().toString();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        onInput={(e) => setValue(e.currentTarget.value)}
        ref={innerRef}
      />
    </div>
  );
};

type InputControlProps = {
  value: string;
  setValue: (value: string) => void;
  label: string;
  placeholder?: string;
  innerRef?: Ref<HTMLInputElement>;
};

export const InputControl = ({
  value,
  setValue,
  label,
  placeholder,
  innerRef,
}: InputControlProps) => {
  const id = Math.random().toString();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        placeholder={placeholder}
        onInput={(e) => setValue(e.currentTarget.value)}
        ref={innerRef}
      />
    </div>
  );
};

type NumberControlProps = {
  value: number;
  setValue: (value: number) => void;
  label: string;
  innerRef?: Ref<HTMLInputElement>;
};

export const NumberControl = ({
  value,
  setValue,
  label,
  innerRef,
}: NumberControlProps) => {
  const id = Math.random().toString();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        value={value}
        onInput={(e) => {
          console.log(e.currentTarget.value);
          setValue(Number(e.currentTarget.value));
        }}
        ref={innerRef}
      />
    </div>
  );
};
