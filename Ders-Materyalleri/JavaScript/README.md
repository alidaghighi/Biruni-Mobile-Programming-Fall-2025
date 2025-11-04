# **JavaScript ve ES6 Temelleri**

---

## **1. JavaScript'e Giriş**

JavaScript, genellikle **JS** olarak kısaltılır, dünyadaki en yaygın kullanılan programlama dilidir. İlk olarak 1995 yılında Brendan Eich tarafından sadece 10 günde tasarlanmış ve web sayfalarını etkileşimli hale getirmek için hafif bir betik dili olarak düşünülmüştür. O zamanlar genellikle "oyuncak dil" olarak küçümsenirdi.

Bugün, bu algı dramatik bir şekilde değişti. JavaScript, modern web ve ötesini güçlendiren **tam özellikli, genel amaçlı bir dil** haline geldi.

### 1.1 JavaScript Nerelerde Kullanılır?

* **Web Tarayıcıları**: Her büyük tarayıcıda (Chrome, Firefox, Safari, Edge) yerleşik bir JavaScript motoru bulunur (Chrome'da V8, Firefox'ta SpiderMonkey, vb.). JS, web sitelerini etkileşimli hale getirir - form doğrulama, animasyonlar, dinamik içerik güncellemeleri ve kullanıcı arayüzü davranışlarını yönetir.  

