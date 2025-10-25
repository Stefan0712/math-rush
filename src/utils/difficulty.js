export const difficulties = [
  {
    value: "very-easy",
    name: "Very Easy",
    desc: "You will have 2 selections and a total up to 10",
    maxTarget: 10,
    minTarget: 3,
    maxValue: 6,
    selections: 2,
    scoreMultiplier: 5
  },
  {
    value: "easy",
    name: "Easy",
    desc: "You will have 2 selections and a total up to 30.",
    maxTarget: 30,
    selections: 2,
    minTarget: 10,
    maxValue: 16,
    scoreMultiplier: 10
  },
  {
    value: "medium",
    name: "Medium",
    desc: "You will have 3 selections and a total up to 50.",
    maxTarget: 50,
    selections: 3,
    minTarget: 30,
    maxValue: 26,
    scoreMultiplier: 15
  },
  {
    value: "hard",
    name: "Hard",
    desc: "You will have 4 selections and a total up to 80.",
    maxTarget: 80,
    selections: 4,
    minTarget: 30,
    maxValue: 41,
    scoreMultiplier: 20
  },
  {
    value: "very-hard",
    name: "Very Hard",
    desc: "You will have 5 selections and a total up to 100.",
    maxTarget: 100,
    selections: 5,
    minTarget: 30,
    maxValue: 51,
    scoreMultiplier: 25
  },
];


export function generateAdditionRound(difficulty) {
  const { minTarget, maxTarget, selections, maxValue } = difficulty;

  // Ensure target cannot exceed the max possible sum with given maxValue and selections
  const adjustedMaxTarget = Math.min(maxTarget, maxValue * selections);
  const target = getRandomInt(minTarget, adjustedMaxTarget);

  let solution = [];
  let sum = 0;

  for (let i = 0; i < selections - 1; i++) {
    const num = getRandomInt(1, maxValue);
    solution.push(num);
    sum += num;
  }

  const lastNum = target - sum;

  // Retry if the last number doesn't fit in valid range
  if (lastNum <= 0 || lastNum > maxValue) {
    return generateAdditionRound(difficulty);
  }

  solution.push(lastNum);

  return { target, solution };
}

export function generateNumbers(difficulty) {
  const { target, solution } = generateAdditionRound(difficulty);
  const numbers = [...solution];

  // Fill with random numbers (allow duplicates if needed)
  while (numbers.length < 9) {
    const rand = getRandomInt(1, difficulty.maxValue);
    numbers.push(rand);
  }

  // Shuffle positions
  numbers.sort(() => Math.random() - 0.5);

  return { target, numbers, solution };
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


