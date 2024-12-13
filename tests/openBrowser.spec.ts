import { test, expect } from '@playwright/test';

test('Open browser and navigate to the automation practice form', async ({ page }) => {
  // Navegar a la página del formulario de práctica
  await page.goto('https://demoqa.com/automation-practice-form');

  // Verificar que la página se ha cargado correctamente
  await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
});