* **Sunucular**: Node.js (2009'da piyasaya sürüldü) ile JavaScript sunucularda da çalışabilir ve Netflix, LinkedIn ve PayPal gibi büyük şirketlerin arka uçlarını güçlendirir. Bu, geliştiricilerin hem ön uç hem de arka uç geliştirme için aynı dili kullanmalarına olanak tanır ve birleşik bir geliştirme deneyimi yaratır.  

* **Masaüstü Uygulamaları**: Electron gibi çerçeveler, geliştiricilerin web teknolojilerini (HTML, CSS, JS) kullanarak çapraz platform masaüstü uygulamaları oluşturmasına olanak tanır. Visual Studio Code, Discord ve Slack gibi popüler uygulamalar Electron ile oluşturulmuştur.  

* **Mobil Uygulamalar**: **React Native** gibi çerçeveler, JavaScript kullanarak iOS ve Android uygulamaları oluşturmanıza olanak tanır. Bu, özellikle kursumuz için önemlidir - React Native, tanıdık web teknolojilerini kullanarak mobil uygulamalar yazmanıza olanak tanırken, kamera, GPS ve push bildirimleri gibi yerel cihaz özelliklerine erişim sağlar.  

**Mobil Geliştirme İçin Neden Önemli:** React Native, yerel iOS ve Android bileşenleriyle iletişim kurmak için bir JavaScript çalışma zamanı kullanır. JavaScript'i derinlemesine anlamak, daha iyi mobil uygulamalar oluşturmanıza, sorunları etkili bir şekilde ayıklamanıza ve React Native ekosisteminin tüm gücünden yararlanmanıza yardımcı olacaktır.  

---


**ECMAScript ve JavaScript:**  
- **ECMAScript** bir standart/spesifikasyondur  
- **JavaScript** bu standardın bir uygulamasıdır  
- ES6, ES2017, ES2018, vb. ECMAScript standardının sürüm numaralarıdır  


### ES6 Neden Önemlidir

Uzun yıllar boyunca JavaScript yavaş büyüdü ve geliştiriciler genellikle dilin tuhaflıklarıyla mücadele etti. 2015 yılında dil, **ECMAScript 2015 (ES6)** ile büyük bir yükseltme geçirdi. Bu güncelleme şu özellikleri tanıttı:

* Blok kapsamlı değişkenler için `let` ve `const`.  
* Daha temiz bir sözdizimi için ok fonksiyonları.  
* Daha kolay dize işleme için şablon dizeleri.  
* Destructuring, spread/rest operatörleri ve modüller.  

Bugün JavaScript öğrenirken, **modern ES6+ sözdizimine** odaklanmak önemlidir, çünkü React ve React Native bunu kullanır.

**React Native için ES6+'ın Önemi:**  
1. **Modern Sözdizimi**: React Native projeleri, ES6+ kodunu transpile etmek için Babel kullanır, böylece tüm modern özellikleri kullanabilirsiniz  
2. **Daha İyi Kod Organizasyonu**: Modüller ve sınıflar, daha büyük mobil uygulamaları yapılandırmaya yardımcı olur  
3. **Geliştirilmiş Geliştirici Deneyimi**: Destructuring ve ok fonksiyonları gibi özellikler kodu daha okunabilir ve sürdürülebilir hale getirir  
4. **Endüstri Standardı**: Tüm modern JavaScript çerçeveleri ve kütüphaneleri ES6+ bilgisi bekler  

**Eski ve Modern Karşılaştırması:**
```js
// Eski ES5 yöntemi
var self = this;
setTimeout(function() {
  console.log(self.name);
}, 1000);

// Modern ES6+ yöntemi
setTimeout(() => {
  console.log(this.name);
}, 1000);
```

Bugün JavaScript öğrenirken, **modern ES6+ sözdizimine** odaklanmak önemlidir, çünkü React ve React Native bunu kullanır.

**JavaScript'in Özel Kılan Nedir?**  
- **Yorumlayıcı Dil**: Derleme adımı gerekmez - kod doğrudan tarayıcıda veya Node.js çalışma zamanında çalışır  
- **Dinamik Tipleme**: Değişkenler, açık bir tür bildirimi olmadan farklı veri türlerini tutabilir  
- **Olay Tabanlı**: Kullanıcı etkileşimlerini (tıklamalar, form gönderimleri, dokunma olayları vb.) yönetmek için mükemmeldir  
- **Birinci Sınıf Fonksiyonlar**: Fonksiyonlar, değişkenlere atanabilir, argüman olarak geçirilebilir ve diğer fonksiyonlardan döndürülebilir  
- **Prototip Tabanlı**: Geleneksel sınıflar yerine prototipler aracılığıyla nesne yönelimli programlama (ancak ES6 sınıf sözdizimi ekledi)  

**JavaScript ve Diğer Diller Arasındaki Farklar:**

JavaScript, Java veya C++ gibi dillere göre **zayıf tipli** ve **esnek** bir dildir. Bu, öğrenmesi kolay olduğu anlamına gelir, ancak dikkatli olunmazsa çalışma zamanı hatalarına da yol açabilir. React Native ile mobil geliştirme için bu esneklik, hızlı prototipleme ve geliştirme sağlar.

---



## **2. Değişkenler ve Veri Tipleri**

### 2.1 Değişken Bildirimi

Değişkenler, bellek içinde değerleri tutan etiketli kutular gibidir. JavaScript'te değişkenleri `var`, `let` veya `const` kullanarak bildiririz.

* **`var`**: eski yöntem (fonksiyon kapsamlı). **Hoisting** nedeniyle tuhaflıkları vardır ve önerilmez.  
* **`let`**: blok kapsamlı, yeniden atanabilir.  
* **`const`**: blok kapsamlı, yeniden atanamaz (ancak `const` ile bildirilen nesneler/diziler hala değiştirilebilir).  

```js
var oldWay = "Bunu kaçının";  // fonksiyon kapsamlı
let age = 20;               // blok kapsamlı
const pi = 3.14159;         // sabit, yeniden atanamaz

age = 21; //  izin verilir
// pi = 3.14;  Hata: Sabit değişkenin değerine atama yapılamaz
```

**En iyi uygulama**: Varsayılan olarak `const` kullanın. Değişkenin değerinin değişeceğini biliyorsanız `let` kullanın. Modern JavaScript'te `var` kullanmaktan kaçının.

---

### 2.2 Temel Veri Tipleri

JavaScript'te **7 temel veri tipi** vardır:

1. **Dize (String)** → `"merhaba"`, `'dünya'`, `` `şablon` ``  
2. **Sayı (Number)** → hem tam sayılar hem de ondalıklı sayılar (`42`, `3.14`)  
3. **Mantıksal (Boolean)** → `true`, `false`  
4. **Boş (Null)** → kasıtlı olarak değer yokluğu  
5. **Tanımsız (Undefined)** → bildirildi ama değer atanmadı  
6. **Sembol (Symbol)** (ES6) → benzersiz ve değişmez, genellikle nesne anahtarları olarak kullanılır  
7. **Büyük Tam Sayı (BigInt)** (ES2020) → `Number.MAX_SAFE_INTEGER` değerinin ötesinde çok büyük tam sayılar  

```js
let text = "Merhaba";     // dize
let score = 100;        // sayı
let isActive = true;    // mantıksal
let emptyValue = null;  // boş
let notAssigned;        // tanımsız
let uniqueId = Symbol("id"); // sembol
let bigNum = 9007199254740991n; // BigInt
```

**Ayrıntılı Açıklama:**

**1. Dize:**

JavaScript'te dizeleri oluşturmanın üç yolu vardır:
tek tırnak, çift tırnak veya geri tırnak (şablon dizeleri) kullanarak.

```js
let singleQuote = 'Merhaba';
let doubleQuote = "Dünya";
let template = `Merhaba ${name}`; // Şablon dizesi (ES6)
let multiline = `1. Satır
2. Satır
3. Satır`; // Şablon dizeleri ile çok satırlı dizeler
```

**2. Sayı:**

JavaScript'te hem tam sayılar hem de ondalıklı sayılar için tek bir `Number` türü vardır. Ayrıca `Infinity` ve `NaN` (Sayı Değil) gibi özel sayısal değerlere de destek verir.

```js
let integer = 42;
let float = 3.14159;
let scientific = 2.5e6;    // 2.5 * 10^6 = 2500000
let infinity = Infinity;
let notANumber = NaN;      // "Sayı Değil"

console.log(typeof NaN);   // "number" (şaşırtıcı bir şekilde!)
```

**3. Mantıksal:**
```js
let isLoggedIn = true;
let hasPermission = false;

// Genellikle koşullu ifadelerle kullanılır
if (isLoggedIn && hasPermission) {
  // Kullanıcı özelliğe erişebilir
}
```

**4. Null ve Undefined:**

JavaScript'te `null`, "değer yok" veya "boş" anlamına gelen bir atama değeridir. `undefined` ise bir değişkenin bildirilip değer atanmadığını gösterir. Yani `null`, kasıtlı bir değer yokluğu iken, `undefined`, istemsiz bir değer yokluğudur.

```js
let explicitlyEmpty = null;      // Kasıtlı olarak "değer yok" olarak ayarlandı
let declaredButNotSet;           // undefined (otomatik olarak atanmış)

console.log(typeof null);        // "object" (bilinen JavaScript tuhaflığı)
console.log(typeof undefined);   // "undefined"
```

**5. BigInt (çok büyük sayılar için):**

JS'te `Number.MAX_SAFE_INTEGER` (2^53 - 1) değerinden daha büyük tam sayılarla çalışmanız gerektiğinde `BigInt` kullanmalısınız. 
BigInt oluşturmak için bir tam sayının sonuna `n` ekleyerek veya `BigInt()` yapıcısını çağırarak oluşturulur.
`BigInt`, işlemlerde normal `Number` türü ile karıştırılamaz.

```js
let regularNumber = 9007199254740991;      // Maksimum güvenli tam sayı
let bigNumber = 9007199254740991n;         // BigInt
let anotherBig = BigInt("123456789012345678901234567890");

// BigInt ile normal sayıları karıştırmamak gerekir
// console.log(bigNumber + 1);  Hata
console.log(bigNumber + 1n); //  İşler
```

**Türleri Kontrol Etme:**
```js
console.log(typeof "merhaba");         // "string"
console.log(typeof 42);              // "number"  
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" (quirk!)
console.log(typeof 123n);            // "bigint"
console.log(typeof {});              // "object"
console.log(typeof []);              // "object" (diziler nesnedir)
console.log(typeof function(){});    // "function"
console.log(typeof NaN);             // "number"
console.log(typeof typeof "merhaba");  // "string" (quirk!)
```

---

### 2.3 Nesneler

JavaScript'te temel veri türü olmayan her şey bir **nesne**dir. Nesneler, anahtar-değer çiftleri (özellikler ve yöntemler) koleksiyonlarıdır.
Nesneler, Python'daki sözlükler veya Java'daki haritalar gibidir. Özelliklere erişmek için **nokta notasyonu** veya **köşeli parantez notasyonu** kullanabiliriz.

```js
let user = {
  name: "Ali",
  age: 22,
  isStudent: true
};

console.log(user.name);   // Ali (nokta notasyonu)
console.log(user["age"]); // 22 (köşeli parantez notasyonu)
```

**Nesne Oluşturma Yöntemleri:**

Nesne oluşturmak için birkaç yaygın yöntem vardır: Nesne literalleri, yapıcı fonksiyonlar ve `Object.create()`.

**1. Nesne Literali (en yaygın):**

Bir sözlük tanımlamak gibi, süslü parantezler `{}` kullanarak bir nesne tanımlayabiliriz.

```js
let phone = {
  brand: "Samsung",
  model: "Galaxy S24",
  year: 2024,
  specs: {
    ram: "8GB",
    storage: "256GB"
  }
};
```

**2. Yapıcı Fonksiyon:**

JavaScript'te bir yapıcı fonksiyon, nesneleri oluşturmak ve başlatmak için kullanılan özel bir fonksiyon türüdür. Bu, birden fazla benzer nesne oluşturmak için kodu yeniden yazmadan bir şablon gibidir. Büyük harfle başlayan bir isimle tanımlanır ve `new` anahtar kelimesi ile çağrılır.

Bir yapıcı fonksiyonu `new` ile çağırdığınızda, o:

- Yeni bir boş nesne oluşturur.  
- Fonksiyon içindeki `this` anahtar kelimesini o nesneye işaret edecek şekilde ayarlar.  
- Yeni nesnenin prototipini yapıcının `prototype` özelliğine bağlar.  
- Yeni nesneyi otomatik olarak döndürür (başka bir nesne döndürmediğiniz sürece).  

Modern JavaScript'te, `class` sözdizimi genellikle daha temiz olduğu için tercih edilir, ancak arka planda hala yapıcı fonksiyonlar ve prototipler kullanılır.

```js
function Phone(brand, model) {
  this.brand = brand;
  this.model = model;
  this.makeCall = function(number) {
    return `Aranıyor ${number}...`;
  };
}

let myPhone = new Phone("iPhone", "15");
```

**3. Object.create():**

`Object.create()` belirli bir prototip nesnesi ve özellikleri ile yeni bir nesne oluşturur. Bu, miras ayarlamak için yararlıdır.

```js
let phonePrototype = {
  makeCall: function(number) {
    return `${this.brand} aranıyor ${number}`;
  }
};

let newPhone = Object.create(phonePrototype);
newPhone.brand = "Google Pixel";
```

**Özellik Erişimi:**

Özelliklere erişmek için **nokta notasyonu** veya **köşeli parantez notasyonu** kullanabiliriz.

```js
let user = { name: "Ali", "favorite-color": "blue" };

// Nokta notasyonu (mümkünse tercih edilir)
console.log(user.name);

// Köşeli parantez notasyonu (özel karakterler veya dinamik anahtarlar için gereklidir)
console.log(user["favorite-color"]);

let key = "name";
console.log(user[key]); // Dinamik özellik erişimi
```

**Özellik Ekleme/Değiştirme/Silme:**

Yeni bir özellik eklemek için, sadece yeni bir anahtara bir değer atamanız yeterlidir. Değiştirmek için, mevcut bir anahtara yeni bir değer atayın. Silmek için, `delete` operatörünü kullanın.

```js
let car = { brand: "Toyota" };

// Özellik ekleme
car.model = "Camry";
car["year"] = 2024;

// Özellik değiştirme
car.brand = "Honda";

// Özellik silme
delete car.year;

console.log(car); // { brand: "Honda", model: "Camry" }
```

**Yöntemler (Fonksiyonlar Olarak Özellikler):**
```js
let calculator = {
  result: 0,
  add: function(number) {
    this.result += number;
    return this;
  },
  multiply: function(number) {
    this.result *= number;
    return this;
  },
  getValue: function() {
    return this.result;
  }
};

// Yöntem zincirleme
calculator.add(5).multiply(3).getValue(); // 15
```

**React Native'de Nesneler:**
React Native'de, sürekli olarak nesnelerle çalışacaksınız - bileşen özellikleri, durum nesneleri, API yanıtları, navigasyon parametreleri vb.

---

### 2.4 Tip Dönüşümü

JavaScript bazı durumlarda türleri otomatik olarak dönüştürür (**dönüşüm**), bu da kafa karışıklığına yol açabilir, ancak bazen de kullanışlıdır.

```js
console.log("5" + 1);   // "51" (dize birleştirme)
console.log("5" - 1);   // 4   (dize sayıya dönüştürülür)
```

**Dönüşüm Kurallarını Anlama:**

1. **Dize Dönüşümü:** Bir operand bir dize olduğunda, JavaScript diğerini bir dizeye dönüştürür.  
2. **Sayı Dönüşümü:** `-`, `*`, `/`, `%` için, JavaScript operandları sayılara dönüştürür.  
3. **Mantıksal Dönüşüm:** Mantıksal bağlamlarda, değerler `true` veya `false` olarak dönüştürülür.  

**Dize Dönüşümü:**

`+` operatörü dizeleri birleştirir. Eğer bir operand bir dize ise, diğeri bir dizeye dönüştürülür.
Eğer her ikisi de sayılarsa, toplar.

```js
console.log("Cevap " + 42);     // "Cevap 42"
console.log("5" + 3 + 2);               // "532" (soldan sağa)
console.log(3 + 2 + "5");               // "55" (3+2=5, sonra "5"+"5")
```

**Sayı Dönüşümü:**

`-`, `*`, `/`, `%` için, JavaScript operandları sayılara dönüştürür.

```js
console.log("10" - 5);      // 5 (dize sayı olur)
console.log("10" * 2);      // 20
console.log("10" / 2);      // 5
console.log(+"123");        // 123 (ünary + sayıya dönüştürür)
console.log(Number("456")); // 456 (açık dönüşüm)
```

**Mantıksal Dönüşüm:**

Mantıksal bağlamlarda (örneğin `if` ifadelerinde), değerler `true` veya `false` olarak dönüştürülür.

```js
console.log(Boolean("merhaba"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(!!"merhaba");         // true (çift olumsuzlama hilesi)
```

**Karşılaştırma Operatörleri:**

JavaScript'te iki tür eşitlik operatörü vardır: `==` (gevşek eşitlik) ve `===` (katı eşitlik).
Başlangıçta, `==` yaygın olarak kullanılıyordu, ancak dönüşüm nedeniyle beklenmedik sonuçlara yol açabilir. Daha sonra, değer ve türu kontrol eden `===` tanıtıldı. En iyi uygulama, her zaman `===` ve `!==` kullanmaktır.

**Gevşek Eşitlik (==) - dönüşüm ile:**

```js
5 == "5";          // true  (dize "5" sayı 5'e dönüşür)
true == 1;         // true  (true 1'e dönüşür)
false == 0;        // true  (false 0'a dönüşür)
null == undefined; // true (özel durum)
"" == 0;           // true  (boş dize 0'a dönüşür)
```

**Katı Eşitlik (===) - dönüşüm yok:**
```js
5 === "5";    // false (farklı türler)
true === 1;   // false (farklı türler)
null === undefined; // false (farklı türler)
```

**Yaygın Dönüşüm Tuzakları:**

Dönüşümün beklenmedik sonuçlara yol açtığı birçok kenar durumu vardır. İşte bazı örnekler:

```js
// Beklenmedik sonuçlar
console.log([] + []);        // "" (boş dize)
console.log([] + {});        // "[object Object]"
console.log({} + []);        // "[object Object]"
console.log([] == false);    // true (ikisi de 0 olur)
console.log("0" == false);   // true (ikisi de 0 olur)
```

**Güvenli Uygulamalar:**

Beklenmedik dönüşüm sorunlarından kaçınmak için, dönüşüme güvenmek yerine, dönüşümleri açıkça yapmak en iyi uygulamadır.

```js
// Dönüşüme güvenmek yerine, açıkça yapın
let userInput = "123";

// Tehlikeli
if (userInput == 123) { /* ... */ }

// Daha iyi
if (Number(userInput) === 123) { /* ... */ }
// veya
if (parseInt(userInput) === 123) { /* ... */ }
```

**En iyi uygulama**: Her zaman `===` ve `!==` kullanın. Tür dönüşümü gerektiğinde, açıkça `Number()`, `String()`, `Boolean()` gibi dönüşümleri yapın.

---

### 2.5 Doğru ve Yanlış Değerler

JavaScript, değerleri **doğru** (koşullarda true) veya **yanlış** (koşullarda false) olarak değerlendirir.

**Tamamen Yanlış Değerler (sadece 8 adet):**
1. `false` - mantıksal yanlış  
2. `0` - sıfır  
3. `-0` - negatif sıfır  
4. `0n` - BigInt sıfır  
5. `""` - boş dize  
6. `null` - null değeri  
7. `undefined` - tanımsız değer  
8. `NaN` - Sayı Değil  

**Diğer her şey doğrudur!**

```js
// Yanlış örnekler
if (0) console.log("Çalışmayacak");
if ("") console.log("Çalışmayacak");
if (null) console.log("Çalışmayacak");
if (undefined) console.log("Çalışmayacak");
if (NaN) console.log("Çalışmayacak");

// Doğru örnekler
if ("merhaba") console.log("Çalışacak");
if (42) console.log("Çalışacak");
if ([]) console.log("Çalışacak"); // Boş dizi doğrudur!
if ({}) console.log("Çalışacak"); // Boş nesne doğrudur!
if ("0") console.log("Çalışacak"); // Dize "0" doğrudur!
if (-1) console.log("Çalışacak"); // Negatif sayılar doğrudur!
```

**Yaygın Sürprizler:**
```js
// Bunların hepsi DOĞRU (yanlış değil!)
console.log(Boolean([]));        // true - boş dizi
console.log(Boolean({}));        // true - boş nesne
console.log(Boolean("0"));       // true - dize "0"
console.log(Boolean("false"));   // true - dize "false"
console.log(Boolean(Infinity));  // true
console.log(Boolean(-Infinity)); // true
```

**Pratik Kullanım:**

İşte doğru/yanlış anlayışının önemli olduğu bazı yaygın senaryolar:

**1. Varsayılan Değerler:**
```js
function greet(name) {
  name = name || "Ziyaretçi"; // Eğer name yanlışsa, "Ziyaretçi" kullan
  return `Merhaba, ${name}!`;
}

// ES6 yolu (tercih edilen)
function greet(name = "Ziyaretçi") {
  return `Merhaba, ${name}!`;
}
```

**2. Dizi/Nesne Varlığını Kontrol Etme:**
```js
let users = getUsersFromAPI(); // null veya [] dönebilir

if (users && users.length) {
  // Kullanıcıları işlemek için güvenli
  users.forEach(user => console.log(user.name));
}
```

**4. Form Doğrulaması:**
```js
function validateForm(email, password) {
  if (!email) {
    return "Email gereklidir";
  }
  if (!password) {
    return "Şifre gereklidir";
  }
  return null; // Hata yok
}
```

**Mantıksal Dönüşüm Fonksiyonları:**
```js
// Açık dönüşüm
Boolean(0);        // false
Boolean("merhaba");  // true

// Çift olumsuzlama hilesi (yaygın olarak kullanılır)
!!0;              // false
!!"merhaba";        // true
```

Doğru/yanlış anlayışını anlamak, React Native uygulamalarında temiz koşullu mantık yazmak için çok önemlidir!

```js
var oldWay = "Bunu kaçının";  // fonksiyon kapsamlı
let age = 20;               // blok kapsamlı
const pi = 3.14159;         // sabit, yeniden atanamaz

age = 21; //  izin verilir
// pi = 3.14;  Hata: Sabit değişkenin değerine atama yapılamaz
```

**Kapsamı Anlama:**

JavaScript'te kapsam, değişkenlerin erişilebilirliğini belirler. İki ana kapsam türü vardır: **fonksiyon kapsamı** (var için) ve **blok kapsamı** (let ve const için).

**Fonksiyon Kapsamı (var):**

Fonksiyon kapsamlı `var` için, bir fonksiyonda bildirilen bir değişken, o fonksiyon içindeki her yerde erişilebilir, hatta değişken iç içe geçmiş bloklarda bile bildirilmiş olsa bile.

```js
function example() {
  if (true) {
    if (true) {
      var y = 1; // fonksiyon kapsamlı
    }
    var x = 1;
  }
  console.log(x); // 1 - if bloğunun dışında erişilebilir
  console.log(y); // 1 - if bloğunun dışında da erişilebilir
}
```

**Blok Kapsamı (let/const):**

Blok kapsamlı `let` ve `const` için, bir blok içinde (bir `if` ifadesi veya döngü gibi) bildirilen bir değişken sadece o blok içinde erişilebilir.
Aşağıdaki kod, `y` veya `z`'ye if bloğunun dışında erişmeye çalışırsanız bir `ReferenceError` hatası verecektir.

```js
function example() {
  if (true) {
    let y = 1;
    const z = 2;
  }
  // console.log(y);  ReferenceError: y is not defined
  // console.log(z);  ReferenceError: z is not defined
}
```

**Hoisting Açıklaması:**

Hoisting, JavaScript'in değişken ve fonksiyon bildirimlerini kapsamlarının (global veya fonksiyon) en üstüne taşımak için kullandığı bir davranıştır.
Bu, belirli şeyleri tanımlama satırlarından önce kullanabileceğiniz anlamına gelir (ancak bazı tuhaflıklarla birlikte).

**Önemli**: Sadece bildirimler taşınır, başlangıç/atanmalar değil.

```js
sayHello(); // İşler!

function sayHello() {
  console.log("Merhaba!");
}
```
Fonksiyon **bildirimleri** tamamen taşınır, yani fonksiyonun tamamı kapsamının herhangi bir yerinde kullanılabilir.

**Var Hoisting:**
```js
console.log(x); // undefined (hata değil)
var x = 10;
```
Arka planda olanlar:
```js
var x;          // bildirim taşındı (undefined olarak ayarlandı)
console.log(x); // undefined
x = 10;         // başlangıç burada gerçekleşir
```
Yani `var` taşınır ve `undefined` olarak başlatılır.

**Let/Const Hoisting:**

```js
console.log(y); //  ReferenceError
let y = 5;
```

Arka planda:

- `let` ve `const` **taşınır**, ancak tanım satırlarına kadar **Geçici Ölü Bölge (TDZ)** içinde yer alır.  

- Bu, tanım satırından önce kullanılamayacakları anlamına gelir.  
  

**TDZ (Geçici Ölü Bölge) Örneği**

```js
console.log(a); // undefined
var a = 1;

console.log(b); // ReferenceError
let b = 2;
```

Burada, `b` bellekte mevcuttur (taşınmıştır), ancak tanımlandığı satıra kadar erişilemez.

Özetle:

| Anahtar Kelime                         | Taşınır mı?                      | Başlatılır mı?           | Tanımdan önce kullanılabilir mi?     |
| ------------------------------- | ----------------------------- | ---------------------- | ------------------------------ |
| `var`                           |  Evet                          | `undefined`            | Evet (ancak değeri `undefined`) |
| `let`                           |  Evet                          |  Hayır                    | Hayır → ReferenceError (TDZ)      |
| `const`                         |  Evet                          |  Hayır                    | Hayır → ReferenceError (TDZ)      |
| Fonksiyon Bildirimi            |  Evet                          |  Evet (tüm fonksiyon)  | Evet                            |
| Fonksiyon İfadesi (var ile)  |  Sadece değişken (`undefined`)  | Hayır fonksiyon henüz        | Hayır                             |
| Ok Fonksiyonu (let/const ile) |  Değişken taşındı (TDZ)       | Hayır fonksiyon henüz        | Hayır                             |



**const ile Nesneler/Diziler:**

`const` değişkenin kendisinin yeniden atanmasını önler, ancak nesnenin veya dizinin içeriğini değiştirilemez hale getirmez. `const` ile bildirilen bir nesne veya dizinin içeriğini değiştirmek hala mümkündür.

```js
const user = { name: "Ali" };
user.name = "Sara"; //  izin verilir - özelliği değiştirme
user.age = 25;      //  izin verilir - özellik ekleme
// user = {};  Hata - değişken yeniden atanamaz

const numbers = [1, 2, 3];
numbers.push(4);    //  izin verilir - diziyi değiştirme
// numbers = [];  Hata - değişken yeniden atanamaz
```

**En iyi uygulama**: Varsayılan olarak `const` kullanın. Değişkenin değerinin değişeceğini biliyorsanız `let` kullanın. Modern JavaScript'te `var` kullanmaktan tamamen kaçının.

---

## **3. Operatörler**

### 3.1 Aritmetik Operatörler

Aşağıdaki örneklerde, JavaScript'teki temel aritmetik işlemleri gösterilmektedir.

```js
let x = 10;
let y = 3;

console.log(x + y);  // 13 (toplama)
console.log(x - y);  // 7  (çıkarma)
console.log(x * y);  // 30 (çarpma)
console.log(x / y);  // 3.333... (bölme)
console.log(x % y);  // 1  (modül - bölme sonrası kalan)
console.log(x ** y); // 1000 (üs alma - ES2016)
```

**Özel Durumlar:**

Belli başlı aritmetik işlemlerinde dikkat edilmesi gereken bazı özel durumlar vardır. Örneğin, JavaScript'te sıfıra bölme hatası vermez. Bunun yerine, paydanın işaretine bağlı olarak `Infinity` veya `-Infinity` sonucunu verir. Sıfırı sıfıra bölmek `NaN` (Sayı Değil) sonucunu verir.

```js
console.log(5 / 0);        // Infinity
console.log(-5 / 0);       // -Infinity
console.log(0 / 0);        // NaN
console.log(10 % 3);       // 1 (kalan)
console.log(-10 % 3);      // -1 (işaret paydanı takip eder)
console.log(2 ** 3 ** 2);  // 512 (sağdan sola: 2^(3^2) = 2^9)
```

**Artış/Azalış:**

Artış (`++`) ve azalış (`--`) operatörleri, bir değişkenin değerini 1 artırır veya azaltır. İki biçimde kullanılabilir: **ön ek** (değişkenin önünde) ve **son ek** (değişkenin arkasında).

```js
let counter = 5;

// Ön artış: önce artır, sonra döndür
console.log(++counter); // 6 (counter şimdi 6)

// Son artış: önce döndür, sonra artır
console.log(counter++); // 6 (6'yı döndürür, sonra counter 7 olur)

console.log(counter); // 7

// Azaltma için aynı mantık
console.log(--counter); // 6 (ön azaltma)
console.log(counter--); // 6 (son azaltma, counter 5 olur)
```

### 3.2 Atama Operatörleri

Diğer birçok programlama dilinde olduğu gibi, JavaScript'te de değerlere değişkenler atamak için çeşitli atama operatörleri desteklenir. Diziler hariç, `+=` operatörü diziyi bir dizeye dönüştürür.

```js
let num = 5;

// Karmaşık atama operatörleri
num += 3;   // num = num + 3;  → 8
num -= 2;   // num = num - 2;  → 6
num *= 2;   // num = num * 2;  → 12
num /= 3;   // num = num / 3;  → 4
num %= 3;   // num = num % 3;  → 1
num **= 3;  // num = num ** 3; → 1 (ES2016)

// Dizelerle de çalışır
let message = "Merhaba";
message += " Dünya"; // "Merhaba Dünya"

// Ve dizilerle
let arr = [1, 2];
arr += [3, 4]; // "1,23,4" (dizeye dönüşür!)
```

**Birden Fazla Atama:**
```js
let a, b, c;
a = b = c = 5; // Tüm değişkenler 5 değerini alır

// Açıklık için daha iyi bir yaklaşım
let x = 5;
let y = 5;
let z = 5;
```

### 3.3 Karşılaştırma Operatörleri

```js
console.log(10 > 5);     // true (büyüktür)
console.log(10 < 5);     // false (küçüktür)
console.log(10 >= 10);   // true (büyük veya eşit)
console.log(10 <= 5);    // false (küçük veya eşit)
console.log(10 == "10"); // true (gevşek eşitlik - dönüşüm ile)
console.log(10 === "10"); // false (katı eşitlik - dönüşüm yok)
console.log(10 != "5");   // true (gevşek eşitsizlik)
console.log(10 !== "10"); // true (katı eşitsizlik)
```

**Dize Karşılaştırması (alfabetik):**
```js
console.log("elma" < "muz"); // true
console.log("Elma" < "elma");  // true (büyük harfler önce gelir)
console.log("10" < "9");         // true (dize karşılaştırması, sayısal değil!)

// Sayısal dizeler için, önce dönüştür
console.log(Number("10") < Number("9")); // false
```

**Karşılaştırma Tuzakları:**
```js
console.log(null == undefined);  // true (özel durum)
console.log(null === undefined); // false (farklı türler)
console.log(NaN == NaN);         // false (NaN, hiçbir şeye eşit değildir)
console.log(Number.isNaN(NaN));  // true (NaN'ı kontrol etmenin doğru yolu)
```

### 3.4 Mantıksal Operatörler

JavaScript'te mantıksal operatörler, birden fazla mantıksal ifadeyi veya değeri birleştirmek için kullanılır. Üç ana mantıksal operatör AND (`&&`), OR (`||`) ve NOT (`!`) dir.

```js
let isStudent = true;
let hasID = false;
let age = 20;

// VE (&&) - tüm koşullar doğru olmalı
console.log(isStudent && hasID);        // false
console.log(isStudent && age >= 18);    // true

// VEYA (||) - en az bir koşul doğru olmalı
console.log(isStudent || hasID);        // true
console.log(!isStudent || hasID);       // false

// DEĞİL (!) - mantıksal değeri tersine çevirir
console.log(!isStudent);                // false
console.log(!hasID);                    // true
console.log(!!isStudent);               // true (çift olumsuzlama)
```

**Kısa Devre Değerlendirme:**

Mantıksal operatörler, sonucu belirlendiğinde değerlendirmeyi durduran **kısa devre değerlendirmesi** kullanır. Bu, varsayılan değerler ayarlamak veya hataları önlemek için yararlıdır.

```js
// && ilk yanlış değerde durur
let user = null;
user && user.name && console.log(user.name); // console.log'ı çalıştırmaz

// || ilk doğru değerde durur
let name = user.name || "Ziyaretçi"; // Eğer user.name yanlışsa, "Ziyaretçi" kullan

// Varsayılan değerler için yaygın bir desen
function greet(name) {
  name = name || "Anonim";
  return `Merhaba, ${name}!`;
}
```

**Null Birleştirme (??) - ES2020:**

JavaScript, ES2020'de **null birleştirme operatörünü** (??) tanıttı. Bu, `||` operatörüne benzer, ancak yalnızca `null` ve `undefined` değerlerini "nullish" olarak kabul eder, 0, "", veya false gibi diğer yanlış değerleri yok sayar.

```js
let user = "";
let defaultName = "Ziyaretçi";

// || doğru/yanlış kullanır (boş dize yanlış)
console.log(user || defaultName); // "Ziyaretçi"

// ?? sadece null/undefined kontrol eder
console.log(user ?? defaultName); // "" (boş dize null/undefined değildir)

// Ayrım yapmak için yararlıdır
let timeout = 0;
let defaultTimeout = 5000;
console.log(timeout || defaultTimeout); // 5000 (0 yanlış)
console.log(timeout ?? defaultTimeout); // 0 (0 null/undefined değildir)
```

**Mantıksal Atama (ES2021):**

JavaScript, ES2021'de mantıksal atama operatörlerini tanıttı; bu operatörler mantıksal işlemleri atama ile birleştirir. Bu operatörler `&&=`, `||=` ve `??=` dir.

```js
let obj = { name: "" };

// Eski yol
obj.name = obj.name || "Varsayılan";

// Yeni yol
obj.name ||= "Varsayılan"; // Sadece obj.name yanlışsa ata
obj.value &&= "Güncellendi"; // Sadece obj.value doğruysa ata
obj.data ??= "Yeni"; // Sadece obj.data null/undefined ise ata
```

---

## **4. Dizeler**

Dizeler, metinler için kullanılır ve JavaScript uygulamalarında en yaygın kullanılan veri türlerinden biridir.

### 4.1 Dize Oluşturma

**Üç yol ile dize oluşturma:**
```js
let singleQuote = 'Merhaba Dünya';
let doubleQuote = "Merhaba Dünya";
let templateLiteral = `Merhaba Dünya`; // ES6 - en güçlü
```

**Kaçış Karakterleri:**

Diğer birçok programlama dilinde olduğu gibi, özel karakterleri dizelerde kaçırmak için ters eğik çizgi (`\`) kullanabilirsiniz.

```js
let quote = 'O şöyle dedi, "Merhaba!"';
let apostrophe = "Endişelenme";
let escaped = "O şöyle dedi, \"Endişelenme!\"";
let newline = "1. Satır\n2. Satır";
let tab = "Sütun1\tSütun2";
let backslash = "Yol: C:\\Kullanıcılar\\İsim";
```

### 4.2 Birleştirme

Geçmişte, dize birleştirme genellikle `+` operatörü veya `+=` operatörü kullanılarak yapılırdı. Ancak bu, özellikle birden fazla değişken veya çok satırlı dizelerle çalışırken, dağınık ve okunması zor kodlara yol açabilir.


**Geleneksel Birleştirme:**
```js
let first = "Ali";
let last = "Khan";
console.log(first + " " + last); // Ali Khan

let greeting = "Merhaba";
greeting += " ";
greeting += "Dünya"; // "Merhaba Dünya"
```

**Geleneksel Birleştirmenin Sorunları:**
```js
let name = "Sara";
let age = 25;
let city = "İstanbul";

// Okunması ve sürdürülmesi zor
let message = "Benim adım " + name + ". Ben " + age + " yaşındayım ve " + city + "da yaşıyorum.";
```

### 4.3 Şablon Dizeleri (ES6)

ES6'da tanıtılan şablon dizeleri, dizelerle çalışmanın daha temiz ve güçlü bir yolunu sağlar. Geri tırnaklar (`` ` ``) kullanır ve `${}` ile gömülü ifadeler için izin verir.

**Temel Kullanım:**
```js
let name = "Sara";
let age = 20;
console.log(`Benim adım ${name} ve ben ${age} yaşındayım.`);
```

**Çok Satırlı Dizeler:**
```js
let html = `
  <div>
    <h1>Hoşgeldin ${name}</h1>
    <p>Yeni mesajınız var: ${unreadCount}</p>
  </div>
`;
```

**Şablon Dizelerinde İfadeler:**

Şablon dizeleri, **herhangi bir geçerli JavaScript ifadesini** içerebilir, değişkenler, aritmetik işlemler ve fonksiyon çağrıları dahil.

```js
let a = 5;
let b = 3;
console.log(`Toplam: ${a + b}, Çarpım: ${a * b}`); // Toplam: 8, Çarpım: 15

let user = { name: "Ali", age: 22 };
console.log(`Kullanıcı: ${user.name.toUpperCase()}, Yetişkin: ${user.age >= 18}`);
```

**Fonksiyon Çağrıları:**

Şablon dizeleri, doğrudan içinde fonksiyon çağrısı yapmanıza olanak tanır.

```js
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

let price = 19.99;
console.log(`Toplam: ${formatCurrency(price)}`); // Toplam: $19.99
```

**İç İçe Şablon Dizeleri:**

Daha karmaşık yapılar için şablon dizeleri iç içe geçirilebilir.

```js
let users = ["Ali", "Sara", "Ahmet"];
let message = `Kullanıcılar: ${users.map(user => `<span>${user}</span>`).join(", ")}`;
```

### 4.4 Kullanışlı Dize Yöntemleri

```js
let str = "JavaScript Programlama";

// Uzunluk ve temel bilgiler
console.log(str.length);        // 21
console.log(str[0]);           // "J" (0. indeksteki karakter)
console.log(str.charAt(0));    // "J" (köşeli parantez notasyonundan daha güvenli)

// Büyük/küçük harf dönüşümü
console.log(str.toUpperCase()); // "JAVASCRIPT PROGRAMLAMA"
console.log(str.toLowerCase()); // "javascript programlama"

// Arama
console.log(str.includes("Script"));    // true
console.log(str.indexOf("Script"));     // 4
console.log(str.lastIndexOf("a"));      // 15
console.log(str.startsWith("Java"));    // true
console.log(str.endsWith("ing"));       // true

// Parça çıkarma
console.log(str.slice(0, 4));          // "Java" (başlangıç, bitiş)
console.log(str.slice(-11));           // "Programlama" (sondan)
console.log(str.substring(0, 4));      // "Java" (slice'a benzer)
console.log(str.substr(0, 4));         // "Java" (kullanımı önerilmez)
```

**Daha Fazla Dize Yöntemi:**
```js
let messy = "  Merhaba Dünya  ";

// Boşlukları kırpma
console.log(messy.trim());           // "Merhaba Dünya"
console.log(messy.trimStart());      // "Merhaba Dünya  "
console.log(messy.trimEnd());        // "  Merhaba Dünya"

// Değiştirme
console.log(str.replace("Java", "Type"));     // "TypeScript Programlama"
console.log(str.replaceAll("a", "@"));        // "J@v@script Progr@mm@lama"

// Bölme
console.log(str.split(" "));         // ["JavaScript", "Programlama"]
console.log(str.split(""));          // ["J", "a", "v", "a", ...]
```

**Dize Tamamlama (ES2017):**

Dize tamamlama, bir dize belirli bir uzunluğa ulaşana kadar başına veya sonuna karakter eklemenizi sağlar.


```js
let num = "5";
console.log(num.padStart(3, "0"));   // "005"
console.log(num.padEnd(3, "0"));     // "500"

// Biçimlendirme için yararlı
let time = "9";
console.log(`${time.padStart(2, "0")}:30`); // "09:30"
```


**Dizelerin Değişmezliği:**

JavaScript'te dizeler **değişmezdir**, yani bir dize oluşturulduktan sonra değiştirilemez. Görünüşte bir dizeyi değiştiren herhangi bir işlem aslında yeni bir dize oluşturur.

```js
let original = "Merhaba";
let modified = original.toUpperCase(); // Yeni bir dize oluşturur
console.log(original); // "Merhaba" (değişmemiş)
console.log(modified); // "MERHABA"

// Dizeler yerinde değiştirilemez
// original[0] = "m"; // JavaScript'te etkisi yok
```

---

## **5. Kontrol Akışı**

Kontrol akışı ifadeleri, hangi kod bloklarının belirli koşullara veya yineleme desenlerine göre çalıştırılacağını belirler.

### 5.1 If/Else İfadeleri

If else, diğer birçok programlama dilinde olduğu gibidir. Belirli koşullara göre farklı kod bloklarını çalıştırmanıza olanak tanır.

**Temel If/Else:**
```js
let age = 18;
if (age >= 18) {
  console.log("Sen bir yetişkinsin.");
} else {
  console.log("Sen bir çocuksun.");
}
```

**Birden Fazla Koşul:**
```js
let score = 85;

if (score >= 90) {
  console.log("Not: A");
} else if (score >= 80) {
  console.log("Not: B");
} else if (score >= 70) {
  console.log("Not: C");
} else if (score >= 60) {
  console.log("Not: D");
} else {
  console.log("Not: F");
}
```

**Karmaşık Koşullar:**
```js
let user = { age: 25, isVerified: true, hasPermission: false };

if (user.age >= 18 && user.isVerified && user.hasPermission) {
  console.log("Erişim verildi");
} else if (user.age >= 18 && user.isVerified) {
  console.log("Doğrulama tamamlandı, ancak izin yok");
} else {
  console.log("Erişim reddedildi");
}
```

**Ternary Operatörü (Kısa If/Else):**

JavaScript'te, ternary operatörü (`? :`), bir koşullu atamayı veya bir değeri, bir koşula dayalı olarak döndürmek için kısa bir yol sağlar. Genellikle, bir `if/else` ifadesinin fazla uzun olacağı basit koşullar için kullanılır.

```js
// Temel ternary
let status = age >= 18 ? "yetişkin" : "çocuk";

// İç içe ternary (az kullanın)
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

```

**Nullish Kontrol Deseni:**

Gerçek dünya uygulamalarında, genellikle bir nesnenin özelliklerine erişmeden önce `null` veya `undefined` için kontrol etmeniz gerekir, böylece çalışma zamanı hatalarından kaçınılır. ES2020'de, isteğe bağlı zincirleme (`?.`) bu işlemi daha temiz bir şekilde yapma olanağı sağlar.

```js
let user = getUserData();

// Güvenli özellik erişimi
if (user && user.profile && user.profile.name) {
  console.log(user.profile.name);
}

// İsteğe bağlı zincirleme (ES2020) - daha temiz bir alternatif
console.log(user?.profile?.name);
```

### 5.2 Switch İfadeleri

JS'te `switch` ifadesi, farklı koşullara dayalı olarak farklı eylemler gerçekleştirmek için kullanılır. Genellikle, birden fazla `if/else if` ifadesine alternatif olarak kullanılır, özellikle de tek bir değişkenin birden fazla değer alabileceği durumlarda.
Sözdizimi basittir ve Java'ya yakındır, ancak istenmeyen akışa neden olmamak için `break` kullanmayı unutmayın, aksi takdirde bu davranış istenebilir.

**Temel Switch:**
```js
let day = "Pazartesi";
switch (day) {
  case "Pazartesi":
    console.log("Haftanın başı");
    break;
  case "Salı":
  case "Çarşamba":  
  case "Perşembe":
    console.log("Hafta ortası");
    break;
  case "Cuma":
    console.log("Hafta sonu geliyor!");
    break;
  case "Cumartesi":
  case "Pazar":
    console.log("Hafta sonu!");
    break;
  default:
    console.log("Geçersiz gün");
}
```

**İfadelerle Switch:**

Bu örnekte, `operation` değişkeni bir dizi matematiksel işlemi temsil eder ve `switch` ifadesi, her bir duruma karşılık gelen işlemi gerçekleştirir.

```js
let operation = "+";
let a = 10;
let b = 5;
let result;

switch (operation) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    result = b !== 0 ? a / b : "Sıfıra bölme hatası";
    break;
  default:
    result = "Geçersiz işlem";
}

console.log(result); // 15
```

**Modern Alternatif - Nesne Arama:**

Bir `switch` ifadesi yerine, işlemleri fonksiyonlara eşleyen bir nesne kullanabilirsiniz. Bu yaklaşım genellikle daha temiz ve sürdürülebilir.

```js
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => b !== 0 ? a / b : "Sıfıra bölme hatası"
};

let result = operations[operation] 
  ? operations[operation](a, b) 
  : "Geçersiz işlem";
```

### 5.3 Döngüler

Geleneksel olarak, JavaScript `for`, `while` ve `do...while` döngülerini yineleme için kullanır. 

**For Döngüsü (Geleneksel):**
```js
// Temel sayma
for (let i = 1; i <= 5; i++) {
  console.log(`Sayım: ${i}`);
}

// Ters sayma
for (let i = 5; i >= 1; i--) {
  console.log(`Geri Sayım: ${i}`);
}

// Özel artış
for (let i = 0; i < 10; i += 2) {
  console.log(`Çift: ${i}`); // 0, 2, 4, 6, 8
}
```

**For...of Döngüsü (ES6) - Diziler için:**

ES6 ile birlikte, diziler ve nesne özellikleri üzerinde yineleme yapmak için `for...of` ve `for...in` döngüleri de vardır.

```js
let fruits = ["elma", "muz", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

**For...in Döngüsü - Nesne Özellikleri için:**
```js
let user = { name: "Ali", age: 25, city: "İstanbul" };

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

**While Döngüsü:**
```js
let count = 0;
while (count < 5) {
  console.log(`While sayacı: ${count}`);
  count++;
}

// Sonsuz döngü koruması
let attempts = 0;
let maxAttempts = 10;
while (someCondition && attempts < maxAttempts) {
  // Bir şey yap
  attempts++;
}
```

**Do...While Döngüsü:**
```js
let input;
do {
  input = prompt("10'dan büyük bir sayı girin:");
} while (input <= 10);
```

**Döngü Kontrolü:**

Döngü yürütmesini kontrol etmek için `break` ve `continue` ifadelerini kullanabilirsiniz.

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // Bu yinelemeyi atla
  }
  if (i === 7) {
    break; // Döngüden çık
  }
  console.log(i); // 0, 1, 2, 4, 5, 6
}
```

**İç İçe Döngüler:**
```js
// Çarpanlar tablosu
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```

**Dizi Yineleme Yöntemleri (Fonksiyonel Yaklaşım):**

JS (ES5 ve sonrası), dizilerin, işlevsel tarzda yineleme ve dönüştürme için yerleşik yöntemlerle birlikte geldiği güçlü bir özelliktir. Bu yöntemler `forEach`, `map`, `filter`, `reduce`, `find`, `some` ve `every` dir.

- `forEach`: Sağlanan bir işlevi dizinin her bir öğesi için bir kez çalıştırır.  
- `map`: Her bir öğeye uygulanan sağlanan işlevin sonuçlarıyla yeni bir dizi oluşturur.  
- `filter`: Sağlanan işlev tarafından uygulanan teste tabi olan tüm öğelerle yeni bir dizi oluşturur.  
- `reduce`: Her bir öğe üzerinde bir azaltıcı işlevi çalıştırır ve tek bir çıktı değeri üretir.  
- `find`: Sağlanan test işlevini karşılayan ilk öğenin değerini döndürür.  
- `some`: Dizideki en az bir öğenin sağlanan işlev tarafından uygulanan testi geçip geçmediğini kontrol eder.  
- `every`: Dizideki tüm öğelerin sağlanan işlev tarafından uygulanan testi geçip geçmediğini kontrol eder.  

```js
let numbers = [1, 2, 3, 4, 5];

