import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import {
  useGetPostByIdQuery,
  useGetUsersQuery,
} from "../store/features/api/NewsApi";
import SkeletonLoader from "../skeleton/SkeletonLoader";
import Title from "../components/newsSection/Title";
import ImageWithFallback from "../components/ImageWithFallback";

type UserParams = {
  id: string;
};

export default function Posts() {
  const { t } = useTranslation();
  const { id } = useParams<UserParams>();
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: postWithAuthor.title,
          text: "Check this out!",
          url: `https://news-app-lyart-six.vercel.app/${postWithAuthor.id}`,
        });
      } catch (error) {
        console.log("Share cancelled or failed:", error);
      }
    } else {
      alert("Sharing not supported on this device. Copy the link instead.");
    }
  };
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
    return <p>{t("failed_to_load")}</p>;
  }

  const author = users.find((u) => u.id === post.userId);

  const postWithAuthor = {
    ...post,
    author,
  };

  console.log(postWithAuthor);

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Title text={postWithAuthor.title} />
        <div className="border-b pb-4 mb-6">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>{t("post.timeAgo")}</span>
            <div className="flex items-center gap-4">
              <button className="cursor flex items-center gap-1 bg-[#d32f2f] text-[#fff] px-5 py-3 rounded-xl" onClick={handleShare}>
                {t("post.share")}
                <svg width="16" height="16" fill="currentColor">
                  <path d="M13 10a2 2 0 0 0-1.54.73L5.91 7.7a2.1 2.1 0 0 0 0-1.39l5.55-3.03A2 2 0 1 0 11 2a2 2 0 0 0 .04.39L5.5 5.42a2 2 0 1 0 0 3.16l5.54 3.03A2 2 0 1 0 13 10Z" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p className="font-semiboldk">
              {postWithAuthor.author?.name}
            </p>
            <p className="text-sm">
              {t("post.europeDigitalEditor")}
            </p>
          </div>
        </div>
        <div className="w-full h-[420px] mb-8 overflow-hidden rounded">
          <ImageWithFallback
            src={`https://picsum.photos/seed/news-${postWithAuthor.id}/1200/600`}
            alt={postWithAuthor.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div >
          {[1, 2, 3, 4].map((e) => (
            <div key={e}>
              <p className="capitalize">{postWithAuthor.body.split("\n")}</p>
            </div>
          ))}
        </div>
        {postWithAuthor.author && (
          <section className="mt-10 border-t pt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="  font-bold text-2xl">
                  {postWithAuthor.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-xl ">
                  {postWithAuthor.author.name}
                </h3>
                <p className="text-sm ">@{postWithAuthor?.author?.username}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 p-4 border border-gray-200  rounded-lg">
                <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-xs font-semibold uppercase mb-1">{t("post.email")}</p>
                  <a href={`mailto:${postWithAuthor?.author?.email}`} className="text-sm text-blue-600 hover:underline">
                    {postWithAuthor?.author?.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border border-gray-200  rounded-lg">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-xs font-semibold  uppercase mb-1">{t("post.phone")}</p>
                  <a href={`tel:${postWithAuthor?.author?.phone}`} className="text-sm hover:text-blue-600">
                    {postWithAuthor?.author?.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 border border-gray-200  rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h4 className="font-bold">{t("post.address")}</h4>
                </div>
                <div className="space-y-1 text-sm">
                  <p>{postWithAuthor?.author?.address?.street}, {postWithAuthor?.author?.address?.suite}</p>
                  <p>{postWithAuthor.author.address.city}, {postWithAuthor?.author?.address?.zipcode}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {t("post.lat")}: {postWithAuthor?.author?.address?.geo?.lat}, {t("post.lng")}: {postWithAuthor?.author?.address?.geo?.lng}
                  </p>
                </div>
              </div>

              <div className="p-5 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h4 className="font-bold">{t("post.company")}</h4>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">{postWithAuthor?.author?.company?.name}</p>
                  <p className="text-sm italic">"{postWithAuthor?.author?.company?.catchPhrase}"</p>
                  <p className="text-xs text-gray-500">{postWithAuthor?.author?.company?.bs}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4  border border-gray-200  rounded-lg">
                <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">{t("post.website")}</p>
                  <a href={`https://${postWithAuthor?.author?.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                    {postWithAuthor.author.website}
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
