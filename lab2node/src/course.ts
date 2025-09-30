interface Course {
    name: string
    duration: number
    students: string[]
}

class OnlineCourse implements Course {
    public name: string
    public duration: number
    public students: string[]

    constructor(name: string, duration: number) {
        this.name = name
        this.duration = duration
        this.students = []
    }

    public registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student)
        }
    }

    public isStudentRegistered(student: string): boolean {
        return this.students.includes(student)
    }
}

class CourseManager {
    private courses: Course[]

    constructor() {
        this.courses = []
    }

    public addCourse(course: Course): void {
        this.courses.push(course)
    }

    public removeCourse(courseName: string): void {
        this.courses = this.courses.filter(c => c.name !== courseName)
    }

    public findCourse(courseName: string): Course | undefined {
        return this.courses.find(c => c.name === courseName)
    }

    public listCourses(): void {
        this.courses.forEach(c => {
            console.log(`course: ${c.name}, length: ${c.duration} hours, studeents: ${c.students.join(", ") || "no one"}`)
        })
    }
}

const js = new OnlineCourse("javascript", 40)
const ts = new OnlineCourse("typescript", 50)
const python = new OnlineCourse("python", 35)

js.registerStudent("dexter")
js.registerStudent("brian")
ts.registerStudent("james")

const manager = new CourseManager()
manager.addCourse(js)
manager.addCourse(ts)
manager.addCourse(python)

manager.listCourses()