// forEach - her bir öğe için çalıştır
numbers.forEach((num, index) => {
  console.log(`İndeks ${index}: ${num}`);
});

// map - her bir öğeyi dönüştür
let doubled = numbers.map(num => num * 2);

// filter - koşula uyan öğeleri seç
let evens = numbers.filter(num => num % 2 === 0);

// find - eşleşen ilk öğeyi al
let found = numbers.find(num => num > 3);

// some - herhangi bir öğe eşleşiyor mu kontrol et
let hasEvens = numbers.some(num => num % 2 === 0);

// every - tüm öğeler eşleşiyor mu kontrol et
let allPositive = numbers.every(num => num > 0);
```


---

## **6. Fonksiyonlar**

Fonksiyonlar, belirli görevleri yerine getiren yeniden kullanılabilir kod bloklarıdır. JavaScript'te ve React Native geliştirmede temel yapı taşlarıdır.

### 6.1 Fonksiyon Bildirimi

**Temel Bildirim:**

Bir fonksiyon, `function` anahtar kelimesi ile bildirilir, ardından fonksiyon adı, parametreler için parantezler ve fonksiyon gövdesi için süslü parantezler gelir.

```js
function greet(name) {
  return `Merhaba, ${name}`;
}
console.log(greet("Ali")); // "Merhaba, Ali"
```

**Fonksiyonun Özellikleri:**

JavaScript'te, fonksiyonlar birinci sınıf nesnelerdir, yani değişkenlere atanabilir, argüman olarak geçirilebilir ve diğer fonksiyonlardan döndürülebilirler. Aynı zamanda, fonksiyon bildirimleri taşınır, bu da kodda tanımlanmadan önce çağrılabilecekleri anlamına gelir.

```js
// Fonksiyonlar taşındığı için - tanımlamadan önce çağrılabilir
console.log(add(2, 3)); // İşler! 5 döner

