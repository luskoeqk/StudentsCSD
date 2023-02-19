// react
import { useState } from "react";

// axios
import axios from "axios";

// Material Ui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const API_URL = 'http://localhost:3000/api/test/add';


interface IHandleClose {
    handleClose: () => void;
}

export default function StudentFormContent(props: IHandleClose) {


    const [facultyNumber, setFacultyNumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Faculty Number: ${facultyNumber} Name: ${name} Email: ${email}`);


        axios
            .post(API_URL, {
                facultyNumber: facultyNumber,
                name: name,
                email: email,
            })
            .then((res) => {
                console.log("Post created:", res.data);
                props.handleClose();            // close the dialog window on success
            })
            .catch((err) => {
                console.error("Error durging writing");
                console.log("Error:", err);
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
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Добави студент
                    </Button>
                </div>
            </form>
        </div>
    )
}
