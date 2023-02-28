// next
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router'

// axios
import axios from 'axios';


export default function updatemaster() {


    return (
        <div>updatemaster</div>
    )
}


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
