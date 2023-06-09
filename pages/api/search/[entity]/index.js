// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";
import { getData } from "services/graphql/getData";
const Cache = require("lru-cache");

/* Creo la cache */
const cache = new Cache({
    ttl: 1000 * 30 * 1,
    ttlResolution: 1000 * 30 * 1,
    max: 5 * 1024 * 1024,
});
const cors = Cors({
    origin: true,
    methods: ["GET"],
});

/* Funcion para verificar y crear la cache */
const setCache = async function (key, content) {
    try {
        if (key) {
            if (!cache.has(key)) {
                const contentData = content;
                cache.set(key, contentData);
            }
            //console.log("CACHE LRU===>", cache.get(key));
            return cache.get(key);
        }
        return null;
    } catch (error) {
        return null;
    }
};

/* Se definen peticiones */

export default async function handler(req, res) {

    try {
        const { query } = req;
        /* Valido si existe el atributo query en la consulta a la ruta GET */
        if (query.entity) {
            /* Invoco a la funcion getData definida en los servicios para graphql
                    @service /services/graphql/getData
            */
            if (["articles", "authors"].includes(query.entity)) {
                const { index, result } = getData(query);
                const dataResult = await setCache(index, result);
                // const dataResult = await result;

                if (dataResult) {
                    return res.status(200).json(dataResult);
                }
            }
        }

        return res.status(500).json({
            error: "No data stored in cache",
        });

    } catch (error) {
        /* Si hay error, se notifica el mensaje a la consola */
        console.error(error);
        return res.status(500).json({
            error: error
        });
    }



}