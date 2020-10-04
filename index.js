const { create, all } = require("mathjs");
const config = {};
const math = create(all, config);

const eq = "2x + x";
const f = math.parse(eq);

const simp = math.simplify(f);

console.log(simp.evaluate({ x: 4 }));
