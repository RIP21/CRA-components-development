import React from "react";
import { shallow } from "enzyme";
import Button from "./index";

test("Button is rendering and showing content", () => {
  const text = "Hello world!;";
  const component = shallow(<Button>{text}</Button>);
  expect(component.contains(text)).toBe(true);
});
