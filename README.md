## Proyecto de Automatización con Playwright (TypeScript) y Allure

Este proyecto utiliza Playwright con TypeScript y el patrón de diseño Screenplay para la automatización de pruebas web. Las pruebas están estructuradas de manera modular, lo que facilita la reutilización del código y la expansión de pruebas en el futuro. Además, se ha implementado la generación de datos aleatorios y validaciones robustas para garantizar la fiabilidad de las pruebas.

## Requisitos
Antes de ejecutar las pruebas, asegúrate de tener instalados los siguientes requisitos:

Node.js (preferentemente la versión LTS)
npm o yarn
Git

## Instalación
1.Clona el repositorio en tu máquina local

2.Instala las dependencias necesarias
npm install
npm install @faker-js/faker@^9.3.0 @serenity-js/assertions@^3.30.0 @serenity-js/core@^3.31.0 @serenity-js/cucumber@^3.30.0 @serenity-js/playwright@^3.30.0 @serenity-js/serenity-bdd@^3.30.0 @serenity-js/web@^3.31.0 playwright@^1.49.1 ts-node@^10.9.2 typescript@^5.7.2


3.Para generar el reporte con Allure, necesitas instalar la herramienta de Allure y el adaptador de Playwright:
npm install -D allure-playwright
npm install -g allure-commandline --save-dev

## Estructura del Proyecto
La estructura del proyecto está organizada de acuerdo con el patrón Screenplay, permitiendo que el código sea modular y fácilmente extensible.

src/
actors/: Contiene los actores que interactúan con la aplicación bajo prueba.
tasks/: Define las tareas o acciones que los actores pueden realizar.
interactions/: Define interacciones que pueden ser reutilizadas en las tareas.
models/: Contiene modelo de datos.
utils/: Contiene clases de datos Random, captura de imagenes y metodo de extracion de datos de un json.

tests/: Contiene los archivos de prueba donde se orquestan los actores, tareas e interacciones.

reports/: Directorio donde se generarán los reportes de las pruebas.

package.json: Archivo de configuración del proyecto, que incluye scripts y dependencias.
  "dependencies": 
    "@faker-js/faker": "^9.3.0",
    "@serenity-js/assertions": "^3.30.0",
    "@serenity-js/core": "^3.31.0",
    "@serenity-js/cucumber": "^3.30.0",
    "@serenity-js/playwright": "^3.30.0",
    "@serenity-js/serenity-bdd": "^3.30.0",
    "@serenity-js/web": "^3.31.0",
    "playwright": "^1.49.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.7.2"

## Ejecución de Pruebas

1.Ejecuta las pruebas con el siguiente comando:
npx playwright test tests/fillFormTest.spec.ts

2.Las pruebas se ejecutarán y se generará un reporte con Allure al final del proceso.

3.Para ver el reporte de pruebas después de la ejecución, ejecuta:
allure serve reports/allure-results

## Generación de Datos Aleatorios
Este proyecto incluye una carpeta utils.ts con un archivo RandmData en donde se genera un conjunto de datos aleatorios para simular el llenado de un formulario. Utilizamos la librería Faker.js para generar valores aleatorios para los campos del formulario, como el nombre, apellido, correo electrónico, dirección y fecha de nacimiento. Sin embargo, el número de teléfono no se genera con Faker y se establece de manera determinada a traves de data de un json para las pruebas.

## Estructura del Modelo
El modelo FormData se encuentra en el archivo models.ts.

## Envío de los Datos
Una vez guardados los datos aleatorios en un json, se lee la data a traves de PhoneData.ts puedes enviar el objeto formData como un JSON, el cual cumple con la estructura definida por la clase FormData.

## Capturas de Pantalla

Durante las pruebas automatizadas, se generan capturas de pantalla de las páginas cuando las acciones son completadas. Estas capturas de pantalla se guardan en el directorio `./capturas` con un nombre que incluye la fecha y hora actual, lo que facilita el análisis posterior de los resultados.

### ¿Cómo se realizan las capturas?

Las capturas se realizan utilizando un método `captureScreenshot`, que se ejecuta después de cada prueba exitosa. Este método toma una captura de pantalla de la página actual y la guarda en la carpeta `./capturas` alojada en utils.

Generar el reporte Allure
Una vez que las pruebas hayan terminado y los resultados se hayan guardado, puedes generar el reporte Allure utilizando el siguiente comando:
allure generate allure-results --clean -o allure-report

Ver el reporte Allure
Para ver el reporte, puedes ejecutar el siguiente comando:
allure open allure-report

### restricciones de seguridad

Abrir PowerShell como Administrador:

Haz clic en el botón de inicio, escribe "PowerShell", haz clic derecho sobre "Windows PowerShell" y selecciona "Ejecutar como administrador".

Verificar la política de ejecución actual: En PowerShell, ejecuta el siguiente comando para ver la política de ejecución actual:
Get-ExecutionPolicy
Si la salida es algo como Restricted, significa que la ejecución de scripts está deshabilitada.

Cambiar la política de ejecución: Ejecuta el siguiente comando para permitir la ejecución de scripts:
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Confirmar el cambio: PowerShell te pedirá confirmación. Escribe Y (Yes) para confirmar el cambio.
Verificar que la política se ha cambiado: Vuelve a ejecutar:
Get-ExecutionPolicy
Ejecuta allure generate allure-results --clean -o allure-report
![image](https://github.com/user-attachments/assets/9f22771a-2133-48ed-afbf-f2bad640bb4a)
