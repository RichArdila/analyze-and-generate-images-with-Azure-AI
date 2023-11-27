/* import React from 'react';

function App() {
  const value = 'World';
  return <div>Hello {value}</div>;
}

export default App; /*

/* En el archivo App.js, limpie la función "App" de la plantilla y reemplácela por el código de javascript necesario para crear una GUI simple con los siguientes elementos:
*/



/* Un título */
/* Un cuadro de texto para introducir el nombre de usuario */
/* Un botón para desencadenar la solicitud de información de usuario */
/* Un elemento de lista para mostrar la información del usuario */

import React, { useState } from 'react';

function App() {
  // Estado para almacenar la dirección URL de la imagen o la solicitud de imagen
  const [imageUrl, setImageUrl] = useState('');

  // Función para manejar el cambio en el cuadro de texto
  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  // Función para manejar el clic en el botón de análisis de imágenes
  const handleImageAnalysis = () => {
    // Aquí puedes implementar la lógica para analizar la imagen
    console.log('Análisis de imagen para:', imageUrl);
  };

  // Función para manejar el clic en el botón de generación de imágenes
  const handleImageGeneration = () => {
    // Aquí puedes implementar la lógica para generar la imagen
    console.log('Generación de imagen solicitada para:', imageUrl);
  };

  return (
    <div>
      <h1>Computer vision</h1>
      <label>
        Dirección URL de la imagen o solicitud de imagen:
        <br />
        <input type="text" placeholder="Enter URL to analyze or textual prompt to generate an image"value={imageUrl} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleImageAnalysis}>Analyze</button>
      <button onClick={handleImageGeneration}>Generate</button>
    </div>
  );
}

export default App;
