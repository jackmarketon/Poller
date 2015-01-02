# Poller API

## Synopsis

Node.js API for the Poller

## Motivation

K.I.S.S. RESTful API backend for Poller

## Installation

#### Dev
MongoDB must be running on `localhost` on default port (27017) without a user or password

From the API directory:
`npm install`
Then:
`bower install`

To see in browser go to: http://localhost:9343

#### Production
@@TODO: Write/Impliment this

## API Reference

#### Clients
| Type | URL | Description |
| ---- | :-: | ----------- |
| GET  | /api/clients | Returns list of clients |
| POST | /api/clients | Returns 201, with dynamically assigned primary ID |
| GET | /api/clients/:id | Returns clients by ID |
| UPDATE | /api/clients/:id | Updates clients by ID |
| DELETE | /api/clients/:id | Deletes clients by ID |

### Notes
See the exampleModels for a base JSONObject definition

## Tests

For a watched server:
`npm start`

For tests:
`npm test`
