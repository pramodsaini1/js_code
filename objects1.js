const tinderUser=new Object()


 tinderUser.id="123abc"
 tinderUser.name="sammy"
 tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularUser={
    email:"sum@gmai.com",
    fullName:{
         userfullname:{
            firstname:"pramod",
            lastName:"saini"
         }
    }
}

console.log(regularUser.fullName.userfullname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}

//const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}

console.log(obj3);


const user=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    courseName:"js in hindi",
    prize:"999",
    courseTeacher:"pramod"
}

//course.courseTeacher

const {courseTeacher}=course

console.log(courseTeacher);

//{
 //   "name":"pramod",
 //  "courseName":"js in hindi",
 //   "price":"free"

//}

[
    {

    },
    {},
    {}
]

