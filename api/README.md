# Ruehrstaat API Documentation

## Introduction

The Ruehrstaat API offers an API for the squadron to access ingame data for carriers and commanders and to provide a way to use this data in our other applications like the website or the discord bot. The API is written in Python using Django and Django Rest Framework.

The current API Endpoint is: `https://api.ruehrstaat.de/api/v1/`

## Authentication

To use the API you need to authenticate yourself. The API uses a token based authentication. A token must be provided in the `Authorization` header of the request. The token must be prefixed with `Bearer <token>`. A token will be provided to you by the squadron command if you provide us with a use case for the API.<br>
The Key `Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR` will be used in all examples below, this is obviously not a valid token.

### Authentication Example
```bash
curl --location 'https://api.ruehrstaat.de/api/v1/getAllCarriers' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--data ''
```

## API Endpoints

### getAllCarriers

Returns all registered carriers in the database that your token has read-access to.

#### Request
**Allowed-Types**: `GET`
```bash
curl --location 'https://api.ruehrstaat.de/api/v1/getAllCarriers' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--data ''
```
#### Example Response

```json
{
    "carriers": [
        {
            "id": "8889545955",
            "name": "RST Documentation",
            "callsign": "ABC-DEF",
            "currentLocation": "Sowiio ABC 1",
            "previousLocation": "Sowiio ABC 1",
            "dockingAccess": "all",
            "services": [
                {
                    "name": "Refuel",
                    "label": "Refuel",
                    "description": "You can refuel your ship at this carrier.",
                    "odyssey": false
                },
                {
                    "name": "Repair",
                    "label": "Repair",
                    "description": "You can repair your ship at this carrier.",
                    "odyssey": false
                },
            ],
            "owner": "Manfred",
            "ownerDiscordID": "988346369489986598",
            "imageURL": "https://rst.mtnmedia.dev/8889545955.png",
            "category": "flagship"
        },
        {
            "id": "6695835845",
            "name": "RST Docs",
            "callsign": "ZYX-WVU",
            "currentLocation": "Sowiio ABC 1",
            "previousLocation": "Sowiio ABC 1",
            "dockingAccess": "all",
            "services": [
                {
                    "name": "Refuel",
                    "label": "Refuel",
                    "description": "You can refuel your ship at this carrier.",
                    "odyssey": false
                },
            ],
            "owner": "Werner",
            "ownerDiscordID": "758553483966448477",
            "imageURL": "https://rst.mtnmedia.dev/8889545955.png",
            "category": "flagship"
        },
    ]
}
```

### getAllServices

Returns all carrier services registered in the database.

#### Request
**Allowed-Types**: `GET`
```bash
curl --location 'https://api.ruehrstaat.de/api/v1/getAllServices' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--data ''
```

#### Example Response

```json
{
    "services": [
        {
            "name": "BlackMarket",
            "label": "Secure Trading",
            "description": "The black market is available.",
            "odyssey": false
        },
        {
            "name": "Refuel",
            "label": "Refuel",
            "description": "You can refuel your ship at this carrier.",
            "odyssey": false
        },
        {
            "name": "Repair",
            "label": "Repair",
            "description": "You can repair your ship at this carrier.",
            "odyssey": false
        },
        {
            "name": "Rearm",
            "label": "Rearm",
            "description": "You can restock ammunition and buy limpets at this carrier.",
            "odyssey": false
        },
        {
            "name": "Commodities",
            "label": "Commodities Market",
            "description": "The commodity market is available.",
            "odyssey": false
        },
        {
            "name": "VoucherRedemption",
            "label": "Redemption Office",
            "description": "You can redeem bounties and combat bonds here.",
            "odyssey": false
        },
        {
            "name": "Exploration",
            "label": "Universal Cartographics",
            "description": "You can sell your exploration data here.",
            "odyssey": false
        },
        {
            "name": "Shipyard",
            "label": "Shipyard",
            "description": "You can store ships here and buy ships if stock available.",
            "odyssey": false
        },
        {
            "name": "Outfitting",
            "label": "Outfitting",
            "description": "You can outfit your ship and buy modules if stock available.",
            "odyssey": false
        },
        {
            "name": "VistaGenomics",
            "label": "Vista Genomics",
            "description": "You can sell you exobiology data here.",
            "odyssey": true
        },
        {
            "name": "PioneerSupplies",
            "label": "Pioneer Supplies",
            "description": "You can buy all Grade 1 suits and weapons as well as consumables here.",
            "odyssey": true
        },
        {
            "name": "Bartender",
            "label": "Concourse Bar",
            "description": "The Concourse Bar and Bartender Trading is available.",
            "odyssey": true
        }
    ]
}
```

