import { truncateText } from "../../utils/truncated"
import { Link } from "react-router"
import { useTranslation } from "react-i18next";
import ImageWithFallback from "../ImageWithFallback";

type NewsBox = {
  postId: number,
  title: string,
  desc: string
}
export default function NewsBox({ postId, title, desc }: NewsBox) {
  const { t } = useTranslation();

  return (
    <>
      <Link to={`/posts/${postId}`} className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-lg">
        <div>
          <ImageWithFallback src={`https://picsum.photos/seed/${postId}/600/400`}
            alt={title} width="100" style={{ maxHeight: "150px" }}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div >
          <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Streamlining your design process today.</h5>
        </div>
        <p className="mb-6 text-body">{truncateText(desc, 120)}</p>
        <button className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
          {t("read")}
          <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
        </button>
      </Link>

    </>
  )
}
