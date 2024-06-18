import StudentNavbar from "./_components/student_navbar";

const LayoutDashbord = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <StudentNavbar />
      <div className="h-full">{children}</div>
    </div>
  );
};
export default LayoutDashbord;
