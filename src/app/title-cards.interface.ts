interface ICertifier {
    "_id": string,
    "short_name": string
}

interface ITitleCards {
    "certifier": ICertifier,
    "is_published"?: boolean,
    "long_name": string,
    "short_name": string,
    "rncp_level": string,
    "rncp_level_europe": string,
    "_id": string
}

export default ITitleCards;