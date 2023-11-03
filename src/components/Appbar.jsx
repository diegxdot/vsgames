import React from "react";
import { Anchor, Box, ResponsiveContext, Header, Text } from "grommet";
import EnlacesBar from "./EnlacesBar";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

const Appbar = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Header
          direction="row"
          justify="between"
          pad={{ horizontal: "xlarge", vertical: "small" }}
          background="bg"
          align="center"
        >
          <Anchor
            href="/"
            icon={<Logo width="xxsmall" height="xxsmall"/>}
            color="wh"
            label={
              size !== "xsmall" &&
              size !== "small" && <Text size="large">VISIONGAMES</Text>
            }
          />
          <Searchbar />
          <EnlacesBar />
        </Header>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Appbar;
