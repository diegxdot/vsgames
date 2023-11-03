import React, { useContext } from "react";
import { Anchor, Box, Button, Footer, ResponsiveContext, Text } from "grommet";
import { Link } from "react-router-dom";

const FooterApp = () => {
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();

  return (
    <Footer
      background="dbg"
      direction={!["xsmall", "small"].includes(size) ? "row" : "column"}
      align={!["xsmall", "small"].includes(size) ? "center" : undefined}
      pad={{ horizontal: "xlarge", vertical: "medium" }}
      fill="horizontal"
    >
      <Box
        direction={!["xsmall", "small"].includes(size) ? "row" : "column"}
        align={!["xsmall", "small"].includes(size) ? "center" : undefined}
        gap="xsmall"
      >
        <Text size="small">
          &copy; {year} Juan Series X
        </Text>
      </Box>
      <Box
        direction="row"
        align={!["xsmall", "small"].includes(size) ? "center" : undefined}
        gap="medium"
        wrap
      >
        <Anchor label="Acerca de VSGames" color="brand" href="/About"></Anchor>
        <Anchor label="Términos y Condiciones" color="brand" href="/Terminos"></Anchor>
        <Anchor label="FAQ" color="brand" href="/FAQ"></Anchor>
        <Anchor label="Catalogo" color="brand" href="/Catalogo"></Anchor>
      </Box>
    </Footer>
  );
};

export default FooterApp;
