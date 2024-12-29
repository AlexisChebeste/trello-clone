import Logo from "./Logo";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
            <div className="flex justify-between w-full items-center">
                <Logo />
                <Button>
                    <Link to="/login">Login</Link>
                </Button>
            </div>
            
            
        </header>
    )
}