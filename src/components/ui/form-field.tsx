import type { ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
};

export function FormField({
  id,
  label,
  hint,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-200">
        {label}
      </label>

      {children}

      {error ?
        <p id={`${id}-error`} className="text-sm text-red-400">
          {error}
        </p>
      : hint ?
        <p id={`${id}-hint`} className="text-sm text-slate-400">
          {hint}
        </p>
      : null}
    </div>
  );
}
