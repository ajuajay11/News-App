import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto py-8 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-xl font-bold dark:text-white mb-3">NEWS 24</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {t("footer.description")}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold dark:text-white mb-3">{t("footer.quickLinks")}</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                                    {t("nav.news")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                                    {t("nav.sport")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                                    {t("nav.opinion")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold dark:text-white mb-3">{t("footer.legal")}</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t("footer.rights")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
