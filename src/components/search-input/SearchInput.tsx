import { Input } from "@/components/ui/input";

interface Props {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ placeholder, value, onChange }: Props) {
  return (
    <Input
      type="text"
      placeholder={placeholder || "Search..."}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mb-4"
    />
  );
}
