import readline from "readline";

export default function prompt(input) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    rl.question(input, (name) => {
      resolve(name);
      rl.close();
    });
  });
}