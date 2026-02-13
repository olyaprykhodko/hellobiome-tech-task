interface SortSwitcherProps {
  value: string;
  onChange: (option: string) => void;
}

export default function SortSwitcher({ value, onChange }: SortSwitcherProps) {
  return (
    <div>
      <label htmlFor="abundance" className="sr-only">
        Sort by
      </label>
      <select
        id="abundance"
        className="w-full sm:w-auto rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-sm md:text-base font-medium text-background-700 ring-2 focus:outline-none focus:ring-2 focus:ring-background-700"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="asc">Abundance (asc)</option>
        <option value="desc">Abundance (desc)</option>
      </select>
    </div>
  );
}
