import { AppBar, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const ToolBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Traveling
        </Typography>

        <Button
          onClick={() => {
            navigate("/");
          }}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Location
        </Button>
        <Button
          onClick={() => {
            navigate("/rule");
          }}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Rules
        </Button>
      </Toolbar>
    </AppBar>
  );
};
