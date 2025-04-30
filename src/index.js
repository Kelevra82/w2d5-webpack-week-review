"use strict";

import "./styles/main.css";
import { add } from "./utils/math.js";
import { getOrder } from "./utils/modern.js";

console.log("2 + 3 = ", add(2, 3));

const user = { name: "Luigi", drink: "lava" };
console.log(getOrder(user));

console.log(getOrder());
