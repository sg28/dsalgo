/*
count the number of occurence of an element
find the second largest number

*/

let employee = [
  {
    sde: "tim",
    tenure: 10,
    location: "Texas",
    domain: "software dev",
  },
  {
    sde: "john",
    tenure: 10,
    location: "Texas",
    domain: "software dev",
  },
  {
    sde: "miller",
    tenure: 10,
    location: "Texas",
    domain: "software dev",
  },
  {
    sde: "tim",
    tenure: 10,
    location: "Texas",
    domain: "Project Maanager",
  },
  {
    sde: "tim",
    tenure: 10,
    location: "Texas",
    domain: "Scrum Master",
  },
];

let nums = [2, 3, 4, 2, 2, 3, 4, 5];
let seq = [2, 2, 3, 4, 5, 6, 6, 7, 7];

let fn = (nums) => {
  let obj = {};
  for (let n of nums) {
    if (!obj[n]) {
      obj[n] = 1;
    } else {
      obj[n]++;
    }
  }
  console.log(obj);
};

let list = (employee) => {
  let person = {};

  for (let e of employee) {
    if (!person[e.sde]) {
      person[e.sde] = {
        employees: [e],
        count: 1,
      };
    } else {
      person[e.sde].employees.push(e);
      person[e.sde].count++;
    }
  }

  console.log(person);
};
