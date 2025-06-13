import React from "react";
import { Hero } from "./shared/ui/hero/hero";
import { Menu } from "./shared/ui/menu/menu";
import { Events } from "./shared/ui/events/event";
import { About } from "./shared/ui/about/about";

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Events />
      <About />
    </>
  );
};

export default Home;
