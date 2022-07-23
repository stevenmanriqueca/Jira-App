import axios from 'axios';

const jiraApi = axios.create({
  baseURL: 'https://jira-server-st.herokuapp.com/jira',
});

jiraApi.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token") || ""
  }
  return config
})

export default jiraApi;
