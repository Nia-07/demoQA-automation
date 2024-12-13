/*import { test, expect } from '@playwright/test';
import { User } from '../src/actors/User';
import { FillFormTask } from '../src/tasks/FillFormTask/FillFormTask';
import { UploadPictureTask } from '../src/tasks/UploadPictureTask/UploadPictureTask';
import { getPhoneNumbersFromFile } from '../src/utils/PhoneData';
import { Actor } from '@serenity-js/core';
import { VerifyPopupText } from '../src/questions/VerifyPopupText';
import { captureScreenshot } from '../src/utils/captureScreenshot';


test.describe('Form automation tests', () => {
    
    const phoneNumbers = getPhoneNumbersFromFile();
    for (const phoneNumber of phoneNumbers) {
        test(`User can fill out the form with phone number ${phoneNumber} and see the confirmation popup`, async ({ page }) => {

            try {
            const user = User.named('Tania', page);
            const formData = user.data;

            await page.goto('https://demoqa.com/automation-practice-form');
            await page.waitForTimeout(3000);
            await FillFormTask.with(page, formData, phoneNumber).perform();
            await page.waitForTimeout(3000);
            await UploadPictureTask.fromPath(page, 'C:/formdemoQa/images/imagen1.jpg').perform();
            await page.waitForTimeout(3000);  
            await page.waitForSelector('#submit', { state: 'visible' });
            await page.click('#submit');
            VerifyPopupText.contains('Thanks for submitting the form');
            await page.waitForTimeout(8000);  
            await captureScreenshot(page, 'Formulario');  // Las imágenes se guardarán en ./capturas

        }catch (error) {
            // Manejo de errores
            console.error('Error en la prueba:', error);
          }finally {
            // Cerrar la página después de la prueba
            await page.close();
          }
    }); 
  
  });*/


  import { test, expect } from '@playwright/test';
  import { User } from '../src/actors/User';
  import { FillFormTask } from '../src/tasks/FillFormTask/FillFormTask';
  import { UploadPictureTask } from '../src/tasks/UploadPictureTask/UploadPictureTask';
  import { getPhoneNumbersFromFile } from '../src/utils/PhoneData';
  import { Actor } from '@serenity-js/core';
  import { VerifyPopupText } from '../src/questions/VerifyPopupText';
  import { captureScreenshot } from '../src/utils/captureScreenshot';
  
  test.describe('Form automation tests', () => {
      
      const phoneNumbers = getPhoneNumbersFromFile();
      for (const phoneNumber of phoneNumbers) {
          test(`User can fill out the form with phone number ${phoneNumber} and see the confirmation popup`, async ({ page }) => {
  
              try {
                  const user = User.named('Tania', page);
                  const formData = user.data;
                  await page.goto('https://demoqa.com/automation-practice-form');
                  await page.waitForTimeout(3000);
                  await FillFormTask.with(page, formData, phoneNumber).perform();
                  await page.waitForTimeout(3000);
                  await UploadPictureTask.fromPath(page, 'C:/formdemoQa/images/imagen1.jpg').perform();
                  await page.waitForTimeout(3000);
                  await page.waitForSelector('#submit', { state: 'visible' });
                  await page.click('#submit');
                  VerifyPopupText.contains('Thanks for submitting the form');
                  await page.waitForTimeout(8000);
                  await captureScreenshot(page);  // Las imágenes se guardarán en ./capturas
              } catch (error) {
                  console.error('Error en la prueba:', error);
              } finally {
                  await page.close();
              }
          });
      }
  });
  


















/*import { test, expect } from '@playwright/test';
import { User } from '../src/actors/User';
import { generateRandomData } from '../src/utils/RandomData';
import { FillFormTask } from '../src/tasks/FillFormTask/FillFormTask';
import { UploadPictureTask } from '../src/tasks/UploadPictureTask/UploadPictureTask';

test('User can fill out the form and see the confirmation popup', async ({ page }) => { 
    const user = User.named('Tania', page); 
    const formData = user.data; await page.goto('https://demoqa.com/automation-practice-form'); 
    await page.waitForTimeout(3000);
    await FillFormTask.with(page, formData).perform(); 
    await page.waitForTimeout(3000);
    await UploadPictureTask.fromPath(page, 'C:/formdemoQa/images/imagen1.jpg').perform(); 
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    });
    await page.click('#currentAddress-label');
    await page.waitForTimeout(3000);
    await page.click('#submit'); 
   
    const popupText = await page.textContent('.modal-body'); 
    expect(popupText).toContain('Thanks for submitting the form');
    
})*/