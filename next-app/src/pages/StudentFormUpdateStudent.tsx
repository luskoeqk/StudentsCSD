// next
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

// style
import { PageConfig } from '@/styles/PagesConfigElements';

// axios
import axios from 'axios';

// Material UI
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


const API_URL = 'http://localhost:3000/api/test/getOne?id=';

interface Student {
    _id: string;
    facultyNumber: string;
    name: string;
    email: string;
}


export default function StudentFormUpdateStudent({ id }: any) {

    const [studentData, setStudentData] = useState<any>();

    useEffect(() => {
        axios.get<Student>(`${API_URL}${id}`)
            .then((res) => {
                console.log('Received data:', res.data);
                setStudentData(res.data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id])


    const [facultyNumber, setFacultyNumber] = useState<string>();
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();


    const handleFacultyNumber = (event: React.ChangeEvent<HTMLInputElement>) => { setFacultyNumber(event.target.value); };

    // const handleName = (event: React.ChangeEvent<HTMLInputElement>) => { setName(event.target.value); };

    // const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value); };


    return (
        <PageConfig>
            <div>Form to edit student with ID {id}</div>

            <FormControl>
                {
                    studentData ? (
                        <div>
                            <p>{studentData.student.facultyNumber}</p>
                            <p>{studentData.student.name}</p>
                            <p>{studentData.student.email}</p>
                        </div>
                    ) : <p>Loading...</p>
                }
                <pre>{JSON.stringify(studentData, null, 4)}</pre>
            </FormControl>

        </PageConfig>
    )
};



export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    // Fetch the data to be edited from the API
    const { id } = context.query;

    return {
        props: { id },
    };
}
