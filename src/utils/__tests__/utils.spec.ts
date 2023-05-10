import { getLoggedUserId } from "../getLoggedUserId";
import { formatTimestampToDate } from "../utilsFunctions";

describe("formatTimestampToDate", () => {
  it("should return logged user id", () => {
    const expected = "Jan 19";
    expect(formatTimestampToDate(1625637849)).toEqual(expected);
  });
});
