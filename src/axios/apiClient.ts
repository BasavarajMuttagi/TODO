import axios from "axios";

function apiClient() {
  return axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlNzk2OGQzMi1lZWRkLTQ3YWMtOGFkZC0xYzI5MzhmZTc0M2EiLCJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTcxNjI5MTk0NiwiZXhwIjoxNzE2Mzc4MzQ2fQ.6vBZAB2WUOEcbOtAqyHOTBkymTk3kzJw9X6YXUEqbAc"}`,
    },
  });
}

export default apiClient;
