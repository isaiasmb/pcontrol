"use client";

export type ButtonProps = {
  onClick: () => void;
  label: string;
  icon: React.ElementType;
};

const Button = ({ onClick, label, icon: Icon }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex justify-center gap-2 bg-slate-700 px-5 py-2 text-slate-300 rounded-lg cursor-pointer hover:bg-slate-600 ease-in-out duration-300"
    >
      <Icon />
      {label}
    </button>
  );
};

export default Button;
