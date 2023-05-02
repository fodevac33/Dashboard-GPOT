import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetweenBoxHeader from "./FlexBetweenBoxHeader";

type Props = {
  title: string;
  sideText: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetweenBoxHeader color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetweenBoxHeader>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetweenBoxHeader>
      <Typography variant="h5" fontWeight="700" color={palette.tertiary[500]}>
        {sideText}
      </Typography>
    </FlexBetweenBoxHeader>
  );
};

export default BoxHeader;