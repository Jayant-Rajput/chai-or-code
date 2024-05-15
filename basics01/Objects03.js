const course = {
    coursename : "JS",
    price : "free",
    courseInstuctor : "Hitesh"
}

// to access any memeber of the object every time we need to write Obj_name.Member_name 
console.log(course.courseInstuctor);
// to avoid this : 

const {courseInstuctor} = course;
console.log(courseInstuctor);

// we can give it's propery any other name and access it by that name :

const {courseInstuctor : teacher} = course;
console.log(teacher);
