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
cd Netflix-Clone-React
code .

```
Proje dokümanları indirildi.

VS Code terminal ekranında çalıştırabileceğiniz komutlar:
```
npm install webpack webpack-cli --save-dev
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
* Dotenv
* style-loader
* css-loader
* sass-loader
* babel-loader
<hr>

## Proje Klasör Yapısı :
![folder](https://user-images.githubusercontent.com/77414773/188655936-c79b9add-5a32-4cf0-9792-85f30c89b8eb.png)

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

### Kayıt Olma ve Giriş yapma
https://user-images.githubusercontent.com/77414773/188658393-ca5bbdb5-0f75-4ebd-9dd3-5ead45c6bcab.mp4

https://user-images.githubusercontent.com/77414773/188658462-283f4a55-7c2c-495c-ba32-dcbb98c5927a.mp4

### Private Route
https://user-images.githubusercontent.com/77414773/188659613-1214b023-28d7-409d-b774-a7f02ea4ccad.mp4






