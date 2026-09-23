const express = require("express")
const{ protect, authorize } = require("../middleware")
const { getCourses, createCourses, updateCourses } = require("../controllers/courseControllers")

const courseRoute = express.Router()

courseRoute.get("/",getCourses)

courseRoute.post("/", createCourse)

courseRoute.get("/:id", getCourseById)

courseRoute.put("/:id", updateCourse)

courseRoute.delete("/:id", deleteCourse)

module.exports = courseRoute