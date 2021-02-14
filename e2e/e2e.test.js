import puppetteer from 'puppeteer';
import runServer from './e2e.server';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = await runServer();
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.close();
  });

  test('invalid card number', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('#card-input');
    await page.$eval('#card-input', (el) => { el.value = '4111111111111112'; }); // eslint-disable-line no-param-reassign
    await page.click('#card-validate');
    await page.waitForSelector('#error');
    const text = await page.evaluate(() => document.querySelector('#error').textContent.trim());
    expect(text).toBe('Ошибка, неверные данные');
  });

  test('valid card number', async () => {
    await page.$eval('#card-input', (el) => { el.value = '4111111111111111'; }); // eslint-disable-line no-param-reassign
    await page.click('#card-validate');
    await page.waitForSelector('#visa');
    const hasDisabledClass = await page.evaluate(() => document.querySelector('#visa').classList.contains('disabled'));
    expect(hasDisabledClass).toBeFalsy();
  });
});
