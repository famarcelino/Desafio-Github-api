import "./styles.css";
import Button from "../Button";
import { NavLink } from "react-router-dom";

export default function Welcome() {
    return (
        <main>
            <section>
                <div className="welcome-container mt27">
                    <h1>Desafio Github API</h1>
                    <p>DevSuperior - Escola de progamação</p>
                    <div className="mt27">
                        <NavLink to="/profile">
                            <Button text={"Começar"} />
                        </NavLink>
                    </div>
                </div>
            </section>
        </main>
    );
}