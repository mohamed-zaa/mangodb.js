  // 1 
  db.students.find({ age: { $gt: 22 } })




  // 2 
  db.students.find({ courses: "React" })


  // 3
  db.students.find({ name: { $regex: /^S/ } })



  // 4
  db.students.find({ age: { $in: [18, 21] } })




  // 5
  db.students.find({
  email: { $not: /@gmail\.com$/ }
})

// 6
db.students.find({
  courses: "React",
  age: { $gt: 20 }
})


// 7
db.students.find({
  $or: [
    { courses: "React" },
    { courses: "Node.js" }
  ]
})


// 8 
db.students.find({
  $or: [
    { name: { $regex: "x" } },
    { email: { $regex: /\.edu$/ } }
  ]
})