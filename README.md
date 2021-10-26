# Eleventy

## Zadání

- Spusť si tento projekt postavený na [Eleventy](https://www.11ty.dev/).

  ### Instalace závislostí

  `npm install`

  ### Produkční sestavení

  `npm run build`

  ### Vývojové sestavení

  `npm run dev`

- Koukni do prohlížeče, že se ti stránka při vývojovém sestavení načte.

  - Zkontroluj, že se proklikneš na všechny tři podstránky (úvodní, ceník, o nás).

  - Na úvodní stránce by měl být obrázek.

  - Všechny stránky by měly být drobně nastylované.

- Přidej další podstránku `Kontakt`.

  - Do zdrojové složky `src` přidej soubor `kontakt.njk`. Můžeš se inspirovat podle `o-nas.njk`. Pro obsah použij následující HTML:

    ```html
    <h2>Kontakt</h2>

    <h3>Otevírací doba</h3>

    <p>Každý den od 9:00 do 18:00.</p>

    <h3>Adresa</h3>

    <address>
    	Václavské náměstí 837/11<br />
    	Nové Město, Praha 1,<br />
    	110 00<br />
    	Česká republika
    </address>
    ```

  - Odkaz na kontakt přidej do společné navigace v hlavičce.

  - Výsledek by měl vypadat takto:

    ![kontaktní stránka](zadani/kontakt.png)

## Bonus

- Proveď produční sestavení a výslednou stránku ve složce `dist` vystav na [Netlify Drop](https://app.netlify.com/drop).
