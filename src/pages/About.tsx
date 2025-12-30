import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 dark:text-white">
                    {t("nav.about")}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("about.content")}
                </p>
            </div>
        </section>
    );
}
