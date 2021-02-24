import React, { useState } from "react";
import tw from "twin.macro";

export const NavigationState = () => {
  const [hover, setHover] = useState(false);

  return (<ul>
    <li
      tw="w-52 bg-red-700 text-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      >
      Hover me
      <div tw="hidden bg-green-700" css={[ hover && tw`block`]} className="sub-menu">
        <button tw="border border-black m-2 bg-yellow-700">First</button>
        <button tw="border border-black m-2 bg-yellow-700">Second</button>
      </div>
    </li>
  </ul>
)}
