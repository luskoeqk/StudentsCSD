// styles
import { PageConfig } from "@/styles/PagesConfigElements";
import { StudentFormCU } from "@/styles/FormElements";

// auth
import { useAuth } from "@/context/AuthContext";

// axios
import axios from "axios";

// react
import { useState } from "react";
import { useRouter } from "next/router";

// Material Ui
import Button from '@mui/material/Button';
import InputText from "@/components/inputs/InputText";


const API_URL = 'http://localhost:3000/api/students/masters/add';


export default function createmaster() {

    const router = useRouter();

    const { user } = useAuth();                                       // get user email
    const [errorAdd, setErrorAdd] = useState(null);                   // error on adding

    const [distinction, setDistinction] = useState("");
    const [faculty_number, setFaculty_number] = useState("");
    const [status_of_ksk, setStatus_of_ksk] = useState("");
    const [n_of_enrollment_order, setN_of_enrollment_order] = useState("");
    const [names, setNames] = useState("");
    const [egn, setEgn] = useState("");
    const [names_latin, setNames_latin] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [email, setEmail] = useState("");
    const [in_front_of_school, setIn_front_of_school] = useState("");
    const [location_of_the_transitional_educationa_institution, setLocation_of_the_transitional_educationa_institution] = useState("");
    const [professional_qualification, setProfessional_qualification] = useState("");
    const [confirmation_by_nacid, setConfirmation_by_nacid] = useState("");
    const [desired_major, setDesired_major] = useState("");
    const [desired_shape, setDesired_shape] = useState("");
    const [length_of_study, setLength_of_study] = useState("");
    const [cohort_in_moodle, setCohort_in_moodle] = useState("");
    const [method_of_application, setMethod_of_application] = useState("");
    const [date_of_initial_contact, setDate_of_initial_contact] = useState("");
    const [month_of_inquiry, setMonth_of_inquiry] = useState("");
    const [contact_source, setContact_source] = useState("");
    const [paid_ksk, setPaid_ksk] = useState("");
    const [date_of_payment_ksk, setDate_of_payment_ksk] = useState("");
    const [comment_ksk, setComment_ksk] = useState("");
    const [weekly_fee_paid, setWeekly_fee_paid] = useState("");
    const [date_of_paid_weekly_fee, setDate_of_paid_weekly_fee] = useState("");
    const [submission_period_in_adminuni, setSubmission_period_in_adminuni] = useState("");
    const [school_year, setSchool_year] = useState("");
    const [contract_issue_date, setContract_issue_date] = useState("");
    const [sem_Fee, setSem_Fee] = useState("");
    const [discount, setDiscount] = useState("");
    const [comment, setComment] = useState("");
    const [sent_faculty_number, setSent_faculty_number] = useState("");
    const [university_email, setUniversity_email] = useState("");
    const [moodle_profile_created, setMoodle_profile_created] = useState("");
    const [email_sent_to_access_moodle, setEmail_sent_to_access_moodle] = useState("");
    const [entered_into_cohort, setEntered_into_cohort] = useState("");
    const [entered_in_admin, setEntered_in_admin] = useState("");

    // format the date - dd.mm.year clock
    const formattedDate = new Date().toLocaleString("bg-BG", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();

        console.log(distinction)

        axios
            .post(API_URL, {
                faculty_number: faculty_number,
                names: names,
                email: email,
                distinction: distinction,
                status_of_ksk: status_of_ksk,
                n_of_enrollment_order: n_of_enrollment_order,
                egn: egn,
                names_latin: names_latin,
                phone_number: phone_number,
                in_front_of_school: in_front_of_school,
                location_of_the_transitional_educationa_institution: location_of_the_transitional_educationa_institution,
                professional_qualification: professional_qualification,
                confirmation_by_nacid: confirmation_by_nacid,
                desired_major: desired_major,
                desired_shape: desired_shape,
                length_of_study: length_of_study,
                cohort_in_moodle: cohort_in_moodle,
                method_of_application: method_of_application,
                date_of_initial_contact: date_of_initial_contact,
                month_of_inquiry: month_of_inquiry,
                contact_source: contact_source,
                paid_ksk: paid_ksk,
                date_of_payment_ksk: date_of_payment_ksk,
                comment_ksk: comment_ksk,
                weekly_fee_paid: weekly_fee_paid,
                date_of_paid_weekly_fee: date_of_paid_weekly_fee,
                submission_period_in_adminuni: submission_period_in_adminuni,
                school_year: school_year,
                contract_issue_date: contract_issue_date,
                sem_Fee: sem_Fee,
                discount: discount,
                comment: comment,
                sent_faculty_number: sent_faculty_number,
                university_email: university_email,
                moodle_profile_created: moodle_profile_created,
                email_sent_to_access_moodle: email_sent_to_access_moodle,
                entered_into_cohort: entered_into_cohort,
                entered_in_admin: entered_in_admin,


                lastEditEmail: user.email,
                lastEditDate: formattedDate,
                dateOfCreation: formattedDate,
            })
            .then((res) => {

                console.log("Post created:", res.data);
                setErrorAdd(null);              // reset error state on success
                router.push("/masters")
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

            <div><h1>Създаване на Магистър</h1></div>

            <StudentFormCU>
                {/* new */}

                <InputText label='Отличителност' onChange={(e) => setDistinction(e)}/>

                <br />
                {/* <InputText /> */}

                {/* new */}
            </StudentFormCU>


            <div>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color={errorAdd ? "error" : "primary"}
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                >
                    Добави студент
                </Button>
            </div>
        </PageConfig >
    )
}
