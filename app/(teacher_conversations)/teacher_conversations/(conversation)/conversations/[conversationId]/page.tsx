import React from "react";
import { ConversationHeader } from "../_components/conversation-header";
import { ConversationBody } from "../_components/conversation-body";
import { ConversationForm } from "../_components/conversation-form";
import { auth } from "@/auth";

import { getMessages } from "@/actions/conversation/getmessages";
import { getTheTeacherFromConversationId } from "@/actions/conversation/gettheteacherfromconversationid";
import { ConversationsList } from "../_components/conversation_list";
import { getMyconversation } from "@/actions/conversation/getmyconversation";
import { BreadcrumbDemoConversation } from "../_components/conversation_breadcrumb";
import {
  istheownerofconversation,
  isuserpurchasedthecourseconversationId,
} from "@/actions/conversation/isuserpurchasedthecourseconversations copy";
import {
  NoConversationfound,
  UnothorizeState,
} from "@/app/(conversation)/conversations/_components/conversation-body";

interface PageProps {
  params: {
    conversationId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const user = await auth();
  const ispurchasedthecourse = await isuserpurchasedthecourseconversationId(
    params.conversationId
  );
  const constistheownerofconversation = await istheownerofconversation(
    params.conversationId
  );
  //@ts-ignore
  if (!constistheownerofconversation || constistheownerofconversation.error) {
    return (
      <div className="flex h-full flex-col">
        <BreadcrumbDemoConversation isteacher={true} />
        <div className="flex-1 overflow-y-auto h-screen my-auto mt-64">
          <UnothorizeState />
        </div>
      </div>
    );
  }
  //@ts-ignore
  if (constistheownerofconversation.error) {
    return (
      <div className="flex h-full flex-col">
        <BreadcrumbDemoConversation isteacher={true} />
        <div className="flex-1 overflow-y-auto h-screen my-auto mt-64">
          <NoConversationfound />
        </div>
      </div>
    );
  }
  //@ts-ignore
  if (!constistheownerofconversation) {
    return (
      <div className="flex h-full flex-col">
        <BreadcrumbDemoConversation isteacher={true} />
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
      {/* <ConversationsList conversations={conversation} /> */}
      <div className="flex h-full flex-col">
        <BreadcrumbDemoConversation isteacher={true} />
        <ConversationHeader conversationId={params.conversationId} />
        <ConversationBody
          conversationId={params.conversationId}
          currentUser={user}
          ispurchased={constistheownerofconversation}
          messages={messages}
          teacher={teacher}
        />
        <ConversationForm conversationId={params.conversationId} />
      </div>
    </div>
  );
};
export default Page;