function add(a, b) {
  return a + b;
}

// Fonksiyonlar birinci sınıf nesnelerdir
console.log(add.name);   // "add"
console.log(add.length); // 2 (parametre sayısı)
```

**Birden Fazla Parametre:**

JavaScript, bir fonksiyonun birden fazla parametre kabul etmesine izin verir. Yani, birden fazla girdi alması gereken bir fonksiyonu tanımlamak için kullanışlıdır.

```js
function calculateTotal(price, tax, discount) {
  let subtotal = price - discount;
  let total = subtotal + (subtotal * tax);
  return total;
}

let finalPrice = calculateTotal(100, 0.08, 10);
console.log(finalPrice); // 97.2
```

**Dönüş Bildirimleri:**

Fonksiyonlar, `return` ifadesini kullanarak değer döndürebilir. Hiç dönüş bildirimi yoksa, fonksiyon varsayılan olarak `undefined` döndürür.
`return` ifadesi ayrıca fonksiyonu hemen terk eder, bu nedenle sonrasında gelen kod çalıştırılmaz.

```js
function checkAge(age) {
  if (age < 0) {
    return "Geçersiz yaş"; // Erken dönüş
  }
  
  if (age < 18) {
    return "Çocuk";
  }
  
  return "Yetişkin"; // Varsayılan dönüş
}

