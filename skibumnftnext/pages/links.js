// import React, {Fragment} from 'react'
// import { Helmet } from "react-helmet";
import React from "react";
import { Fragment } from "react";

import Link from "next/link";
import Head from "next/head";

export default function Links() {
  return (
    <Fragment>
      {/* helmet meta data for seo */}
      <Head>
        <title>Ski Bum NFT Links</title>
        <meta
          name="description"
          content="Ski Bum NFTs Links to friends and artists"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* helmet meta data for seo */}

      {/* Start of components */}
      <div className="bg-black">
        <div className="text-white  p-20">
          <h1 className="sm:text-5xl text-xl">
            Our friends and sites of interest
          </h1>
          <p className="sm:text-xl">
            Any NFTs promoted on our site are for aesthetics and for the
            community, not for financial gain. We would like to promote art and
            community.
          </p>
        </div>
        <div className="text-right sm:text-4xl text-sm mr-2 sm:m-8 sm:text-gray-600 text-white">
          <a
            className=" hover:text-white p-5"
            href="https://www.wildwoodcafe.ca/"
          >
            Wild Wood cafe, Whistler BC{" "}
          </a>
          <br />
          <a className=" hover:text-white p-5" href="https://www.maurmere.com">
            Maur Mere media{" "}
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="https://www.pixelbeachclub.com/"
          >
            Pixel Beach club - Artist
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="https://foundation.app/@cavidmdw"
          >
            Cavid Mammadli's foundation site - Artist
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="https://blackfeather.com/hike"
          >
            Black Feather the wilderness adventure{" "}
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="https://boredapeyachtclub.com/#/"
          >
            The bored ape yacht club
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="https://www.blockchainminers.club/"
          >
            Blockchain Miners
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="https://protectourwinters.org/pow-international/"
          >
            POW Protect Our Winters
          </a>
          <br />
          <a className=" hover:text-white p-5" href="https://lisafogarty.se/">
            Lisa Fogarty - Artist
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="https://hashlips.online/HashLips"
          >
            HashLips - YouTuber
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="https://skookumcycleandski.com"
          >
            Skookum Cycle and Ski, Revelstoke BC
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="https://www.splitzgrill.com/"
          >
            Splitz Grill, Whistler BC
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="http://www.thevillageidiot.ca/"
          >
            The Village Idiot, grill, Revelstoke BC{" "}
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="https://www.whistlerblackcomb.com/explore-the-resort/the-village/dining/the-glc.aspx"
          >
            GLC bar and grill, Whistler BC{" "}
          </a>
          <br />
          <a
            className=" hover:text-white p-5"
            href="https://www.sandkexpeditions.com"
          >
            S and K Expeditions
          </a>
        </div>
      </div>
    </Fragment>
  );
}
