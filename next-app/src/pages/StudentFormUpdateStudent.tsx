// next
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router'

// style
import { PageConfig } from '@/styles/PagesConfigElements';

// axios
import axios from 'axios';

// Material UI
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// auth 
import { useAuth } from '@/context/AuthContext';


const API_URL = 'http://localhost:3000/api/students/bachelor/get_one?id=';
const API_URL_PATCH = 'http://localhost:3000/api/students/bachelor/update';

interface Student {
    _id: string;
    student: {
        faculty_number: string;
        name: string;
        email: string;
    };
}

interface IStudentFormUpdateStudent {
    id: string;
    studentData: Student;
}

export default function StudentFormUpdateStudent({ id, studentData }: IStudentFormUpdateStudent) {

    const router = useRouter();

    const { user } = useAuth();                                                                     // get user email
    const [errorAdd, setErrorAdd] = useState(null);                                                 // error on updating

    const [facultyNumber, setFacultyNumber] = useState<string>(studentData.student.faculty_number);
    const [name, setName] = useState<string>(studentData.student.name);
    const [email, setEmail] = useState<string>(studentData.student.email);

    // format the date - dd.mm.year clock
    const formattedDate = new Date().toLocaleString("bg-BG", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    const handleUpdateSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        console.log(`Faculty Number: ${facultyNumber} Name: ${name} Email: ${email} lastEditEmail: ${user.email} lastEditDate" ${formattedDate}`);

        axios
            .patch(API_URL_PATCH, {
                _id: id,
                faculty_number: facultyNumber,
                name: name,
                email: email,
                lastEditEmail: user.email,
                lastEditDate: formattedDate,
            })
            .then((res) => {

                console.log("Patch created:", res.data);
                setErrorAdd(null);                                      // reset error state on success
                router.push('/');
            })
            .catch((err) => {

                alert("Error durging writing");
                console.error("Error durging writing");
                setErrorAdd(err);
                console.log("Error:", err);
            })

    };

    return (
        <PageConfig>

            <br />

            <div>Редактирате студент с идентификатор: {id}</div>

            <hr />

            <FormControl>
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
                    onClick={handleUpdateSubmit}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color={errorAdd ? "error" : "primary"}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Редактирай студент
                </Button>
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
