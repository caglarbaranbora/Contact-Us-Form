"use client";
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

enum GenderEnum {
  kid = "0-14",
  teen = "14-25",
  old = "25-40",
  boomer = "40+",
}
interface IFormInput {
  email: string;
  firstName: string;
  lastName: string;
  gender: GenderEnum;
  age: number;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form
      className="mt-5 flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="bg-white p-[10px] text-black">
        <label>Email: </label>
        <input
          className="border border-black p-[10px]"
          {...register("email", {
            required: true,
          })}
        />
      </div>
      <div className="bg-white p-[10px] text-black">
        <label>First Name: </label>
        <input
          className="border border-black p-[10px]"
          {...register("firstName", { required: true })}
        />
      </div>
      <div className="bg-white p-[10px] text-black">
        <label>Last Name: </label>
        <input
          className="border border-black p-[10px]"
          {...register("lastName")}
        />
      </div>
      <div className="flex bg-white p-[10px] text-black">
        <label>Age Selection: </label>
        <select {...register("age")}>
          <option value="kid">0-14</option>
          <option value="teen">14-25</option>
          <option value="old">25-40</option>
          <option value="boomer">40+</option>
        </select>
      </div>
      <div className="flex bg-white p-[10px] text-black">
        <label>Gender Selection: </label>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>
      <div>
        <input
          className="m-5 p-10 border border-amber-600 rounded-lg bg-white text-black"
          type="submit"
        />
      </div>
    </form>
  );
}
