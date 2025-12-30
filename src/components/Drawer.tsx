import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from "react-i18next";

export default function TemporaryDrawer() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: t('drawer.inbox'), key: 'Inbox' },
          { text: t('drawer.starred'), key: 'Starred' },
          { text: t('drawer.sendEmail'), key: 'Send email' },
          { text: t('drawer.drafts'), key: 'Drafts' }
        ].map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: t('drawer.allMail'), key: 'All mail' },
          { text: t('drawer.trash'), key: 'Trash' },
          { text: t('drawer.spam'), key: 'Spam' }
        ].map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>{t('drawer.openDrawer')}</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
