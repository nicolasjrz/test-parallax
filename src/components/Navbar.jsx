import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const pages = [
  { id: 1, name: "Video", url: "/video" },
  { id: 2, name: "Skewed", url: "/skewed" },
  { id: 3, name: "Gallery", url: "/gallery" },
  { id: 4, name: "3D", url: "/3D" },
  { id: 5, name: "Parallax", url: "/parallax" },
  { id: 6, name: "Shop", url: "/shop" },
  { id: 6, name: "Cart", url: "/cart" },
];

import { Link, Link as RouterLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { useCartStore } from "../hooks/useCartStore";

export const Navbar = () => {
  const { cantItemsCart } = useCartStore();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* MENU DESTOKP */}

          <>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO NO RESP
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
              }}
            >
              {pages.map((page, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={page.url}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {page.name === "Cart" ? (
                    <Button
                      key={page.id}
                      onClick={handleCloseNavMenu}
                      sx={{ display: "block", pt: 1.5 }}
                    >
                      <IconButton aria-label="cart">
                        <Badge badgeContent={cantItemsCart} color="success">
                          <ShoppingCartIcon />
                        </Badge>
                      </IconButton>
                    </Button>
                  ) : (
                    <Button
                      key={page.id}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      <Typography textAlign="center">{page.name}</Typography>
                    </Button>
                  )}
                </Link>
              ))}
              {/* <IconButton aria-label="cart">
              <Badge badgeContent={3} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton> */}
            </Box>
          </>

          {/* MENU MOBILE  */}

          <>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link
                      component={RouterLink}
                      to={page.url}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page.name === "Cart" ? (
                        <Button
                          key={page.id}
                          onClick={handleCloseNavMenu}
                          sx={{ display: "block", pt: 1.5 }}
                        >
                          <IconButton aria-label="cart">
                            <Badge badgeContent={cantItemsCart} color="success">
                              <ShoppingCartIcon />
                            </Badge>
                          </IconButton>
                        </Button>
                      ) : (
                        <Button
                          key={page.id}
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: "black", display: "block" }}
                        >
                          <Typography textAlign="center">
                            {page.name}
                          </Typography>
                        </Button>
                      )}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO RESP
            </Typography>
          </>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
