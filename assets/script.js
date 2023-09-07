const students = [
    {
        name: "Ali",
        surname: "Aliyev",
        age: 20,
        email: "ali@code.edu.az",
    },
    {
        name: "Ravan",
        surname: "Imanov",
        age: 22,
        email: "ravan@gmail.com",
    },
    {
        name: "Tabriz",
        surname: "Mammadov",
        age: 26,
        email: "tabriz@mail.ru",
    },
];

function checkAgeStudents(studentArray) {
    let count = 0;
    for (const student of studentArray) {
        if (student.age >= 18 && student.age <= 25) {
            count++;
        }
    }
    return count;
}

console.log(checkAgeStudents(students));

function checkEmailStudents(studentArray) {
    let count = 0;
    for (const student of studentArray) {
        if (student.email.includes("c")) {
            count++;
        }
    }
    return count;
}

console.log(checkEmailStudents(students));