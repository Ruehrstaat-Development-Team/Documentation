# Authentication

To use the API you need to authenticate yourself. The API uses a token based authentication. A token must be provided in the `Authorization` header of the request. The token must be prefixed with `Bearer <token>`. A token will be provided to you by the squadron command if you provide us with a use case for the API.<br>
The Key `Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR` will be used in all examples below, this is obviously not a valid token.

### Authentication Example
```bash
curl --location 'https://api.ruehrstaat.de/api/v1/getAllCarriers' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--data ''
```

