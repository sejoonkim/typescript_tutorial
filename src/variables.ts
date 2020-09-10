var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer() {
  //   var score = 0;
  //   function inner() {
  //     console.log(score);
  //   }
  //   inner();
  //   console.log(score);

  //   if (true) {
  //     var score = 0;
  //   }

  //   for (var i = 0; i < 3; i++) {
  //     setTimeout(function () {
  //       console.log(i);
  //     }, 1000);
  //   }
  //   console.log(score);

  if (true) {
    // let score: number;
    // score = 30;
    // score = "30";
  }

  //   for (let i = 0; i < 3; i++) {
  //     setTimeout(function () {
  //       console.log(i);
  //     }, 1000);
  //   }

  if (true) {
    const score = 100;
    score = 30; // cannot reallocate
  }
}

outer();
