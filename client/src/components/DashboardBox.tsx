import {Box} from "@mui/material";
import {styled } from "@mui/system";

const DashboardBox = styled(Box)(({ theme }) => ({
    borderRadius: "1.4rem",
    boxShadow: "0.2rem 0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.6)",
}));

export default DashboardBox;