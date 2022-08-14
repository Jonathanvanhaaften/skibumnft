import { Fragment } from "react";
import React from "react";
import Picture from "../components/Picture";
import Head from "next/head";
import ScrollToTop from "../components/ScrollToTop";

// import nikkysnotch from "../../images/nftart/nikkysnotch.png";
// import backseatdriver from "../../images/nftart/backseatdriver.png";
// import deep from "../../images/nftart/deep.png";
// import deepvan from "../../images/nftart/deepvan.png";
// import drivesafe from "../../images/nftart/drivesafe.png";
// import firstsnow from "../../images/nftart/firstsnow.png";
// import Imnotstuckyourstuck from "../../images/nftart/Imnotstuckyourstuck.png";
// import kickingview from "../../images/nftart/kickingview.png";
// import overthebridgeoncemore from "../../images/nftart/overthebridgeoncemore.png";
// import skibumgrind from "../../images/nftart/skibumgrind.png";
// import tothenextskitown from "../../images/nftart/tothenextskitown.png";
// import traverselookout from "../../images/nftart/traverselookout.png";
// import turns from "../../images/nftart/turns.png";
// import knees from "../../images/nftart/powderrknees.png";
// import zima from "../../images/nftart/zimaafterthestorm.png";
// import tour from "../../images/nftart/tourpause.png";