### getCarrierInfo

Returns specified carrier options registered in the database.

#### Request
**Allowed-Types**: `GET`<br>
**Parameters**:<br>
`type`=`docking`,`category`
```bash
curl --location 'https://api.ruehrstaat.de/api/v1/getCarrierInfo?type=docking' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR'
```

#### Example Responses

##### `type`=`docking` Response:
```json
{
    "dockingAccess": [
        [
            "all",
            "All"
        ],
        [
            "none",
            "None"
        ],
        [
            "squadron",
            "Squadron"
        ],
    ]
}
```
##### `type`=`category`	Response:
```json
{
    "carrierCategory": [
        [
            "flagship",
            "Flagship"
        ],
        [
            "freighter",
            "Freighter"
        ],
        [
            "supportvessel",
            "Support Vessel"
        ],
        [
            "other",
            "Other"
        ]
    ]
}
```

### carrierJump

Updates the current Location of the carrier and puts the previous Location into the previous Location field. Made spcifically for our EDMC plugin.

#### Request
**Allowed-Types:** `PUT`<br>
**Required-Parameters:**<br>
`id`=`<carrierID>` (example: `6695835845`)<br>
`type`=`jump`,`cancel`<br>

**Optional-Parameters:**<br>
`source`=`<sourceApplication>` (example: `EDMC`, default: `other`)<br>

**Type-Specific-Parameters:**<br>
`body`=`<bodyName>` (example: `Sowiio ABC 1`, required-when-type: `jump`)<br>

```bash
curl --location --request PUT 'https://api.ruehrstaat.de/api/v1/carrierJump' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--form 'id="6695835845"' \
--form 'type="jump"' \
--form 'source="EDMC"' \
--form 'body="Sowiio ABC 1"'
```

#### Example Responses

##### `type`=`jump` Response:
```json
{
    "success": "Carrier jump noted"
}
```

##### `type`=`cancel` Response:
```json
{
    "success": "Carrier jump cancelled"
}
```

### carrierPermission

Updates the docking permission of the carrier. Made spcifically for our EDMC plugin.

