const students = [
  { name: "Nina", score: 45 },
  { name: "Gio", score: 80 },
  { name: "Saba", score: 67 },
  { name: "Lia", score: 90 }
];

const beststudents = students.filter((p) => p.score > 60);

beststudents.sort((a,b) => b.score - a.score);

result = beststudents.map((p) => p.name);
console.log(result);