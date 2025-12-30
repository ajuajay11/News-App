import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useColorScheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../store/features/LanguageSlice";
import type { Language } from "../store/features/LanguageSlice";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { Sun, Moon, Languages } from "lucide-react";
import i18n from "../i18n/i18n";
import SignUpModal from "./SignUpModal";
import { useState } from "react";

export default function Header() {
    const { t } = useTranslation();
    const { mode, setMode } = useColorScheme();
    const dispatch = useDispatch();
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    if (!mode) return null;

    const handleThemeToggle = () => {
        setMode(mode === "dark" ? "light" : "dark");
    };

    const handleLanguage = (lang: Language) => {
        dispatch(changeLanguage(lang));
    };

    const items = [
        "news",
        "showMore",
        "middleEast",
        "explained",
        "opinion",
        "sport",
        "video",
        "more",
    ];

    return (
        <Box sx={{ width: "100%" }}>
            {/* 🔹 TOP HEADER */}
            <Box
                sx={{
                    px: 3,
                    py: 1,
                    display: "flex",
                    flexDirection: { sm: "row" },
                    gap: 2,
                    justifyContent: "space-between",
                    alignItems: "center",
                    bgcolor: "background.paper",
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                        onClick={handleThemeToggle}
                        startIcon={
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: 20,
                                    height: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        opacity: mode === "light" ? 1 : 0,
                                        transform: mode === "light" ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0)',
                                        transition: 'all 0.5s ease',
                                    }}
                                >
                                    <Sun size={18} color="#f59e0b" strokeWidth={2.5} />
                                </Box>

                                <Box
                                    sx={{
                                        position: 'absolute',
                                        opacity: mode === "dark" ? 1 : 0,
                                        transform: mode === "dark" ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0)',
                                        transition: 'all 0.5s ease',
                                    }}
                                >
                                    <Moon size={18} color="#3b82f6" strokeWidth={2.5} />
                                </Box>
                            </Box>
                        }
                        size="small"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            color: mode === "dark" ? '#3b82f6' : '#f59e0b',
                            borderColor: mode === "dark" ? '#3b82f6' : '#f59e0b',
                            '&:hover': {
                                borderColor: mode === "dark" ? '#2563eb' : '#d97706',
                                backgroundColor: mode === "dark" ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                            }
                        }}
                        variant="outlined"
                    >
                        {mode === "dark" ? t("header.dark") : t("header.light")}
                    </Button>
                </Stack>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    {/* Language Icon */}
                    <Languages size={18} strokeWidth={2.5} style={{ marginRight: '4px' }} />

                    {/* EN Button */}
                    <Button
                        size="small"
                        onClick={() => handleLanguage("en")}
                        variant={i18n.language === "en" ? "contained" : "outlined"}
                        sx={{
                            minWidth: '45px',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            px: 1.5,
                            py: 0.5,
                            textTransform: 'uppercase',
                            borderRadius: '6px',
                            ...(i18n.language === "en" && {
                                backgroundColor: '#3b82f6',
                                '&:hover': {
                                    backgroundColor: '#2563eb',
                                }
                            }),
                            ...(i18n.language !== "en" && {
                                borderColor: '#94a3b8',
                                color: '#64748b',
                                '&:hover': {
                                    borderColor: '#3b82f6',
                                    color: '#3b82f6',
                                    backgroundColor: 'rgba(59, 130, 246, 0.05)',
                                }
                            })
                        }}
                    >
                        EN
                    </Button>

                    {/* AR Button */}
                    <Button
                        size="small"
                        onClick={() => handleLanguage("ar")}
                        variant={i18n.language === "ar" ? "contained" : "outlined"}
                        sx={{
                            minWidth: '45px',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            px: 1.5,
                            py: 0.5,
                            textTransform: 'uppercase',
                            borderRadius: '6px',
                            ...(i18n.language === "ar" && {
                                backgroundColor: '#3b82f6',
                                '&:hover': {
                                    backgroundColor: '#2563eb',
                                }
                            }),
                            ...(i18n.language !== "ar" && {
                                borderColor: '#94a3b8',
                                color: '#64748b',
                                '&:hover': {
                                    borderColor: '#3b82f6',
                                    color: '#3b82f6',
                                    backgroundColor: 'rgba(59, 130, 246, 0.05)',
                                }
                            })
                        }}
                    >
                        AR
                    </Button>
                </Box>
            </Box>

            <Divider />

            {/* 🔹 MAIN HEADER */}
            <Box
                sx={{
                    px: 3,
                    py: 2,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Link to="/">
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: "1px",
                        }}
                    >
                        NEWS <span style={{ fontWeight: 400 }}>24</span>
                    </Typography>
                </Link>
                <Box sx={{ display: 'flex', gap: 3 }}>
                    <Button variant="outlined" onClick={() => setIsSignUpOpen(true)}>{t("header.signup")}</Button>
                    <Button variant="contained" color="error">
                        {t("header.subscribe")}
                    </Button>
                </Box>
            </Box>
            <SignUpModal open={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />

            <Divider />

            {/* 🔹 NAVIGATION BAR */}
            <Box
                sx={{
                    px: 3,
                    py: 1.5,
                    display: "flex",
                    gap: 3,
                    overflowX: "auto",
                }}
            >
                {items.map((key) => (
                    <Typography
                        key={key}
                        className="justify-center"
                        sx={{
                            cursor: "pointer",
                            fontWeight: 500,
                            whiteSpace: "nowrap",
                            "&:hover": {
                                color: "error.main",
                            },
                        }}
                    >
                        {t(`nav.${key}`)}
                    </Typography>
                ))}
            </Box>

            <Divider />
        </Box>
    );
}