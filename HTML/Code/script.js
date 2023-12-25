var counter = 0;

for (var i = 0; i < 10; i++) {
  counter++;
  setTimeout(() => {
    console.log(counter);
  }, 0);
}

console.log(counter);