function noExplicitReturn() {
  console.log("Dönüş bildirimi yok");
  // İstemeden undefined döner
}
```

### 6.2 Fonksiyon İfadesi

Fonksiyon ifadeleri, fonksiyonlar oluşturmayı ve bunları değişkenlere atamayı içerir. Fonksiyon bildirimlerinin aksine, fonksiyon ifadeleri taşınmaz, yani kodda tanımlanmadan önce çağrılamazlar. Fonksiyon ifadeleri birkaç şekilde yapılabilir, anonim fonksiyonlar, adlandırılmış fonksiyonlar ve hemen çağrılan fonksiyon ifadeleri (IIFE) dahil.

**Temel Fonksiyon İfadesi:**
```js
const add = function(a, b) {
  return a + b;
};

// Bildirimden önce çağrılamaz (taşınmaz)
// console.log(multiply(2, 3)); //  Hata

const multiply = function(a, b) {
  return a * b;
};
```

**Adlandırılmış Fonksiyon İfadesi:**
```js
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Kendine adla referans verebilir
};

console.log(factorial(5)); // 120
// console.log(fact(5)); //  Hata - 'fact' erişilebilir değil
```

**Hemen Çağrılan Fonksiyon İfadesi (IIFE):**
```js
(function() {
  console.log("Bu hemen çalışır!");
})();

// Parametreli
(function(name) {
  console.log(`Merhaba ${name}!`);
})("Dünya");

// İzole bir alan oluşturmak için yararlıdır
const result = (function() {
  let privateVar = "gizli";
  return {
    getValue: function() {
      return privateVar;
    }
  };
})();
```

### 6.3 Ok Fonksiyonları (ES6)

ES6'da tanıtılan ok fonksiyonları, fonksiyon yazmanın daha kısa bir yolunu sağlar. Ayrıca, `this` anahtar kelimesinin davranışı açısından normal fonksiyonlarla farklılık gösterirler.

**Temel Ok Fonksiyonu Sözdizimi:**
```js
// Geleneksel fonksiyon
const multiply = function(a, b) {
  return a * b;
};

