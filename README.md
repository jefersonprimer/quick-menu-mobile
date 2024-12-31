# Expo App Icon & Splash

<div style="display: flex; justify-content: space-between; width: 100%; margin-bottom: 20px;">
  <div style="flex: 1; text-align: center;">
    <strong>Icon</strong><br>
    App icons should be **1024px by 1024px**, like the frame below.  
    Try to fit the edges of your design within the outer concentric circles if using a logo as your app icon.
    <br><br>
    <img src="./assets/icon.png" alt="Icon Preview" style="width: 150px; height: 150px;">
  </div>

  <div style="flex: 1; text-align: center;">
    <strong>Adaptive Icon</strong><br>
    Adaptive icons are used with Android devices.  
    Try to fit your design within the outer concentric circles if using a logo as your app icon.  
    To use this icon, you’ll need to set the `android.adaptiveIcon.foregroundImage` property in `app.json`.
    <br><br>
    <img src="./assets/adaptive-icon.png" alt="Adaptive Icon Preview" style="width: 150px; height: 150px;">
  </div>

  <div style="flex: 1; text-align: center;">
    <strong>Splash</strong><br>
    Splash screens are part of the loading sequence.  
    Make your splash screen look exactly like your app’s main page.  
    Avoid putting text, branding, or logos on this screen.
    <br><br>
    <img src="./assets/splash.png" alt="Splash Screen Preview" style="width: 300px; height: 600px;">
  </div>
</div>

## Previews

<div style="display: flex; justify-content: space-between; margin-right: 6px; margin-top: 20px;">
  <img src="./assets/iphone-home-preview.png" alt="iPhone Home Preview" style="width: 270px; height: 550px;">
  <img src="./assets/iphone-splash-preview-dark.png" alt="iPhone Splash Preview (Dark)" style="width: 270px; height: 550px;">
  <img src="./assets/iphone-splash-preview-dark.png" alt="iPhone Splash Preview (Dark)" style="width: 270px; height: 550px;">
</div>


# Expo App Setup

## Clonando o Repositório

Para começar a trabalhar neste projeto, siga as etapas abaixo:

1. **Clone o repositório:**

   Abra o terminal ou prompt de comando e execute o seguinte comando para clonar o repositório:

   ```bash
   git clone https://github.com/jefersonprimer/quick-menu-mobile.git

2. **Acesse o diretório do projeto**
    ```bash
   cd quick-menu-mobile

3. **Instalando as Dependências do Projeto**
      ```bash
   npm install

4. **Abra o projeto no VS Code**
      ```bash
   code .


# Aviso Importante
<br/>
<strong>Antes de continuar, verifique se você tem o Node.js e a CLI do Expo instalados</strong>

1. **Instalar o Node.js**  
Se você ainda não tem o Node.js instalado, acesse o site oficial do <a href="https://nodejs.org/pt" target="_blank" style="color: blue;">Node.js</a> e baixe a versão mais recente.


2. **Instalar a CLI do Expo**
Para instalar a CLI do Expo, execute o seguinte comando globalmente:
  ```bash
   npm install -g expo-cli
