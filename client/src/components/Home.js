import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleView = () => {
        navigate('/View');
    };

    const [formData, setFormData] = useState({
        employeeName: '',
        employeeID: '',
        department: 'CSE',
        gender: '',
        dob: '',
        designation: '',
        salary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/empdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to add employee');
            }
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error('Error adding employee:', error);
            alert('Failed to add employee');
        }
    };

    return (
        <div className='h-screen w-screen bg-slate-300 flex flex-col justify-center items-center'>
            <button className='bg-black text-white shadow-md rounded-md p-2 self-end m-3' onClick={handleView}>View Employees</button>
            <div className='bg-white h-4/5 w-2/5 shadow-xl  rounded-xl p-6'>
                <div className='grid grid-cols-2 gap-3 mb-4'>
                    <label className='text-gray-700'>Employee Name</label>
                    <input
                        className='border border-gray-800 p-2'
                        name='employeeName'
                        value={formData.employeeName}
                        onChange={handleChange}
                    />
                    <label className='text-gray-700'>Employee ID</label>
                    <input
                        className='border border-gray-800 p-2'
                        name='employeeID'
                        value={formData.employeeID}
                        onChange={handleChange}
                    />
                    <label className='text-gray-700'>Department</label>
                    <select
                        className='border border-gray-800 p-2'
                        name='department'
                        value={formData.department}
                        onChange={handleChange}
                    >
                        <option value="CSE">CSE</option>
                        <option value="AIDS">AIDS</option>
                        <option value="ECE">ECE</option>
                        <option value="MECH">MECH</option>
                    </select>
                    <label className='text-gray-700'>Gender</label>
                    <div>
                        <input
                            type='radio'
                            name='gender'
                            value='male'
                            className='mr-2'
                            onChange={handleChange}
                        />
                        <label htmlFor='male'>Male</label>
                        <input
                            type='radio'
                            name='gender'
                            value='female'
                            className='ml-4 mr-2'
                            onChange={handleChange}
                        />
                        <label htmlFor='female'>Female</label>
                    </div>
                    <label className='text-gray-700'>D.O.B.</label>
                    <input
                        className='border border-gray-800 p-2'
                        type="date"
                        name='dob'
                        value={formData.dob}
                        onChange={handleChange}
                    />
                    <label className='text-gray-700'>Designation</label>
                    <input
                        className='border border-gray-800 p-2'
                        name='designation'
                        value={formData.designation}
                        onChange={handleChange}
                    />
                    <label className='text-gray-700'>Salary</label>
                    <input
                        className='border border-gray-800 p-2'
                        name='salary'
                        value={formData.salary}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className='bg-blue-400 text-white shadow-md p-2 w-full rounded-md'
                    onClick={handleSubmit}
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
}

export default Home;
