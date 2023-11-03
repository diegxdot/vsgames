import React from "react";
import { Carousel, Box, Image, ResponsiveContext } from "grommet";

const Slider = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box height="medium" width="auto" overflow="hidden" background="bg" elevation="small">
          <Carousel fill>
            <Image
              fit="cover"
              src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
            />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
          </Carousel>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Slider;
