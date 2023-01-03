import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {
                students.map( (student) =>  // 만약 (student, index) 였다면, key={index} 로도 사용이 가능하다.
                    {
                        return <li key={student.id}>{student.name}</li>;
                    }
                )
            }
        </ul>
    );
}

export default AttendanceBook;