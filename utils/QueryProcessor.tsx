import { parse } from "path";
function isPrime(num : number) {
  // Check if num is less than 2
  if (num <= 1) return false;
  // Check for factors from 2 to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;  // Found a factor, not prime
      }
  }
  return true;  // No factors found, it's prime
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "I don't have one :sob:"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "Hiii;D"
    );
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {{
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }}
  const maxMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  if (maxMatch) {{
    const x: number = parseInt(maxMatch[1]);
    const y: number = parseInt(maxMatch[2]);
    const z: number = parseInt(maxMatch[3]);
    return (Math.max(x, y, z)).toString();
  }}
  const sqcbMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)?/)
  if (sqcbMatch) {{
    const numbers = query.match(/\d+(?:\s*,\s*\d+)*/g);
    let res = "";
    if (numbers) for (let i=0; i<7; i++) {
      const num = parseInt(numbers[i]);
      if (Number.isInteger(Math.sqrt(num)) && Number.isInteger(Math.cbrt(num))) res += num.toString();
    }
    return res;
  }}

  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multMatch) {{
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x*y).toString();
  }}
  const subMatch = query.match(/What is (\d+) minus (\d+)/);
  if (subMatch) {{
    const x: number = parseInt(subMatch[1]);
    const y: number = parseInt(subMatch[2]);
    return (x-y).toString();
  }}

  // const primeMatch = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)?/)
  // if (primeMatch) {{
  //   const numbers = query.match(/\d+(?:\s*,\s*\d+)*/g);
  //   let res = "";
  //   if (numbers) for (let i=0; i<5; i++) {
  //     const num = parseInt(numbers[i]);
  //     if (isPrime(num)) res += num.toString();
  //   }
  //   return res;
  // }}
  const primeMatch = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)\?/);
  if (primeMatch) {
    const numbers = query.match(/\d+/g);  // Match all individual numbers
    let res = "";
    
    if (numbers) {
        for (let i = 0; i < numbers.length; i++) { // Loop through all matched numbers
            const num = parseInt(numbers[i]);
            if (isPrime(num)) {
                res += num + ", "; // Append prime numbers to result with a space
            }
        }
    }
    return res.slice(0, -2);
  }

  const powerMatch = query.match(/What is (\d+) to the power of (\d+)/);
  if (powerMatch) {{
    const x: number = parseInt(powerMatch[1]);
    const y: number = parseInt(powerMatch[2]);
    return (Math.pow(x,y)).toString();
  }}


  const multPlusMatch = query.match(/What is (\d+) multiplied by (\d+) plus (\d+)?/);
  if (multPlusMatch) {{
    const x: number = parseInt(multPlusMatch[1]);
    const y: number = parseInt(multPlusMatch[2]);
    const z: number = parseInt(multPlusMatch[3]);
    return ((x*y)+z).toString();
  }}

  const plusMultMatch = query.match(/What is (\d+) plus (\d+) multiplied by (\d+)?/);
  if (plusMultMatch) {{
    const x: number = parseInt(plusMultMatch[1]);
    const y: number = parseInt(plusMultMatch[2]);
    const z: number = parseInt(plusMultMatch[3]);
    return (x+y*z).toString();
  }}

  const plusPlusMatch = query.match(/What is (\d+) plus (\d+) plus (\d+)?/);
  if (plusPlusMatch) {{
    const x: number = parseInt(plusPlusMatch[1]);
    const y: number = parseInt(plusPlusMatch[2]);
    const z: number = parseInt(plusPlusMatch[3]);
    return (x+y+z).toString();
  }}

  return "";
}
