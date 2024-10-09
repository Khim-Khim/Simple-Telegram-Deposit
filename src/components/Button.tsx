type TPropsButton = {
  label: string;
  customClass?: string;
  onClick?: ({ ...args }) => void;
  disabled?: boolean;
};

export default function Button({
  label,
  customClass,
  onClick,
  disabled = false,
}: TPropsButton) {
  return (
    <button
      className={`py-1 px-4 lg:py-2 lg:px-6 text-black bg-yellow-300 hover:bg-yellow-400 rounded-md ${customClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
