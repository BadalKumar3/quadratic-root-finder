'use strict';
console.log("Let's Begin!");

const submit = document.querySelector('.submit');
submit.addEventListener('click', function () {
  const a = Number(document.querySelector('#degree2').value);
  

  const b = Number(document.querySelector('#degree1').value);
  
  const c = Number(document.querySelector('#constant').value);
  
  let discriminant = b * b - 4 * a * c;
  console.log(`Discriminant is ${discriminant}`);

  if (discriminant < 0) {
    discriminant *= -1;
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const rootExp1 = -b / (2 * a);
    const root1Exp2 = sqrtDiscriminant / (2 * a);
    const root2Exp2 = -sqrtDiscriminant / (2 * a);
    const root1 = `(${rootExp1.toFixed(4)} + ${root1Exp2.toFixed(4)}i)`;
    const root2 = `(${rootExp1.toFixed(4)} + ${root2Exp2.toFixed(4)}i)`;
    document.querySelector(
      '.root1'
    ).textContent = `Roots are ${root1} and  ${root2}`;
    

    console.log(sqrtDiscriminant, rootExp1, root1Exp2, root2Exp2);
  } else {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    let root1 = (-b + sqrtDiscriminant) / (2 * a);
    let root2 = (-b - sqrtDiscriminant) / (2 * a);
    
    console.log(`Roots are: ${root1.toFixed(4)} and ${root2.toFixed(4)}`);
    if (root1) {
      document.querySelector(
        '.root1'
      ).textContent = `(Roots are ${root1.toFixed(4)} and ${root2.toFixed(4)})`;
    }
  }
});
