interface FilterSwithcerProps {
  label: string;
  onClick: (type: string) => void;
}

export default function FilterSwithcer({
  label,
  onClick,
}: FilterSwithcerProps) {
  return (
    <>
      <button
        onClick={() => onClick(label)}
        className="px-6 py-2 mx-3 text-md font-medium rounded-lg transition-all duration-200 bg-gray-900 text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-1 disabled:opacity-50 "
      >
        {label}
      </button>
    </>
  );
}
