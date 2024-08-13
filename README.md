# Challenge---Oracle-ONE

# Text Encryptor

## Overview

This project is part of the Oracle One Next Education Bootcamp challenge. The goal is to create a simple web-based text encryptor and decryptor. The encryptor transforms the input text by replacing certain vowels with specific strings, and the decryptor reverses the process.

## Features

- **Text Encryption:** Converts vowels into specific encoded strings.
- **Text Decryption:** Decodes the encrypted text back to its original form.
- **Copy Functionality:** Allows users to easily copy the encrypted or decrypted text to the clipboard.
- **Responsive Design:** The webpage is responsive and adapts to different screen sizes, ensuring a smooth user experience across devices.

## How It Works

### Encryption Rules

The text encryptor works by substituting the following vowels with encoded strings:
- `a` → `ai`
- `e` → `enter`
- `i` → `imes`
- `o` → `ober`
- `u` → `ufat`

### Decryption

The decryptor reverses the above substitutions to return the original text.

## Project Structure

- **index.html**: Contains the structure of the webpage.
- **style.css**: Defines the styles used across the webpage, ensuring it is visually appealing and responsive.
- **app.js**: Handles the core logic of encryption, decryption, and the copy functionality.

## How to Use

1. **Encrypt Text:** Enter the text in the textarea provided and click on "Encriptar". The encrypted text will appear on the right side.
2. **Decrypt Text:** Similarly, enter the encrypted text and click on "Desencriptar" to view the original text.
3. **Copy Text:** After encrypting or decrypting, click the "Copiar" button to copy the result to your clipboard.

## Responsiveness

The webpage adapts to different screen sizes:
- On **mobile devices** (max-width: 768px), the design adjusts to a single-column layout.
- On **tablets** (768px - 1024px), elements stack vertically, and buttons are displayed side by side.

## Technologies Used

- **HTML5**: For the structure of the webpage.
- **CSS3**: For styling and layout, including responsiveness.
- **JavaScript**: For handling the encryption, decryption, and copy functionalities.

## License

This project is open-source and free to use under the [MIT License](LICENSE).
