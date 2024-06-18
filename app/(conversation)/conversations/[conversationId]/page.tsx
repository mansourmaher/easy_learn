import { ConversationHeader } from "../_components/conversation-header";
import {
  ConversationBody,
  NoConversationfound,
  UnothorizeState,
} from "../_components/conversation-body";
import { ConversationForm } from "../_components/conversation-form";
import { auth } from "@/auth";
import { isuserpurchasedthecourseconversationId } from "@/actions/conversation/isuserpurchasedthecourseconversations copy";
import { getMessages } from "@/actions/conversation/getmessages";
import { getTheTeacherFromConversationId } from "@/actions/conversation/gettheteacherfromconversationid";
import { getMyconversation } from "@/actions/conversation/getmyconversation";
import { BreadcrumbDemoConversation } from "@/app/(teacher_conversations)/teacher_conversations/(conversation)/conversations/_components/conversation_breadcrumb";
import { ConversationsList } from "../_components/conversation_list";

interface PageProps {
  params: {
    conversationId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const user = await auth();
  if (params.conversationId === "no_conv") {
    return (
      <div className="flex h-full flex-col">
        <BreadcrumbDemoConversation isteacher={false} />
        <div className="flex-1 overflow-y-auto h-screen my-auto mt-64">
          <NoConversationfound />
        </div>
      </div>
    );
  }

  const ispurchasedthecourse = await isuserpurchasedthecourseconversationId(
    params.conversationId
  );
  //@ts-ignore
  if (ispurchasedthecourse.error) {
    return (
      <div className="flex h-full flex-col">
        <BreadcrumbDemoConversation isteacher={false} />
        <div className="flex-1 overflow-y-auto h-screen my-auto mt-64">
          <NoConversationfound />
        </div>
      </div>
    );
  }
  if (!ispurchasedthecourse) {
    return (
      <div className="flex h-full flex-col">
        <BreadcrumbDemoConversation isteacher={false} />
        <div className="flex-1 overflow-y-auto h-screen my-auto mt-64">
          <UnothorizeState />
        </div>
      </div>
    );
  }
  const messages = await getMessages(params.conversationId);
  const teacher = await getTheTeacherFromConversationId(params.conversationId);

  return (
    <div className="h-screen bg-secondary">
      <div className="flex h-full flex-col">
        <BreadcrumbDemoConversation isteacher={false} />
        <ConversationHeader conversationId={params.conversationId} />
        <ConversationBody
          conversationId={params.conversationId}
          currentUser={user}
          ispurchased={ispurchasedthecourse}
          messages={messages}
          teacher={teacher}
        />
        <ConversationForm conversationId={params.conversationId} />
      </div>
    </div>
  );
};
export default Page;
