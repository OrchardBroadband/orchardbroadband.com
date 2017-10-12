# orchardbroadband.com

Public site for Orchard Broadband - [https://www.orchardbroadband.com](https://www.orchardbroadband.com)

[![Build Status](https://travis-ci.org/OrchardBroadband/orchardbroadband.com.svg?branch=master)](https://travis-ci.org/OrchardBroadband/orchardbroadband.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/OrchardBroadband/orchardbroadband.com.svg)](https://greenkeeper.io/)

## Development

1. Clone this repo
2. `npm install`
3. Get images
   - `logo.svg` in `images/`
   - favicons in `platform/*` from `favicons.zip`
4. `npm run dev` to generate and serve site

## Deploy

1. Update the `deploy:scp` script in `package.json` to include a valid username and password
   - take special care not to commit this change
2. Run `npm run deploy`
