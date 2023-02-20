// next
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

// style
import { PageConfig } from '@/styles/PagesConfigElements';

// axios
import axios from 'axios';

// Material UI
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const API_URL = 'http://localhost:3000/api/test/getOne?id=';

interface Student {
    _id: string;
    student: {
        facultyNumber: string;
        name: string;
        email: string;
    };
}

interface IStudentFormUpdateStudent {
    id: string;
    studentData: Student;
}

export default function StudentFormUpdateStudent({ id, studentData }: IStudentFormUpdateStudent) {

    const router = useRouter()

    const [facultyNumber, setFacultyNumber] = useState<string>(studentData.student.facultyNumber);
    const [name, setName] = useState<string>(studentData.student.name);
    const [email, setEmail] = useState<string>(studentData.student.email);

    const handleUpdateSubmit = async () => {

        try {

            const updatedStudent = {
                _id: studentData._id, student: {
                    facultyNumber,
                    name,
                    email
                }
            };

            const res = await axios.patch(API_URL, updatedStudent);
            console.log(res.data); // log the updated student record from the API
            router.push('/')
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    return (
        <PageConfig>
            <div>Form to edit student with ID {id}</div>

            <div>
                <pre>{JSON.stringify(studentData, null, 4)}</pre>
            </div>

            <FormControl>
                <form onSubmit={handleUpdateSubmit}>
                    <TextField
                        margin="normal"
                        label="Факултетен номер"
                        value={facultyNumber || ''}
                        onChange={(e) => setFacultyNumber(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Име"
                        value={name || ''}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        label="Личен имейл"
                        value={email || ''}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Редактирай студент
                    </Button>
                </form>
            </FormControl>

        </PageConfig>
    )
};



export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    // Fetch the data to be edited from the API
    const { id } = context.query;

    // Make sure id is defined
    if (!id) {
        return {
            notFound: true,
        };
    }

    // Fetch student data from the API
    const res = await axios.get<Student>(`${API_URL}${id}`);
    const studentData = res.data;

    // Return not found if there's no student data
    if (!studentData) {
        return {
            notFound: true,
        };
    }


    return {
        props: {
            id,
            studentData
        },
    };
}
