import {shallow, mount,render} from "enzyme";
import React from "react";
import MyComponent from "./myComponent";
import toJson from 'enzyme-to-json';

const wrapper = shallow(<MyComponent />);

console.log(toJson(wrapper));
console.log("heyy");

it("test sample", ()=>{
    expect(wrapper.find("h1").text()).toContain("THERE");
    expect(toJson(wrapper)).toMatchSnapshot();
    
})

