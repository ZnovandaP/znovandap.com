'use client';

import * as React from 'react';
import { TbLocationCheck } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { BiMailSend } from 'react-icons/bi';
import InputContact from '@/components/Input/InputContact';
import TextAreaContact from '@/components/Input/TextAreaContact';
import ButtonSubmit from '@/components/Button/ButtonSubmit';
import Toast from '@/components/Toast';

type FormContact = {
  name: string
  email: string
  message: string
};

const formspreeToken = process.env.NEXT_PUBLIC_FORMSPREE_TOKEN as string;

export default function FormContactSection() {
  const [state, sendToFormspree] = useFormspree(formspreeToken);

  const {
    register, reset, handleSubmit, formState: { errors },
  } = useForm<FormContact>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  React.useEffect(() => {
    if (state.submitting) {
      reset();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <section className="px-8 pb-0 sm:py-0">
      <h3 className="text-xl font-semibold opacity-70">
        Or send me a message
      </h3>

      <form
        autoComplete="off"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 "
        onSubmit={handleSubmit(sendToFormspree)}
      >

        <InputContact
          register={register}
          rule={{
            required: {
              value: true,
              message: 'Name field is required, please fill in this',
            },
            minLength: {
              value: 3,
              message: 'Please fill in this field to at least 3 characters',
            },
            maxLength: {
              value: 50,
              message: 'Name field has limit 50 characters',
            },
          }}
          errors={errors}
          htmlFor="name"
          name="name"
          type="text"
          label="Your Name"
        />

        <InputContact
          register={register}
          rule={{
            required: {
              value: true,
              message: 'Email field is required, please fill in this',
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: ' Incorrect email format, please enter the correct email format',
            },
          }}
          errors={errors}
          htmlFor="email"
          name="email"
          type="email"
          label="Your Email"
        />

        <TextAreaContact
          register={register}
          rule={{
            required: {
              value: true,
              message: 'Name field is required, please fill in this',
            },
            minLength: {
              value: 3,
              message: 'Please fill in this field to at least 3 characters',
            },
          }}
          errors={errors}
          htmlFor="message"
          name="message"
          label="Your Message"
        />

        <div className="flex items-center justify-end md:col-start-2">
          <ButtonSubmit
            text="Send Message"
            icon={<BiMailSend className="text-2xl" />}
          />
        </div>
      </form>

      <Toast
        isShow={state.submitting}
        text="Send message is successfull"
        icon={<TbLocationCheck />}
      />

    </section>
  );
}
