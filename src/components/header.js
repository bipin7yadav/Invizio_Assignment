import { Link } from "react-router-dom";
import { AiFillSlackCircle } from "react-icons/ai";

export default function Header() {
    return (
        <div>
            <header className="App-header">
                <div>
                    <Link style={{textDecoration:"none"}} to="/">
                        <h1>Invizio Solutions</h1>
                    </Link>
                </div>
                <div className='logo'>
                    <AiFillSlackCircle />
                </div>
            </header>
        </div>
    )
}