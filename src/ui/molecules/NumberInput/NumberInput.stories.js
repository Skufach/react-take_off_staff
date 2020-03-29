import React from "react";
import { storiesOf } from "@storybook/react";
import { NumberInput } from "./NumberInput";
import { action } from "@storybook/addon-actions";

import { select, text } from "@storybook/addon-knobs";

storiesOf("ui/molecules", module).add("NumberInput", () => (
  <NumberInput
    // disabled={boolean("disabled", false)}
    // loading={boolean("loading", false)}
    onPress={action("press")}
    limitPosition={select(
      "limitPosition",
      {
        left: "left",
        right: "right",
        none: null
      },
      null
    )}
  />
));
