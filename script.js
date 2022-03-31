'use strict';
console.log("Let's Begin!");

const submit = document.querySelector('.submit');
submit.addEventListener('click', function () {
  const a = Number(document.querySelector('#degree2').value);
  //   if (a) {
  //     console.log(typeof a);
  //   }

  const b = Number(document.querySelector('#degree1').value);
  //   if (b) {
  //     console.log(typeof b);
  //   }
  const c = Number(document.querySelector('#constant').value);
  //   if (c) {
  //     console.log(typeof c);
  //   }
  const discriminant = b * b - 4 * a * c;
  console.log(`Discriminant is ${discriminant}`);
  console.log(typeof discriminant);

  const sqrtDiscriminant = Math.sqrt(discriminant);
  console.log(sqrtDiscriminant);
  let root1 = (-b + sqrtDiscriminant) / (2 * a);
  let root2 = (-b - sqrtDiscriminant) / (2 * a);
  root1 = root1.toFixed(4);
  root2 = root2.toFixed(4);
  console.log(`Roots are: ${root1} and ${root2}`);
  if (root1) {
    document.querySelector('.root1').textContent = `Roots are ${root1} and `;
  } else {
    document.querySelector('.root1').textContent = `Imaginary Roots`;
  }
  if (root2) {
    document.querySelector('.root2').textContent = root2;
  } else {
    document.querySelector('.root2').textContent = `Imaginary Root`;
  }
});
//   const root1 = Number(-b + Math.sqrt(discriminant)) / (2 * a);
//   console.log(root1);

// const discriminant = 16;
// console.log(Math.sqrt(discriminant))
