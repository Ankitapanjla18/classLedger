import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95";
  
  const variantClasses = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg",
    secondary:
      "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500 hover:border-blue-700",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

