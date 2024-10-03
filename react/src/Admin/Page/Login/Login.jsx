// import React from "react";
// import { NavLink } from "react-router-dom";

// const Login = () => {
//   return (
//     <div
//       className="page-wrapper"
//       id="main-wrapper"
//       data-layout="vertical"
//       data-navbarbg="skin6"
//       data-sidebartype="full"
//       data-sidebar-position="fixed"
//       data-header-position="fixed"
//     >
//       <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
//         <div className="d-flex align-items-center justify-content-center w-100">
//           <div className="row justify-content-center w-100">
//             <div className="col-md-8 col-lg-6 col-xxl-3">
//               <div className="card mb-0">
//                 <div className="card-body">
//                   <NavLink
//                     to="/"
//                     className="text-nowrap logo-img text-center d-block py-3 w-100"
//                   >
//                     <img src="/assets/images/logos/logo-light.svg" alt />
//                   </NavLink>
//                   <p className="text-center">Your Social Campaigns</p>
//                   <form>
//                     <div className="mb-3">
//                       <label
//                         htmlFor="exampleInputEmail1"
//                         className="form-label"
//                       >
//                         Username
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="exampleInputEmail1"
//                         aria-describedby="emailHelp"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label
//                         htmlFor="exampleInputPassword1"
//                         className="form-label"
//                       >
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         id="exampleInputPassword1"
//                       />
//                     </div>
//                     <div className="d-flex align-items-center justify-content-between mb-4">
//                       <div className="form-check">
//                         <input
//                           className="form-check-input primary"
//                           type="checkbox"
//                           defaultValue
//                           id="flexCheckChecked"
//                           defaultChecked
//                         />
//                         <label
//                           className="form-check-label text-dark"
//                           htmlFor="flexCheckChecked"
//                         >
//                           Remeber this Device
//                         </label>
//                       </div>
//                       <a className="text-primary fw-bold" href="./index.html">
//                         Forgot Password ?
//                       </a>
//                     </div>
//                     <NavLink
//                       to="/home"
//                       className="btn btn-primary w-100 py-8 fs-4 mb-4"
//                     >
//                       Sign In
//                     </NavLink>
//                     <div className="d-flex align-items-center justify-content-center">
//                       <p className="fs-4 mb-0 fw-bold">New to SeoDash?</p>
//                       <NavLink
//                         className="text-primary fw-bold ms-2"
//                         to="/register"
//                       >
//                         Create an account
//                       </NavLink>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { Button, Form, Grid, Input, theme, Typography } from "antd";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { LoginActionAsync } from "../../../Redux/ReducerAPI/AuthenticationReducer";
import { NavLink, useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../../../Utils/Interceptors";
import { getDataJSONStorage } from "../../../Utils/UtilsFunction";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

const Login = () => {
  const { token } = useToken();
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(LoginActionAsync(values))
      .then(() => {
        const userLogin = getDataJSONStorage(USER_LOGIN);
        if (userLogin) {
          switch (userLogin.role) {
            case "Administrator":
              navigate("/admin");
              break;
            case "Student":
              navigate("/student");
              break;
            case "Instructor":
              navigate("/instructor");
            case "Manager":
              navigate("/manager");
              break;
            default:
              navigate("/"); // Redirect to home or login if role is not recognized
          }
        } else {
          navigate("/"); // Redirect to home or login if no user data is available
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle errors or show error messages
      });
  };
  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
            <path
              d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z"
              fill="white"
            />
            <path
              d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z"
              fill="white"
            />
            <path
              d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z"
              fill="white"
            />
          </svg>

          <Title style={styles.title}>Sign in</Title>
          <Text style={styles.text}>
            Welcome back to AntBlocks UI! Please enter your details below to
            sign in.
          </Text>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <NavLink to="/forgot-password" style={styles.forgotPassword}>
              Forgot password?
            </NavLink>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block="true" type="primary" htmlType="submit">
              Log in
            </Button>
            <div style={styles.footer}>
              <Text style={styles.text}>Don't have an account?</Text>{" "}
              <Link href="">Sign up now</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
