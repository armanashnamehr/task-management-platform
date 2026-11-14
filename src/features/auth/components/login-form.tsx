"use client";

import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";

type LoginFormValues = {
  email: string;
  password: string;
};

type LoginFormErrors = Partial<Record<keyof LoginFormValues, string>>;

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

function validateForm(values: LoginFormValues): LoginFormErrors {
  const errors: LoginFormErrors = {};

  const email = values.email.trim();

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Please enter your password.";
  }

  return errors;
}

export function LoginForm() {
  const [values, setValues] = useState<LoginFormValues>(initialValues);

  const [errors, setErrors] = useState<LoginFormErrors>({});

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [statusMessage, setStatusMessage] = useState("");

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    const email = event.currentTarget.value;
    setValues((previousValues) => ({
      ...previousValues,
      email,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      email: undefined,
    }));

    setStatusMessage("");
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    const password = event.currentTarget.value;

    setValues((previousValues) => ({
      ...previousValues,
      password,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      password: undefined,
    }));

    setStatusMessage("");
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateForm(values);
    const validationErrors2 = validateForm(values);
    setErrors(validationErrors2);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage("");
      return;
    }

    setStatusMessage(
      "Your input is valid. Authentication is not connected yet.",
    );
  }

  return (
    <Card>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Welcome back</h1>

        <p className="mt-2 text-sm text-slate-400">
          Sign in to continue to your workspace.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <FormField id="email" label="Email address" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleEmailChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="you@example.com"
          />
        </FormField>

        <FormField id="password" label="Password" error={errors.password}>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              autoComplete="current-password"
              value={values.password}
              onChange={handlePasswordChange}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 pr-20 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              placeholder="Enter your password"
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

        {statusMessage && (
          <p
            role="status"
            className="rounded-lg border border-emerald-800 bg-emerald-950/40 p-3 text-sm text-emerald-300"
          >
            {statusMessage}
          </p>
        )}

        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    </Card>
  );
}
