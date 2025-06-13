import React from "react";
import { Hero } from "./shared/ui/hero/hero";
import { Menu } from "./shared/ui/menu/menu";
import { Events } from "./shared/ui/events/event";

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Events />
    </>
  );
};

export default Home;
