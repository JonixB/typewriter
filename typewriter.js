const sentence = "this is getting super interesting";
let timeout = 0;

for (let x = 0; x <= sentence.length; x++) {
  if (x === sentence.length) {
    setTimeout(() => {
      console.log();
    }, timeout);
  }
  setTimeout(() => {
    process.stdout.write(sentence[x]);
  }, timeout);
  timeout += 50;
}