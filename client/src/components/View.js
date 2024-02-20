import React, { useState, useEffect } from 'react';

function View() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Fetching data from the backend API when the component mounts
        fetch('http://localhost:3001/api/employees')
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='bg-blue-200 h-screen w-screen py-8 px-4'>
            <h1 className='text-3xl font-semibold mb-4'>Employee Table</h1>
            <table className='w-full border-collapse border border-gray-800'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='border border-gray-800 px-4 py-2'>Employee ID</th>
                        <th className='border border-gray-800 px-4 py-2'>Employee Name</th>
                        <th className='border border-gray-800 px-4 py-2'>Department</th>
                        <th className='border border-gray-800 px-4 py-2'>Gender</th>
                        <th className='border border-gray-800 px-4 py-2'>Date of Birth</th>
                        <th className='border border-gray-800 px-4 py-2'>Designation</th>
                        <th className='border border-gray-800 px-4 py-2'>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.employee_id} className='hover:bg-gray-100'>
                            <td className='border border-gray-800 px-4 py-2'>{employee.employee_id}</td>
                            <td className='border border-gray-800 px-4 py-2'>{employee.employee_name}</td>
                            <td className='border border-gray-800 px-4 py-2'>{employee.department}</td>
                            <td className='border border-gray-800 px-4 py-2'>{employee.gender}</td>
                            <td className='border border-gray-800 px-4 py-2'>{employee.dob}</td>
                            <td className='border border-gray-800 px-4 py-2'>{employee.designation}</td>
                            <td className='border border-gray-800 px-4 py-2'>{employee.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default View;
