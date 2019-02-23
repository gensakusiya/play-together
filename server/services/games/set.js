const getIntersection = (first, second) => {
  const firstSet = new Set(first);
  const secondSet = new Set(second.map(x => x.appid));
  return [...firstSet].filter(x => secondSet.has(x.appid));
};

const getIntersectionByArray = list => {
  return list.reduce((acc, now) => {
    if (acc === null) return now;
    return getIntersection(acc, now);
  }, null);
};

module.exports = {
  getIntersection,
  getIntersectionByArray
};
