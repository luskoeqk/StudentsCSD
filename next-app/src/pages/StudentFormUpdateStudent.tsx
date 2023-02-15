// next
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// style
import { PageConfig } from '@/styles/PagesConfigElements';

// axios
import axios from 'axios';


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

    console.log('data:', studentData)

    return (
        <PageConfig>
            <div>Form to edit student with ID {id}</div>

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