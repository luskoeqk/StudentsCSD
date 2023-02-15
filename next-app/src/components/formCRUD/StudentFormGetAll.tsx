// Material Ui
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

// axios
import axios from "axios";

// next
import { useEffect, useState } from "react";

// components
import { StudentFormGetOne } from "./StudentFormGetOne";



const API_URL = 'http://localhost:3000/api/test/get';


interface Student {
    _id: string;
    facultyNumber: string;
    name: string;
    email: string;
}




export default function StudentFormGetAll() {

    const [studentsGetData, setStudentsGetData] = useState<Student[]>([]);

    const handleUpdate = () => {

        
    };

    useEffect(() => {
        axios.get<Student[]>(API_URL)
            .then((res) => setStudentsGetData(res.data))
    }, [])


    return (
        <div>
            <div><h1>Студенти - Бакалаври/Магистри КСК</h1></div>

            {/* MUI */}
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="table">
                    <TableHead style={{
                        color: 'red'
                    }}>
                        <TableRow>
                            <TableCell>Факултетен номер</TableCell>
                            <TableCell>Име</TableCell>
                            <TableCell>Личен имейл</TableCell>
                            <TableCell>Редактиране</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            studentsGetData.map((student) => (
                                <TableRow hover key={student._id}>
                                    <TableCell component="th" scope="row">
                                        {student.facultyNumber}
                                    </TableCell>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.email}</TableCell>
                                    <TableCell>
                                        <Button onClick={handleUpdate}>
                                            <EditIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            {/* MUI */}

        </div>
    )
}
