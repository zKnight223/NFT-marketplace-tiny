import { Typography, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useStyles } from "./styles";
import { useState, useEffect } from "react";

type Route = {
  name: string;
  route: string;
};

export default function DNPathLinker() {
  const { pathname } = useLocation();
  const [routes, setRoutes] = useState<Route[]>([]);
  const classes = useStyles();

  useEffect(() => {
    let path: string = "";

    const _routes = pathname?.split("/").map((name, index) => {
      path = path.concat(index !== 1 ? `/${name}` : name);
      return { name: !index ? "home" : name, route: `${path}` } as Route;
    });

    setRoutes(_routes);
  }, [pathname]);

  return (
    <Box>
      {routes?.map((route, index) => (
        <Typography
          component={Link}
          to={route.route}
          variant="caption"
          className={classes.link}
          key={index}
        >
          <Typography variant="caption">{route.name.slice(0, 1)}</Typography>
          {route.name.slice(1)}
        </Typography>
      ))}
    </Box>
  );
}
