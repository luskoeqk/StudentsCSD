// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// firebase
import { auth } from '../../../firebase/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

// react
import { useState, useEffect } from 'react';


export default function Header() {

    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                console.log(user)
                setUser(user.email);    // email
            } else {
                // User is signed out
                console.log('User is not signed in');
                console.log(user)   // null
            }
        });
    }, [])


    const handleLogout = () => {

        signOut(auth).then(() => {
            console.log('Sign-out successful.');
        }).catch((error) => {
            alert('Error: ' + error);
        });

        window.location.reload();
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 5 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ВУЗФ кск
                    </Typography>
                    <div color="inherit">Здравей, {user}</div>
                    <Button color="inherit"
                        onClick={handleLogout}
                    >Log out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}