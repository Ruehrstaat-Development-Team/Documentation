# API Documentation
# GENERAL USE API

## Introduction

The Ruehrstaat API offers an API for the squadron to access ingame data for carriers and commanders and to provide a way to use this data in our other applications like the website or the discord bot. The API is written in Python using Django and Django Rest Framework.

The current API Endpoint is: `https://api.ruehrstaat.de/api/v1/`

## API Endpoints

### getAllCarriers

Returns all registered carriers in the database that your token has read-access to.

#### Requests
**Allowed-Types**: `GET`
##### GET getAllCarriers
**Request**
```bash
curl --location 'https://api.ruehrstaat.de/api/v1/getAllCarriers' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--data ''
```
**Response**
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
---
### getAllServices

Returns all carrier services registered in the database.

#### Requests
**Allowed-Types**: `GET`
##### GET getAllServices
**Request**
```bash
curl --location 'https://api.ruehrstaat.de/api/v1/getAllServices' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--data ''
```
**Response**
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
---
### getCarrierInfo

Returns specified carrier options registered in the database.

#### Requests
**Allowed-Types**: `GET`<br>

##### GET getCarrierInfo

**Parameters**:<br>
`type`=`docking`,`category`

**REQUEST**

```bash
curl --location 'https://api.ruehrstaat.de/api/v1/getCarrierInfo?type=docking' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR'
```

**RESPONSES**

###### Type Docking
`type`=`docking`
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
###### Type Category
`type`=`category`
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
---
### carrier

Returns specified carrier options registered in the database, can be used to update the carrier, create a new carrier or delete a carrier.

#### Requests
**Allowed-Types:** `GET`,`PUT`,`POST`,`DELETE`<br>
##### GET carrier
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

##### PUT carrier
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

##### POST carrier
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

##### DELETE carrier
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




