import MainLayout from "../../../components/layout/MainLayout"
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SelectUsername() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  async function onSubmit(data: FieldValues) {
    console.log(data.username);
  }
  return (
    <MainLayout>
      <main>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
          />
          <button type="submit">Register</button>
        </form>
      </main>
    </MainLayout>
  )
}