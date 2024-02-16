import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Stack,
  ButtonGroup,
} from "@mui/material";
import {
  Brightness4 as DarkThemeIcon,
  Brightness7 as LightThemeIcon,
  AccountCircle as ProfileIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { MyCreateRoute } from "src/shared/config/RouteConfig";

interface NavConfigItem {
  label: string;
  path: string;
}

const navConfig: NavConfigItem[] = [
  { label: "Главная", path: MyCreateRoute.main() },
  { label: "О нас", path: "/about" },
  { label: "Контакты", path: "/contacts" },
];

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  loggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  toggleDarkMode,
  loggedIn,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const ProfileStatus = loggedIn ? (
    <IconButton color="inherit">
      <ProfileIcon />
    </IconButton>
  ) : (
    <Button color="inherit">Войти</Button>
  );

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Лого
          </Typography>

          <Hidden mdDown>
            <Stack spacing={2} direction="row" mr={2} component="nav">
              {navConfig.map(({ label, path }) => (
                <Button
                  key={label}
                  component={Link}
                  to={path}
                  color={pathname === path ? "primary" : "inherit"}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          </Hidden>

          <Stack direction="row" spacing={1}>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <LightThemeIcon /> : <DarkThemeIcon />}
            </IconButton>

            {ProfileStatus}
          </Stack>

          <Hidden mdUp>
            <IconButton
              sx={{ marginLeft: 1 }}
              onClick={toggleDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
        <Stack
          component="nav"
          direction="column"
          spacing={2}
          mt={2}
          sx={{
            width: 320,
            padding: 3,
            boxSizing: "border-box",
            "@media (max-width: 600px)": {
              width: "90vw",
              minWidth: 150,
            },
          }}
        >
          {navConfig.map(({ label, path }) => (
            <Button
              key={label}
              component={Link}
              to={path}
              variant={pathname === path ? "contained" : "text"}
              onClick={toggleDrawer}
              // color={pathname === path ? "primary" : "inherit"}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </Container>
  );
};
