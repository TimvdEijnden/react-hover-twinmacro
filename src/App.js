import React from "react";
import "twin.macro";

import { NavigationTW } from "./components/NavigationTW";
import { NavigationState } from "./components/NavigationState";

const App = () => (
  <div>
    <p>I prefer a CSS only solution but it's not testable, both Navigation components have exact the same tests.</p>
    <code>
    css=&#123;[
      &#123;
          ":hover > div": tw`block`
        &#125;
      ]&#125;
    </code>
    <p>But the code above does not work while running the test, the block style is not applied on mouseOver.</p>
    <div tw="flex gap-x-20 mt-10">
      <div>
        <h1>Using css (twin macro + tailwind)</h1>
        <NavigationTW />
      </div>
      <div>
        <h1>Using setState</h1>
        <NavigationState />
      </div>
    </div>
  </div>
);

export default App;
