import Box from "@mui/material/Box";
import Header from "./Header";
import Choose from "./Choose";
import Hottest from "./HottestItems";
import DeepToken from "./DeepToken";
import TopCollection from "./TopCollection";
import AboutUs from "./AboutUs";
import LatestArticles from "./LatestArticles";

export default function Home() {
  return (
    <Box>
      <Header />
      <Choose />
      <Hottest />
      <DeepToken />
      <TopCollection />
      <AboutUs />
      <LatestArticles />
    </Box>
  );
}
