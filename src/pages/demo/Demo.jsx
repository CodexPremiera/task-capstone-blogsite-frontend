import React from "react";
import Banner from "./main/Banner.jsx";
import DemoHeader from "./header/DemoHeader.jsx";
import Content from "../../components/main/content/Content.jsx";

const Demo = () => {
  return (
    <>
      <DemoHeader/>
      <main>
        <Banner/>
        <Content />
      </main>
    </>
  );
};

export default Demo;