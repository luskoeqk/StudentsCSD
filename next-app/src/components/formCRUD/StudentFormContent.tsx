// react
import { useEffect, useState } from "react";

// axios
import axios from "axios";

// Material Ui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// firebase
import { auth } from "../../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const API_URL = 'http://localhost:3000/api/test/add';


interface IHandleClose {
    handleClose: () => void;
}

export default function StudentFormContent(props: IHandleClose) {

    const [errorAdd, setErrorAdd] = useState(null);                   // error on adding

    const [facultyNumber, setFacultyNumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lastEditEmail, setLastEditEmail] = useState<string | null>(null);
    const currentDate = new Date();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLastEditEmail(user.email);
            } else {
                console.log('User is not signed in');
                console.log(user) 
            }
        });
    }, [])

    // format the date - dd.mm.year clock
    const formattedDate = currentDate.toLocaleString("bg-BG", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(`Faculty Number: ${facultyNumber} Name: ${name} Email: ${email} Date: ${formattedDate} Last Edit: ${lastEditEmail}`);

        axios
            .post(API_URL, {
                facultyNumber: facultyNumber,
                name: name,
                email: email,
                dateOfCreation: formattedDate,
                lastEditEmail: lastEditEmail,
            })
            .then((res) => {

                console.log("Post created:", res.data);
                props.handleClose();            // close the dialog window on success
                setErrorAdd(null);              // reset error state on success
            })
            .catch((err) => {

                alert("Error durging writing");
                console.error("Error durging writing");
                console.log("Error:", err);
                setErrorAdd(err);
            })
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    label="Факултетен номер"
                    onChange={(e) => setFacultyNumber(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Име"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    margin="normal"
                    label="Личен имейл"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color={errorAdd ? "error" : "primary"}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Добави студент
                    </Button>
                </div>
            </form>
        </div>
    )
}
