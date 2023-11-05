import { Outlet, Link } from "react-router-dom";
import { AppShell, Anchor, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';

/*
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>


*/

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
                <Anchor c="white" href="/" target='_blank' underline='never'>HOME</Anchor>
                <Anchor c="white" pl={10} href="/settings" target='_blank' underline='never'>SETTINGS</Anchor>
            </AppShell.Header>
            
            <Outlet />
            <AppShell.Footer bg="blue">
                    
            </AppShell.Footer>
            
            </AppShell>                   
        </>
    )
}




export default Layout;