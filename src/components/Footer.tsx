import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <>
            {t("footer.text")}
        </>
    )
}
