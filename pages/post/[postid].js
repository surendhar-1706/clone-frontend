import { getDataAll, getDatabyId } from "../../components/fetchdata";
import PostDetail from "../../components/PostDetail";

export const getStaticPaths = async () => {
  const json_data = await getDataAll();
  const paths = json_data.map((post) => ({
    params: { postid: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.postid;
  const data = await getDatabyId({ id: id });
  return {
    props: { post: data },
  };
};
function PostId({ post }) {
  return (
    <div>
      <PostDetail post={post} />
    </div>
  );
}

export default PostId;
// export default withAuth(PostId);
