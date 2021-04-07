import { checkUrl } from '../client/js/urlChecker'

describe("Validate a url", () => {
    const url = "https://www.bbc.com/news/business-52591262"
    test("A valid URL", async () => {
        const response = checkUrl(url);
        expect(response).toBe(true);
    });
}); 

describe("Validate a url", () => {
    const url = "bbc.com/news /business-52591262"
    test("Not a valid URL", async () => {
        const response = checkUrl(url);
        expect(response).toBe(false);
    });
});
 