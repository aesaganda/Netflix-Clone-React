# Netflix-Clone-React-Project

### Proje Gereksinimleri:

* Node.js
* npm
* VS Code veya alternatifi

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
