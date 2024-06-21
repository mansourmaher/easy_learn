import React from "react";
import DonutsChart from "./donuts_chart";
import {
  getLevelDistinctCount,
  getLevelDistinctCountForAdmin,
  getTheoriginofsubscriptionuser,
  getTheoriginofsubscriptionuserforAdmin,
} from "@/actions/admin/dashboard/getleveldistinctcount";

const FetchDonutsData = async () => {
  const levelcount = await getLevelDistinctCountForAdmin();
  const users = await getTheoriginofsubscriptionuserforAdmin();
  return (
    <>
      <DonutsChart level={levelcount} users={users} />
    </>
  );
};

export default FetchDonutsData;
