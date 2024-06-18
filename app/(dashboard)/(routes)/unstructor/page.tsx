import {
  getAllUnstroctor,
  getAllteachers,
} from "@/actions/teacher/get-all-unstroctor";
import SingleUnstructorsPage from "./_components/single-unstructors-page";

interface GetTeacher {
  teacher: string;
  country: string;
  field: string;
  orderby: string;
}
interface PageProps {
  searchParams: GetTeacher;
}

const Page = async ({ searchParams }: PageProps) => {
  const teachers = await getAllteachers(searchParams);

  return (
    <div>
      <SingleUnstructorsPage teachers={teachers} />
    </div>
  );
};
export default Page;
