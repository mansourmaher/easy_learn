import { Button } from "@/components/ui/button";
import { FilterIcon, SlidersHorizontal } from "lucide-react";
import React from "react";
import { FaMixer } from "react-icons/fa";

function FilterBtn() {
  return (
    <Button variant={"outline"} className=" ">
      <SlidersHorizontal className="mr-2" />
      FilterBtn
    </Button>
  );
}

export default FilterBtn;
