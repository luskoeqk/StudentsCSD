// Material Ui
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import TablePagination from '@mui/material/TablePagination';

// axios
import axios from "axios";

// next
import React, { useEffect, useState, } from "react";
import router from "next/router";


const API_URL = 'http://localhost:3000/api/test/get';


interface Student {
    _id: string;
    facultyNumber: string;
    name: string;
    email: string;
}




export default function StudentFormGetAll() {

    const [studentsGetData, setStudentsGetData] = useState<Student[]>([]);

    const handleUpdate = (id: string) => {
        router.push(`/StudentFormUpdateStudent?id=${id}`);
    };

    useEffect(() => {
        axios.get<Student[]>(API_URL)
            .then((res) => setStudentsGetData(res.data))
    }, [])


    return (
        <div>
            <div><h1>Студенти - Бакалаври/Магистри КСК</h1></div>

            {/* MUI */}
            {/* <TableContainer component={Paper}>
                <Table sx={{}} aria-label="table">
                    <TableHead style={{
                        color: 'red'
                    }}>
                        <TableRow>
                            <TableCell>Факултетен номер</TableCell>
                            <TableCell>Име</TableCell>
                            <TableCell>Личен имейл</TableCell>
                            <TableCell>_id</TableCell>
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
                                    <TableCell>{student._id}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleUpdate(student._id)}>
                                            <EditIcon />
                                        </Button>

                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer> */}
            {/* MUI */}

            {/* MUI NEW */}

            <Paper sx={{ width: '99%', overflow: 'hidden', height: '100%' }}>
                <TableContainer sx={{ maxHeight: '90vh'}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Факултетен номер</TableCell>
                                <TableCell>Име</TableCell>
                                <TableCell>Личен имейл</TableCell>
                                <TableCell>_id</TableCell>
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
                                        <TableCell>{student._id}</TableCell>
                                        <TableCell>
                                            <Button onClick={() => handleUpdate(student._id)}>
                                                <EditIcon />
                                            </Button>

                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            {/* MUI NEW */}


        </div>
    )
}
