# Netflix-Clone-React-Project

### Proje Gereksinimleri:

* Node.js
* npm
* VS Code veya alternatifi

## Proje Kurulumu:
```
node --version 
npm --v
```
Komutları ile çalıştığından emin olabilirsiniz.

Projeyi indirmek için aşağıdakileri terminal ekranında yazabilirsiniz.
```
mkdir netflix-clone
cd netflix-clone
git clone https://github.com/MelihAfsar/Netflix-Clone-React.git
code .
```
Proje dokümanları indirildi.

VS Code terminal ekranında çalıştırabileceğiniz komutlar:
```
npm install webpack webpack-cli --save-dev
npm run build
```

Proje ayağa kaldırılırken port: 3000 kullanmaktadır. webpack.config.js dosyasından port adresini düzenleyebilirsiniz. Düzenledikten sonra aşağıdaki komutu tekrar çalıştırınız.
```
npm run build
```
Son olarak projeyi çalıştırmak için:
```
npm run dev
```
Proje ilk defa çalıştırıldığından api a gönderilen sorgu zaman aşımına uğrayabilir sayfayı refresh edebilirsiniz.
<hr>

## Proje Yapısı :

Projenin çalışmasındaki alt yapı webpack ile oluşturulmuştur.

### Projede Kullanılan Webpack, Plugin, Loader, ... :  
* WebpackDevServer
* HtmlWebpackPlugin
* CleanWebpackPlugin
* EnvironmentPlugin
* UglifyJsPlugin
* style-loader
* css-loader
* sass-loader
* babel-loader
<hr>

## Proje Klasör Yapısı :
![projeKlasor](https://user-images.githubusercontent.com/77414773/187215979-40911f09-07b1-42ad-8303-c095e9c9e86c.png)

<hr>

## Proje Video :

### Anasayfa
https://user-images.githubusercontent.com/77414773/187233301-bfd02e66-525b-41b2-90cc-35d256d6eecc.mp4

### Filmler ve Diziler
https://user-images.githubusercontent.com/77414773/187233985-5402aa70-b020-4370-8cee-d9cf94854950.mp4

### Popüler Oyuncular
https://user-images.githubusercontent.com/77414773/187234395-7f28f51b-52fb-469a-aa1a-46afe7d578be.mp4

### Listem
https://user-images.githubusercontent.com/77414773/187234555-b3ce0f44-1e8f-4420-a052-2abf342b33b0.mp4

### Arama
https://user-images.githubusercontent.com/77414773/187234612-b4b19180-9f81-4dec-abf1-77c31da65e5f.mp4



