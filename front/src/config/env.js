const hostname = window.location.hostname;
const vars = {
    apiURL: (hostname === "localhost" || hostname === "127.0.0.1") ? 'http://localhost:8000/v1/':'/v1/'
};

export default vars;