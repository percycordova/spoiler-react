const PostQueryApiPrinteds = (data) => {
    return fetch(process.env.ENDPOINT_PRINTED, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
            token_id: process.env.TOKEN_GRAPHQL_PRINTED
        }
    }).then(response=>response.json()).then(res=>res.data).catch(function(err){
        console.log(`Error al obtener impresos: ${err}`)
    });
}

export default PostQueryApiPrinteds;