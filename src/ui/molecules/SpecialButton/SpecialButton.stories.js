import React from "react";
import { storiesOf } from "@storybook/react";
import { SpecialButton } from "./SpecialButton";
import { action } from "@storybook/addon-actions";

import { select } from "@storybook/addon-knobs";

storiesOf("ui/molecules", module).add("SpecialButton", () => (
  <SpecialButton onPress={action("press")}>
    Нажмите, чтобы добавить новое условие выборки. Все условия связываются между
    собой логическим "И"
  </SpecialButton>
));
