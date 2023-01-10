export default function TotalPrice(nem) {
  console.log(Array.isArray(nem));
  console.log(nem);

  let arr = [21, 32, 34, 55, 6];
  let total = nem.reduce((a, b) => a + b, 0);
  console.log(total);

  return  total ;
}

//   let total =prices.reduce((a, b) => a + b,1);
