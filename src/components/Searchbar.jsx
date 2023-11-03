import { Search } from "grommet-icons";
import { TextInput, Box } from "grommet";

const Searchbar = () => {
  return (
    <Box direction="row" gap="small">
      <TextInput icon={<Search />} placeholder="Buscar" />
    </Box>
  );
};

export default Searchbar;
