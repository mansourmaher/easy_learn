"use client";

import { Map, SlidersHorizontal } from "lucide-react";
import { FaStar, FaUserFriends, FaClock } from "react-icons/fa";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import useCountries from "@/hooks/useCountries";
import Select from "react-select";
import filiers from "@/data/filiers";
import { FaChalkboardTeacher } from "react-icons/fa";

function Cardfilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [intialecountry, setIntialecountry] = useState(
    searchParams.get("country")
  );
  const [intialefield, setIntialefield] = useState(searchParams.get("field"));
  const [intialeorderby, setIntialeorderby] = useState(
    searchParams.get("orderby")
  );

  const { getAll } = useCountries();
  const filierOptions = filiers;
  const orderbyOptions = [
    { option: "Rating" },
    { option: "Total students" },
    { option: "Experience" },
  ];

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          country: intialecountry,
          field: intialefield,
          orderby: intialeorderby,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [intialecountry, intialefield, intialeorderby]);

  return (
    <>
      <Card className="rounded-3xl border bg-muted/40 md:w-[1210px] mb-8">
        <div className="flex justify-between mr-2 p-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <span>
              There are teachers available for you ordered by rating. Apply
              filters to get the best teacher for you.
            </span>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen((prev) => !prev)}
          >
            <SlidersHorizontal className="mr-2" />
            {isFilterOpen ? "Close" : "Filter"}
          </Button>
        </div>
      </Card>
      {isFilterOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Card className="rounded-3xl border md:w-[1210px] mb-8">
            <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 p-4">
              <div className="w-full flex flex-col md:flex-row items-center md:space-x-2 space-y-2 md:space-y-0">
                <span className="text-muted-foreground">Country</span>
                <Map className="w-6 h-6 text-blue-400" />
                <Select
                  options={getAll()}
                  className="w-full border-none "
                  value={getAll().find((c) => c.label === intialecountry)}
                  onChange={(value) => setIntialecountry(value?.label!)}
                  placeholder="Select your country"
                  formatOptionLabel={(option) => (
                    <div className="flex items-center gap-2">
                      <div>{option.flag}</div>
                      <div>
                        {option.label},{" "}
                        <span className="text-gray-400">{option.region}</span>
                      </div>
                    </div>
                  )}
                />
              </div>
              <div className="w-full flex flex-col md:flex-row items-center md:space-x-2 space-y-2 md:space-y-0">
                <span className="text-muted-foreground">Field</span>
                <FaChalkboardTeacher className="w-6 h-6 text-blue-400" />
                <Select
                  options={filierOptions}
                  className="w-full "
                  value={filierOptions.find((c) => c.value === intialefield)}
                  onChange={(value) => setIntialefield(value?.value!)}
                  placeholder="Select the field of work"
                  formatOptionLabel={(option) => (
                    <div className="flex items-center gap-2">
                      <div>{option.option}</div>
                    </div>
                  )}
                />
              </div>
              <div className="w-full flex flex-col md:flex-row items-center md:space-x-2 space-y-2 md:space-y-0">
                <span className="text-muted-foreground flex ">Order</span>
                <span className="text-muted-foreground flex ">by</span>
                {/* give me icon for the filter by rating and total student and expercience give me an icon that i can use when i use the mackbook */}

                <div className="w-full flex flex-col md:flex-row items-center md:space-x-2 space-y-2 md:space-y-0">
                  {intialeorderby === null && (
                    <FaStar className="w-6 h-6 text-blue-400" />
                  )}
                  {intialeorderby === "Rating" && (
                    <FaStar className="w-6 h-6 text-blue-400" />
                  )}
                  {intialeorderby === "Total students" && (
                    <FaUserFriends className="w-6 h-6 text-blue-400" />
                  )}
                  {intialeorderby === "Experience" && (
                    <FaClock className="w-6 h-6 text-blue-400" />
                  )}

                  <Select
                    options={orderbyOptions}
                    className="w-full"
                    value={
                      intialeorderby
                        ? orderbyOptions.find(
                            (c) => c.option === intialeorderby
                          )
                        : null
                    }
                    onChange={(value) => setIntialeorderby(value?.option!)}
                    formatOptionLabel={(option) => (
                      <div className="flex items-center gap-2 ">
                        <div>{option.option}</div>
                      </div>
                    )}
                  />
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setIntialecountry(null);
                  setIntialefield(null);
                  setIntialeorderby(null);
                  router.refresh();
                }}
              >
                Refresh
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </>
  );
}

export default Cardfilter;
