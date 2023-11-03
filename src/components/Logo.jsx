import React from "react";
import { Box, Stack, Image } from "grommet";
import visionlogo from "../assets/img/ojo-abierto.png"

const Logo = ( props ) => {
  return (
    <Stack anchor="center">
      <Box height={props} width={props} align="center" pad={{ horizontal: "xxlarge", vertical: "medium" }}>
        <Image fit="cover" src={visionlogo} />
      </Box>
    </Stack>
  );
};

export default Logo;
