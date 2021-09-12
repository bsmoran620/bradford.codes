exports.handler = async function() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer T_5MAZY6k7t2X02PZXvT8yPktCO13o7A8iqMcaRLDv0");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://api.netlify.com/api/v1/forms/613d05599aa89c00075b6a6b/submissions", requestOptions)
        .then(response => response.text())
        .then(result => {
            return {
                statusCode: 200,
                body: JSON.stringify(result)
           } 
        })
        .catch(error => {
            console.log('error', error);
            return {
                statusCode: 500,
                body: JSON.stringify({"failed": error})
           } 
        });
    

    
}