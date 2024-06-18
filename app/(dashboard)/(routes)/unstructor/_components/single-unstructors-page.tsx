import {
  getAllUnstroctor,
  getAllteachers,
} from "@/actions/teacher/get-all-unstroctor";
import UnstroctorCard from "./untroctor-card";
import UntroctorList from "./untroctor-list";

interface SingleUnstructorsPageProps {
  teachers: Awaited<ReturnType<typeof getAllteachers>>;
}
const SingleUnstructorsPage = ({ teachers }: SingleUnstructorsPageProps) => {
  return (
    <div className="m-8">
      <UntroctorList teachers={teachers} />
    </div>
  );
};
export default SingleUnstructorsPage;
