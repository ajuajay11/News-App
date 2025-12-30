import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  useGetPostsQuery,
  useGetUsersQuery,
} from "../store/features/api/NewsApi";
import SkeletonLoader from "../skeleton/SkeletonLoader";
export default function Landing() {
  const { t } = useTranslation();
  const {
    data: posts,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostsQuery();

  const {
    data: users,
    error: usersError,
    isLoading: usersLoading,
  } = useGetUsersQuery();

  if (postsLoading || usersLoading) {
    return <SkeletonLoader />;
  }

  if (postsError || usersError) {
    return <p>Failed to load data</p>;
  }
  const postsWithAuthors = posts?.map((post) => ({
    ...post,
    author: users?.find((u) => u.id === post.userId),
  }));
 
  return (
    <>
      <Link to="/about">About</Link>
      <h1>{t("welcomeMessage")}</h1>
      {postsWithAuthors?.map((post) => (
        <div key={post.id} className="mb-4 bg-[#999]">
            <Link to={`/posts/${post.id}`}><p key={post.id}>{post.title}</p></Link>
        </div>
      ))}
    </>
  );
}
