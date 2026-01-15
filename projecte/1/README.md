# Projecte: Llibreta de Contactes Online

## DESCRIPCIÓ DEL PROJECTE

Aquest projecte estarà format per diverses pàgines:

1. **Pàgina principal (index.html)**  
   Mostra la llista de contactes amb les dades inicials del fitxer .json. Crear una taula amb les dades inicials (LocalStorage). S’anirà actualitzant amb les modificacions de la llista de contactes.  
   Mostra tots els contactes amb enllaços a la pàgina de detall.  
   També permet afegir un nou contacte, modificar-lo i esborrar-lo.

2. **Pàgina de detall (detall.html):**  
   Agafa l’id del contacte de l’URL i mostra tota la informació d’un contacte concret. Per exemple detall.html?id=1.  
   També permet modificar el contacte.

3. **Pàgina d’afegir (afegir.html):**  
   Formulari que permet l’addició d’un nou contacte. Per a un projecte real caldria enviar-ho al servidor; aquí només mostrem com seria amb JSON local.

4. **JSON (contacts.json):**  
   Funciona com a “servidor” que envia les dades inicials dels contactes.  
   El format del fitxer és:  
   ```json
   [
     {"id": 1, "nom": "Anna", "email": "anna@example.com", "telefon": "123456789"},
     {"id": 2, "nom": "Pere", "email": "pere@example.com", "telefon": "987654321"}
   ]
   ```

5. **JavaScript (script.js):**  
   Funcions Javascript que gestionen la càrrega de dades i la navegació entre pàgines.

6. **Estils (styles.css):**  
   Estils per a la correcta visualització de les pàgines web.

## ENTREGA I FORMAT DEL LLIURAMENT

**19/01/2026** Fitxer: Pj1_Projecte_NomCognom.zip

**Contingut obligatori:**

- Enllaç al hosting on estigui allotjada la web.
- Fitxers JS, HTML, CSS, imatges i altres recursos necessaris per al funcionament.
- Vídeo explicatiu.
