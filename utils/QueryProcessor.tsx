import { parse } from "path";

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
  
  return "";
}
