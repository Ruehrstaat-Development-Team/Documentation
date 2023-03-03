# Errors

On this page we will describe the errors and exceptions that can occur in the API. or that can be returned by the API.
We will also describe the error codes and the error messages and how to handle maybe handle them.

## 400 - Bad Request
**Example:**<br>
Status: `400 Bad Request`
### No carrier id provided
```json
{
    "error": "No carrier id provided"
}
```

This error occurs when you try to access a carrier endpoint but you did not provide a carrier id. This error is used by different endpoints. If you get this error, please check that you are querying the correct endpoint and that you provided a carrier id. We need the Elite Dangerous Market ID as Carrier ID. A valid ID looks like this: `6695835845`.

### No carrier id or callsign provided
```json
{
    "error": "No carrier id or callsign provided"
}
```

This error occurs when you try to access a carrier endpoint but you did not provide a carrier id or a callsign. This error is used by different endpoints. If you get this error, please check that you are querying the correct endpoint and that you provided a carrier id or a callsign. We need the Elite Dangerous Market ID as Carrier ID. A valid ID looks like this: `6695835845`. Callsigns are a unique identifier for a carrier. A valid callsign looks like this: `ABC-DEF`.

### Invalid carrier id provided, to create a carrier please use POST request
```json
{
    "error": "Invalid carrier id provided, to create a carrier please use POST request"
}
```

This error occurs when you query an endpoint with the wrong request type for the parameters you provided. Please make sure to use the correct request type for the parameters you provided or edit your request to use the correct parameters. If you want to create a carrier, please use a [POST request](/api/general/?id=post-carrier), if you want to edit a carrier, please use a [PUT request](/api/general/?id=put-carrier).

### Carrier id provided, use PUT request to edit carrier
```json
{
    "error": "Carrier id provided, use PUT request to edit carrier"
}
```

This error occurs when you query an endpoint with the wrong request type for the parameters you provided. Please make sure to use the correct request type for the parameters you provided or edit your request to use the correct parameters. If you want to create a carrier, please use a [POST request](/api/general/?id=post-carrier), if you want to edit a carrier, please use a [PUT request](/api/general/?id=put-carrier).

### No type provided
```json
{
    "error": "No type provided"
}
```

This error occurs when you try to access a carrier endpoint but you did not provide a type. This error is used by different endpoints. If you get this error, please check that you are quering the correct endpoint and that you provided a type. Types can be found in the documentation of the endpoint.

### Invalid type provided
```json
{
    "error": "Invalid type provided"
}
```

This error occurs when you try to access a carrier endpoint but you provided an invalid type. This error is used by different endpoints. If you get this error, please check that you are quering the correct endpoint, that you provided a valid type and that this type is supported by the endpoint. Types can be found in the documentation of the endpoint.

### No body provided
```json
{
    "error": "No body provided"
}
```

