import Link from "next/link";
// import f_logo from '../../images/f_logo_RGB-White_58.png'
// import insta_logo from '../../images/Instagram_Glyph_Gradient_RGB.png'
// import tiktok_logo from '../../images/tiktok-logo.png'
// import twitter_logo from '../../images/twitter-logo.png'
// import opensea_logo from '../../images/opensea.png'

export const Navbar = ({ toggle }) => {
  const { REACT_APP_FACEBOOK_URL } = process.env;
  const { REACT_APP_INSTA_URL } = process.env;
  const { REACT_APP_TWITTER_URL } = process.env;
  const { REACT_APP_TIKTOK_URL } = process.env;
  const { REACT_APP_OPENSEA_URL } = process.env;
  return (
    <nav
      className="flex justify-between item-cetner py-4 h-11 bg-black text-white relative shadow-sm font-mono"
      role="navigation"
    >
      <Link href="/" className="px-4">
        <a>Ski Bum NFT</a>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="lg:inline-flex pr-6 md:block hidden ">
        <Link className="px-4" href="/">
          Home
        </Link>

        <Link className="px-4" href="/links">
          <a>Links</a>
        </Link>
        <Link className="px-4" href="/gallery">
          <a>Gallery</a>
        </Link>
        <Link className="px-4" href="/stories">
          <a>Stories</a>
        </Link>
        <div className="flex ">
          <a className="px-2" href={REACT_APP_OPENSEA_URL}>
            <img className="w-5 h-5" src="/opensea.png" alt="OpenSea" />
          </a>
          <a className="px-2" href={REACT_APP_FACEBOOK_URL}>
            <img
              className="w-5 h-5"
              src="/f_logo_RGB-White_58.png"
              alt="Facebook"
            />
          </a>
          <a className="px-2" href={REACT_APP_TWITTER_URL}>
            <img className="w-5 h-5" src="/twitter-logo.png" alt="Twitter" />
          </a>
          <a className="px-2" href={REACT_APP_TIKTOK_URL}>
            <img className="w-6 h-8" src="/tiktok-logo.png" alt="tiktok" />
          </a>
          <a className="px-2" href={REACT_APP_INSTA_URL}>
            <img
              className="w-5 h-5"
              src="/Instagram_Glyph_Gradient_RGB.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