// Ok fonksiyonu - özlü
const multiply = (a, b) => a * b;
```

**Ok Fonksiyonu Çeşitleri:**

Tek bir parametre alan bir fonksiyon yazıyorsanız, parantezleri atlayabilirsiniz. Ancak, fonksiyon hiçbir parametre almıyorsa veya birden fazla parametre alıyorsa, parantezler gereklidir. Fonksiyon gövdesi birden fazla ifade içeriyorsa, süslü parantezler gereklidir ve açık bir `return` ifadesi kullanılmalıdır.

```js
// Hiç parametre yok
const sayHello = () => console.log("Merhaba!");

// Bir parametre (parantez isteğe bağlı)
const square = x => x * x;
const square = (x) => x * x; // Aynı şey

// Birden fazla parametre
const add = (a, b) => a + b;

// Blok gövdesi (açık dönüşüm gerektirir)
const complexCalc = (a, b) => {
  let result = a * b;
  result += 10;
  return result;
};

// Nesne literali döndürme (parantez içine sarın)
const createUser = (name, age) => ({
  name: name,
  age: age,
  isAdult: age >= 18
});
```

**Ok Fonksiyonları ve Normal Fonksiyonlar Arasındaki Farklar:**

Ok fonksiyonları ile normal fonksiyonlar arasında bazı temel farklar vardır:

1. `this` Bağlama  
2. Yapıcı olarak kullanılamazlar  
3. `arguments` nesnesi yoktur  

**1. `this` Bağlama:**

Normal fonksiyonlarda, `this`, fonksiyonu çağıran nesneyi ifade eder. Ok fonksiyonlarında, `this`, çevreleyen (içinde bulunan) kapsamdan `this`'i miras alır.

```js
const obj = {
  name: "Ali",
  
  // Normal fonksiyon - 'this' obj'yi ifade eder
  regularMethod: function() {
    console.log(this.name); // "Ali"
    
    setTimeout(function() {
      console.log(this.name); // undefined (farklı bağlam)
    }, 1000);
  },
  
  // Ok fonksiyonu - üst kapsamdan 'this' miras alır
  arrowMethod: function() {
    console.log(this.name); // "Ali"
    
    setTimeout(() => {
      console.log(this.name); // "Ali" (arrowMethod'dan miras alır)
    }, 1000);
  }
};
```

**2. Yapıcı Olarak Kullanılamazlar:**

Normal fonksiyonlar, `new` anahtar kelimesi ile yapıcı olarak kullanılabilirken, ok fonksiyonları kullanılamaz.

```js
function RegularConstructor(name) {
  this.name = name;
}
const person1 = new RegularConstructor("Ali"); //  İşler

const ArrowConstructor = (name) => {
  this.name = name;
};
// const person2 = new ArrowConstructor("Sara"); //  Hata
```

**3. `arguments` Nesnesi Yoktur:**

Normal fonksiyonlarda, fonksiyonun aldığı tüm argümanları içeren `arguments` nesnesine erişebilirsiniz. Ok fonksiyonlarının kendi `arguments` nesneleri yoktur. Bunun yerine, dinamik argüman sayısı için dinamik parametreler (`...args`) kullanabilirsiniz.

```js
function regularFunc() {
  console.log(arguments); // Argümanlar nesnesi mevcut
}

const arrowFunc = () => {
  // console.log(arguments); //  Hata - arguments nesnesi yok
};

// Bunun yerine dinamik parametreler kullanın
const arrowWithRest = (...args) => {
  console.log(args); // Argümanların dizisi
};
```

### 6.4 Varsayılan Parametreler (ES6)

ECMAScript 2015'te, JavaScript diline varsayılan fonksiyon parametreleri tanıtıldı. Bu özellik, geliştiricilerin bir fonksiyona değer veya `undefined` geçirilmediğinde varsayılan değerler ayarlamasına olanak tanır. Bu, `undefined` değerleri ile ilgili yaygın tuzaklardan kaçınmaya yardımcı olur ve fonksiyonları daha sağlam ve kullanımı daha kolay hale getirir.

**Temel Varsayılan Parametreler:**
```js
function greet(name = "Ziyaretçi", greeting = "Merhaba") {
  console.log(`${greeting}, ${name}!`);
}

greet();              // "Merhaba, Ziyaretçi!"
greet("Ali");         // "Merhaba, Ali!"
greet("Sara", "Selam");  // "Selam, Sara!"
```

**İfadelerle Varsayılan Parametreler:**

Varsayılan parametreler, fonksiyon çağrıları veya hesaplamalar gibi ifadelerle de ayarlanabilir.

```js
function createUser(name = "Anonim", timestamp = Date.now()) {
  return {
    name: name,
    createdAt: timestamp
  };
}

// Fonksiyon çağrıları varsayılan olarak
function getRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

function createItem(name, id = getRandomId()) {
  return { name, id };
}
```

**Nesne Destructuring ile Varsayılan Parametreler:**

Modern JavaScript'te, varsayılan parametreleri nesne destructuring ile birleştirerek birden fazla özelliğin varsayılan değerlerini sağlamak için de kullanabilirsiniz.
`configureApp` fonksiyonu, bir nesne bekleyen tek bir parametre alır. Parametre listesinde, nesne destructuring yapılır. Bu, fonksiyonun hiç argüman olmadan çağrıldığında bile çalışmasını sağlar.
Bunun olmaması durumunda, `configureApp()` çağrısı bir hata verecektir, çünkü tanımsız bir şeyi destructure etmeye çalışmak izin verilmez.

```js
function configureApp({
  theme = "light",
  language = "en",
  notifications = true
} = {}) {
  console.log(`Tema: ${theme}, Dil: ${language}, Bildirimler: ${notifications}`);
}

configureApp(); // Tüm varsayılanları kullanır
configureApp({ theme: "dark" }); // Dil ve bildirimler için varsayılanları kullanır
```

### 6.5 Yüksek Dereceli Fonksiyonlar

Yüksek dereceli fonksiyonlar, diğer fonksiyonları argüman olarak alabilen veya sonuç olarak fonksiyon döndürebilen fonksiyonlardır. Fonksiyonel programlamanın temel bir özelliğidir ve JavaScript'te dizi manipülasyonu, olay işleme ve daha fazlası gibi görevlerde yaygın olarak kullanılır.

**Diğer Fonksiyonları Argüman Olarak Alan Fonksiyonlar:**

Bu örnekte, `repeat` fonksiyonu başka bir fonksiyon olan `fn` ve bir sayı olan `times`'ı argüman olarak alır. Belirtilen sayıda `fn`'yi çağırır ve her seferinde geçerli yineleme indeksini ona geçirir.

```js
function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn(i);
  }
}

repeat(x => console.log(`Sayım: ${x}`), 3);
// Sayım: 0
// Sayım: 1  
// Sayım: 2
```

**Diğer Fonksiyonları Döndüren Fonksiyonlar:**

Bu örnekte, `createMultiplier` fonksiyonu, belirtilen bir `multiplier` ile yeni bir fonksiyon döndürür. Bu, `double` ve `triple` gibi özel fonksiyonlar oluşturmanıza olanak tanır.

```js
function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### 6.6 Geri Çağırma Fonksiyonları

Geri çağırma fonksiyonu, başka bir fonksiyona argüman olarak geçirilen ve belirli bir işlem tamamlandıktan sonra yürütülen bir fonksiyondur. Genellikle, olayları işlemek, API çağrıları yapmak veya tamamlanması zaman alan görevleri yerine getirmek için kullanılır.

**Temel Geri Çağırmalar:**

Bu örnekte, `processData` fonksiyonu, `setTimeout` kullanarak bir isteği simüle eder. Veriyi işledikten sonra (büyük harfe çevirme), işlenmiş sonucu ile sağlanan geri çağırma fonksiyonunu çağırır.
SetTimeout fonksiyonu, bir geri çağırma fonksiyonunu gecikmeli olarak çalıştırmak için kullanılır. Bu, bir isteğin sonucunu beklemek gibi zaman alan işlemleri simüle etmek için yararlıdır.

```js
function processData(data, callback) {
  // İşlem süresini simüle et
  setTimeout(() => {
    let processed = data.toUpperCase();
    callback(processed);
  }, 1000);
}

processData("merhaba dünya", function(result) {
  console.log(result); // "MERHABA DÜNYA"
});
```

**Hata-İlk Geri Çağrılar (Node.js tarzı):**

Node.js ve birçok JavaScript kütüphanesinde, geri çağırmalar için "hata-ilk" deseni kullanma geleneği vardır. Bu, geri çağrının ilk argümanının bir hata (varsa) için ayrıldığı ve ikinci argümanının başarılı sonuç için kullanıldığı anlamına gelir. Bu desen, hataların zarif bir şekilde işlenmesine yardımcı olur.

Bu örnekte, `readFile` fonksiyonu bir dosyayı okumayı simüle eder. Eğer dosya adı "nonexistent.txt" ise, geri çağrıyı bir hata ile çağırır. Aksi takdirde, dosya içeriği ile geri çağrıyı çağırır.

```js
function readFile(filename, callback) {
  // Dosya okumayı simüle et
  setTimeout(() => {
    if (filename === "nonexistent.txt") {
      callback(new Error("Dosya bulunamadı"), null);
    } else {
      callback(null, "Dosya içeriği burada");
    }
  }, 500);
}

readFile("data.txt", (error, data) => {
  if (error) {
    console.error("Hata:", error.message);
  } else {
    console.log("Veri:", data);
  }
});
```

---

## **7. Nesneler & Diziler**

Nesneler ve diziler, JavaScript'te en önemli veri yapılarıdır ve React Native'de bileşen durumu, props ve API verilerini yönetmek için yoğun şekilde kullanılır.

### 7.1 Nesneler Derinlemesine

Bölüm 1'de gördüğümüz gibi, nesneler anahtar-değer çiftlerinden oluşur.

**Nesne Oluşturma ve Erişim:**
```js
let user = {
  name: "Ali",
  age: 22,
  contact: {
    email: "ali@example.com",
    phone: "+1234567890"
  }
};

console.log(user.name);              // "Ali"
console.log(user.contact.email);     // "ali@example.com"
console.log(user["age"]);           // 22

user.age = 23; // Özelliği değiştirme
user.city = "İstanbul"; // Yeni özellik ekleme
```

**Nesne Metotları ve `this`:**

Java'da olduğu gibi, `this` anahtar kelimesi mevcut nesne bağlamını ifade eder.
Aynı zamanda JS'de metotlardan `this` döndürerek `method chaining` (metot zincirleme) yapabiliriz.

```js
let calculator = {
  value: 0,

  add(num) {
    this.value += num;
    return this; // Metot zincirleme için
  },

  multiply(num) {
    this.value *= num;
    return this;
  },

  reset() {
    this.value = 0;
    return this;
  },

  getValue() {
    return this.value;
  }
};

// Metot zincirleme
let result = calculator.add(5).multiply(3).getValue(); // 15
```

**Faydalı Nesne Metotları:**

