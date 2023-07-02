# geohash

Functions to convert a [geohash](http://en.wikipedia.org/wiki/Geohash) to/from a latitude/longitude
point, to determine bounds of a geohash cell, to determine adjacent cells and to find neighbours of a geohash.

## API

- `Geohash.encode(lat: number, lon: number, precision?: number): string`: encode latitude/longitude point to geohash of given precision
  (number of characters in resulting geohash); if precision is not specified, it is inferred from
  precision of latitude/longitude values.
- `Geohash.decode(geohash: string)`: return { lat, lon } of centre of given geohash, to appropriate precision.
- `Geohash.bounds(geohash: string): { sw: {lat: number; lon: number;}; ne: {lat: number; lon: number;};}`: returns the bounds of a given geohash.
- `Geohash.adjacent(geohash: string, direction: string): string`: return adjacent cell to given geohash in specified direction (N/S/E/W).
- `Geohash.neighbours(geohash: string): { n: string; ne: string; e: string; se: string; s: string; sw: string; w: string; nw: string; }`: return all 8 adjacent cells (n/ne/e/se/s/sw/w/nw) of given geohash.

Note to obtain neighbours as an array, you can use

    const neighboursObj = Geohash.neighbours(geohash);
    const neighboursArr = Object.keys(neighboursObj).map(n => neighboursObj[n]);

The parent of a geocode is simply `geocode.slice(0, -1)`.

If you want the geohash converted from Base32 to Base4, you can e.g.:

    parseInt(Geohash.encode(52.20, 0.12, 6), 32).toString(4);
