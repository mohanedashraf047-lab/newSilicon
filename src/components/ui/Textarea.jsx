// components/ui/Textarea.jsx
import React from 'react';
import { cn } from '../../utils/helpers';

const Textarea = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        className={cn(
          'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical',
          error ? 'border-red-500' : 'border-gray-300',
          disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Textarea;