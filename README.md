# City to Playlist API Service

Converts a city or coordinates into playlists using Spotify API

**Requirements**: NodeJS 16.11+ and MongoDB 4.4

### Development (No Database Seeding)

1. Rename development.sample.env to development.env
2. Update env like mongo url, and other apis
3. run `npm i`
4. run `npm run dev`

### Docker with Database Seeding

1. Update env like mongo url, and other apis in docker-compose file
2. Run `docker-compose up`

### API

Demo API: `https://weather-service-yx6ym.ondigitalocean.app`

| Definition                    | Endpoint | Method | Params              | Example                                                                                                       |
|-------------------------------|----------|--------|---------------------|---------------------------------------------------------------------------------------------------------------|
| Seeds tracks from Spotify API | /spotify | GET    | N/A                 | 	                                                                                                             |
| Get City or Lat/Lng Playlist  | /weather | POST   | city or coordinates |` {      "city" : "alaska" }` or `{      "coordinates" :{          "lat" : 41.4925 ,          "lon" : 99.9018 } }` |
| 	                             | 	        | 	      | 	                   | 	                                                                                                             |

### Known Limitations

1. You need to manually get Spotify token which expires every hour
2. Spotify playlist is hardcoded
3. If you are building from source not via docker-compose - you need to update spotify token in the env file and run the
   seed endpoint `/spotify` to get all the playlist tracks

### Linting

`npm run lint`

### Tests

`npm run test`

# License

MIT License

Copyright (c) 2021 Keith Levi Lumanog

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

