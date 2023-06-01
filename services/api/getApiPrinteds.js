const getApiPrinteds = (data) => {
    return fetch(process.env.ENDPOINT_PRINTED, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
            token_id: process.env.TOKEN_GRAPHQL_PRINTED
        }
    }).then(response => response.json()).then(response => response.data).catch(function (err) {
        console.error(`Error al obtener impresos ${err}`)
    });
}

export default getApiPrinteds;