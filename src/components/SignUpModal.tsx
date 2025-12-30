import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { useTranslation } from "react-i18next";

interface SignUpModalProps {
    open: boolean;
    onClose: () => void;
}

export default function SignUpModal({ open, onClose }: SignUpModalProps) {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => {
            alert(t("signup.success"));
            onClose();
            setFormData({ name: '', email: '', password: '' });
        }, 500);
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>{t("signup.title")}</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            autoFocus
                            required
                            id="name"
                            name="name"
                            label={t("signup.name")}
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="email"
                            name="email"
                            label={t("signup.email")}
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="password"
                            name="password"
                            label={t("signup.password")}
                            type="password"
                            fullWidth
                            variant="outlined"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="inherit">
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained">
                        {t("signup.submit")}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
