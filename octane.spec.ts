import { test, expect, type Page } from '@playwright/test';

// This sample simulates a larger test suite
const TEST_ITERATIONS = parseInt(process.env.TEST_ITERATIONS || 20);
for (var i = 0; i < TEST_ITERATIONS; i++) {

    test(`Octane benchmark ${i + 1}`, async ({ page }) => {
        await page.goto("https://chromium.github.io/octane/");
        await page.waitForSelector("text=Start Octane 2.0");
        const startTestButton = page.locator("a#run-octane");
        await startTestButton.click();
        await page.waitForSelector("text=Octane Score:");
    });

}
