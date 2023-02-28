// next
import React, { useEffect, useState, } from "react";

// axios
import axios from "axios";

// components
import StudentsTable from "@/components/studentsTable/StudentsTable";

// styles
import { PageConfig } from "@/styles/PagesConfigElements";

// interface
import { IStudent } from "@/interfaces/IStudent";



const API_URL = 'http://localhost:3000/api/students/masters/get_all';


export default function masters() {

    useEffect(() => {
        axios.get<IStudent[]>(API_URL)
            .then((res) => setStudentsGetData(res.data))
        setIsLoading(false);
    }, [])

    const [isLoading, setIsLoading] = useState(true);                   // wait for fetch request
    const [studentsGetData, setStudentsGetData] = useState<IStudent[]>([]);


    return (
        <PageConfig>
            <h1>Кандидат студентски документи - Магистри</h1>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <StudentsTable studentsGetData={studentsGetData} />
            )}

        </PageConfig>
    )
}
