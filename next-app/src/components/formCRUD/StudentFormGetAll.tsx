// Material Ui
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import TextField from "@mui/material/TextField";

// axios
import axios from "axios";

// next
import React, { useEffect, useState, } from "react";
import router from "next/router";


const API_URL = 'http://localhost:3000/api/students/bachelor/get_all';


interface Student {
    _id: string;
    distinction: string;
    status_of_ksk: string;
    faculty_number: string;
    names: string;
    email: string;
    dateOfCreation: string;
    lastEditEmail: string;
    lastEditDate: string;
}


export default function StudentFormGetAll() {


    const handleUpdate = (id: string) => {
        router.push(`/StudentFormUpdateStudent?id=${id}`);
    };

    const [studentsGetData, setStudentsGetData] = useState<Student[]>([]);

    // searchbar
    const [searchQuery, setSearchQuery] = useState('');

    // change color of selected row
    const [selected, setSelected] = useState<string | null>(null);
    const handleClickSelected = (id: string) => {
        setSelected(id);
    };
    const rowStyle = (id: string) => ({
        backgroundColor: id === selected ? "lightgray" : "white",
    })

    useEffect(() => {
        axios.get<Student[]>(API_URL)
            .then((res) => setStudentsGetData(res.data))
    }, [])


    return (
        <div>
            <div><h1>Студенти - Бакалаври/Магистри КСК</h1></div>

            {/* MUI NEW */}
            <Paper sx={{ overflow: 'hidden', height: '100%' }}>
                <TableContainer sx={{ m: 2 }}>

                    {/* searchbar */}
                    <TextField
                        label="Търсене във всички полета"
                        variant="outlined"
                        size="small"
                        fullWidth
                        margin="normal"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {/* searchbar */}

                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Отличителност</TableCell>
                                <TableCell>Факултетен номер</TableCell>
                                <TableCell>Статус на КСК</TableCell>
                                <TableCell>№ на заповед за записване</TableCell>
                                <TableCell>Име Презиме Фамилия</TableCell>
                                <TableCell>ЕГН</TableCell>
                                <TableCell>Редактиране</TableCell>
                                <TableCell>Имена на латиница</TableCell>
                                <TableCell>Телефон</TableCell>
                                <TableCell>Личен имейл</TableCell>
                                <TableCell>Пред. Учебно Заведение</TableCell>
                                <TableCell>Местонахождение на преходното учебно заведение</TableCell>
                                <TableCell>Професионално направление/ квалификация</TableCell>
                                <TableCell>Потвърждение от Нацид</TableCell>
                                <TableCell>Желана Специалност</TableCell>
                                <TableCell>Желана форма</TableCell>
                                <TableCell>Продължителност на обучение и дали съкращава</TableCell>
                                <TableCell>Последна редакция(имейл)</TableCell>
                                <TableCell>Последна редакция(дата)</TableCell>
                                <TableCell>Дата на създаване</TableCell>
                                <TableCell>_id</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                studentsGetData
                                    .filter((student) => {
                                        const fields = Object.values(student);
                                        for (let i = 0; i < fields.length; i++) {
                                            const field = fields[i];
                                            if (typeof field === 'string' && field.toLowerCase().includes(searchQuery.toLowerCase())) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    })
                                    .map((student) => (
                                        <TableRow hover key={student._id} style={rowStyle(student._id)} onClick={() => handleClickSelected(student._id)}>
                                            <TableCell>{student.distinction}</TableCell>
                                            <TableCell>{student.faculty_number}</TableCell>
                                            <TableCell>status_of_ksk</TableCell>
                                            <TableCell>n_of_enrollment_order</TableCell>
                                            <TableCell>names</TableCell>
                                            <TableCell>egn</TableCell>
                                            <TableCell align="center"><Button onClick={() => handleUpdate(student._id)}><EditIcon /></Button></TableCell>
                                            <TableCell>names_latin</TableCell>
                                            <TableCell>phone_number</TableCell>
                                            <TableCell>{student.email}</TableCell>
                                            <TableCell>in_front_of_school</TableCell>
                                            <TableCell>location_of_the_transitional_educationa_institution</TableCell>
                                            <TableCell>professional_qualification</TableCell>
                                            <TableCell>confirmation_by_nacid</TableCell>
                                            <TableCell>desired_major</TableCell>
                                            <TableCell>desired_shape</TableCell>
                                            <TableCell>length_of_study</TableCell>

                                            <TableCell>{student.lastEditEmail}</TableCell>
                                            <TableCell>{student.lastEditDate}</TableCell>
                                            <TableCell>{student.dateOfCreation}</TableCell>
                                            <TableCell>{student._id}</TableCell>
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
