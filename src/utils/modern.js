"use strict";

export const getOrder = (user) => {
  const name = user?.name ?? "boT.flY";
  const drink = user?.drink ?? " O-/+ ";

  return `Name: ${name}, Drink: ${drink}`;
};
