import React from "react";
import { storiesOf } from "@storybook/react";
import { SelectInput } from "./SelectInput";
import { action } from "@storybook/addon-actions";

import { select, array } from "@storybook/addon-knobs";

storiesOf("ui/molecules", module).add("SelectInput", () => (
  <SelectInput
    type={select("type", {
      range: "range",
      selecting: "selecting"
    })}
    onPress={action("press")}
    items={[{ value: "121" }, { value: "21412" }, { value: "2412" }]}
  >
    Одиннадцатиклассница
  </SelectInput>
));
