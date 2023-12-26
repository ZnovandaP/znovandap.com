'use client';

import * as React from 'react';
import cn from '@/libs/utils/cn';
import {
  FieldValues, Path, RegisterOptions, UseFormRegister,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type InputContactProps<TFormValue extends FieldValues> = {
  register: UseFormRegister<TFormValue>
  rule?: RegisterOptions
  type: string
  htmlFor: string
  name: Path<TFormValue>
  label: string
  errors: object;
};

export default function InputContact<TFormValue extends FieldValues>({
  htmlFor, name, label, type, errors, register, rule,
}: InputContactProps<TFormValue>) {
  const [isActive, setIsActive] = React.useState(false);

  const handleInputForIsActive = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.target.value.length > 0 ? setIsActive(true) : setIsActive(false);
  };

  return (
    <div>
      <label htmlFor={htmlFor} className="relative flex flex-col gap-2 font-medium text-lg">
        <input
          {...register(name, rule)}
          type={type}
          id={htmlFor}
          name={name}
          onChange={(e) => handleInputForIsActive(e)}
          className="peer font-medium p-4 rounded-md bg-transparent ring-2 ring-stone-500/60 focus:ring-2 focus:ring-sky-600 focus:outline-none transition"
        />
        <span className={cn(
          'absolute top-4 left-4 peer-focus:-top-4 bg-stone-100 dark:bg-stone-950 transition-all duration-300',

          isActive ? '-top-4' : 'top-4 left-4',
        )}
        >
          {label}
        </span>
      </label>

      <ErrorMessage
        name={htmlFor}
        errors={errors}
        render={({ message }) => (
          <p className="text-red-600 font-medium mt-3">
            {message}
          </p>
        )}
      />
    </div>
  );
}
