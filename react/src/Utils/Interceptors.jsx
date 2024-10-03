import axios from "axios";

const TOKEN_AUTHOR = "accessToken";
const REFRESH_TOKEN = "refreshToken";
const USER_LOGIN = "userLogin";
const HOST_DOMAIN = "https://localhost:7116";

// Cấu hình interceptors
const httpClient = axios.create({
  baseURL: HOST_DOMAIN,
  timeout: 30000,
});

httpClient.interceptors.request.use(
  (req) => {
    const accessToken = localStorage.getItem(TOKEN_AUTHOR);
    if (req.headers) {
      req.headers["Authorization"] = accessToken ? `Bearer ${accessToken}` : "";
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    // Xử lý response thành công
    return response.data;
  },
  (error) => {
    // Xử lý lỗi response
    if (error.response) {
      // Server đã trả về một response nhưng với mã trạng thái lỗi
      switch (error.response.status) {
        case 401:
          console.error(
            "Unauthorized access - perhaps the user is not logged in or token expired."
          );
          break;
        case 403:
          console.error(
            "Forbidden - you don't have permission to access this resource."
          );
          break;
        case 404:
          console.error("Resource not found.");
          break;
        case 500:
          console.error("Internal server error.");
          break;
        default:
          console.error(
            `Error ${error.response.status}: ${error.response.statusText}`
          );
      }
    } else if (error.request) {
      // Request đã được gửi nhưng không nhận được phản hồi từ server
      console.error("No response received from server.");
    } else {
      // Một số lỗi khác xảy ra trong quá trình thiết lập request
      console.error("Error setting up request: ", error.message);
    }

    return Promise.reject(error);
  }
);

export { httpClient, USER_LOGIN, TOKEN_AUTHOR, REFRESH_TOKEN, HOST_DOMAIN };
