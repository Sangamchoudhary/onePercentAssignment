import { Link } from "react-router-dom";
import { isUserLoggedIn } from "../../userLoggedIn";
import "./Header.css";

export default function Header() {
  async function logout() {
    await fetch("https://one-percent-todoist.vercel.app/api/user/logout", {
      credentials: "include",
      method: "GET",
    });
    window.location.reload();
  }

  return (
    <header>
      <Link to="/" className="Logo">
        1% CLUB - TODIST
      </Link>
      <nav>
        {isUserLoggedIn() && (
          <>
            <Link to="/">
              <button class="logoutButton" onClick={logout}>
                Logout
              </button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
