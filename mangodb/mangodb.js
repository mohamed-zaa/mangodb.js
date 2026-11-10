use dugsiiye

db.createCollection("students")



db.students.insertMany([
  {
    name: "Mohamed",
    age: 22,
    email: "mohamed@gmail.com",
    courses: ["JavaScript", "React", "Node.js"]
  },
  {
    name: "Ali",
    age: 21,
    email: "ali@gmail.com",
    courses: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Ahmed",
    age: 23,
    email: "ahmed@gmail.com",
    courses: ["MongoDB", "React", "Python"]
  }
])


db.students.find()

db.students.updateOne(
  { name: "Mohamed" },
  { $set: { email: "mohamed123@gmail.com" } }
)
db.students.deleteOne({ name: "Ali" })

db.students.insertOne({
  name: "Hassan",
  age: 24,
  email: "hassan@gmail.com",
  courses: ["JavaScript", "MongoDB"],
  address: {
    city: "Garowe",
    country: "Somalia"
  }
})

db.students.find()