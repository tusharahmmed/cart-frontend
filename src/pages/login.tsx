import Login from "@/components/login/Login";
import RootLayout from "@/layouts/RootLayout";
import React from "react";

const LoginPage = () => {
  return (
    <div
      style={{
        background: `radial-gradient(
        80.05% 80.05% at 80.59% 107.94%,
        rgba(234, 0, 94, 0.1) 0%,
        rgba(234, 0, 94, 0) 100%
      ),
      radial-gradient(
        44.39% 44.39% at -2.94% 63.53%,
        rgba(0, 183, 195, 0.1) 0%,
        rgba(0, 183, 195, 0) 100%
      ),
      radial-gradient(
        77.59% 77.59% at 91.47% 10%,
        rgba(255, 140, 0, 0.1) 0%,
        rgba(255, 140, 0, 0) 100%
      ),
      rgba(10, 11, 12, 0.05)`,
      }}>
      <Login />
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
