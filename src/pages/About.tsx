import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    return (
        <>
            {t("about.content")}
        </>
    )
}
