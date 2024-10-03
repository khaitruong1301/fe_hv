import { Form, Input, Button, Typography, Card, Space, Flex, message } from "antd";
import { useDispatch } from "react-redux";
import { ResetPasswordActionAsync, OtpEmailActionAsync } from "../../../Redux/ReducerAPI/AuthenticationReducer";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";


const { Title } = Typography;

const ResetPassword = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const username = queryParams.get('username');
    const [countdown, setCountdown] = useState(60);
    const [isCountdownActive, setIsCountdownActive] = useState(false);
    const [otpValues, setOtpValues] = useState('');

    const onChange = (text) => {
        console.log('onChange:', text);
        setOtpValues(text);
    };

    const onFinish = (values) => {

        values = {
            ...values,
            otp: otpValues
        }
        console.log(values);
        dispatch(ResetPasswordActionAsync(username, values))
            .then((response) => {
                if (response)
                    navigate("/");
            })
            .catch((error) => {
                console.error("Failed to reset password:", error);
                // Handle errors or show error messages
            });
    };

    const handleResendOTP = () => {
        if (isCountdownActive) return;
        console.log(username);
        dispatch(OtpEmailActionAsync({ username }))
            .then((response) => {
                if (response) {
                    startCountdown();
                }
            })
            .catch((error) => {
                console.error(error);
                message.error("Đã xảy ra lỗi khi gửi OTP, vui lòng thử lại.");
            });
    };

    const startCountdown = () => {
        setIsCountdownActive(true);
        setCountdown(60);

        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsCountdownActive(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f0f2f5",
            }}
        >
            <Card
                style={{
                    width: 400,
                    borderRadius: 8,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                }}
                title={
                    <Title level={3} style={{ textAlign: "center" }}>
                        Forgot Password
                    </Title>
                }
            >
                <Form
                    form={form}
                    name="changePassword"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        name="newPassword"
                        label="New Password"
                        style={{ marginBottom: "16px" }}
                        rules={[
                            {
                                required: true,
                                message: "Please input your new password",
                            },
                            {
                                min: 6,
                                message: "Password must be at least 6 characters long!"
                            },
                            {
                                pattern: /^(?=.*[a-zA-Z])(?=.*\d).+$/,
                                message: "Your password must contain at least one letter and one number!"
                            },
                        ]}
                    >
                        <Input
                            type="password"
                            placeholder="Enter your new password"
                            style={{ borderRadius: "4px" }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="Confirm Password"
                        style={{ marginBottom: "16px" }}
                        rules={[
                            {
                                required: true,
                                message: "Please input confirm password",
                            },
                            {
                                validator: (_, value) => {
                                    if (!value || value === form.getFieldValue('newPassword')) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("Your password confirmation does not match!"));
                                }
                            },
                        ]}
                    >
                        <Input
                            type="password"
                            placeholder="Enter confirm password"
                            style={{ borderRadius: "4px" }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="otp"
                        label="OTP"
                        style={{ marginBottom: "16px" }}
                        rules={[
                            {
                                required: true,
                                message: "Please enter OTP Number",
                            },
                        ]}
                    >
                        <Flex gap="middle" align="flex-start" vertical>
                            <Input.OTP length={6} onChange={onChange} />
                        </Flex>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            style={{ borderRadius: "4px", fontWeight: "bold" }}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Space style={{ width: "100%", justifyContent: "space-between" }}>
                            <Button
                                type="link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/");
                                }}
                            >
                                Back to Login
                            </Button>
                            <Button
                                type="link"
                                onClick={handleResendOTP}
                                disabled={isCountdownActive}
                            >
                                Resend OTP {isCountdownActive ? `(${countdown}s)` : ''}
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    );
};

export default ResetPassword;
