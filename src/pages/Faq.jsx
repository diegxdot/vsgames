import React, { useContext } from "react";
import { Box, Paragraph, Text, PageHeader, ResponsiveContext } from "grommet";
import { Help } from "grommet-icons";

const Faq = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      background="bg"
      direction={!["xsmall", "small"].includes(size) ? "row" : "column"}
      align={!["xsmall", "small"].includes(size) ? "center" : undefined}
      gap={{ horizontal: "xlarge", vertical: "medium" }}
      fill="horizontal"
    >
      <Help color="brand" size="xlarge"/>
      <Box pad={{ left: "xlarge"}} margin="small">
        <PageHeader title="Preguntas Frecuentes" />
        <Text size="xlarge">Pregunta 1</Text>
        <Paragraph fill="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          expedita dicta exercitationem vero natus veniam, inventore laborum
          accusamus. Maxime possimus maiores alias fuga provident tempora itaque
          aut nulla voluptatibus atque!
        </Paragraph>
        <Text size="xlarge">Pregunta 2</Text>
        <Paragraph fill="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          expedita dicta exercitationem vero natus veniam, inventore laborum
          accusamus. Maxime possimus maiores alias fuga provident tempora itaque
          aut nulla voluptatibus atque!
        </Paragraph>
        <Text size="xlarge">Pregunta 3</Text>
        <Paragraph fill="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          expedita dicta exercitationem vero natus veniam, inventore laborum
          accusamus. Maxime possimus maiores alias fuga provident tempora itaque
          aut nulla voluptatibus atque!
        </Paragraph>
        <Text size="xlarge">Pregunta 4</Text>
        <Paragraph fill="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          expedita dicta exercitationem vero natus veniam, inventore laborum
          accusamus. Maxime possimus maiores alias fuga provident tempora itaque
          aut nulla voluptatibus atque!
        </Paragraph>
        <Text size="xlarge">Pregunta 5</Text>
        <Paragraph fill="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          expedita dicta exercitationem vero natus veniam, inventore laborum
          accusamus. Maxime possimus maiores alias fuga provident tempora itaque
          aut nulla voluptatibus atque!
        </Paragraph>
      </Box>
    </Box>
  );
};

export default Faq;
