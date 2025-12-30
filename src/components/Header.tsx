import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useColorScheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../store/features/LanguageSlice";
import type { Language } from "../store/features/LanguageSlice";

export default function Header() {
    const { mode, setMode } = useColorScheme();

    const dispatch = useDispatch();
    const handleLanguageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (!target.matches("button[data-lang]")) return;
        const lang = target.getAttribute("data-lang") as Language;
        dispatch(changeLanguage(lang));
    };
    if (!mode) return null;
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                p: 3,
                borderBottom: "1px solid",
                borderColor: "divider",
            }}
        >


            <div onClick={handleLanguageClick}>
                <button data-lang="ar">Arabic</button>
                <button data-lang="eng">English</button>
            </div>

            <FormControl>
                <FormLabel>Theme</FormLabel>
                <RadioGroup
                    row
                    value={mode}
                    onChange={(e) =>
                        setMode(e.target.value as "system" | "light" | "dark")
                    }
                >
                    <FormControlLabel value="system" control={<Radio />} label="System" />
                    <FormControlLabel value="light" control={<Radio />} label="Light" />
                    <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}
