import {
    Navbar as BNavbar,
    NavbarBrand,
    Button,
} from "@/components/bootstrap/client-bootstrap";
import Link from "next/link";

export const Navbar = () => {
    return (
        <BNavbar className="bg-body-tertiary mb-3">
            <Link href="/">
                <NavbarBrand className="mb-0 h1">React Boilerplate</NavbarBrand>
            </Link>
            <div className="ms-auto">
                <Link href="/demo">
                    <Button variant="primary">
                        Check the Context in action
                    </Button>
                </Link>
            </div>
        </BNavbar>
    );
};