const Gallery = () => {
  const { REACT_APP_DEEPVAN_URL } = process.env;
  const { REACT_APP_DRIVE_URL } = process.env;
  const { REACT_APP_FIRST_URL } = process.env;
  const { REACT_APP_DEEP_URL } = process.env;
  const { REACT_APP_POWDERHUNTER_URL } = process.env;
  const { REACT_APP_BRIDGE_URL } = process.env;
  const { REACT_APP_NOTCH_URL } = process.env;
  const { REACT_APP_NEXT_URL } = process.env;
  const { REACT_APP_VIEW_URL } = process.env;
  const { REACT_APP_LOOKOUT_URL } = process.env;
  const { REACT_APP_EARN_URL } = process.env;
  const { REACT_APP_BACK_URL } = process.env;
  const { REACT_APP_FOUNDATION_URL } = process.env;
  const { REACT_APP_FTURN_URL } = process.env;
  const { REACT_APP_FKNESS_URL } = process.env;
  const { REACT_APP_FZIMA_URL } = process.env;
  const { REACT_APP_FPAUSE_URL } = process.env;

  return (
    <div className="bg-black">
      {/* helmet meta data for seo */}
      <Head>
        <title>Ski Bum NFT Gallery</title>
        <meta
          name="description"
          content="Ski Bum NFTs Gallery of NFTs sold and for sale"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      ;{/* Start of components */}
      <div>
        <div>
          <h1 className="text-white text-8xl text-center">Gallery</h1>
          <p className="text-white text-6xl text-center">
            Genesis Collection from OpenSea <br />
            'Ski Bum in a Van'
          </p>
        </div>
        <div className="md:grid md:grid-col-6 md:grid-rows-3 sm:mb-20 mr-8">
          <div
            className="col-start-1 
             w-full h-full flex justify-center m-4  sm:pb-20 "
          >
            <Picture
              picture={"/nikkysnotch.png"}
              height={"1000px"}
              width={"1000px"}
              link={REACT_APP_NOTCH_URL}
              title={"Nicci's notch"}
              eth={"0.20 ETH"}
              setPic={"OpenSea"}
              alt={"Nikkys Notch NFT on OpenSea"}
            />
          </div>

          <div
            className="col-start-2 
             w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/deep.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"OpenSea"}
              link={REACT_APP_DEEP_URL}
              title={"Deep"}
              eth={"0.20 ETH"}
              alt={"Deep NFT on OpenSea"}
            />
          </div>
          <div
            className="col-start-3 
             w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/deepvan.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"OpenSea"}
              link={REACT_APP_DEEPVAN_URL}
              title={"Deep Van"}
              eth={"0.10 ETH"}
              alt={"Deep Van NFT on OpenSea"}
            />
          </div>

          {/* Start of row 2 */}

          <div
            className="col-start-1 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/kickingview.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"OpenSea"}
              link={REACT_APP_VIEW_URL}
              title={"Turns with a View"}
              eth={"0.15 ETH"}
              alt={"Kicking Horse View NFT on OpenSea"}
            />
          </div>

          <div
            className="col-start-2 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/firstsnow.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"OpenSea"}
              link={REACT_APP_FIRST_URL}
              title={"First Snow"}
              eth={"0.10 ETH"}
              alt={"First Snow NFT on OpenSea"}
            />
          </div>

          <div
            className="col-start-3 row-start-2
             w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/overthebridgeoncemore.png"}
              height={"1000px"}
              width={"1000px"}
              link={REACT_APP_BRIDGE_URL}
              title={"Touring bridge in bear ally"}
              eth={"0.10 ETH"}
              setPic={"OpenSea"}
              alt={"Bridge in Rogers Pass NFT on OpenSea"}
            />
          </div>
          {/* Start of row 3 */}

          <div
            className="col-start-1 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/tothenextskitown.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"OpenSea"}
              link={REACT_APP_NEXT_URL}
              title={"Won't you take me to the next ski town"}
              eth={"0.15 ETH"}
              alt={"To the Next NFT on OpenSea"}
            />
          </div>

          <div
            className="col-start-2 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/Imnotstuckyourstuck.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"OpenSea"}
              link={REACT_APP_POWDERHUNTER_URL}
              title={"Powder hunter"}
              eth={"SOLD"}
              alt={"Stuck NFT on OpenSea"}
            />
          </div>

          <div
            className="col-start-3 row-start-3
             w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/traverselookout.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"OpenSea"}
              link={REACT_APP_LOOKOUT_URL}
              title={"Traverse look out"}
              eth={"0.15 ETH"}
              alt={"Lookout NFT on OpenSea"}
            />
          </div>

          {/* Start of row 4 */}

          <div
            className="col-start-1 row-start-4
             w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/backseatdriver.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"OpenSea"}
              link={REACT_APP_BACK_URL}
              title={"Back seat driver"}
              eth={"SOLD"}
              alt={"Backseat NFT on OpenSea"}
            />
          </div>

          <div
            className="col-start-2 row-start-4
             w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/drivesafe.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"OpenSea"}
              link={REACT_APP_DRIVE_URL}
              title={"Drive safe"}
              eth={"0.10 ETH"}
              alt={"Drive Safe on NFT OpenSea"}
            />
          </div>

          <div
            className="col-start-3 row-start-4
             w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/skibumgrind.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"OpenSea"}
              link={REACT_APP_EARN_URL}
              title={"The walk up to earn them turns"}
              eth={"0.17 ETH"}
              alt={"Ski Bum Grind NFT on OpenSea"}
            />
          </div>
        </div>
        {/* Start of Foundation collection */}
        <dir>
          <p className="text-white text-6xl text-center">
            Collection from Foundation <br />
            'Ski Bum Life'
          </p>
        </dir>
        <div className="md:grid md:grid-col-2 md:grid-rows-2 sm:mb-20 mr-8">
          <div
            className="col-start-1 
          w-full h-full flex justify-center m-4  sm:pb-20 "
          >
            <Picture
              picture={"/turns.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"Foundation"}
              title={"Turns"}
              eth={"0.40 ETH"}
              link={REACT_APP_FTURN_URL}
              alt={"Turns NFT on Foundation"}
            />
          </div>

          <div
            className="col-start-2 
          w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/powderknees.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"Foundation"}
              title={"Powder Knees"}
              eth={"0.30 ETH"}
              link={REACT_APP_FKNESS_URL}
              alt={"Powder Kness on NFT Foundation"}
            />
          </div>

          {/* Start of row 2 */}

          <div
            className="col-start-1 row-start-2
          w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/tourpause.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"Foundation"}
              title={"After Powder Pause"}
              eth={"0.40 ETH"}
              link={REACT_APP_FPAUSE_URL}
              alt={"After Powder Pause NFT on Foundation"}
            />
          </div>

          <div
            className="col-start-2 row-start-2
          w-full h-full flex justify-center m-4 sm:pb-20 "
          >
            <Picture
              picture={"/zimaafterthestorm.png"}
              height={"1000px"}
              width={"1000px"}
              setPic={"Foundation"}
              title={"Zima After the Storm"}
              eth={"0.10 ETH"}
              link={REACT_APP_FZIMA_URL}
              alt={"Zima After the storm NFT on Foundation"}
            />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Gallery;
