import React from "react";
import { storiesOf, CenterView } from "../../../storybook/helpers/index";
import Svg from '../svg';
import { Select, Option } from "./index";



const onSelect = (value, label) => {
  console.log(label, value);
}

storiesOf("Select", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => (
    <Select
      onSelect = {onSelect}
      defaultText = 'recentes'
      textStyle = {{}}
      backdropStyle  = {{backgroundColor : 'rgba(0, 0, 0, 0.4)'}}
      optionListStyle = {{backgroundColor : '#fff'}}
      indicatorIcon={<Svg image="#icon-arrow-down" size="sm" />}
      direction = 'down'
    >
      <Option value = {{name : "test"}}>Test</Option>
      <Option value = "recentes">Recentes</Option>
      <Option value = "antigas">Antigas</Option>
      <Option value = "positivas">Positivas</Option>
      <Option value = "negativas">Negativas</Option>
    </Select>
  ));
