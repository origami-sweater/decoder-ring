const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar error-handling", () => {
    const input = [
        "Happy Holidays",
        "zacx",
        "Where's the kiwi?",
        "xifsf't uif ljxj?",
        "Zebra Magazine"
    ];
    it("should ignore caps, preserve spaces and non-alphabetic characters when encoding", () => {
        const actual = caesar(input[2], 1, encode = true);
        const expected = "xifsf't uif ljxj?";
        expect(actual).to.equal(expected);
    })
    it("should preserve spaces and non-alphabetic characters when decoding", () => {
        const actual = caesar(input[3], 1, encode = false);
        const expected = "where's the kiwi?";
        expect(actual).to.equal(expected);
    })
    it("should handle letters at end of the alphabet correctly", () => {
        const actual = caesar(input[4], 3, encode = true);
        expect(actual).to.equal("cheud pdjdclqh");
    })
    it("should handle letters at start of the alphabet correctly", () => {
        const actual = caesar(input[1], -4, encode = true);
        expect(actual).to.equal("vwyt");
    })
    describe("shift value errors", () => {
        it("should always have a shift value", () => {
            const actual = caesar(input[0], "" , encode = true);
            expect(actual).to.be.false;
        });
        it("should not have a shift value > 26", () => {
            const actual = caesar(input[0], 26, encode = true);
            expect(actual).to.be.false;
        });
        it("should not have a shift value < -26", () => {
            const actual = caesar(input[0], -26, encode = true);
            expect(actual).to.be.false;
        });
        it("should not have a shift value of 0", () => {
            const actual = caesar(input[0], 0, encode = true);
            expect(actual).to.be.false;
        });
    });
})