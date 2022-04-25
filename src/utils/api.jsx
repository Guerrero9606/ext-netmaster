const callApi = async (url, options = {}) => {
    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const response = await fetch('http://localhost:8090' + url);
    const data = await response.json();
    return data;
};

export const api = {
    files: {
        Diario() {
            return callApi('/Diario.php');
        },
        Semanal() {
            return callApi('/Semanal.php');
        },  
        Mensual() {
            return callApi('/Mensual.php');
        },       
    }
};