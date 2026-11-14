"use client";

import { useState } from "react";
import type { ChangeEvent, ChangeEventHandler, FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
type RegisterFormValues2 = {
  name: string;
  email: string;
  password?: string;
  confirmPassword: string;
};
type RegistrationFormError2 = Partial<Record<keyof RegisterFormValues, string>>;
type RegisterFormErrors = Partial<Record<keyof RegisterFormValues, string>>;

const initialValues: RegisterFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const initialValues2: RegisterFormValues2 = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function validateForm(values: RegisterFormValues): RegisterFormErrors {
  const errors: RegisterFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  } else if (values.password.length < 8) {
    errors.password = "Password must contain at least 8 characters.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}

export function RegisterForm() {
  const [values, setValues] = useState<RegisterFormValues>(initialValues);

  const [errors, setErrors] = useState<RegisterFormErrors>({});

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: undefined,
    }));

    setStatusMessage("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateForm(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage("");
      return;
    }

    setStatusMessage(
      "Your information is valid. Account creation is not connected yet.",
    );
  }

  return (
    <Card>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Create your account</h1>

        <p className="mt-2 text-sm text-slate-400">
          Get started by creating your TaskFlow account.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <FormField id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Your full name"
          />
        </FormField>

        <FormField id="email" label="Email address" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="you@example.com"
          />
        </FormField>

        <FormField
          id="password"
          label="Password"
          error={errors.password}
          hint="Use at least 8 characters."
        >
          <div className="relative">
            <input
              id="password"
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              autoComplete="new-password"
              value={values.password}
              onChange={handleChange}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={
                errors.password ? "password-error" : "password-hint"
              }
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 pr-20 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              placeholder="Create a password"
            />

            <button
              type="button"
              onClick={() => setIsPasswordVisible((previous) => !previous)}
              className="absolute inset-y-0 right-3 text-xs font-medium text-slate-400 transition hover:text-white"
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            >
              {isPasswordVisible ? "Hide" : "Show"}
            </button>
          </div>
        </FormField>

        <FormField
          id="confirmPassword"
          label="Confirm password"
          error={errors.confirmPassword}
        >
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={isPasswordVisible ? "text" : "password"}
            autoComplete="new-password"
            value={values.confirmPassword}
            onChange={handleChange}
            aria-invalid={Boolean(errors.confirmPassword)}
            aria-describedby={
              errors.confirmPassword ? "confirmPassword-error" : undefined
            }
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Enter your password again"
          />
        </FormField>

        {statusMessage && (
          <p
            role="status"
            className="rounded-lg border border-emerald-800 bg-emerald-950/40 p-3 text-sm text-emerald-300"
          >
            {statusMessage}
          </p>
        )}

        <Button type="submit" className="w-full">
          Create account
        </Button>
      </form>
    </Card>
  );
}
