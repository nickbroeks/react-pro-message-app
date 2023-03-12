import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <main>
      <h1 className="text-4xl mb-4">404 NOT FOUND</h1>
      <p>
        You can navigate{" "}
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 hover:underline"
        >
          back
        </button>{" "}
        and try another page
      </p>
    </main>
  )
}