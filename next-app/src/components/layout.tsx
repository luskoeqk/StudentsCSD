
// styles
import { Header, LayoutWrapper } from "@/styles/LayoutElements";


const menuItems = [
    {
        href: '/',
        title: 'Homepage',
    },
    {
        href: '/about',
        title: 'About',
    },
    {
        href: '/contact',
        title: 'Contact',
    },
];



export default function Layout({ children }: any) {
    return (

        <LayoutWrapper>
            <Header>
                Next.js sidebar menu
            </Header>
            <div>
                <aside>
                    <nav>
                        <ul>

                        </ul>
                    </nav>
                </aside>
                <div>
                    {children}
                </div>

            </div>
        </LayoutWrapper>
    );
}