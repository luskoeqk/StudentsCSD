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
import Button from '@mui/material/Button';


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
                console.log('Received data:', res.data.student.facultyNumber);

                setStudentData(res.data);
                setFacultyNumber(res.data.student.facultyNumber);
                setName(res.data.student.name);
                setEmail(res.data.student.email);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id])


    const [facultyNumber, setFacultyNumber] = useState<string>();
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();


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


            <div>
                <form>
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
                    <div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Редактирай студент
                        </Button>
                    </div>
                </form>
            </div>

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