En sık kullanılan yerleşik nesne metotlarından bazıları:
1. `Object.keys(obj)` - nesnenin anahtarlarını dizi olarak döndürür.  
2. `Object.values(obj)` - nesnenin değerlerini dizi olarak döndürür.  
3. `Object.entries(obj)` - anahtar-değer çiftlerini dizi olarak döndürür.  
4. `Object.hasOwnProperty(prop)` - nesnenin belirli bir özelliğe sahip olup olmadığını kontrol eder (miras alınmamış).  
5. `in` operatörü - bir özelliğin nesnede olup olmadığını kontrol eder.  
6. `Object.assign(target, ...sources)` - kaynak nesnelerden hedef nesneye özellikleri kopyalar (yüzeysel kopya).  
7. Spread operatörü `{ ...obj }` - nesnenin yüzeysel bir kopyasını oluşturur (ES6+).  
8. `JSON.parse(JSON.stringify(obj))` - nesnenin derin kopyasını oluşturur (iç içe nesneler için).  

```js

let user = { name: "Ali", age: 25, city: "İstanbul" };

// Tüm anahtarları al
console.log(Object.keys(user)); // ["name", "age", "city"]

// Tüm değerleri al
console.log(Object.values(user)); // ["Ali", 25, "İstanbul"]

// Anahtar-değer çiftlerini al
console.log(Object.entries(user)); // [["name", "Ali"], ["age", 25], ["city", "İstanbul"]]

// Özellik var mı kontrol et
console.log("name" in user);              // true
console.log(user.hasOwnProperty("age"));  // true

// Nesne kopyalama (yüzeysel kopya)
let userCopy = Object.assign({}, user);
let userCopy2 = { ...user }; // ES6 spread (tercih edilen)

// Derin kopya (iç içe nesneler için)
let deepCopy = JSON.parse(JSON.stringify(user));
```


### 7.2 Diziler Derinlemesine

**Dizi Oluşturma ve İşlemler:**

JavaScript'te diziler dinamiktir ve her türden eleman tutabilir.
Eleman eklemek veya çıkarmak için `push`, `pop`, `shift`, `unshift` gibi metotlar kullanılır.
Ayrıca arama, dönüştürme ve yineleme için birçok faydalı dizi metodu vardır.
En sık kullanılan dizi metotlarından bazıları:
1. `map(callback)` - her elemanı dönüştürür ve yeni bir dizi döndürür.  
2. `filter(callback)` - koşula uyan elemanları seçer ve yeni bir dizi döndürür.  
3. `find(callback)` - koşula uyan ilk elemanı döndürür.  
4. `findIndex(callback)` - koşula uyan ilk elemanın indeksini döndürür.  

Dizileri birleştirmek için `concat` veya spread operatörü kullanılabilir. Spread operatörünü daha sonra detaylı göreceğiz.
Ayrıca dizileri sıralama ve ters çevirme işlemlerini de göreceğiz.

```js
let nums = [10, 20, 30];
let mixed = [1, "merhaba", true, { id: 1 }];
let empty = [];

// Eleman ekleme
nums.push(40);        // Sona ekle → [10,20,30,40]
nums.unshift(5);      // Başa ekle → [5,10,20,30,40]

// Eleman çıkarma
let last = nums.pop();      // Sondan çıkar → 40
let first = nums.shift();   // Baştan çıkar → 5

console.log(nums[0]);       // 10 (indeks ile erişim)
console.log(nums.length);   // Dizi uzunluğu

let numbers = [1, 2, 3, 4, 5];

// map - her elemanı dönüştür (yeni dizi döner)
let doubled = numbers.map(n => n * 2);         // [2,4,6,8,10]

// filter - koşula uyan elemanları seç (yeni dizi döner)
let evens = numbers.filter(n => n % 2 === 0);  // [2,4]

// find - koşula uyan ilk elemanı al
let found = numbers.find(n => n > 3);          // 4
let foundIndex = numbers.findIndex(n => n > 3); // 3

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Birleştirme
let combined = arr1.concat(arr2);              // [1,2,3,4,5,6]
let spreadCombined = [...arr1, ...arr2];       // [1,2,3,4,5,6] (ES6)

// Sıralama
let words = ["muz", "elma", "kiraz"];
words.sort();                                  // ["elma", "kiraz", "muz"]

let nums = [10, 2, 30, 4];
nums.sort((a, b) => a - b);                   // [2, 4, 10, 30] (sayısal sıralama)

// Ters çevirme
let reversed = [...nums].reverse();            // [30, 10, 4, 2] (orijinali değiştirmez)
```


### 7.4 Destructuring (ES6)

ES6 ve sonraki sürümlerde, destructuring (yapı sökümü) dizilerden veya nesnelerden değerleri değişkenlere çıkarmak için kısa bir sözdizimi sunar. Bu, özellikle karmaşık veri yapılarıyla çalışırken kodun daha temiz ve okunabilir olmasını sağlar.

**Nesne Destructuring:**

Nesne destructuring'de süslü parantez `{}` ile özellikleri isimlerine göre çıkarırız.
Ayrıca değişken adını değiştirme, varsayılan değer atama, iç içe destructuring ve kalan özellikleri toplama desteği vardır.

```js
let user = {
  name: "Ali",
  age: 25,
  email: "ali@example.com",
  address: {
    city: "İstanbul",
    country: "Türkiye"
  }
};

// Temel destructuring
let { name, age } = user;
console.log(name); // "Ali"
console.log(age);  // 25

// Değişken adını değiştirme
let { name: userName, age: userAge } = user;
console.log(userName); // "Ali"

// Varsayılan değer
let { name, age, phone = "Sağlanmadı" } = user;
console.log(phone); // "Sağlanmadı"

// İç içe destructuring
let { address: { city, country } } = user;
console.log(city); // "İstanbul"

// Kalan özellikler
let { name, ...otherInfo } = user;
console.log(otherInfo); // { age: 25, email: "...", address: {...} }
```

---


## **8. ES6+ Özellikleri**

ES6 ve sonraki sürümler, JavaScript'i daha güçlü ve kullanımı kolay hale getiren özellikler getirdi. Özellikle React Native geliştirmede önemlidir.

### 8.1 Spread Operatörü (...)

Spread operatörü, dizilerin elemanlarını veya nesnelerin özelliklerini "yayar". Bunu daha iyi anlamak için destructuring'in tersi gibi düşünebilirsiniz. Üç nokta `...` ile yapılır. Veri yapılarını kolayca kopyalamak, birleştirmek ve dönüştürmek için kullanılır ve React Native'de state güncellemeleri ve prop aktarımında yaygın olarak kullanılır.

**Dizi Spread:**
```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Dizileri birleştirme
let combined = [...arr1, ...arr2];        // [1,2,3,4,5,6]
let withExtra = [0, ...arr1, 3.5, ...arr2, 7]; // [0,1,2,3,3.5,4,5,6,7]

// Dizi kopyalama (yüzeysel kopya)
let copy = [...arr1];                     // [1,2,3]
copy.push(4); // Orijinal arr1 değişmez

// Diziye dönüştürme
let str = "merhaba";
let chars = [...str];                     // ['m','e','r','h','a','b','a']

// En büyük/en küçük bulma
let numbers = [5, 2, 8, 1, 9];
console.log(Math.max(...numbers));       // 9
console.log(Math.min(...numbers));       // 1
```


**Nesne Spread:**
```js
let user = { name: "Ali", age: 25 };
let address = { city: "İstanbul", country: "Türkiye" };

// Nesneleri birleştirme
let fullProfile = { ...user, ...address };
// { name: "Ali", age: 25, city: "İstanbul", country: "Türkiye" }

// Özellik ekleme
let updatedUser = {
  ...user,
  email: "ali@example.com",
  age: 26  // Orijinal yaşı üzerine yazar
};

// Nesne kopyalama (yüzeysel kopya)
let userCopy = { ...user };

// Koşullu özellik ekleme
let includeEmail = true;
let profile = {
  ...user,
  ...(includeEmail && { email: "ali@example.com" })
};
```


### 8.2 Rest Parametreleri (...)

Rest parametreleri, birden fazla elemanı bir diziye toplar - spread'in tersidir. Aynı `...` sözdizimini kullandığı için kafa karıştırıcı olabilir, ancak bağlam farklıdır. Rest parametreleri, fonksiyon tanımlarında belirsiz sayıda argümanı işlemek için kullanılır.

**Fonksiyon Rest Parametreleri:**
```js
// Tüm argümanları bir diziye topla
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20));        // 30

// Karışık parametreler
function introduce(firstName, lastName, ...hobbies) {
  console.log(`${firstName} ${lastName}'ın hobileri: ${hobbies.join(', ')}`);
}

