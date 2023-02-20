import * as React from 'react';

// ========== Material UI ==========
// Dialog
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { TransitionProps } from '@mui/material/transitions';
import { ClickAwayListener } from '@mui/material';

// components
import StudentFormContent from './StudentFormContent';
import StudentFormGetAll from './StudentFormGetAll';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function StudentFrom() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickAway = (eve: React.TouchEvent<Document>) => {
        // Prevent the dialog from closing when the user clicks outside of it
        if (eve.target instanceof HTMLElement && eve.target.closest('.MuiDialog-root')) {
            return;
        }
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Добави студент
            </Button>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    fullWidth={true}
                >
                    <DialogTitle>{"Добавяне на нов студент"}</DialogTitle>
                    <DialogContent>
                        <Button
                            onClick={handleClose}
                        >Затвори без запазване</Button>

                        {/* Form */}
                        <br />
                        <StudentFormContent handleClose={handleClose} />
                        {/* Form */}

                    </DialogContent>
                </Dialog>
            </ClickAwayListener>

            {/* All students */}
            <StudentFormGetAll />
            {/* All students */}
        </div>
    );
}

export default StudentFrom