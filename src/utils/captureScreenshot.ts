/*import { Browser, Page } from 'playwright';  // Asegúrate de tener estos tipos disponibles

export async function captureScreenshot(page: Page, fileName: string, savePath: string = './screenshots') {
  try {
    // Asegúrate de que el directorio exista, o créalo
    const fs = require('fs');
    const path = require('path');
    const dir = path.join(__dirname, savePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Tomar la captura de pantalla
    const filePath = path.join(dir, `${fileName}.png`);
    await page.screenshot({ path: filePath });

    console.log(`Captura de pantalla guardada en: ${filePath}`);
  } catch (error) {
    console.error('Error al capturar la pantalla:', error);
  }
}*/

import { Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';


export async function captureScreenshot(page: Page, savePath: string = './capturas') {
  try {
    const dir = path.join(__dirname, savePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[^\w\s]/gi, '-');
    const fileName = `screenshot_${timestamp}.png`;  
    const filePath = path.join(dir, fileName);
    await page.screenshot({ path: filePath });
    console.log(`Captura de pantalla guardada en: ${filePath}`);
  } catch (error) {
    console.error('Error al capturar la pantalla:', error);
  }
}