introduce("Ali", "Khan", "okuma", "kodlama", "oyun");
// "Ali Khan'ın hobileri: okuma, kodlama, oyun"
```


**Rest vs Arguments Nesnesi:**

Rest parametreleri, eski `arguments` nesnesine göre tercih edilir çünkü rest parametreleri gerçek dizilerdir ve dizi metotlarıyla çalışır.

```js
// Eski yöntem (kaçının)
function oldSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// Modern yöntem (tercih edilen)
function modernSum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Rest parametreleri gerçek dizidir ve dizi metotlarıyla çalışır
function processNumbers(...nums) {
  console.log(nums.length);           // Çalışır
  console.log(nums.map(n => n * 2));  // Çalışır

  // arguments nesnesinde dizi metotları yoktur
  // console.log(arguments.map(n => n * 2)); // Hata
}
```


**Rest ile Destructuring:**

Destructuring'de de rest sözdizimini kullanarak kalan elemanları veya özellikleri toplayabiliriz.

```js
// Dizi destructuring ile rest
let [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(first);     // 1
console.log(second);    // 2
console.log(remaining); // [3, 4, 5]

// Nesne destructuring ile rest
let user = { name: "Ali", age: 25, city: "İstanbul", email: "ali@example.com" };
let { name, age, ...otherInfo } = user;
console.log(name);      // "Ali"
console.log(age);       // 25
console.log(otherInfo); // { city: "İstanbul", email: "ali@example.com" }
```


### 8.3 Modüller (import/export)

Modüller, kodu ayrı dosyalara bölmenizi ve aralarındaki paylaşımı kontrol etmenizi sağlar.
JavaScript'te, bir dosyadaki değişken/fonksiyon/sınıfı dışarıya açmak için `export`, başka bir dosyaya almak için `import` kullanılır.

**İsimli Exportlar:**
```js
// math.js - Birden fazla export
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export const multiply = (a, b) => a * b;

// Alternatif sözdizimi
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

export { subtract, divide };
```


**İsimli Importlar:**
```js
// app.js - Belirli öğeleri import et
import { add, multiply, PI } from './math.js';

console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20
console.log(PI);             // 3.14159

// Yeniden adlandırarak import
import { add as sum, multiply as product } from './math.js';

// Tüm isimli exportları import et
import * as MathUtils from './math.js';
console.log(MathUtils.add(2, 3));
console.log(MathUtils.PI);
```


**Varsayılan (Default) Export:**

JavaScript'te bir modül **bir** default export'a sahip olabilir. Bu, bir dosyadan tek bir ana değeri dışarıya aktarmak için kullanışlıdır.
Default export'ı satır içinde veya ayrı bir ifade olarak yazabilirsiniz.

```js
// user.js - Default export (dosya başına bir tane)
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Merhaba, ben ${this.name}`;
  }
}

export default User;

// Ya da satır içi default export
export default function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

**Default Importlar:**

Default export'u import etmek için süslü parantez gerekmez, Python importlarına benzer.
Sözdizimi: `import <> from 'Path/to/Module'`

```js
// app.js - Default exportları import et
import User from './user.js';
import validateEmail from './validation.js';

const user = new User("Ali", "ali@example.com");
console.log(user.greet());

if (validateEmail("test@example.com")) {
  console.log("Geçerli e-posta");
}
```

**Karışık Export/Import:**

Aynı dosyada birden fazla isimli export ve bir default export olabilir.
Import ederken hem default hem isimli importları birleştirebilirsiniz. Sadece default import'un süslü parantezsiz ilk sırada olduğunu unutmayın.

```js
// utils.js - Hem isimli hem default export
const API_URL = "https://api.example.com";

export const formatDate = (date) => {
  return date.toLocaleDateString();
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Default export
export default class ApiClient {
  constructor(baseUrl = API_URL) {
    this.baseUrl = baseUrl;
  }

  get(endpoint) {
    const response = fetch(`${this.baseUrl}${endpoint}`);
    return response.json();
  }
}

// app.js - Karışık import
import ApiClient, { formatDate, capitalize } from './utils.js';

const client = new ApiClient();
console.log(formatDate(new Date()));
console.log(capitalize("merhaba"));
```

**Optional Chaining (?.) - ES2020:**

Optional chaining, iç içe nesne özelliklerine güvenli şekilde erişmenizi sağlar. Zincirin herhangi bir parçası `null` veya `undefined` ise hata vermek yerine `undefined` döner.
Her türlü özellik erişimi, metot çağrısı ve dizi indekslemede çalışır.

```js
let user = {
  name: "Ali",
  address: {
    street: "123 Ana Cadde",
    city: "İstanbul"
  }
};

// Güvenli özellik erişimi
console.log(user?.address?.street);    // "123 Ana Cadde"
console.log(user?.address?.zipCode);   // undefined (hata yok)
console.log(user?.phone?.number);      // undefined (hata yok)

// Metot çağrısı
user?.someMethod?.();                  // someMethod yoksa hata vermez

// Dizi erişimi
console.log(user?.hobbies?.[0]);       // undefined (hata yok)
```

Bu ES6+ özellikleri, JavaScript kodunu daha kısa, okunabilir ve sürdürülebilir yapar - etkili React Native geliştirme için temel becerilerdir!

---

## **9. Asenkron JavaScript**

JavaScript **tek iş parçacıklı** (single-threaded) bir dildir, ancak uzun süren işlemleri (API çağrıları, dosya işlemleri, zamanlayıcılar gibi) asenkron tekniklerle yönetir. Asenkron programlamayı anlamak React Native için kritiktir.

### 9.1 Event Loop'u Anlamak

JavaScript, asenkron işlemleri yönetmek için olay tabanlı, engellemeyen bir model kullanır. **Event loop** (olay döngüsü), JavaScript'in engellemeyen işlemleri tarayıcıya (veya Node.js'e) devredip, tamamlandığında callback'leri çalıştırmasını sağlayan mekanizmadır.

Örneğin, ana iş parçacığını engellemeden birkaç saniye sonra bir fonksiyon çalıştırmak isteriz. Aşağıdaki örneğe bakın:

**Sorun:**
```js
console.log("Başla");

// Bu kod uygulamayı 3 saniye boyunca tamamen kilitler
for (let i = 0; i < 3000000000; i++) {} // Bunu yapmayın!

console.log("Bitti");
```

**Çözüm - Asenkron İşlemler:**

Yukarıdaki engelleyici kod, UI'yi dondurmadan gecikmeli çalışan `setTimeout` ile değiştirilebilir.

SetTimeout, asenkron işlemlere örnektir. Ana iş parçacığı zamanlayıcıyı beklerken çalışmaya devam edebilir.
`SetTimeout` fonksiyonu iki parametre alır:  
1. Gecikmeden sonra çalışacak callback fonksiyonu.  
2. Gecikme süresi (milisaniye cinsinden, 1000 ms = 1 saniye).  

```js
console.log("Başla");

setTimeout(() => {
  console.log("Bu 1 saniye sonra çalışır");
}, 1000);

console.log("Bitti");

// Çıktı:
// "Başla"
// "Bitti"
// "Bu 1 saniye sonra çalışır" (1 saniye sonra)
```

### 9.2 Callback'ler (Eski Yöntem)

Callback'ler, başka fonksiyonlara argüman olarak verilen ve asenkron işlem tamamlandığında çalışan fonksiyonlardır. JavaScript'te Promises ve async/await'ten önce asenkron görevler için geleneksel yöntemdi.

**Temel Callback:**
```js
function fetchUserData(userId, callback) {
  // API çağrısını simüle et
  setTimeout(() => {
    const user = { id: userId, name: "Ali", email: "ali@example.com" };
    callback(null, user); // Hata-öncelikli callback deseni
  }, 1000);
}

fetchUserData(123, (error, user) => {
  if (error) {
    console.error("Hata:", error);
  } else {
    console.log("Kullanıcı:", user);
  }
});
```

**Callback Hell (Callback Cehennemi):**

Callback'lerdeki ana sorun "callback hell"dir; birden fazla iç içe callback kodun okunmasını ve bakımını zorlaştırır.
Aşağıda iç içe callback'lerin nasıl karmaşıklaştığını görebilirsiniz:

```js
// İç içe callback'ler okunması ve bakımı zor hale gelir
fetchUser(userId, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    fetchUserPosts(user.id, (error, posts) => {
      if (error) {
        console.error(error);
      } else {
        fetchPostComments(posts[0].id, (error, comments) => {
          if (error) {
            console.error(error);
          } else {
            // Sonunda veriye ulaştık...
            console.log(comments);
          }
        });
      }
    });
  }
});
```

### 9.3 Promises (Daha İyi Yöntem)

Asenkron işlemleri yönetmenin daha iyi yolu **Promise** kullanmaktır. Promise, şimdi, sonra veya hiç olmayabilecek bir değeri temsil eder. Üç durumda olabilir: **pending** (beklemede), **fulfilled** (başarılı), **rejected** (başarısız).

- **Pending**: Başlangıç durumu, ne başarılı ne başarısız
- **Fulfilled**: İşlem başarıyla tamamlandı
- **Rejected**: İşlem başarısız oldu

**Promise Oluşturma:**

Promise'lar, iki parametre alan `Promise` yapıcısı ile oluşturulur: `resolve` ve `reject`. Başarı için `resolve`, hata için `reject` kullanılır.
Aşağıdaki örnekte, 1 saniye sonra rastgele başarılı veya başarısız olan bir asenkron işlem simüle ediliyor.

```js
// Temel Promise oluşturma
let promise = new Promise((resolve, reject) => {
  let success = Math.random() < 0.5;

  setTimeout(() => {
    if (success) {
      resolve({ status: "ok", message: "Tamamlandı" });
    } else {
      reject({ status: "error", message: "Başarısız" });
    }
  }, 1000);
});

// Promise kullanımı
promise
  .then(result => {
    console.log("Başarılı:", result);
  })
  .catch(error => {
    console.error("Hata:", error);
  });
```

Promise ile kullanılan metotlar:

- `resolve(value)` - Asenkron işlem başarıyla tamamlandığında çağrılır. `value` promise'in sonucu olur.
- `reject(error)` - Asenkron işlem başarısız olduğunda çağrılır. `error` reddedilme sebebidir.
- `.then(onFulfilled, onRejected)` - Başarılı ve başarısız durumlar için callback ekler. Birden fazla `.then()` zincirlenebilir.
- `.catch(onRejected)` - Sadece başarısız durum için callback ekler. `.then(null, onRejected)`'ın kısayoludur.

**Promise Zincirleme:**

Bu örnekte, birden fazla asenkron işlemi promise ile zincirleyerek daha okunabilir kod elde ediyoruz.
Her işlem bir öncekine bağlı ve `.then()` ile zincirleniyor.

```js
function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Ali" });
    }, 500);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "İlk Gönderi" }, { id: 2, title: "İkinci Gönderi" }]);
    }, 500);
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, text: "Harika gönderi!" }, { id: 2, text: "Teşekkürler!" }]);
    }, 500);
  });
}

// Promise zincirleme - callback'lerden çok daha temiz
fetchUser(123)
  .then(user => {
    console.log("Kullanıcı alındı:", user);
    return fetchUserPosts(user.id);
  })
  .then(posts => {
    console.log("Gönderiler alındı:", posts);
    return fetchPostComments(posts[0].id);
  })
  .then(comments => {
    console.log("Yorumlar alındı:", comments);
  })
  .catch(error => {
    console.error("Bir şeyler ters gitti:", error);
  });
```

Yukarıdaki örnekte, her `.then()` yeni bir promise döndürür ve birden fazla asenkron işlemi okunabilir şekilde zincirlememizi sağlar. Zincirde herhangi bir promise reddedilirse, kontrol en yakın `.catch()` bloğuna geçer.

### 9.4 Async/Await (En Temiz Yöntem)

`async` ve `await`, Promise üzerine kurulu anahtar kelimelerdir ve asenkron kodu senkron kod gibi yazmanızı sağlar. Okunması ve bakımı kolaylaşır.

Bir `async` fonksiyonda, bir promise'in önüne `await` koyarak kodun promise çözülene kadar durmasını sağlayabilirsiniz. Fonksiyonun kendisi bir promise döndürür.
Aşağıdaki örnekte, asenkron veri çekmeyi simüle eden `fetchData` fonksiyonu var. `data` değişkeni promise çözülene kadar bekler, fonksiyonun yürütülmesi durur. Ancak ana iş parçacığı engellenmez ve diğer kodlar çalışmaya devam edebilir.

- *Önemli:* `await` sadece `async` fonksiyonlarda kullanılabilir. Fonksiyon dışında kullanırsanız sözdizimi hatası alırsınız. En üst seviyede kullanmak için kodunuzu hemen çalışan async fonksiyon (IIFE) ile sarmalayabilirsiniz. Promise'in önüne `await` koymazsanız, kod promise çözülmesini beklemez ve promise nesnesini alırsınız.
- *Önemli-2:* Bir `async` fonksiyonu bir değişkene atarsanız, o değişken fonksiyonun gerçek dönüş değerini değil, bir promise tutar.

**Temel Async/Await:**
```js
// 'async' ile işaretlenen fonksiyon her zaman Promise döndürür
async function fetchData() {
  // 'await' Promise çözülene kadar yürütmeyi durdurur
  let data = await new Promise(resolve => {
    setTimeout(() => resolve("Veri yüklendi"), 1000);
  });

  console.log(data); // "Veri yüklendi" (1 saniye sonra)
  return data; // Promise'in çözülmüş değeri olur
}

// Async fonksiyonu çağırma
fetchData().then(result => {
  console.log("Fonksiyonun dönüşü:", result);
});
```

Asenkron JavaScript'i anlamak, ağ istekleri, kullanıcı etkileşimleri ve arka plan işlemlerini UI'yi dondurmadan yönetebilen duyarlı React Native uygulamaları geliştirmek için gereklidir!