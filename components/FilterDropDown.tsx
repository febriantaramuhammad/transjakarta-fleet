"use client";
import { useEffect, useState } from "react";

type Props = {
  label: string;
  url: string;
  onChange: (selected: string[]) => void;
};

export default function FilterDropdown({ label, url, onChange }: Props) {
  const [options, setOptions] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (Array.isArray(data.data)) {
      setOptions(data.data);
    } else {
      setOptions([]); // fallback ke array kosong
    }
  } catch (error) {
    console.error("Gagal fetch filter data:", error);
    setOptions([]);
  }
};

    fetchOptions();
  }, [url]);

  const toggleSelect = (id: string) => {
    let newSelected = selected.includes(id)
      ? selected.filter((s) => s !== id)
      : [...selected, id];
    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="mb-4">
      <p className="font-semibold mb-1">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleSelect(item.id)}
            className={`px-3 py-1 border rounded text-sm ${
              selected.includes(item.id) ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            {item.attributes?.long_name || item.id}
          </button>
        ))}
      </div>
    </div>
  );
}
