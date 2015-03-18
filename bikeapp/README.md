# BikeAPP | Minimal

<br />

Bike API for the Pi.

You need to have Node and MongoDB installed.
I've used [HTTPie](https://github.com/jakubroztocil/httpie) to demostrate how to create access tokens, refresh tokens, etc. Its a wrapper around `curl` to issue HTTP Requests from the command line.

## Working

<img src="http://i.imgur.com/9Wtv7f4.png" />

## Step I:

Run `node generateData` to generate the sample data required. Your local mongo instance is populated with the following data:

Username: `minimal`
<br />
Password: `abc1234`
<br />
Client ID: `ios`
<br />
Client Secret: `RandomSecretWithLettersAndNumb3rs`



## Run

Install packages: `npm install`

Run: `gulp`

## Step II: Using the API


**Step I: Creating Access Tokens**

`http POST http://localhost:3000/api/oauth/token grant_type=password client_id=ios client_secret=RandomSecretWithLettersAndNumb3rs username=minimal password=abc1234
`

This returns an object with access token like so:

```
{
  "access_token": "ACCESS_TOKEN",
  "expires_in": 3600,
  "refresh_token": "REFRESH_TOKEN",
  "token_type": Bearer
  }
```

  **Step II: Using the access token for Requests**

  `http http://localhost:1337/api/mybike Authorization:'Bearer <ACCESS_TOKEN>'`

  This returns the JSON data.
