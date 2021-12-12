import PostDetail from "../../components/PostDetail";
export const getStaticPaths = async () => {
  const fetched_data = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/post/all"
  );
  const json_data = await fetched_data.json();

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
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/post/data/" + id
  );
  const data = await res.json();
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
