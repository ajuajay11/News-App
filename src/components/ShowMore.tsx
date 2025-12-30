import { useTranslation } from "react-i18next";

export default function ShowMore() {
    const { t } = useTranslation();
    return (
        <>
            <div className="flex gap-3 mt-2">
                <small className="text-[#666]">{t("common.showMore")} </small>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#666] lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </div>
        </>
    )
}
