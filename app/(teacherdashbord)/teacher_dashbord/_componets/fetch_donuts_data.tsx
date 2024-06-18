import React from "react";
import DonutsChart from "./donuts_chart";
import {
  getLevelDistinctCount,
  getTheoriginofsubscriptionuser,
} from "@/actions/admin/dashboard/getleveldistinctcount";

const FetchDonutsData = async () => {
  const levelcount = await getLevelDistinctCount();
  const users = await getTheoriginofsubscriptionuser();
  return (
    <>
      <DonutsChart level={levelcount} users={users} />
    </>
  );
};

export default FetchDonutsData;
