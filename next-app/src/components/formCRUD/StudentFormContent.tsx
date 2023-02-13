// react
import { useState } from "react";

// axios
import axios from "axios";


const API_URL = 'http://localhost:3000/api/test/add';


export default function StudentFormContent() {

    const [postData, setPostData] = useState({ name: "", email: "" });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Name: ${name} Email: ${email}`);


        axios
            .post(API_URL, {
                name: name,
                email: email,
            })
            .then((res) => {
                console.log("Post created:", res.data);
            })
            .catch((err) => {
                console.error("Error:", err);
            })
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
