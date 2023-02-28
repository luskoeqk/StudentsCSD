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
    faculty_number: string;
    status_of_ksk: string;
    n_of_enrollment_order: string;
    names: string;
    egn: string;
    names_latin: string;
    phone_number: string;
    email: string;
    in_front_of_school: string;
    location_of_the_transitional_educationa_institution: string;
    professional_qualification: string;
    confirmation_by_nacid: string;
    desired_major: string;
    desired_shape: string;
    length_of_study: string;
    cohort_in_moodle: string;
    method_of_application: string;
    date_of_initial_contact: string;
    month_of_inquiry: string;
    contact_source: string;
    paid_ksk: string;
    date_of_payment_ksk: string;
    comment_ksk: string;
    weekly_fee_paid: string;
    date_of_paid_weekly_fee: string;
    submission_period_in_adminuni: string;
    school_year: string;
    contract_issue_date: string;
    sem_Fee: string;
    discount: string;
    comment: string;
    sent_faculty_number: string;
    university_email: string;
    moodle_profile_created: string;
    email_sent_to_access_moodle: string;
    entered_into_cohort: string;
    entered_in_admin: string;

    dateOfCreation: string;
    lastEditEmail: string;
    lastEditDate: string;
}


export default function StudentFormGetAll() {


    const handleUpdate = (id: string) => {
        router.push(`/StudentFormUpdateStudent?id=${id}`);
    };

    const [isLoading, setIsLoading] = useState(true);                   // wait for fetch request

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
        setIsLoading(false);
    }, [])


    return (
        <div>
            <div><h1>Студенти - Бакалаври/Магистри КСК</h1></div>

            {isLoading ?
                <p>Зареждам...</p>
                :

                <div>
                    {/* MUI NEW */}
                    <Paper sx={{ overflow: 'hidden', height: '100%' }}>
                        <TableContainer>

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
                                        <TableCell>КОХОРТ В МООДЛЕ</TableCell>
                                        <TableCell>Начин на кандидатстване</TableCell>
                                        <TableCell>Дата на първоначален контакт</TableCell>
                                        <TableCell>Месец на запитване</TableCell>
                                        <TableCell>Източник на контакт</TableCell>
                                        <TableCell>Заплатил КСК </TableCell>
                                        <TableCell>Дата плащане КСК </TableCell>
                                        <TableCell>Коментар - документи за КСК</TableCell>
                                        <TableCell>Платена сем. такса </TableCell>
                                        <TableCell>Дата на платена сем. такса</TableCell>
                                        <TableCell>Период на подаване в АдминУни</TableCell>
                                        <TableCell>Учебна година</TableCell>
                                        <TableCell>Дата на издаване на договор</TableCell>
                                        <TableCell>Сем. Такса</TableCell>
                                        <TableCell>Отстъпка</TableCell>
                                        <TableCell>Коментар</TableCell>
                                        <TableCell>Изпратен фак. номер</TableCell>
                                        <TableCell>G-mail</TableCell>
                                        <TableCell>Създаден профил в Мудъл</TableCell>
                                        <TableCell>Изпратен имейл за достъп до Мудъл</TableCell>
                                        <TableCell>Вкаран в Кохорт</TableCell>
                                        <TableCell>Въведени в Админ</TableCell>

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
                                                    <TableCell>{student.status_of_ksk}</TableCell>
                                                    <TableCell>{student.n_of_enrollment_order}</TableCell>
                                                    <TableCell>{student.names}</TableCell>
                                                    <TableCell>{student.egn}</TableCell>
                                                    <TableCell align="center"><Button onClick={() => handleUpdate(student._id)}><EditIcon /></Button></TableCell>
                                                    <TableCell>{student.names_latin}</TableCell>
                                                    <TableCell>{student.phone_number}</TableCell>
                                                    <TableCell>{student.email}</TableCell>
                                                    <TableCell>{student.in_front_of_school}</TableCell>
                                                    <TableCell>{student.location_of_the_transitional_educationa_institution}</TableCell>
                                                    <TableCell>{student.professional_qualification}</TableCell>
                                                    <TableCell>{student.confirmation_by_nacid}</TableCell>
                                                    <TableCell>{student.desired_major}</TableCell>
                                                    <TableCell>{student.desired_shape}</TableCell>
                                                    <TableCell>{student.length_of_study}</TableCell>
                                                    <TableCell>{student.cohort_in_moodle}</TableCell>
                                                    <TableCell>{student.method_of_application}</TableCell>
                                                    <TableCell>{student.date_of_initial_contact}</TableCell>
                                                    <TableCell>{student.month_of_inquiry}</TableCell>
                                                    <TableCell>{student.contact_source}</TableCell>
                                                    <TableCell>{student.paid_ksk}</TableCell>
                                                    <TableCell>{student.date_of_payment_ksk}</TableCell>
                                                    <TableCell>{student.comment_ksk}</TableCell>
                                                    <TableCell>{student.weekly_fee_paid}</TableCell>
                                                    <TableCell>{student.date_of_paid_weekly_fee}</TableCell>
                                                    <TableCell>{student.submission_period_in_adminuni}</TableCell>
                                                    <TableCell>{student.school_year}</TableCell>
                                                    <TableCell>{student.contract_issue_date}</TableCell>
                                                    <TableCell>{student.sem_Fee}</TableCell>
                                                    <TableCell>{student.discount}</TableCell>
                                                    <TableCell>{student.comment}</TableCell>
                                                    <TableCell>{student.sent_faculty_number}</TableCell>
                                                    <TableCell>{student.university_email}</TableCell>
                                                    <TableCell>{student.moodle_profile_created}</TableCell>
                                                    <TableCell>{student.email_sent_to_access_moodle}</TableCell>
                                                    <TableCell>{student.entered_into_cohort}</TableCell>
                                                    <TableCell>{student.entered_in_admin}</TableCell>

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
            }
        </div>
    )
}
