import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useGetPostsQuery } from "../store/features/api/NewsApi";

const { data} = useGetPostsQuery();
 
export default function Landing() {
    const { t } = useTranslation();

    return (
        <>
            <Link to="/about">About</Link>
            <h1>{t("welcomeMessage")}</h1>
            {data?.slice(0, 5).map((post:any) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </>
    )
}
