import {BsFillPatchCheckFill} from "react-icons/bs";

function Header() {
  return (
  <header className="pl-24 pt-5">

<h1 className="text-4xl">Live Spaces</h1>
<div className="flex items-center space-x-2 pt-4">

<BsFillPatchCheckFill/>
<p className="text-gray-500 text-xs lg:text-sm">All NFTs on Cyber either belong to or were minted by their space creator.</p>
</div>
  </header>
  )
}

export default Header;
