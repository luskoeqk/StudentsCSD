// next
import * as React from 'react';
import { useRouter } from 'next/router';

// Material UI
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
// user menu search
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import Person3Icon from '@mui/icons-material/Person3';
import Person4Icon from '@mui/icons-material/Person4';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GroupsIcon from '@mui/icons-material/Groups';

// styles
import { SidebarStudentsHeader } from '@/styles/LayoutElements';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar() {

    const router = useRouter()

    const [open, setOpen] = React.useState(false);

    const handleDrawerClose = () => {
        setOpen(!open);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <MenuOpenIcon />
                    </IconButton>
                </DrawerHeader>

                <List>

                    <SidebarStudentsHeader>
                            {
                                open ? <h3>????????????</h3> : <h3>??</h3>
                            }
                    </SidebarStudentsHeader>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                            onClick={() => router.push('/')}
                        >
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <GroupsIcon />
                            </ListItemIcon>
                            <ListItemText primary={'???????????? ????????????????'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                    <SidebarStudentsHeader>
                        {
                            open ? <h3>??????????????????</h3> : <h3>??</h3>
                        }
                    </SidebarStudentsHeader>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                            onClick={() => router.push('/bachelors/2024')}
                        >
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <Person4Icon />
                            </ListItemIcon>
                            <ListItemText primary={'2024'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                            onClick={() => router.push('/bachelors/2023')}
                        >
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary={'2023'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <Person2Icon />
                            </ListItemIcon>
                            <ListItemText primary={'2022'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <Person3Icon />
                            </ListItemIcon>
                            <ListItemText primary={'2021'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem
                        onClick={() => router.push('/')}
                        disablePadding sx={{ display: 'block' }}
                    >
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <PersonSearchIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={'???????????? ??????????????????'}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>

                <List>
                    <SidebarStudentsHeader>
                        {
                            open ? <h3>????????????????</h3> : <h3>??</h3>
                        }
                    </SidebarStudentsHeader>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <Person4Icon />
                            </ListItemIcon>
                            <ListItemText primary={'2024'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary={'2023'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <Person2Icon />
                            </ListItemIcon>
                            <ListItemText primary={'2022'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <Person3Icon />
                            </ListItemIcon>
                            <ListItemText primary={'2021'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                                <PersonSearchIcon />
                            </ListItemIcon>
                            <ListItemText primary={'???????????? ????????????????'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                </List>
            </Drawer>
        </Box>
    );
}