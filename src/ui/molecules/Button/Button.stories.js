import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { action } from "@storybook/addon-actions";

import { select } from "@storybook/addon-knobs";

storiesOf("ui/molecules", module).add("Button", () => (
  <Button
    // disabled={boolean("disabled", false)}
    // loading={boolean("loading", false)}
    onPress={action("press")}
    status={select(
      "status",
      {
        attention: "attention",
        success: "success",
        special: "special",
        none: null
      },
      null
    )}
  >
    Одиннадцатиклассница
  </Button>
));
