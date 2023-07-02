/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Geohash Test Harness                                (c) Chris Veness 2014-2019 / MIT Licence  */
/*  Changed to vitest by github.com/gabrielmedici                                                 */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

import Geohash from "./index";
import { describe, expect, it } from "vitest";

describe("latlon-geohash", function () {
  it("encodes Jutland", function () {
    expect(Geohash.encode(57.648, 10.41, 6)).toBe("u4pruy");
  });
  it("decodes Jutland", function () {
    expect(Geohash.decode("u4pruy")).toStrictEqual({ lat: 57.648, lon: 10.41 });
  });
  it("encodes Curitiba", function () {
    expect(Geohash.encode(-25.38262, -49.26561, 8)).toBe("6gkzwgjz");
  });
  it("decodes Curitiba", function () {
    expect(Geohash.decode("6gkzwgjz")).toStrictEqual({
      lat: -25.38262,
      lon: -49.26561,
    });
  });
  it("fetches neighbours", function () {
    expect(Geohash.neighbours("ezzz")).toStrictEqual({
      n: "gbpb",
      ne: "u000",
      e: "spbp",
      se: "spbn",
      s: "ezzy",
      sw: "ezzw",
      w: "ezzx",
      nw: "gbp8",
    });
  });
  it("matches geohash.org", function () {
    expect(Geohash.encode(37.25, 123.75, 12)).toBe("wy85bj0hbp21");
  });
});
