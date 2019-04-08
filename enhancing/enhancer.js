module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement += 1;
  }
  return { ...item };
}

function fail(item) {
  const { enhancement } = item;

  if (enhancement < 15) {
    item.durability -= 5;
  }

  if (enhancement >= 15) {
    item.durability -= 10;
  }

  if (enhancement > 16) {
    item.enhancement -= 1;
  }

  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
