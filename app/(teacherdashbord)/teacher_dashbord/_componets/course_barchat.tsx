"use client";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as Chartsjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  getMyStudentsIncludetheirageIncludetheircount,
  getTop5PurchasedCoursesByTeacher,
} from "@/actions/dashboard/gettop5coursebyteacher";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

Chartsjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface CourseBarchatProps {
  courses: Awaited<ReturnType<typeof getTop5PurchasedCoursesByTeacher>>;
  student: Awaited<
    ReturnType<typeof getMyStudentsIncludetheirageIncludetheircount>
  >;
}

function CourseBarchat({ courses, student }: CourseBarchatProps) {
  const [userData, setUserData] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(5);

  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: any[];
  }>({
    labels: userData
      ? student.map((s) => s.age)
      : courses.slice(0, itemsToShow).map((c) => c.title),
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: userData ? "Age" : "Courses",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: userData ? "Student Count" : "Revenue",
        },
      },
    },
  });

  useEffect(() => {
    setChartOptions({
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: userData ? "Age" : "Courses",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: userData ? "Student Count" : "Revenue",
          },
        },
      },
    });
    setChartData({
      labels: userData
        ? student.map((s) => s.age)
        : courses.slice(0, itemsToShow).map((c) => c.title),
      datasets: [
        {
          label: userData ? "Student Count" : "Revenue",
          data: userData
            ? student.map((s) => s.userCount)
            : courses.slice(0, itemsToShow).map((c) => c.revenue),
          borderColor: "rgba(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
      ],
    });
  }, [courses, student, userData, itemsToShow]);

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 5);
  };
  const handelshowless = () => {
    setItemsToShow((prev) => prev - 5);
  };

  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="grid gap-2">
          <CardTitle>
            {userData && "Your students age and count"}
            {!userData && "Top courses by revenue"}
          </CardTitle>
          <CardDescription>
            <div>
              {userData && "Your students age and count"}
              {!userData && "Top courses by revenue"}
              {!userData && `Top ${itemsToShow} courses by revenue`}
            </div>
          </CardDescription>
        </div>
        <div>
          <div className="flex items-center justify-between ml-auto space-x-2 ">
            <Badge
              variant={"outline"}
              className="ml-auto gap-1 cursor-pointer"
              onClick={() => setUserData(false)}
            >
              Course Data
            </Badge>
            <Badge
              variant={"outline"}
              className="ml-auto gap-1 cursor-pointer"
              onClick={() => setUserData(true)}
            >
              Students Data
            </Badge>
          </div>
          {!userData && (
            <div className="flex items-center justify-between ml-auto space-x-2 ">
              <Button
                variant="outline"
                onClick={handleShowMore}
                disabled={itemsToShow >= courses.length}
              >
                Show More
              </Button>
              <Button
                variant="outline"
                onClick={handelshowless}
                disabled={itemsToShow <= 5}
              >
                Show Less
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full md:col-span-3 relative lg:h-[55vh] h-[35vh] m-auto p-4 border rounded-lg bg-white">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseBarchat;