#### Request
**Allowed-Types:** `PUT`<br>
**Required-Parameters:**<br>
`id`=`<carrierID>` (example: `6695835845`)<br>
`access`=`<dockingAccess>` (available options see: [getCarrierInfo](#getcarrierinfo) -> `type`=`docking`)<br>

**Optional-Parameters:**<br>
`source`=`<sourceApplication>` (example: `EDMC`, default: `other`)<br>
`discord_id`=`<sourceDiscordID>` (example: `758553483966448477`)<br>

```bash
curl --location --request PUT 'https://api.ruehrstaat.de/api/v1/carrierPermission' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--form 'id="6695835845"' \
--form 'access="all"' \
--form 'source="Discord"'
--form 'discord_id="758553483966448477"'
```

#### Example Responses

```json
{
    "success": "Carrier permission updated"
}
```

### carrierService

Updates the service status of the carrier. Made spcifically for our EDMC plugin.

#### Request
**Allowed-Types:** `PUT`<br>
**Required-Parameters:**<br>
`id`=`<carrierID>` (example: `6695835845`)<br>
`operation`=`activate`,`resume`,`deactivate`,`pause` (represent ED Journal Entries)<br>
`service`=`<serviceName>` (as used in ED Journal Entries)<br>

**Optional-Parameters:**<br>
`source`=`<sourceApplication>` (example: `EDMC`, default: `other`)<br>
`discord_id`=`<sourceDiscordID>` (example: `758553483966448477`)<br>

```bash
curl --location --request PUT 'https://api.ruehrstaat.de/api/v1/carrierService' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--form 'id="6695835845"' \
--form 'operation="activate"' \
--form 'source="Discord"' \
--form 'discord_id="758553483966448477"' \
--form 'service="VoucherRedemption"'
```

#### Example Responses

```json
{
    "success": "Service activated"
}
```

### carrier

Returns specified carrier options registered in the database, can be used to update the carrier, create a new carrier or delete a carrier.

#### Request
**Allowed-Types:** `GET`,`PUT`,`POST`,`DELETE`<br>
#### GET Request + Response
**Required-Parameters:**<br>
`id`=`<carrierID>` (example: `6695835845`)<br>
**OR**<br>
`callsign`= `<carrierCallsign>` (example: `ABC-DEF`)<br>

**REQUEST**
```bash
curl --location 'https://api.ruehrstaat.de/api/v1/carrier?id=6695835845' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR'
```
**RESPONSE**
```json
{
    "carrier": {
        "id": "8889545955",
        "name": "RST Documentation",
        "callsign": "ABC-DEF",
        "currentLocation": "Sowiio ABC 1",
        "previousLocation": "Sowiio ABC 1",
        "dockingAccess": "all",
        "services": [
            {
                "name": "Refuel",
                "label": "Refuel",
                "description": "You can refuel your ship at this carrier.",
                "odyssey": false
            },
            {
                "name": "Repair",
                "label": "Repair",
                "description": "You can repair your ship at this carrier.",
                "odyssey": false
            },
        ],
        "owner": "Manfred",
        "ownerDiscordID": "988346369489986598",
        "imageURL": "https://rst.mtnmedia.dev/8889545955.png",
        "category": "flagship"
    }
}
```

#### PUT Request + Response
Used to update carrier-data in the database.<br>
**Required-Parameters:**<br>
`id`=`<carrierID>` (example: `6695835845`)<br>

**Optional-Parameters:**<br>
`source`=`<sourceApplication>` (example: `EDMC`, default: `other`)<br>
`discord_id`=`<sourceDiscordID>` (example: `758553483966448477`)<br>
*Carrier-Data-Parameters:*<br>
`name`=`<carrierName>` (example: `RST Documentation`)<br>
`callsign`=`<carrierCallsign>` (example: `ABC-DEF`)<br>
`currentLocation`=`<carrierCurrentLocation>` (example: `Sowiio ABC 1`)<br>
`previousLocation`=`<carrierPreviousLocation>` (example: `Sowiio ABC 1`)<br>
`dockingAccess`=`<carrierDockingAccess>` (available options see: [getCarrierInfo](#getcarrierinfo) -> `type`=`docking`)<br>
`owner`=`<carrierOwner>` (example: `Manfred`)<br>
`ownerDiscordID`=`<carrierOwnerDiscordID>` (example: `988346369489986598`)<br>
`imageURL`=`<carrierImageURL>` (example: `https://rst.mtnmedia.dev/8889545955.png`)<br>
`category`=`<carrierCategory>` (available options see: [getCarrierInfo](#getcarrierinfo) -> `type`=`category`<br>

**REQUEST**
```bash
curl --location --request PUT 'https://api.ruehrstaat.de/api/v1/carrier' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--header 'Content-Type: application/json' \
--data '{"id": 8889545955, "ownerDiscordID": 988346369489986598}'
```

**RESPONSE** returns json of full carrier data AFTER update
```json
{
    "carrier": {
        "id": "8889545955",
        "name": "RST Documentation",
        "callsign": "ABC-DEF",
        "currentLocation": "Sowiio ABC 1",
        "previousLocation": "Sowiio ABC 1",
        "dockingAccess": "all",
        "services": [
            {
                "name": "Refuel",
                "label": "Refuel",
                "description": "You can refuel your ship at this carrier.",
                "odyssey": false
            },
            {
                "name": "Repair",
                "label": "Repair",
                "description": "You can repair your ship at this carrier.",
                "odyssey": false
            },
        ],
        "owner": "Manfred",
        "ownerDiscordID": "988346369489986598",
        "imageURL": "https://rst.mtnmedia.dev/8889545955.png",
        "category": "flagship"
    }
}
```

#### POST Request + Response
Used to create a new carrier in the database.<br>
**Required-Parameters:**<br>
`id`=`<carrierID>` (example: `6695835845`)<br>
`name`=`<carrierName>` (example: `RST Documentation`)<br>
`callsign`=`<carrierCallsign>` (example: `ABC-DEF`)<br>
`currentLocation`=`<carrierCurrentLocation>` (example: `Sowiio ABC 1`)<br>
`dockingAccess`=`<carrierDockingAccess>` (available options see: [getCarrierInfo](#getcarrierinfo) -> `type`=`docking`)<br>
`owner`=`<carrierOwner>` (example: `Manfred`)<br>
`category`=`<carrierCategory>` (available options see: [getCarrierInfo](#getcarrierinfo) -> `type`=`category`<br>

**Optional-Parameters:**<br>
`previousLocation`=`<carrierPreviousLocation>` (example: `Sowiio ABC 1`)<br>
`ownerDiscordID`=`<carrierOwnerDiscordID>` (example: `988346369489986598`)<br>
`imageURL`=`<carrierImageURL>` (example: `https://rst.mtnmedia.dev/8889545955.png`)<br>

**REQUEST**
```bash
curl --location --request POST 'https://api.ruehrstaat.de/api/v1/carrier' \
--header 'Authorization: Bearer EDh0tFuo.jlIutR2clcz6b9Eyuyx0U7jr7Wlf6QqB' \
--header 'Content-Type: application/json' \
--data '{"id": 3708558080, "name": "RST Documentation", "callsign": "ABC-DEF", "currentLocation": "Sowiio ABC 1", "dockingAccess": "all", "owner": "Manfred", "category": "flagship"}'
```

**RESPONSE** returns json of full carrier data AFTER creation
```json
{
    "carrier": {
        "id": "3708558080",
        "name": "RST Documentation",
        "callsign": "ABC-DEF",
        "currentLocation": "Sowiio ABC 1",
        "previousLocation": null,
        "dockingAccess": "all",
        "services": [
            {
                "name": "Refuel",
                "label": "Refuel",
                "description": "You can refuel your ship at this carrier.",
                "odyssey": false
            },
            {
                "name": "Repair",
                "label": "Repair",
                "description": "You can repair your ship at this carrier.",
                "odyssey": false
            },
        ],
        "owner": "Manfred",
        "ownerDiscordID": null,
        "imageURL": null,
        "category": "flagship"
    }
}
```

#### DELETE Request + Response
Used to delete a carrier from the database.<br>
**Required-Parameters:**<br>
`id`=`<carrierID>` (example: `6695835845`)<br>

**Optional-Parameters:**<br>
`source`=`<sourceApplication>` (example: `EDMC`, default: `other`)<br>

**REQUEST**
```bash
curl --location --request DELETE 'https://api.ruehrstaat.de/api/v1/carrier' \
--header 'Authorization: Bearer EDh0tFuo.jlIutR2clcz6b9Eyuyx0U7jr7Wlf6QqB' \
```

**RESPONSE** Status 204
```json
{
    "message": "carrier successfully deleted"
}
```




