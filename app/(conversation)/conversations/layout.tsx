import { getMyconversation } from "@/actions/conversation/getmyconversation";
import { ConversationsList } from "./_components/conversation_list";

const LayoutPage = async ({ children }: { children: React.ReactNode }) => {
  // const community = await getAllCommunity();
  // const user = await auth();
  // const isverifiedteacher =
  //   user?.user.role == "TEACHER" && user?.user.teacherAccess == true;
  const conversation = await getMyconversation();
  return (
    <div className="h-full">
      <ConversationsList conversations={conversation} />

      <div className=" h-full  ">{children}</div>
    </div>
  );
};
export default LayoutPage;
