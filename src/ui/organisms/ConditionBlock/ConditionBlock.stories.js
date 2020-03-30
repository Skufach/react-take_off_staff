import React from "react";
import { storiesOf } from "@storybook/react";
import { ConditionBlock } from "./ConditionBlock";
import { action } from "@storybook/addon-actions";

import { select, array } from "@storybook/addon-knobs";

storiesOf("ui/organisms", module).add("ConditionBlock", () => (
  <ConditionBlock
  // type={select("type", {
  //   range: "range",
  //   selecting: "selecting"
  // })}
  // onPress={action("press")}
  items={[{ value: "121" }, { value: "21412" }, { value: "2412" }]}
  />
));
