import PostDetail from "./PostDetail";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
function PostDetailFetch({ id }) {
  const { data, error } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + "/api/post/data/" + id,
    fetcher,
    { dedupingInterval: 300000 }
  );
  return <div>{data ? <PostDetail post={data} /> : "Loading"}</div>;
}

export default PostDetailFetch;
