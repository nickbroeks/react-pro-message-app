import NavBar from "./NavBar";

type MainLayoutProps = { children: React.ReactNode;};

export default function MainLayout({ children }: MainLayoutProps) {

    return (
        <div className="container">
            <NavBar/>
            {children}
        </div>
    )
}