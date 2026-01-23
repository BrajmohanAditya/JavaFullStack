import React from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  SegmentedControl,
} from "@mantine/core";
import { IconHeartbeat } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { handleControlKeyDown } from "@mantine/dates";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

const RegisterPage = () => {
  const form = useForm<{
    type: "PATIENT";
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    initialValues: {
      type: "PATIENT",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (!value ? "Password is required" : null),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log("Form submitted:", values);
  };

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className=" py-3  text-pink-500 flex gap-1 items-center ">
        <IconHeartbeat size={45} stroke={2.5} />
        <span className="font-heading font-semibold text-3xl">Pulse</span>
      </div>

      <div className="w-[360px]  backdrop-blur-md p-8  rounded-xl ">
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-5 [&_input]:placeholder:text-neutral-100 [&_.mantine-Input-input]:!border-white [&_.mantine-Input-input]:!border-white [&_input]:!pl-2  [&_svg]:!stroke-white  [&_input]:!text-white focus-within:[&_.mantine-Input-input]:!border-pink-400"
        >
          <h1 className="text-white text-xl font-semibold mb-6 text-center">
            Register
          </h1>
          <SegmentedControl
            {...form.getInputProps("type")}
            fullWidth color="pink" bg="none"
            className="[&_*]:!text-white border border-white"
            data={[
              { label: "Patient", value: "PATIENT" },
                { label: "Doctor", value: "DOCTOR" },
                { label: "Admin", value: "ADMIN" },
            ]}
          />
          <TextInput
            placeholder="Email"
            size="md"
            variant="unstyled"
            radius="md"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            placeholder="Password"
            size="md"
            variant="unstyled"
            radius="md"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            placeholder="confirmPassword"
            size="md"
            variant="unstyled"
            radius="md"
            {...form.getInputProps("confirmPassword")}
          />
          <Button type="submit" fullWidth size="md" radius="md" color="pink">
            Register
          </Button>
          <div className="text-neutral-100 text-sm self-center">
            Do you have an account?{" "}
            <Link to="/login" className=" hover:underline">
              Login
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
