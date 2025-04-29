"use strict";

export const getOrder = (user) => {
  const name = user?.name ?? "boT.flY";
  const drink = user?.drink ?? "  ";

  return `Name: ${name}, Drink: ${drink}`;
};
