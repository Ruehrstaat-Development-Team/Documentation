# Connector API

## API Endpoints

### carrierJump

Updates the current Location of the carrier and puts the previous Location into the previous Location field. Made spcifically for our EDMC plugin.
#### Request
**Allowed-Types:** `PUT`<br>
##### PUT carrierJump
**Required-Parameters:**<br>
`id`=`<carrierID>` (example: `6695835845`)<br>
`type`=`jump`,`cancel`<br>

**Optional-Parameters:**<br>
`source`=`<sourceApplication>` (example: `EDMC`, default: `other`)<br>
###### Type jump
**Additional-Required-Parameters:**<br>
`body`=`<bodyName>` (example: `Sowiio ABC 1`)<br>

**Request**
```bash
curl --location --request PUT 'https://api.ruehrstaat.de/api/v1/carrierJump' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--form 'id="6695835845"' \
--form 'type="jump"' \
--form 'source="EDMC"' \
--form 'body="Sowiio ABC 1"'
```
**Response**
```json
{
    "success": "Carrier jump noted"
}
```
###### Type cancel
**Request**
```bash
curl --location --request PUT 'https://api.ruehrstaat.de/api/v1/carrierJump' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--form 'id="6695835845"' \
--form 'type="cancel"' \
--form 'source="EDMC"'
```
**Response**
```json
{
    "success": "Carrier jump cancelled"
}
```
---
### carrierPermission

Updates the docking permission of the carrier. Made spcifically for our EDMC plugin.

#### Requests
**Allowed-Types:** `PUT`<br>

##### PUT carrierPermission

**Required-Parameters:**<br>
`id`=`<carrierID>` (example: `6695835845`)<br>
`access`=`<dockingAccess>` (available options see: [getCarrierInfo](#getcarrierinfo) -> `type`=`docking`)<br>

**Optional-Parameters:**<br>
`source`=`<sourceApplication>` (example: `EDMC`, default: `other`)<br>
`discord_id`=`<sourceDiscordID>` (example: `758553483966448477`)<br>

**REQEUST**

```bash
curl --location --request PUT 'https://api.ruehrstaat.de/api/v1/carrierPermission' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--form 'id="6695835845"' \
--form 'access="all"' \
--form 'source="Discord"'
--form 'discord_id="758553483966448477"'
```

**RESPONSE**

```json
{
    "success": "Carrier permission updated"
}
```
---
### carrierService

Updates the service status of the carrier. Made spcifically for our EDMC plugin.

#### Requests
**Allowed-Types:** `PUT`<br>

##### PUT carrierService

**Required-Parameters:**<br>
`id`=`<carrierID>` (example: `6695835845`)<br>
`operation`=`activate`,`resume`,`deactivate`,`pause` (represent ED Journal Entries)<br>
`service`=`<serviceName>` (as used in ED Journal Entries)<br>

**Optional-Parameters:**<br>
`source`=`<sourceApplication>` (example: `EDMC`, default: `other`)<br>
`discord_id`=`<sourceDiscordID>` (example: `758553483966448477`)<br>

**REQUEST**
```bash
curl --location --request PUT 'https://api.ruehrstaat.de/api/v1/carrierService' \
--header 'Authorization: Bearer Rnfk4apD6qRpHQPer4sg5sNdeo4DRbFmrhPcCd6kR' \
--form 'id="6695835845"' \
--form 'operation="activate"' \
--form 'source="Discord"' \
--form 'discord_id="758553483966448477"' \
--form 'service="VoucherRedemption"'
```

**RESPONSE**

```json
{
    "success": "Service activated"
}
```