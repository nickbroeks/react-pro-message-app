import MainLayout from "../../../components/layout/MainLayout"
import { FieldValues, useForm } from "react-hook-form";
import FormErrorMessage from "../../../components/FormErrorMessage";
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
          {errors.username && <FormErrorMessage message={errors.username.message as string} />}
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: "Please enter a username" })}
          />
          <button type="submit">Register</button>
        </form>
      </main>
    </MainLayout>
  )
}