import CollectionView from "./CollectionView";
import AuctionView from "./AuctionView";
import NftView from "./NftView";
import HeaderView from "./HeaderView";

export default function MarketHome() {
  return (
    <>
      <HeaderView />
      <CollectionView />
      <AuctionView />
      <NftView />
    </>
  );
}
