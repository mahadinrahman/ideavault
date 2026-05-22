"use client";

import { useRouter, useSearchParams } from "next/navigation";

const CategoryDropdown = ({ datas }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const value = e.target.value;

    if (value) {
      router.push(`?category=${value}`);
    } else {
      router.push(`/ideas`);
    }
  };

  return (
    <select
      className="w-80 border p-2 rounded"
      onChange={handleChange}
      defaultValue={searchParams.get("category") || ""}
    >
      <option value="">All</option>

      {datas.map((data) => (
        <option key={data._id}>
          {data.category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;