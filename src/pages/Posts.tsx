import { useParams } from "react-router";
import {
  useGetPostByIdQuery,
  useGetUsersQuery,
} from "../store/features/api/NewsApi";
import SkeletonLoader from "../skeleton/SkeletonLoader";

type UserParams = {
  id: string;
};

export default function Posts() {
  const { id } = useParams<UserParams>();

  const {
    data: post,
    error: postError,
    isLoading: postLoading,
  } = useGetPostByIdQuery(Number(id));

  const {
    data: users,
    error: usersError,
    isLoading: usersLoading,
  } = useGetUsersQuery();

  if (postLoading || usersLoading) {
    return <SkeletonLoader />;
  }

  if (postError || usersError || !post || !users) {
    return <p>Failed to load data</p>;
  }

  const author = users.find((u) => u.id === post.userId);

  const postWithAuthor = {
    ...post,
    author,
  };

  console.log(postWithAuthor);

  return (
    <>
      <h1>{postWithAuthor.title}</h1>
      <p>{postWithAuthor.body}</p>
      <small>By {postWithAuthor.author?.name}</small>
    </>
  );
}
