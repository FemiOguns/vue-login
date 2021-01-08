let api = {
    postData(route,payload) {
        return new Request(
            new String(process.env.VUE_APP_API+route),
            {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Headers': '*' 
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer', 
                body: JSON.stringify(payload) 
            })
    }
}


export default api