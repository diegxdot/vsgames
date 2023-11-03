import React, { useContext } from "react";
import { Box, Paragraph, Text, PageHeader, ResponsiveContext } from "grommet";

const Terminos = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      background="bg"
      direction="column"
      align="stretch"
      gap="small"
      fill="horizontal"
    >
      <PageHeader
        title="Terminos y condiciones de uso"
        subtitle="Nuestros terminos y condiciones de VISIONGAMES"
      />
      <Paragraph margin="large" fill="true" responsive="true">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        distinctio omnis illo repellat rerum nemo exc epturi consequuntur culpa
        eaque eligendi, quae, doloremque sint? Dolores vitae hic repellat facere
        rem, molestiae perspiciatis nihil, quibusdam nobis, adipisci ea debitis
        numquam? Alias ipsam aperiam nesciunt nam laboriosam reprehenderit
        provident, facere nostrum necessitatibus ducimus quidem pariatur id
        culpa eaque distinctio unde recusandae sunt saepe deserunt? In qui
        corrupti vitae iusto maiores explicabo tempora debitis. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nesciunt distinctio omnis
        illo repellat rerum nemo excepturi consequuntur culpa eaque eligendi,
        quae, doloremque sint? Dolores vitae hic repellat facere rem, molestiae
        perspiciatis nihil, quibusdam nobis, adipisci ea debitis numquam? Alias
        ipsam aperiam nesciunt nam laboriosam reprehenderit provident, facere
        nostrum necessitatibus ducimus quidem pariatur id culpa eaque distinctio
        unde recusandae sunt saepe deserunt? In qui corrupti vitae iusto maiores
        explicabo tempora debitis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt distinctio omnis illo repellat rerum nemo
        excepturi consequuntur culpa eaque eligendi, quae, doloremque sint?
        Dolores vitae hic repellat facere rem, molestiae perspiciatis nihil,
        quibusdam nobis, adipisci ea debitis numquam? Alias ipsam aperiam
        nesciunt nam laboriosam reprehenderit provident, facere nostrum
        necessitatibus ducimus quidem pariatur id culpa eaque distinctio unde
        recusandae sunt saepe deserunt? In qui corrupti vitae iusto maiores
        explicabo tempora debitis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt distinctio omnis illo repellat rerum nemo
        excepturi consequuntur culpa eaque eligendi, quae, doloremque sint?
        Dolores vitae hic repellat facere rem, molestiae perspiciatis nihil,
        quibusdam nobis, adipisci ea debitis numquam? Alias ipsam aperiam
        nesciunt nam laboriosam reprehenderit provident, facere nostrum
        necessitatibus ducimus quidem pariatur id culpa eaque distinctio unde
        recusandae sunt saepe deserunt? In qui corrupti vitae iusto maiores
        explicabo tempora debitis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt distinctio omnis illo repellat rerum nemo
        excepturi consequuntur culpa eaque eligendi, quae, doloremque sint?
        Dolores vitae hic repellat facere rem, molestiae perspiciatis nihil,
        quibusdam nobis, adipisci ea debitis numquam? Alias ipsam aperiam
        nesciunt nam laboriosam reprehenderit provident, facere nostrum
        necessitatibus ducimus quidem pariatur id culpa eaque distinctio unde
        recusandae sunt saepe deserunt? In qui corrupti vitae iusto maiores
        explicabo tempora debitis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt distinctio omnis illo repellat rerum nemo
        excepturi consequuntur culpa eaque eligendi, quae, doloremque sint?
        Dolores vitae hic repellat facere rem, molestiae perspiciatis nihil,
        quibusdam nobis, adipisci ea debitis numquam? Alias ipsam aperiam
        nesciunt nam laboriosam reprehenderit provident, facere nostrum
        necessitatibus ducimus quidem pariatur id culpa eaque distinctio unde
        recusandae sunt saepe deserunt? In qui corrupti vitae iusto maiores
        explicabo tempora debitis. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Accusantium facilis voluptate nam sed corporis
        delectus eos sunt non dolore iusto error neque cupiditate veritatis illo
        officiis qui, illum provident quo.
      </Paragraph>
    </Box>
  );
};

export default Terminos;
