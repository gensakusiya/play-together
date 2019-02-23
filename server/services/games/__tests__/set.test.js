const { getIntersection, getIntersectionByArray } = require("../set");

const FIRST_USER = [
  {
    appid: 240,
    name: "Counter-Strike: Source"
  },
  {
    appid: 300,
    name: "Day of Defeat: Source"
  },
  {
    appid: 320,
    name: "Half-Life 2: Deathmatch"
  },
  {
    appid: 1200,
    name: "Red Orchestra: Ostfront 41-45"
  },
  {
    appid: 1230,
    name: "Mare Nostrum"
  }
];
const SECOND_USER = [
  {
    appid: 240,
    name: "Counter-Strike: Source"
  },
  {
    appid: 2400,
    name: "The Ship"
  },
  {
    appid: 2430,
    name: "The Ship Tutorial"
  },
  {
    appid: 3830,
    name: "Psychonauts"
  },
  {
    appid: 1200,
    name: "Red Orchestra: Ostfront 41-45"
  }
];
const THIRD_USER = [
  {
    appid: 4000,
    name: "Garry's Mod"
  },
  {
    appid: 2990,
    name: "FlatOut 2"
  },
  {
    appid: 3830,
    name: "Psychonauts"
  },
  {
    appid: 1200,
    name: "Red Orchestra: Ostfront 41-45"
  }
];

const EXPECTED = [
  {
    appid: 240,
    name: "Counter-Strike: Source"
  },
  {
    appid: 1200,
    name: "Red Orchestra: Ostfront 41-45"
  }
];
const EXPECTED_FOR_THREE = [
  {
    appid: 1200,
    name: "Red Orchestra: Ostfront 41-45"
  }
];

test("pass two gamers set - return intersection with 2 value", () => {
  const result = getIntersection(FIRST_USER, SECOND_USER);
  expect(result.length).toBe(EXPECTED.length);
  expect(result[0].appid).toBe(EXPECTED[0].appid);
  expect(result[1].appid).toBe(EXPECTED[1].appid);
});

test("pass three gamers set - return intersection with 1 value", () => {
  const first = getIntersection(FIRST_USER, SECOND_USER);
  const result = getIntersection(first, THIRD_USER);
  expect(result.length).toBe(EXPECTED_FOR_THREE.length);
  expect(result[0].appid).toBe(EXPECTED_FOR_THREE[0].appid);
});

test("pass three gamers set by reduce - return intersection with 1 value", () => {
  const games = [FIRST_USER, SECOND_USER, THIRD_USER];

  const result = getIntersectionByArray(games);

  expect(result.length).toBe(EXPECTED_FOR_THREE.length);
  expect(result[0].appid).toBe(EXPECTED_FOR_THREE[0].appid);
});
