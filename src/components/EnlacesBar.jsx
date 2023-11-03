import React from "react";
import { Anchor, Box, ResponsiveContext, Text } from "grommet";
import { Cart, User, UserAdd } from "grommet-icons";

const EnlacesBar = () => {
    return (
      <ResponsiveContext.Consumer>
      {size => (
        <Box direction="row" gap="small" justify="center" align="center">
        <Anchor
          target="_blank"
          a11yTitle="Carrito"
          href="/"
          color="wh"
          icon={<Cart color="wh" size="medium" />}
        />
        <Anchor
          target="_blank"
          a11yTitle="Iniciar Sesión"
          href="/"
          color="wh"
          icon={<User color="wh" size="medium" />}
          label={
            size !== "xsmall" &&
            size !== "small" && <Text size="medium">Iniciar Sesión</Text>
          }
        />
      </Box>
      )}
    </ResponsiveContext.Consumer>
    );
};

export default EnlacesBar;
