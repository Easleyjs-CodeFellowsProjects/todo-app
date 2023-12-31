import { Outlet, Link } from "react-router-dom";
import { AppShell, Grid, Center } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import './layout.css'

//import AuthProvider from '../context/auth/AuthProvider';
import Login from '../Login';
import Auth from '../Auth';

const Layout = () => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <>
            <AppShell
                header={{ height: 60, color: "cyan" }}
                footer={{ height: 40, color: "cyan"}}
                navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
                padding="md"
            >
                <AppShell.Header pt={15} pl={5} ta="left" bg="blue">
                    <Grid justify="flex-end">
                        <Grid.Col span="auto">
                            <Link to="/">HOME</Link>
                            <Link to="/settings">SETTINGS</Link>
                            <Link to="/signup">SIGNUP</Link>
                        </Grid.Col>
                        <Grid.Col span="content">
                            <Center>
                                <Login />
                            </Center>
                        </Grid.Col>
                    </Grid>
                </AppShell.Header>
                <Auth capability={'read'}>
                    <Outlet />
                </Auth>

                <AppShell.Footer bg="blue">
                </AppShell.Footer>
            
            </AppShell>                   
        </>
    )
}




export default Layout;