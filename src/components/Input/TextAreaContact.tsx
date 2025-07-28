'use client';

import * as React from 'react';
import cn from '@/libs/utils/cn';
import {
  FieldValues, Path, RegisterOptions, UseFormRegister,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type TextAreaContactProps<TFormValue extends FieldValues> = {
  register: UseFormRegister<TFormValue>
  rule?: RegisterOptions<TFormValue>
  htmlFor: string
  name: Path<TFormValue>
  label: string
  errors: object;
};

export default function TextAreaContact<TFormValue extends FieldValues>({
  htmlFor, name, label, errors, register, rule,
}: TextAreaContactProps<TFormValue>) {
  const [isActive, setIsActive] = React.useState(false);

  const handleInputForIsActive = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.target.value.length > 0 ? setIsActive(true) : setIsActive(false);
  };

  return (
    <div className="md:col-span-2">
      <label htmlFor={htmlFor} className="relative flex flex-col gap-2 font-medium text-lg">
        <textarea
          {...register(name, rule)}
          id={htmlFor}
          name={name}
          onChange={(e) => handleInputForIsActive(e)}
          className="peer font-medium p-4 rounded-md bg-transparent ring-2 ring-stone-500/60 focus:ring-2 focus:ring-sky-600 focus:outline-none h-36 transition"
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
