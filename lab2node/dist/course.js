"use strict";
class OnlineCourse {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(courseName) {
        this.courses = this.courses.filter(c => c.name !== courseName);
    }
    findCourse(courseName) {
        return this.courses.find(c => c.name === courseName);
    }
    listCourses() {
        this.courses.forEach(c => {
            console.log(`course: ${c.name}, length: ${c.duration} hours, studeents: ${c.students.join(", ") || "no one"}`);
        });
    }
}
const js = new OnlineCourse("javascript", 40);
const ts = new OnlineCourse("typescript", 50);
const python = new OnlineCourse("python", 35);
js.registerStudent("dexter");
js.registerStudent("brian");
ts.registerStudent("james");
const manager = new CourseManager();
manager.addCourse(js);
manager.addCourse(ts);
manager.addCourse(python);
manager.listCourses();
