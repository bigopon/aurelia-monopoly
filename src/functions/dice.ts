const rollDice = () => {
  const x = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
  const y = Math.floor(Math.random() * ((6 - 1) + 1) + 1);

  return {
    dice1: x,
    dice2: y,
    total: ( x + y ),
    isDouble: x === y
  };
};

export default rollDice;
