import { useTranslation } from "react-i18next";
import News from "../assets/images/winner.webp"
import {
  useGetPostsQuery,
  useGetUsersQuery,
} from "../store/features/api/NewsApi";
import SkeletonLoader from "../skeleton/SkeletonLoader";
import { Link } from "react-router";
import type { User, Posts } from '../types/Type';
import Title from "../components/newsSection/Title";
import { truncateText } from "../utils/truncated";
import ShowMore from "../components/ShowMore";
import NewsBox from "../components/newsSection/NewsBox";
type PostWithAuthor = Posts & {
  author: User | undefined;
};

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
    return <p>{t("failed_to_load")}</p>;
  }

  const postsWithAuthors: PostWithAuthor[] = posts?.map((post) => ({
    ...post,
    author: users?.find((u) => u.id === post.userId),
  })) || [];
  console.log(postsWithAuthors, 'postsWithAuthors')
  if (postsWithAuthors.length === 0) {
    return <p>{t("no_posts_available")}</p>;
  }

  return (
    <>
      <section className="container mx-auto px-4 mt-10" id="home">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="news relative h-[500px] overflow-hidden rounded-lg">
              <Link to={`/posts/${postsWithAuthors[0].id}`} className="newsarticleImage block h-full">
                <img src={News} alt="news" className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded mb-3">
                    BREAKING NEWS
                  </span>

                  <Title text={postsWithAuthors[0].title} />

                  <p className="text-gray-200 text-sm mt-2 line-clamp-2">
                    {postsWithAuthors[0].body}
                  </p>

                  <div className="flex items-center gap-4 mt-4 text-sm">
                    {postsWithAuthors[0].author && (
                      <>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">
                              {postsWithAuthors[0].author.name.charAt(0)}
                            </span>
                          </div>
                          <span className="font-medium">By {postsWithAuthors[0].author.name}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-300">{new Date().toLocaleDateString()}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-10 lg:px-5 mt-10">
              {postsWithAuthors && postsWithAuthors.map((post) => (
                <div key={post.id} className="col-span-2 lg:col-span-1" >
                  <NewsBox postId={post.id} title={post.title} desc={post.body} />
                </div>
              ))}
            </div>
          </div>
          <div className="relative col-span-2 lg:col-span-1">
            <div className="sticky top-0">
              <h2 className="fontTwo font-bold mb-3 color_palete">Trending News</h2>
              {postsWithAuthors.slice(5, 9).map((post) => (
                <div key={post.id} className="grid grid-cols-3 gap-4 pb-3 pt-4 border-b-2 border-indigo-200">
                  <div className="..."><img
                    src={`https://picsum.photos/seed/${post.id}/600/400`}
                    alt={post.title} width="100" style={{ maxHeight: "100px" }}
                    className="object-cover w-full h-full rounded-xl"
                  /></div>
                  <div className="col-span-2 ...">
                    <Link to={`/posts/${post.id}`}>
                      <h1 className="">{post.title}</h1>
                      <p className="paragraph_one">{truncateText(post.body, 70)}</p>
                      <ShowMore />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}