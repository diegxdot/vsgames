import React, { useContext } from "react";
import { Box, Paragraph, Text, PageHeader, ResponsiveContext } from "grommet";
import Logo from "../components/Logo";

const About = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      background="bg"
      direction={!["xsmall", "small"].includes(size) ? "row" : "column"}
      align={!["xsmall", "small"].includes(size) ? "center" : undefined}
      pad={{ horizontal: "xlarge", vertical: "medium" }}
      fill="horizontal"
    >
      <Logo width="medium" height="medium" />
      <Box
        direction="row"
        align={!["xsmall", "small"].includes(size) ? "start" : undefined}
        pad={{ horizontal: "xlarge", vertical: "medium" }}
        gap="large"
        wrap
      >
        <PageHeader title="VISIONGAMES" parent="Acerca de" />
        <Paragraph fill="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure
          nesciunt laudantium quibusdam architecto, dignissimos quo accusantium
          sapiente ad placeat quaerat tempore unde odit quisquam, alias dolor
          nemo sunt veritatis quidem facere. Culpa minima quam quibusdam quo
          expedita fuga distinctio. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Id, minus. Modi porro et ab velit exercitationem id
          totam veniam quibusdam dolor. Porro, consequuntur illo. Quo sunt sit
          recusandae quibusdam ad!
        </Paragraph>
      </Box>
      
    </Box>
  );
};

export default About;
