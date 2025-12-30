import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
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

export default function Header() {
    const { t } = useTranslation();
    const { mode, setMode } = useColorScheme();
    const dispatch = useDispatch();

    if (!mode) return null;

    const handleThemeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMode(e.target.checked ? "dark" : "light");
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
                    justifyContent: "space-between",
                    alignItems: "center",
                    bgcolor: "background.paper",
                }}
            >

                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="body2">
                        {mode === "dark" ? "Dark" : "Light"}
                    </Typography>
                    <Switch checked={mode === "dark"} onChange={handleThemeToggle} />
                </Stack>


                <Stack direction="row" spacing={1}>
                    <Button size="small" onClick={() => handleLanguage("eng")}>
                        EN
                    </Button>
                    <Button size="small" onClick={() => handleLanguage("ar")}>
                        AR
                    </Button>
                </Stack>
            </Box>

            <Divider />

            {/* 🔹 MAIN HEADER */}
            <Box
                sx={{
                    px: 3,
                    py: 2,
                    display: "flex",
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
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined">Sign up</Button>
                    <Button variant="contained" color="error">
                        Subscribe
                    </Button>
                </Stack>
            </Box>

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
