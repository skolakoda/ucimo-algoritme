/* 
 Write a JavaScript method receiving an array of objects 
 containing name+age+gender, 
 returning everyone between 30 and 40 years old grouped by gender. 
 Keep it simple but reusable. 
*/

function sort(users) {
  return [...users]  // copy array
    .filter(user => user.age > 29 && user.age < 41)
    .sort((a, b) => a.gender > b.gender)
}
