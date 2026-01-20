import React from "react";
import { TextInput, PasswordInput } from "@mantine/core";

const LoginPage = () => {
  return (
    <div
      style={{ background: 'url("/bg.jpg")', backgroundSize: "cover" }}
      className="h-screen w-screen !bg-cover !bg-center !bg-no-repeat flex justify-center items-center"
    >
      <div>
        <form action="">
          <div>login</div>
          <TextInput
            variant="unstyled"
            size="md"
            placeholder="Email"
            radius="md"
          />
          <PasswordInput
            variant="unstyled"
            size="md"
            placeholder="Password"
            radius="md"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
