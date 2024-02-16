import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { MyCreateRoute } from "src/shared/config/RouteConfig";

export const NotFoundPage: FC = () => {
  return (
    <Box textAlign="center" mt={8}>
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" mb={2}>
        Страница не найдена
      </Typography>
      <Button
        component={Link}
        to={MyCreateRoute.main()}
        variant="contained"
        color="primary"
      >
        На главную
      </Button>
    </Box>
  );
};
