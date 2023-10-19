// Fetch API

async function getEmployees() {
    const database = "js/employees.json";

    // fetch(database)
    //     .then(result => result.json())
    //     .then(data => {
    //         // console.log(data.employees);

    //         const { employees } = data
    //         // console.log(employees);

    //         employees.forEach(employee => {
    //             // console.log(employee);
    //             console.log(employee.id);
    //             console.log(employee.name);
    //             console.log(employee.surname);
    //             console.log(employee.position);
    //         });
    //         })

    const result = await fetch(database);
    const data = await result.json();
    console.log(data);
};

getEmployees();