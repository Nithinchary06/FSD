import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
// import "bootstrap-icons/font/bootstrap-icons.css"

let istudents = [
  { id: 1, name: "Rohan", age: 20, grade: "S" },
  { id: 2, name: "Pradeep", age: 21, grade: "A" },
  { id: 3, name: "rishi", age: 20, grade: "S" },
  { id: 4, name: "Nithin", age: 19, grade: "B" },
]

function App() {
  const [students, setStudents] = useState(istudents)
  const [search, setSearch] = useState("")
  const [searchAge, setSearchAge] = useState("")
  const [ascending, setAscending] = useState(true)
  const [sortBy, setSortBy] = useState("name")
  const [editIndex, setEditIndex] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    grade: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleAdd = () => {
    setStudents([...students, formData])

    setFormData({
      name: "",
      age: "",
      grade: "",
    })
  }

  const handleDelete = (id) => {
    const updatedStudents = students.filter((s) => s.id !== id)
    setStudents(updatedStudents)
  }

  const handleEdit = (id) => {
    setFormData(students.find((s) => s.id === id))
    setEditIndex(id)
  }

  const handleUpdate = () => {
    const updatedStudents = students.map((s, i) =>
      i === editIndex ? formData : s,
    )

    setStudents(updatedStudents)
    setEditIndex(null)

    setFormData({
      name: "",
      age: "",
      grade: "",
    })
  }

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) &&
      s.age.toString().includes(searchAge),
  )

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === "name") {
      return ascending
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    } else {
      return ascending ? a.age - b.age : b.age - a.age
    }
  })

  return (
    <div className="App">
      <h2 className="mb-3">Student Management</h2>
      <input
        className="form-control mb-2"
        placeholder="Search by Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        className="form-control mb-3"
        placeholder="Search by Age"
        value={searchAge}
        onChange={(e) => setSearchAge(e.target.value)}
      />
      <input
        className="form-control mb-2"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className="form-control mb-2"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        className="form-control mb-2"
        name="grade"
        value={formData.grade}
        onChange={handleChange}
        placeholder="Grade"
      />

      {editIndex === null ? (
        <button className="btn btn-success mb-3" onClick={handleAdd}>
          Add Student
        </button>
      ) : (
        <button className="btn btn-warning mb-3" onClick={handleUpdate}>
          Update Student
        </button>
      )}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSortBy("name")
                setAscending(!ascending)
              }}
            >
              Name {sortBy === "name" ? (ascending ? "↑" : "↓") : ""}
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSortBy("age")
                setAscending(!ascending)
              }}
            >
              Age {sortBy === "age" ? (ascending ? "↑" : "↓") : ""}
            </th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.grade}</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleEdit(s.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(s.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {sortedStudents.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center">
                No Students Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App
