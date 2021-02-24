import React from "react";
import tw from "twin.macro";

export const NavigationTW
 = () => (
  <ul>
    <li
      tw="w-52 bg-red-700 text-center"
      css={[
        {
          ":hover > div": tw`block`
        }
      ]}
    >
      Hover me
      <div tw="hidden bg-green-700">
        <button tw="border border-black m-2 bg-yellow-700">First</button>
        <button tw="border border-black m-2 bg-yellow-700">Second</button>
      </div>
    </li>
  </ul>
);
