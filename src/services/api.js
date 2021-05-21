import axios from "axios";

const api = axios.create({
  baseURL:"https://www.googleapis.com/",
  key:"AIzaSyAnZvmtDlKSrMOcURDugfraCRJCZXy9KUk",
})

export default api;