This error occurs when you try to access a carrier endpoint but you did not provide a body. This error is used by the [carrierJump](/api/connector/#put-carrierjump) endpoint. If you get this error, please check that you are quering the correct endpoint and that you provided a body. A valid body looks like this: `Sowiio ABC 1`.

### No previous location found
```json
{
    "error": "No previous location found"
}
```

This error occurs when you try to access a carrier endpoint but you did not provide a previous location. This error is used by the [carrierJump](/api/connector/#put-carrierjump) endpoint. If you get this error, please check that you are quering the correct endpoint and that you provided a previous location. A valid previous location looks like this: `Sowiio ABC 1`.

### No access provided
```json
{
    "error": "No access provided"
}
```

This error occurs when you try to access a carrier endpoint but you did not provide an access. This error is used by the [carrierPermission](/api/connector/#put-carrierpermission) endpoint. If you get this error, please check that you are quering the correct endpoint and that you provided an access. Valid access types can be found in the documentation of the endpoint.

### Invalid access provided
```json
{
    "error": "Invalid access provided"
}
```

This error occurs when you try to access a carrier endpoint but you provided an invalid access. This error is used by the [carrierPermission](/api/connector/#put-carrierpermission) endpoint. If you get this error, please check that you are quering the correct endpoint, that you provided a valid access and that this access is supported by the endpoint. Valid access types can be found in the documentation of the endpoint.

### No operation provided
```json
{
    "error": "No operation provided"
}
```

This error occurs when you try to access a carrier endpoint but you did not provide an operation. This error is used by the [carrierService](/api/connector/?id=put-carrierservice) endpoint. If you get this error, please check that you are quering the correct endpoint and that you provided an operation. Valid operation types can be found in the documentation of the endpoint.

### Invalid operation provided
```json
{
    "error": "Invalid operation provided"
}
```

This error occurs when you try to access a carrier endpoint but you provided an invalid carrier service. This error is used by the [carrierService](/api/connector/#put-carrierservice) endpoint. If you get this error, please check that you are querying the correct endpoint, that you provided a valid carrier service and that this carrier service is registered in our system. 

### No service provided
```json
{
    "error": "No service provided"
}
```

This error occurs when you try to access a carrier endpoint but you did not provide a service. This error is used by the [carrierService](/api/connector/?id=put-carrierservice) endpoint. If you get this error, please check that you are quering the correct endpoint and that you provided a service. Valid service types can be found in the documentation of the endpoint.


## 401 - Unauthorized
**Example:**<br>
Status: `401 Unauthorized`
### Carrier not allowed
```json
{
    "error": "Carrier not allowed"
}
```

This error occurs when you try to access a carrier that you do not have the read/write permission for. This error is used by different endpoints. If you get this error, please check that you are querying the correct carrier, the correct endpoint and that you have the correct permissions on your key.

### No read access
```json
{
    "error": "No read access"
}
```

This error occurs when you try to access a carrier endpoint that requires read access but you do not have the read permission for this carrier. If you get this error, please check that you are querying the correct carrier and that you have the correct permissions on your key.

### Not allowed to create new carriers
```json
{
    "error": "Not allowed to create new carriers"
}
```

This error occurs when you try to create a new carrier but you do not have the permission to create new carriers. If you get this error, please check that you are querying the correct endpoint and that you have the correct permissions on your key.

## 403 - Forbidden
**Example:**<br>
Status: `403 Forbidden`
### Authentication credentials were not provided.
```json
{
    "detail": "Authentication credentials were not provided."
}
```

This error occurs when you try to access an endpoint that requires authentication but you did not provide any authentication credentials.
You can see how to authenticate in the [Authentication](/api/authentication/#authentication) section.

## 404 - Not Found
**Example:**<br>
Status: `404 Not Found`
### Invalid carrier id provided
```json
{
    "error": "Invalid carrier id provided"
}
```

This error occurs when you try to access a carrier endpoint but you provided an invalid carrier id. This error is used by different endpoints. If you get this error, please check that you are querying the correct endpoint, that you provided a valid carrier id and that this carrier id is registered in our system. We need the Elite Dangerous Market ID as Carrier ID. A valid ID looks like this: `6695835845`.

### Invalid carrier service provided
```json
{
    "error": "Invalid carrier service provided"
}
```

This error occurs when you try to access a carrier endpoint but you provided an invalid carrier service. This error is used by the [carrierService](/api/connector/#put-carrierservice) endpoint. If you get this error, please check that you are querying the correct endpoint, that you provided a valid carrier service and that this carrier service is registered in our system. 


## 5xx - Server Error
**Example:**<br>
Status: `500 Internal Server Error`

Any 5xx error is a server error. This means that something went wrong on our side. If you get a 5xx error, please contact us on our [Discord](https://discord.gg/E4Q8NdjvsW) and we will try to fix the issue as soon as possible.

## 2xx - Success
**Example:**<br>
Status: `200 OK`

While this is not an error, it is here to complete the list.

Any 2xx error is a success. This means that your request was successful and you should get a response. If you get a 2xx error, please check the response body for the data you requested.
