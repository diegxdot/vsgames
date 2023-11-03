import React from "react";
import { Box, DropButton, Header, Button, Anchor, Text } from "grommet";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Header
      direction="row"
      justify="center"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      align="center"
    >
      <DropButton
        label="Juegos por precio"
        size="small"
        dropContent={
          <Box
            direction="column"
            pad={{ horizontal: "small", vertical: "small" }}
            gap="small"
            background="dbrand"
          >
            <Text size="medium" color="bg" weight="bold">
                Filtrar por precio
              </Text>
            <Anchor href="#" label="Menos de 50MNXN" color="bg" />
            <Anchor href="#" label="Menos de 100MXN" color="bg" />
            <Anchor href="#" label="Menos de 200MXN" color="bg" />
            <Anchor href="#" label="Menos de 300MXN" color="bg" />
            <Anchor href="#" label="Menos de 400MXN" color="bg" />
            <Anchor href="#" label="Menos de 500MXN" color="bg" />
            <Anchor href="#" label="Menos de 600MXN" color="bg" />
          </Box>
        }
      />
      <DropButton
        label="Categorias"
        size="small"
        dropContent={
          <Box
            direction="row"
            pad={{ horizontal: "small", vertical: "small" }}
            gap="small"
            background="dbrand"
          >
            <Box direction="column" gap="small" pad="small">
              <Text size="medium" color="bg" weight="bold">
                Géneros populares
              </Text>
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
            </Box>
            <Box direction="column" gap="small" pad="small">
              <Text size="medium" color="bg" weight="bold">
                Otros Géneros
              </Text>
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
              <Anchor href="#" label="For Example" color="bg" />
            </Box>
          </Box>
        }
      />
      <Button label="Catalogo" size="small" href="/Catalogo"/>
    </Header>
  );
};

export default Navbar;
