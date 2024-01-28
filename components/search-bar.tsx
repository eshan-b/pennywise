"use client";

// Icons
import { FaSearch } from "react-icons/fa";

// NextUI
import { Input, Link } from "@nextui-org/react";

// Routing
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [ticker, setTicker] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();

    if (ticker.trim() !== "") {
      router.push(`/stocks/${ticker.toUpperCase()}`);
    }
  };

  return (
    <div className="w-[50%] lg:w-[38%]">
      <form onSubmit={handleSearch}>
        <Input
          variant="bordered"
          color="danger"
          placeholder="Find your next penny stock"
          labelPlacement="outside"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          endContent={
            <Link isBlock onPress={handleSearch}>
              <FaSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            </Link>
          }
        />
      </form>
    </div>
  );
};

export default SearchBar;
