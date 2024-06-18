import { getPostsInCommunity } from "@/actions/community/get-posts-comunity-id";
import { ComunityUser } from "../_componets/comunity-users";
import ComunityPostList from "../_componets/comunity-posts-list";
import CommunitySearchProblem from "../_componets/comunity-search-problem";
import Message from "../_componets/message";
import { getCommNameByid } from "@/actions/community/getCommunityName";
import { MobileSidebar } from "@/app/(dashboard)/_components/mobilesidebar";
import { CategoriresForComuntiy } from "../_componets/categoriesforcomunity";
import { auth } from "@/auth";
interface getComuntyParams {
  category?: string;
}

const Page = async (params: {
  params: {
    communityId: string;
    category: string | undefined;
  };
}) => {
  const extractedComunityIdandPostId = params.params.communityId.split("post");
  const comunityId = extractedComunityIdandPostId[0];
  const postId = extractedComunityIdandPostId[1];
  const posts = await getPostsInCommunity(comunityId);

  return (
    <div className="w-full ">
      <div className="flex justify-between w-full ">
        <div className="w-full ">
          <div className="flex flex-row items-center  ml-4 justify-between">
            {/* <MobileSidebar /> */}
            {/* <CommunityHeader commName={communityName!} /> */}
            {/* <UsersSidebar communityId={comunityId!} /> */}
          </div>
          <div className="mt-2 flex justify-center items-center">
            <CategoriresForComuntiy />
          </div>

          <div className="border-b-2 mr-7 ml-6 mt-2"></div>
          <div className="flex flex-col bg-gray-100 ">
            <div className="flex h-full">
              {/* <div>
                <ComunityList />
              </div> */}
              <div className="flex flex-col w-full px-6  space-y-2 bg-white">
                <CommunitySearchProblem />

                <div className="bg-gray-100  overflow-y-auto p-4 rounded-lg  md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] 2xl:max-h-[800px] md:min-h-[100px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px]">
                  {posts.length === 0 && (
                    <div className="text-gray-500 my-auto flex mx-auto">
                      No posts yet in this community
                    </div>
                  )}
                  <ComunityPostList posts={posts} postId={postId} />
                </div>

                <Message communityId={comunityId!} />
              </div>
              <div>
                <ComunityUser communityId={comunityId} />
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <ComunityUser communityId={comunityId} />
        </div> */}
      </div>
    </div>
  );
};
export default Page;
