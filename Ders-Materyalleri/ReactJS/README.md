# Mobil Programlama

# **React Temelleri**

---

## **1. React'e Genel Bakış ve Neden Önemli**

### **1.1 React Nedir?**

**React**, Facebook (şimdi Meta) tarafından kullanıcı arayüzleri oluşturmak için yaratılmış bir JavaScript kütüphanesidir.
İlk olarak 2013 yılında, geliştiricilerin hızlı, dinamik ve yeniden kullanılabilir web uygulamaları oluşturmasına yardımcı olmak için yayınlanmıştır.

HTML **Belge Nesne Modeli'ni (DOM)** doğrudan manipüle eden geleneksel web çerçevelerinin aksine, React yeni bir düşünce tarzı sunar:

> "UI'ın nasıl görünmesi gerektiğini açıklayın, React onu verimli bir şekilde güncellemeyi halletsin."

React tüm uygulamanızı kontrol etmeye çalışmaz — yalnızca **görünüm katmanına**, yani şeylerin ekranda nasıl göründüğüne ve davrandığına odaklanır.

---

### **1.2 Ana Fikir: Bildirimsel UI**

Geleneksel olarak, arayüzler oluşturmak **zorunlu programlama** gerektiriyordu — bilgisayara UI'ı *nasıl* güncelleyeceğini adım adım söylemek.

Örnek (zorunlu):

```js
// Vanilla JavaScript
const button = document.querySelector("#btn");
let count = 0;
button.addEventListener("click", () => {
  count++;
  button.textContent = `${count} kez tıklandı`;
});
```

React'te, belirli bir durum için **UI'ın nasıl görünmesi gerektiğini** açıklarsınız ve React güncellemeleri otomatik olarak halleder.

Örnek (bildirimsel):

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count} kez tıklandı
    </button>
  );
}
```

Metni veya HTML'i manuel olarak değiştirmiyorsunuz; sadece React'e şunu söylüyorsunuz:

> "Eğer durum X ise, bu UI'ı renderla."

Bu yaklaşım kodu **anlaşılması daha kolay** ve **hatalara daha az eğilimli** hale getirir.

---

### **1.3 Yapı Taşı: Bileşenler**

React'in kalbinde **bileşenler** kavramı yatar.

Bir **bileşen**, bir buton, form veya başlık gibi küçük, yeniden kullanılabilir bir UI parçasıdır — karmaşık arayüzler oluşturmak için başkalarıyla birleştirilebilir.

* Her bileşen:

  * Kendi mantığına sahiptir (JavaScript ile yazılır)
  * Kendi UI'ını döndürür (JSX kullanarak yazılır)
  * Kendi verilerini tutabilir (durum)

Örnek bileşenler şunları içerebilir:

* `<Button />`
* `<UserProfile />`
* `<TodoItem />`

React uygulamaları, tam kullanıcı arayüzünü oluşturmak için Lego blokları gibi **bileşenleri bir araya getirerek** oluşturulur.

---

### **1.4 React Neden Popüler Oldu**

React, birkaç temel özelliği sayesinde hızla popülerlik kazandı:

| Özellik                     | Açıklama                                                           |
| --------------------------- | ------------------------------------------------------------------ |
| **Yeniden Kullanılabilir Bileşenler** | Bir kez yap, her yerde kullan. Bakımı kolaylaştırır.              |
| **Bildirimsel Sözdizimi**   | UI'ın nasıl güncelleyeceğine değil, nasıl görünmesi gerektiğine odaklan. |
| **Sanal DOM**               | React sadece gerekli olanı günceller, performansı artırır.        |
| **Tek Yönlü Veri Akışı**   | Veriler tek yönde (üstten → alta) hareket eder, durum değişikliklerini öngörülebilir yapar. |
| **Güçlü Ekosistem**         | Büyük bir topluluk ve sayısız araç/kütüphane desteği.             |

---

### **1.5 React'ten React Native'e**

React başlangıçta **web** için oluşturuldu, ancak aynı fikirler — bileşenler, durum, props ve hook'lar — mobil geliştirmede de eşit derecede güçlüdür.

**React Native**, React'in prensiplerini kullanır ancak bileşenleri HTML yerine **yerel mobil UI öğeleri** kullanarak renderlar.

| React (Web)                                                     | React Native (Mobil)                                                    |
| --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| DOM'a renderlar (`<div>` veya `<span>` gibi HTML öğeleri)      | `<View>`, `<Text>`, `<Button>` gibi yerel mobil bileşenlere renderlar  |
| Stil için CSS kullanır                                          | JavaScript tabanlı `StyleSheet` kullanır                               |
| Tarayıcıda çalışır                                              | Yerel koda bir köprü üzerinden Android/iOS'ta çalışır                   |

Yani React öğrendiğinizde, aslında React Native'in **temel yapısını** öğrenmiş olursunuz.

---

## **2. JSX ve Bileşenler**

### **2.1 JSX Nedir?**

**JSX (JavaScript XML)**, React'te **JavaScript içinde HTML benzeri kod yazmanıza** olanak tanıyan özel bir sözdizmidir.

JavaScript'in tam gücüne sahipken kullanıcı arayüzünüzü görselleştirmeyi kolaylaştırır.

Örnek:

```jsx
const element = <h1>Merhaba, dünya!</h1>;
```

JSX HTML gibi görünür, ancak aslında **sözdizimsel şeker**(syntactic sugar)dir — React onu arka planda JavaScript'e çevirir.

Altta, yukarıdaki örnek şuna eşdeğerdir:

```js
const element = React.createElement('h1', null, 'Merhaba, dünya!');
```

**Kısaca:** JSX HTML değildir — HTML'e *benzeyen* JavaScript'tir.

---

### **JSX Neden?**

1. **Görsel netlik:** UI'ınızın nasıl göründüğünü doğrudan kodda görebilirsiniz.
2. **Entegrasyon:** JavaScript mantığını (örn. değişkenler, koşullar) doğrudan `{}` parantezleri içinde gömebilirsiniz.
3. **Tip güvenliği:** Hatalar araçlar (ESLint veya TypeScript gibi) tarafından erken yakalanır.

---

### **2.2 JSX'i Doğru Yazmak**

JSX'in HTML'den farklı birkaç özel **kuralı** vardır:

| Kural                                     | Örnek                                        | Not                                                     |
| ----------------------------------------- | -------------------------------------------- | ------------------------------------------------------- |
| **Tek kök öğe** döndürmelidir             | `<div><h1>Merhaba</h1><p>Dünya</p></div>`   | Yan yana birden fazla kardeş döndüremezsiniz.           |
| `class` yerine **className** kullanın     | `<div className="container">...</div>`       | Çünkü `class` ayrılmış bir JavaScript anahtar kelimesidir. |
| Özellikler için **camelCase** kullanın    | `<button onClick={handleClick}>Tıkla</button>` | `onClick`, `onclick` değil.                             |
| JavaScript ifadeleri `{}` içinde gider   | `<p>{username}</p>`                          | Değişkenler, fonksiyonlar veya mantık için çalışır.     |
|Bileşenlerin adları büyük harfle başlamalıdır | `<MyComponent />`                      | Küçük harfli isimler HTML etiketleri olarak kabul edilir.  |

Örnek:

```jsx
function Welcome() {
  const name = "Ali";
  return <h2>Hoş geldin, {name}!</h2>;
}
```

---

### **2.3 Bileşen Nedir?**

Bir **bileşen**, React'teki temel yapı taşıdır.
Bu bir **fonksiyon**dur (bazen sınıf olabilir, ancak sadece fonksiyonlara odaklanıyoruz) ve:

* **Girdi verisi** alır (*props* denir), ve
* **JSX** döndürür (ekranda görünmesi gerekenleri).

Temel örnek:

```jsx
function Hello() {
  return <h1>Merhaba React!</h1>;
}
```

Bu bileşeni kullanmak için şunu yazabilirsiniz:

```jsx
function App() {
  return (
    <div>
      <Hello />
      <Hello />
    </div>
  );
}
```

Burada, `<Hello />` bir HTML etiketi gibi kullanılır — ancak bu sizin tanımladığınız **özel bir bileşendir**!

---

### **2.4 Fonksiyon Bileşenlerini Detayda**

Biraz daha dinamik bir bileşen oluşturalım.

```jsx
function Greeting() {
  const user = "Ayşe";
  return <p>Merhaba, {user}! Tekrar hoş geldin.</p>;
}
```

**Nasıl çalışır:**

* Bileşen düz bir JavaScript fonksiyonudur.
* Fonksiyonun adı **büyük harfle** başlamalıdır (önemli!).
* Döndürülen JSX, o bileşenin UI'ı olur.

Küçük harfle adlandırırsanız (örneğin `function greeting()`), React bunun normal bir HTML etiketi olduğunu düşünür — sizin bileşeniniz değil.

---

### **2.5 Bileşenleri Birleştirmek**

Bileşenler **başka bileşenler** içerebilir ve ağaç benzeri bir yapı oluştururlar.

Örnek:

```jsx
function Header() {
  return <h1>Uygulamam</h1>;
}

function Footer() {
  return <footer>© 2025 Uygulamam</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Bu ana içerik alanıdır.</p>
      <Footer />
    </div>
  );
}
```

Buna **kompozisyon** denir ve büyük uygulamalar bu şekilde oluşturulur — birçok küçük, yeniden kullanılabilir bileşeni bir araya getirerek.

---

### **2.6 Bileşen Dosya Yapısı**

Basit bir React projesi genellikle bu deseni takip eder:

```
src/
  App.js          → Kök bileşen
  index.js        → Giriş noktası (<App /> renderlar)
  components/
    Header.js
    Footer.js
    Button.js
```

Her bileşen:

* Kendi dosyasında yaşar.
* Başka yerde kullanılmak üzere export edilir.

Örnek:

```jsx
// Header.js
export default function Header() {
  return <h1>Uygulamama Hoş Geldiniz</h1>;
}
```

Sonra `App.js` içinde:

```jsx
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <p>İçerik buraya gelir.</p>
    </div>
  );
}
```

---

## **3. Props**

### **3.1 Props Nedir?**

**"Props"** kelimesi **properties** (özellikler) anlamına gelir.
Props, bir bileşenden (ebeveyn) diğerine (çocuk) **veri geçirme** yöntemidir.

Props'u **fonksiyon parametreleri** gibi düşünün — bileşenlerin veri almasını ve girdiye bağlı olarak farklı görüntülenmesini sağlarlar.

Örnek:

```jsx
function Welcome(props) {
  return <h2>Merhaba, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Welcome name="Ali" />
      <Welcome name="Ayşe" />
    </div>
  );
}
```

**Burada neler oluyor:**

* `App` bileşeni `Welcome` bileşenini iki kez çağırıyor.
* Her çağrı `name` prop'u için farklı bir değer geçiriyor.
* `Welcome` bunu parametre (`props`) olarak alıyor ve görüntülüyor.

**Çıktı:**

```
Merhaba, Ali!
Merhaba, Ayşe!
```

---

### **3.2 Props Nasıl Çalışır**

Bunu görselleştirelim:

```
Ebeveyn Bileşen (App)
        |
        ├── name="Ali" geçirir → <Welcome name="Ali" />
        └── name="Ayşe" geçirir → <Welcome name="Ayşe" />

Çocuk Bileşen (Welcome)
        ↓
     JSX içinde props.name kullanır
```

Props **ebeveynden çocuğa** akar — **asla tersi yönde değil**.
Bu tek yönlü veri akışı **unidirectional data flow** olarak bilinir ve React'in temel prensiplerinden biridir.

---

### **3.3 Props için Destructuring Kullanmak**

`props.name` yazmayı tekrarlamak ayrıntılı olabilir.
Sözdizimini basitleştirmek için **nesne destructuring** kullanabiliriz.

Örnek:

```jsx
function Welcome({ name }) {
  return <h2>Merhaba, {name}!</h2>;
}
```

Bu şu anlama gelir:

```js
// Şuna eşdeğer:
function Welcome(props) {
  const name = props.name;
  ...
}
```

Destructuring özellikle bileşeniniz birden fazla prop aldığında kullanışlıdır.

Örnek:

```jsx
function Profile({ name, course, year }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Ders: {course}</p>
      <p>Yıl: {year}</p>
    </div>
  );
}

function App() {
  return (
    <Profile name="Ahmet Yılmaz" course="Mobil Programlama" year="2025" />
  );
}
```

---

### **3.4 Farklı Türde Props Geçirmek**

Props sadece metin değil, **her türlü veri** olabilir:

| Tür      | Örnek                                      | Açıklama                    |
| -------- | ------------------------------------------ | --------------------------- |
| String   | `<Title text="Merhaba" />`                 | Metin verisi                |
| Number   | `<Score value={99} />`                     | Sayılar `{}` içinde olmalı  |
| Boolean  | `<Button disabled={true} />`               | Boolean bayraklar           |
| Object   | `<User data={{ name: "Ali", age: 21 }} />` | Karmaşık veriler           |
| Function | `<Button onClick={handleClick} />`         | Olay işleyicileri          |
| JSX      | `<Card content={<p>Merhaba</p>} />`        | Başka bir bileşen geçir!   |

Örnek:

```jsx
function Button({ label, onPress }) {
  return <button onClick={onPress}>{label}</button>;
}

function App() {
  function sayHello() {
    alert("Props'tan merhaba!");
  }

  return <Button label="Bana Tıkla" onPress={sayHello} />;
}
```

Burada, **ebeveyn bir fonksiyonu** prop olarak **çocuğa geçiriyor**, çocuk bileşenlerin ebeveyn tanımlı aksiyonları tetiklemesine olanak tanıyor — çok yaygın bir React deseni.

---

### **3.5 Varsayılan Props (İsteğe Bağlı)**

Bazen bir prop sağlanmadığında bileşenin **varsayılan bir değere** sahip olmasını istersiniz.

Örnek:

```jsx
function Greeting({ name = "Misafir" }) {
  return <h3>Merhaba, {name}!</h3>;
}

function App() {
  return (
    <>
      <Greeting name="Ahmet" />
      <Greeting />
    </>
  );
}
```

**Çıktı:**

```
Merhaba, Ahmet!
Merhaba, Misafir!
```

---

### **3.7 Yaygın Hatalar**

1.  **Çocuk bileşen içinde props'u değiştirmek**

   ```jsx
   props.name = "Yeni İsim"; // YANLIŞ
   ```

   Props **salt okunurdur** — değiştirmeye çalışırsanız React sizi uyarır.

2.  **JavaScript değerleri için süslü parantezleri unutmak**

   ```jsx
   <Card title="Başlık" score=100 /> // YANLIŞ
   <Card title="Başlık" score={100} /> // DOĞRU
   ```

3.  **Props sadece aşağı akar** — veriler ebeveynden çocuğa hareket eder.

---

## **4. Durum (useState)**

### **4.1 "Durum" Nedir?**

Şimdiye kadar bileşenleriniz **statik**ti — bilgi gösteriyorlar ama kendi başlarına değişmiyorlar.
Gerçek uygulamalarda ise, **bilgiyi hatırlayan** ve **işler değiştiğinde güncellenen** bileşenlere ihtiyaç duyarız — kullanıcı girdisi, geçişler veya sayaçlar gibi.

İşte **durum** burada devreye girer.

> **Durum**, belirli bir bileşene ait *değiştirilebilir veriyi* temsil eder.
> Durum değiştiğinde, bileşen yeni verilerle yeniden renderlanır.

---

### **4.2 useState'i Tanıtmak**

Modern React'te (ve React Native'de), *fonksiyon bileşenlerinde* durumu yönetmek için **useState Hook'unu** kullanırız.

**Hook**, React özelliklerine durum ve yaşam döngüsü davranışı gibi "bağlanmanıza" olanak tanıyan özel bir fonksiyondur.

**Temel sözdizimi:**

```jsx
import { useState } from "react";

const [stateVariable, setStateFunction] = useState(initialValue);
```

* `stateVariable` → mevcut durum değerini tutar.
* `setStateFunction` → o değeri günceller.
* `initialValue` → bileşen ilk renderlandığında varsayılan durum.

---

### **4.3 Örnek: Basit Sayaç**

Basit bir sayaç uygulaması oluşturalım.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // başlangıç değeri = 0

  function increase() {
    setCount(count + 1); // durumu güncelle
  }

  return (
    <div>
      <h2>Sayaç: {count}</h2>
      <button onClick={increase}>Artır</button>
    </div>
  );
}
```

**Nasıl çalışır:**

1. `useState(0)` başlangıç değeri 0 olan bir `count` değişkeni oluşturur.
2. `setCount()` fonksiyonu o değeri değiştirir.
3. `setCount()` çağrıldığında, React **otomatik olarak bileşeni yeniden renderlar** — yeni `count`'u gösterir.

**Temel çıkarım:** Durumu asla doğrudan değiştirmezsiniz.
`count++` (yanlış)
`setCount(count + 1)` (doğru)

---

### **4.4 Durum Değişiklikleri Yeniden Renderlama Yapar**

React, durum değiştiğinde UI'ı otomatik olarak günceller.

Butona tıkladığınızda:

1. `setCount()` durumu değiştirir.
2. React `Counter()` fonksiyonunu yeniden çalıştırır.
3. Yeni `count` değeri ekranda görüntülenir.

Manuel olarak yeniden renderlamanıza veya yenilemenize gerek yok — React bunu arka planda halleder.

---

### **4.5 Durumu Farklı Yollarla Güncellemek**

Durumu **önceki değeri kullanarak** da güncelleyebilirsiniz, özellikle birden fazla güncelleme hızlı bir şekilde gerçekleşebileceğinde.

Örnek:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function increaseTwice() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increaseTwice}>+2</button>
    </>
  );
}
```

Burada, React'in her zaman en son durum değerini kullanması için `setCount()` içinde **bir fonksiyon** kullanıyoruz.

---

### **4.6 Birden Fazla Durum Değerini Yönetmek**

Farklı veri parçaları için `useState()`'i birden fazla kez çağırabilirsiniz.

Örnek:

```jsx
function UserInfo() {
  const [name, setName] = useState("Ali");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h3>{name}</h3>
      <p>Yaş: {age}</p>
      <button onClick={() => setAge(age + 1)}>Doğum Günü!</button>
    </div>
  );
}
```

Her `useState()` çağrısı **bağımsızdır** — tek bir bileşende ihtiyaç duyduğunuz kadar veri parçasını yönetebilirsiniz.

---

### **4.7 Örnek: Durumu Değiştirme**

Durum basit UI geçişleri için de kullanılabilir.

```jsx
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function toggleSwitch() {
    setIsOn(!isOn);
  }

  return (
    <button onClick={toggleSwitch}>
      {isOn ? "AÇIK" : "KAPALI"}
    </button>
  );
}
```

**Açıklama:**

* `isOn` boolean bir değer tutar (true/false).
* Her buton tıklaması değeri çevirir.
* React buton metnini buna göre yeniden renderlar.

Bu basit desen — *bir şeyi durumda sakla, renderla, etkileşimde değiştir* — hem React hem de React Native'de sürekli kullanılır.

---

### **4.8 Durum vs Props**

**Props** ve **durum**u karıştırmak kolaydır, işte basit bir karşılaştırma:

| Açı       | Props                          | Durum                                       |
| --------- | ------------------------------ | ------------------------------------------- |
| Tanım     | Bileşene geçirilen veri        | Bileşen içinde yönetilen veri               |
| Değiştirilebilirlik | Salt okunur        | Set fonksiyonu ile değiştirilebilir         |
| Sahibi    | Ebeveyn bileşen               | Bileşenin kendisi                          |
| Kullanım  | Konfigürasyon, girdiler       | Dinamik, etkileşimli veri                   |
| Örnek     | `<Greeting name="Ali" />`      | `const [count, setCount] = useState(0)`     |

Veri **geçirmek** için **props**, bileşen **içinde** veri işlemek için **durum** kullanacaksınız.

---

### **4.9 useState ile Yaygın Hatalar**

| Hata                                    | Neden Yanlış                      | Doğru Yol                                               |
| --------------------------------------- | --------------------------------- | ------------------------------------------------------- |
| Durumu doğrudan değiştirme: `count++`  | Yeniden renderlama tetiklemez     | `setCount(count + 1)` kullanın                         |
| `useState`'i import etmeyi unutmak      | React Hook'u tanımaz              | `import { useState } from 'react'`                      |
| Yanlış başlangıç türü ayarlama          | Runtime hataları oluşturabilir    | Veri türünüzle eşleştirin (örn. diziler için `useState([])`) |
| Anında güncelleme bekleme               | Durum güncellemeleri **asenkrondur** | setState sonrası durum hemen değişmez                   |

---

## **5. Renderlama ve Bileşen Ağacı**

### **Öğrenme Hedefleri**

Bu bölümün sonunda şunları yapabilmelisiniz:

* React'in bir kullanıcı arayüzü oluşturmak için bileşenleri nasıl **renderlediğini** anlamak.
* **Bileşen ağacını** ve ebeveyn-çocuk ilişkilerinin nasıl çalıştığını görselleştirmek.
* **Durum veya props değişikliklerinin** yeniden renderlemeyi nasıl tetiklediğini açıklamak.
* **Sanal DOM**'un ne olduğunu ve neden performansı artırdığını tanımak.
* Bu kavramların **React Native**de nasıl benzer şekilde uygulandığını görmek.

---

### **5.1 React'te "Renderlama" Ne Demek?**

Web geliştirmede, **renderlama** *bir şeyi ekranda göstermek* anlamına gelir.

React'te renderlama şu durumlarda gerçekleşir:

1. Uygulama başlatılır — React bileşenleri ilk kez görüntüler.
2. Veriler değişir (**durum** veya **props** ile) — React sadece değişen kısımları günceller.

Şunu yazdığınızda:

```jsx
function App() {
  return <h1>Merhaba React!</h1>;
}
```

React bileşeninizi okur, **JSX**'ini öğelere çevirir ve ekranda renderlar.

Peki React neyi çizeceğine ve ne zaman güncelleyeceğine nasıl karar verir?
→ İşte **bileşen ağacı** ve **Sanal DOM** burada devreye girer.

---

### **5.2 Bileşen Ağacı**

Her React uygulaması **bileşen ağacı** olarak görselleştirilebilir.
Her bileşen **çocuk bileşenlere** sahip olabilir, bunlar da kendi çocuklarına sahip olabilir.

Örneğin:

```jsx
function Header() {
  return <h1>Uygulamam</h1>;
}

function Footer() {
  return <footer>© 2025 Uygulamam</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Uygulamamı hoş geldiniz!</p>
      <Footer />
    </div>
  );
}
```

**Bileşen Ağacı:**

```
App
├── Header
├── <p>Uygulamamı hoş geldiniz!</p>
└── Footer
```

Ağaçtaki her düğüm bir bileşen örneğini temsil eder.
React uygulamayı renderlediğinde, **kökten** (`App`) başlar ve aşağı doğru çalışır.

---

### **5.3 React Uygulamasının Kökü**

Her React projesi **bir kök bileşeni** renderlayerek başlar — genellikle `App` olarak adlandırılır.

Web React uygulamasında, şöyle görünür (`index.js` içinde):

```jsx
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

* `ReactDOM.createRoot()` React'i gerçek HTML sayfasına bağlar.
* `<App />` uygulamanızın kök bileşenidir.
* Ekranda gördüğünüz her şey `<App />` içindeki bileşenlerden gelir.

**React Native'de**, bu kavram aynıdır — `ReactDOM` yerine **mobil UI'ya** renderlar (HTML yerine yerel görünümler kullanır).

---

### **5.4 Sanal DOM: React Nasıl Verimli Günceller**

Bir şey değiştiğinde (örneğin, `setState` çağırıyorsunuz), React UI'yı güncellemesi gerekir.
Ancak tüm sayfayı yeniden çizmek yerine, React **Sanal DOM** kullanarak neyin değiştiğini anlar.

**Sanal DOM** = React'in bellekte tuttuğu gerçek DOM'un hafif kopyası.

Şu şekilde çalışır:

1. React UI'ın **sanal temsilini** oluşturur.
2. Durum/props değiştiğinde, React **yeni** bir sanal DOM oluşturur.
3. React **eskiyi** ve **yeniyi** karşılaştırır (**reconciliation** adı verilen süreç).
4. React ekranda **sadece gerçekten değişen kısımları** günceller.

Örnek:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Ekle</button>
    </div>
  );
}
```

"Ekle"ye tıkladığınızda:

* Sadece `<h2>` öğesi değişir.
* `<button>` aynı kalır.
* React **sadece o bir öğeyi** günceller, performans sağlar.

**React Native'de**, kavram aynıdır — React UI'ın *nasıl görünmesi gerektiğini* karşılaştırır ve sadece etkilenen yerel bileşenleri günceller.

---

### **5.5 React Ne Zaman Bir Bileşeni Yeniden Renderlar?**

Bir bileşen şu durumlarda yeniden renderlanır:

1. **Durumu değişir** (`useState` veya diğer hook'lar ile).
2. **Props'u değişir** (ebeveyn yeni veri geçirdiği için).
3. **Ebeveyni yeniden renderlanır**, bu da onu da yeniden renderlemeye neden olur.

Örnek:

```jsx
function Child({ value }) {
  console.log("Çocuk yeniden renderlandı");
  return <p>{value}</p>;
}

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child value={count} />
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </>
  );
}
```

Butona her tıklandığında:

* Ebeveynin `count` durumu değişir.
* Ebeveyn yeniden renderlanır.
* `Child` bileşeni yeni props alır ve o da yeniden renderlanır.

React tüm bunları otomatik ve verimli bir şekilde yapar.

---

### **5.6 Yeniden Renderlama vs Yeniden Mount**

Bunlar öğrencilerin sık karıştırdığı iki terimdir:

| Terim                | Anlam                                                 | Örnek                                     |
| -------------------- | ----------------------------------------------------- | ----------------------------------------- |
| **Yeniden Renderlama** | React güncellenmiş UI üretmek için bileşeni tekrar çağırır | Durum/props değiştiğinde gerçekleşir      |
| **Mount**            | Bileşen ilk kez ekranda göründüğünde                 | Uygulama yüklendiğinde bir kez gerçekleşir |
| **Unmount**          | Bileşen UI'dan kaldırıldığında                        | Örnek: modal veya ekranı gizleme          |

Görselleştirme örneği:

* "Detayları Göster"e tıklarsınız → bileşen **mount olur**
* Verileri güncellersinis → bileşen **yeniden renderlanır**
* "Detayları Gizle"ye tıklarsınız → bileşen **unmount olur**

---

### **5.7 Bileşen Ağaçları Neden Önemli**

**Ağaç yapısını** anlamak şunlara yardımcı olur:

* **Veri akışının** nasıl olduğunu öngörmek (props ağaçta aşağı gider).
* Hangi bileşenlerin **duruma sahip** olduğunu ve hangilerinin sadece veri görüntülediğini bilmek.
* Yeniden renderlemeleri debug etmek (örn. çok fazla çocuk gereksiz yeniden renderlanıyorsa).
* **React Native navigasyonuna** kolayca geçiş yapmak, burada her ekran ağaçtaki bir bileşendir.

React Native'de, bileşen ağacı doğrudan **yerel görünümlere** (ekranlar, butonlar, resimler vb.) eşlenir ve aynı ebeveyn-çocuk ilişkilerini korur.

---

### **5.8 Görselleştirme Örneği**

Bu uygulamayı hayal edin:

```jsx
function Header() { return <h1>Başlık</h1>; }
function Content() { return <p>Ana içerik</p>; }
function Footer() { return <p>Alt bilgi</p>; }

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
```

**Bileşen Ağacı:**

```
App
 ├── Header
 ├── Content
 └── Footer
```

Daha sonra `Content`'te veriyi değiştiren bir `useState` eklersek, ağacın **sadece o dalı** yeniden renderlanır.
React'in hızlı kalma yöntemi budur — seçicidir.

---

### **5.9 React Renderlama Akışı Özeti**

1. **İlk render** → React UI'yı ilk kez oluşturur ve görüntüler.
2. **Durum veya props değişikliği** → React yeni bir Sanal DOM ağacı oluşturur.
3. **Diffing/reconciliation** → React eski ve yeni ağaçları karşılaştırır.
4. **DOM (veya yerel görünüm) güncellemesi** → React sadece değişenleri günceller.
5. **Yeniden render** → Bileşen fonksiyonları yeni verileri yansıtmak için tekrar çalışır.

---

## **6. Hızlı Tekrar**

#### React'e Genel Bakış

* React, **kullanıcı arayüzleri** oluşturmak için bir **JavaScript kütüphanesidir**.
* **Bildirimsel**dir: UI'ın *nasıl* görünmesi gerektiğini açıklarsınız ve React *nasıl* renderleyeceğini çözer.
* **Bileşen tabanlı**dır: uygulamalar küçük, yeniden kullanılabilir parçalardan oluşturulur.
* **React Native** aynı prensipleri kullanır, ancak web tarayıcısı yerine **mobil görünümlere** renderlar.

---

#### JSX ve Bileşenler

* **JSX** = UI öğelerini açıklamak için JavaScript + XML benzeri sözdizimi.
* Bileşenler sadece JSX döndüren **fonksiyonlardır**.
* Örnek:

  ```jsx
  function Welcome() {
    return <h1>Merhaba!</h1>; // RN'de bu <Text> olacak, <h1> değil
  }
  ```
* Bileşenler **iç içe**, **yeniden kullanılabilir** ve birlikte **kompoze edilebilir**.

---

#### Props

* **Props**, ebeveynden çocuğa geçirilen salt okunur verilerdir.
* Bileşenleri yeniden kullanılabilir ve dinamik yaparlar.
* Örnek:

  ```jsx
  function Greeting({ name }) {
    return <p>Merhaba, {name}!</p>;
  }
  ```

  React Native'de bu şöyle olur:

  ```jsx
  function Greeting({ name }) {
    return <Text>Merhaba, {name}!</Text>;
  }
  ```

---

#### Durum (`useState`)

* **Durum**, zaman içinde değişebilen dahili veridir.
* Durum değiştiğinde, React bileşeni **yeniden renderlar**.
* Örnek:

  ```jsx
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Ekle</button>
      </>
    );
  }
  ```

---

#### Renderlama ve Bileşen Ağacı

* Bileşenler bir **ağaç yapısı** oluşturur.
* Props aracılığıyla **Ebeveyn → çocuk** veri akışı.
* React, ekranı verimli bir şekilde güncellemek için **Sanal DOM** tutar.
* Ağacın sadece değişen kısımları **yeniden renderlanır**.

---

### Bunlar React Native'e Nasıl Uygulanır

| React Kavramı | React Native Eşdeğeri                            | Temel Benzerlikler                                                                                     |
| ------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| JSX           | JSX (aynı sözdizimi)                             | Hala bileşen tabanlı UI kullanır.                                                                      |
| Bileşenler    | Bileşenler (örn. `<View>`, `<Text>`, `<Button>`) | Aynı yapı, farklı yapı taşları.                                                                        |
| Props         | Props                                            | Aynı mekanizma.                                                                                        |
| Durum         | Durum (`useState`)                               | Aynı şekilde çalışır.                                                                                  |
| Renderlama    | Yerel UI güncellemeleri                          | React hala verimli yeniden renderlama yapar, ancak DOM düğümleri yerine yerel görünümler aracılığıyla. |

---

## **7. Bileşen Kompozisyonu**

### **7.1 Bileşen Kompozisyonu Nedir?**

Kompozisyon, **karmaşık şeyleri daha küçük, basit parçalardan oluşturmak** anlamına gelir.
React'te kompozisyon, küçük, yeniden kullanılabilir bileşenlerden tüm arayüzler oluşturmanın yöntemidir.

Bunu LEGO® tuğlalarıyla inşa etmek gibi düşünün:

* Her tuğla (bileşen) bağımsızdır.
* Benzersiz yapılar oluşturmak için bunları farklı şekillerde birleştirebilirsiniz.
* Bir tuğla değişirse, tüm şeyi yeniden inşa etmeden değiştirebilirsiniz.

---

### **7.2 Neden Kompozisyon Kullanılır?**

Kompozisyon şunları yapmanıza yardımcı olur:

1. Kopyala yapıştır yerine kodu **yeniden kullanmak**.
2. Büyük UI'ları mantıklı parçalara **organize etmek**.
3. **Güvenli değişiklikler yapmak** — bir bileşeni değiştirmek diğerlerini bozmaz.
4. Daha iyi **işbirliği yapmak** — her geliştirici farklı bir bileşen üzerinde çalışabilir.

---

### **7.3 Örnek: Basit Bileşenleri Kompoze Etmek**

Üç basit bileşenle başlayalım: `Header`, `Main`, ve `Footer`.

```jsx
function Header() {
  return <h1>Uygulamam</h1>;
}

function Main() {
  return <p>İlk React uygulamama hoş geldiniz!</p>;
}

function Footer() {
  return <small>© 2025 Şirketim</small>;
}
```

Bunları tam bir uygulamaya **kompoze edebiliriz**:

```jsx
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
```

React `<App />`'i renderlediğinde, içindeki her şeyi de renderlar — bir **bileşen ağacı** oluşturur.

```
App
 ├── Header
 ├── Main
 └── Footer
```

**React Native'de**, aynı desen geçerlidir:

```jsx
function App() {
  return (
    <View>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}
```

Sadece UI bileşenleri (`<View>`, `<Text>`) değişir — **kompozisyon mantığı** aynıdır.

---

### **7.4 Bileşenler Arasında Veri Geçirmek**

Kompozisyon genellikle props aracılığıyla **veri geçirmeyi** içerir.

Örnek:

```jsx
function Greeting({ name }) {
  return <p>Merhaba, {name}!</p>;
}

function App() {
  return (
    <div>
      <Greeting name="Ali" />
      <Greeting name="Ayşe" />
    </div>
  );
}
```

Burada, `App` **ebeveyn**, her `Greeting` ise **çocuktur**.
Ebeveyn her çocuğa **props** (`name`) geçirir, onu yeniden kullanılabilir ve dinamik yapar.

---

### **7.5 Örnek: Veri ve Yapıyı Birleştirmek**

Kullanıcı profilini görüntüleyen bir `UserCard` bileşenimiz olduğunu varsayalım:

```jsx
function UserCard({ name, age }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Yaş: {age}</p>
    </div>
  );
}
```

Bunu birden fazla kullanıcı gösteren bir `UserList` bileşeni içinde kompoze edebiliriz:

```jsx
function UserList() {
  return (
    <div>
      <UserCard name="Ali" age={24} />
      <UserCard name="Ayşe" age={28} />
      <UserCard name="Mehmet" age={32} />
    </div>
  );
}
```

Ve sonra `App`'e dahil ederiz:

```jsx
function App() {
  return (
    <div>
      <h1>Kullanıcı Dizini</h1>
      <UserList />
    </div>
  );
}
```

**Bunun React Native'e eşlenmesi:**

```jsx
function UserCard({ name, age }) {
  return (
    <View style={{ margin: 10 }}>
      <Text>{name}</Text>
      <Text>Yaş: {age}</Text>
    </View>
  );
}
```

→ Bileşen mantığı (props, hiyerarşi) aynı kalır — sadece sunum değişir.

---

### **7.6 Bileşenlerin İçinde Bileşenler**

UI'ınızı mantıklı olarak organize etmek için bileşenleri derinlemesine iç içe yerleştirebilirsiniz.

Örnek:

```jsx
function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}

function Logo() {
  return <h2>Markam</h2>;
}

function Navigation() {
  return (
    <nav>
      <a href="#">Ana Sayfa</a>
      <a href="#">Hakkında</a>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>Ana içerik buraya gelir</p>
      </main>
    </div>
  );
}
```

Bu yapı, uygulamanız büyüdükçe doğal olarak ölçeklenir — tıpkı React Native'deki ekran düzenleri gibi.

---

### **7.7 Kompozisyon vs Kalıtım**

Geleneksel nesne yönelimli programlamada, davranışı paylaşmak için **kalıtım** kullanabilirsiniz.
React'te, bunun yerine bileşenleri **kompoze edersiniz**.

React'in felsefesi:

> "**Kalıtım yerine kompozisyon.**"

Bu şu anlama gelir:

* `class Child extends Parent` kullanarak bileşenleri genişletmezsiniz.
* Veriyi hatta **diğer bileşenleri** bile props olarak geçirirsiniz.

Örnek:

```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function App() {
  return (
    <Card title="Profil">
      <p>İsim: Ali</p>
      <p>Yaş: 25</p>
    </Card>
  );
}
```

Burada, **Card** bileşeni `{children}` kullanarak içine geçirilen her türlü içeriği sarar — çok yaygın ve güçlü bir kompozisyon deseni.

**React Native'de**, `{children}` ekran düzenlerini kompoze etmek için yoğun olarak kullanılır:

```jsx
<View style={styles.container}>
  <Header />
  <Content />
  <Footer />
</View>
```

---

### **7.8 Gerçek Bir Projede Bileşenleri Organize Etmek**

Daha büyük uygulamalar için, bileşenleri genellikle dosyalara ayırırsınız:

```
src/
 ├── components/
 │    ├── Header.js
 │    ├── Footer.js
 │    ├── UserCard.js
 │    └── UserList.js
 └── App.js
```

Sonra onları import edersiniz:

```jsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}
```

React Native aynı yapıyı kullanır:

* Her ekran ve UI parçası ayrı bir dosya olabilir.
* Ekranları `<Button>`, `<View>`, `<Image>` gibi daha küçük bileşenlerden kompoze edersiniz.

---

### **7.9 Kompozisyon için En İyi Uygulamalar**

| Uygulama                                   | Açıklama                                                                              |
| ------------------------------------------ | ------------------------------------------------------------------------------------- |
| **Bileşenleri küçük tutun**                | Bileşen başına bir net amaç.                                                          |
| **Mümkün olduğunca yeniden kullanın**      | UI'ı çoğaltmayın — yeniden kullanın ve props ile parametreleyin.                      |
| **Children'ı akıllıca kullanın**           | Düzen veya iç içe öğeleri geçirmek için.                                              |
| **Özellik veya işleve göre organize edin** | Projeleri daha bakımı kolay yapar.                                                    |
| **State'i yukarı taşıyın**                 | Birden fazla çocuk tarafından ihtiyaç duyulduğunda veriyi en yakın ortak atada tutun. |

---

### **7.11 Bu Neden React Native için Önemli**

React Native'de:

* **Her ekran** sadece başka bir kompoze edilmiş bileşendir.
* Öğeleri gruplamak için `<View>`, etiketler için `<Text>` ve butonlar veya kartlar için özel bileşenler kullanacaksınız.
* Tutarlılığı korumak ve zaman kazanmak için bileşenleri ekranlar arası yeniden kullanabilirsiniz.

Kompozisyon, React Native uygulamalarını **modüler, bakımı kolay ve ölçeklenebilir** yapan temel beceridir.

---

## **8. Koşullu Renderlama ve Listeler**

### **8.1 Koşullu Renderlama Nedir?**

Basit terimlerle, **koşullu renderlama** şu anlama gelir:

> Bazı koşullara (durum, props veya mantık) bağlı olarak farklı UI öğelerini göstermek.

Tıpkı JavaScript'teki `if` ifadeleri gibi, ancak React'in JSX'i içinde.

#### Örnek:

```jsx
function Welcome({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Tekrar hoş geldiniz!</h2>;
  } else {
    return <h2>Lütfen giriş yapın.</h2>;
  }
}
```

**React Native'de**, aynı mantığı kullanırsınız:

```jsx
function Welcome({ isLoggedIn }) {
  return (
    <Text>{isLoggedIn ? "Tekrar hoş geldiniz!" : "Lütfen giriş yapın."}</Text>
  );
}
```

---

### **8.2 JSX İçinde JavaScript Mantığı Kullanmak**

React, süslü parantez `{ }` içinde herhangi bir JavaScript ifadesi kullanmanıza izin verir.

Şunları kullanabilirsiniz:

* **If/else**
* **Üçlü operatör**
* **Mantıksal VE (`&&`)**

#### Üçlü operatörle örnek:

```jsx
function Status({ online }) {
  return <p>{online ? "Kullanıcı çevrimiçi ✅" : "Kullanıcı çevrimdışı ❌"}</p>;
}
```

#### `&&` ile örnek:

```jsx
function Alert({ show }) {
  return (
    <div>
      {show && <p style={{ color: "red" }}>Hata: Bir şeyler ters gitti!</p>}
    </div>
  );
}
```

> `show` `true` ise, `<p>` görünür. `false` ise, React hiçbir şey renderlamaz.

---

### **8.3 Durum ile Koşullu Renderlama**

UI'ın otomatik olarak güncellenmesi için **durum** kullanarak koşulları kontrol edebiliriz.

#### Örnek:

```jsx
import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Mesajı {show ? "Gizle" : "Göster"}
      </button>
      {show && <p>Merhaba! Bu bir mesajdır.</p>}
    </div>
  );
}
```

* `show` true olduğunda → mesaj görüntülenir.
* `show` false olduğunda → mesaj kaybolur.
* Her buton tıklaması durumu değiştirir → yeniden renderlama tetikler.

**React Native Eşdeğeri:**

```jsx
function ToggleMessage() {
  const [show, setShow] = useState(true);

  return (
    <View>
      <Button
        title={show ? "Mesajı Gizle" : "Mesajı Göster"}
        onPress={() => setShow(!show)}
      />
      {show && <Text>Merhaba! Bu bir mesajdır.</Text>}
    </View>
  );
}
```

---

### **8.4 `.map()` ile Liste Renderlamak**

React'te öğe listelerini (kullanıcılar, mesajlar, ürünler vb.) görüntülemek için **`.map()`** dizi metodunu kullanacaksınız.

#### Örnek:

```jsx
function UserList() {
  const users = ["Ali", "Ayşe", "Mehmet"];

  return (
    <ul>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
}
```

#### Çıktı:

```
• Ali
• Ayşe
• Mehmet
```

* `.map()` her dizi öğesini bir JSX öğesine dönüştürür.
* React her liste öğesi için **benzersiz bir `key` prop'u** gerektirir (React'in öğeleri verimli bir şekilde takip etmesine yardımcı olur).

**React Native Eşdeğeri:**

```jsx
function UserList() {
  const users = ["Ali", "Ayşe", "Mehmet"];

  return (
    <View>
      {users.map((user) => (
        <Text key={user}>{user}</Text>
      ))}
    </View>
  );
}
```

---

### **8.5 Key'ler Neden Önemli**

`key` prop'u React'in hangi öğelerin değiştiğini, eklendiğini veya kaldırıldığını belirlemesine yardımcı olur.
Olmadan, React yanlış veya verimsiz yeniden renderlama yapabilir.

**İyi:**

```jsx
users.map((user) => <li key={user.id}>{user.name}</li>)
```

**Kötü:**

```jsx
users.map((user, index) => <li key={index}>{user.name}</li>)
```

> Stabil benzersiz ID'niz yoksa `index`'i key olarak kullanmaktan kaçının — özellikle dinamik listeler için (öğelerin değişebildiği veya yeniden sıralanabildiği).

---

### **8.6 Örnek: Durum ile Dinamik Liste**

Kullanıcıların listeye isim eklemesine olanak tanıyan küçük bir uygulama oluşturalım.

```jsx
import { useState } from "react";

function NameList() {
  const [names, setNames] = useState(["Ali"]);
  const [newName, setNewName] = useState("");

  const addName = () => {
    if (newName.trim() === "") return;
    setNames([...names, newName]);
    setNewName("");
  };

  return (
    <div>
      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="İsim girin"
      />
      <button onClick={addName}>Ekle</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

**React Native Eşdeğeri:**

```jsx
function NameList() {
  const [names, setNames] = useState(["Ali"]);
  const [newName, setNewName] = useState("");

  const addName = () => {
    if (newName.trim() === "") return;
    setNames([...names, newName]);
    setNewName("");
  };

  return (
    <View>
      <TextInput
        value={newName}
        onChangeText={setNewName}
        placeholder="İsim girin"
      />
      <Button title="Ekle" onPress={addName} />

      {names.map((name, index) => (
        <Text key={index}>{name}</Text>
      ))}
    </View>
  );
}
```

Aynı mantık, sadece **React Native bileşenleri** ile (`TextInput`, `Button`, `Text`, `View`).

---

### **8.7 Koşullu Renderlama ve Listeleri Birleştirmek**

Boş listeler gibi *gerçek dünya durumlarını* işlemek için her iki tekniği de karıştırabiliriz.

#### Örnek:

```jsx
function TodoList({ todos }) {
  if (todos.length === 0) {
    return <p>Bugün görev yok 🎉</p>;
  }

  return (
    <ul>
      {todos.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

function App() {
  const tasks = ["Market alışverişi yap", "Çamaşır yıka"];
  return <TodoList todos={tasks} />;
}
```

**React Native Versiyonu:**

```jsx
function TodoList({ todos }) {
  if (todos.length === 0) {
    return <Text>Bugün görev yok 🎉</Text>;
  }

  return (
    <View>
      {todos.map((task, index) => (
        <Text key={index}>{task}</Text>
      ))}
    </View>
  );
}
```

---

### **8.8 Nesnelerden Liste Renderlamak**

Özellikleri olan verileriniz olduğunda, aynı şekilde map kullanın.

#### Örnek:

```jsx
function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Telefon", price: 800 },
    { id: 3, name: "Kulaklık", price: 150 },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>{product.price}₺</p>
        </div>
      ))}
    </div>
  );
}
```

**React Native Eşdeğeri:**

```jsx
function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Telefon", price: 800 },
    { id: 3, name: "Kulaklık", price: 150 },
  ];

  return (
    <View>
      {products.map((p) => (
        <View key={p.id}>
          <Text>{p.name}</Text>
          <Text>{p.price}₺</Text>
        </View>
      ))}
    </View>
  );
}
```


## **9. React'ten React Native Zihniyetine**

### **Neden Önce React Öğrendik**

Önce React öğrenmek şunlara yardımcı olur:

1. **Bileşen + durum** zihinsel modelini kavramak.
2. Mobile geçmeden önce **props**, **kompozisyon** ve **hook'ları** anlamak.
3. React Native'i kolaylaştırmak — %80'i aynı mantık, %20'si yeni sözdizimi olduğu için.

---

### **Ana Fikir: React Her Yerde Aynıdır**

React Native hala **React'tir** — aynı **bileşen tabanlı modeli** ve **durum güdümlü UI güncellemelerini** kullanır.

Değişen şey UI'ın **nasıl** renderlanacağıdır.

| Kavram           | React (Web)                   | React Native (Mobil)            |
| ---------------- | ----------------------------- | ------------------------------- |
| Renderlama Hedefi| Tarayıcı DOM'u                | Yerel mobil bileşenler          |
| Temel UI Öğeleri | `<div>`, `<p>`, `<span>`      | `<View>`, `<Text>`, `<Image>`   |
| Stillendirme     | CSS, CSS Modülleri            | JavaScript tabanlı `StyleSheet` |
| Navigasyon       | React Router                  | React Navigation                |
| Deployment       | Web tarayıcıları              | iOS ve Android cihazları        |

Kısaca:

> *Mantık* aynı kalır — sadece *sunum katmanı* değişir.

---

### **Aynı React Kavramları, Farklı Bileşenler**

React'te öğrendiğiniz her şey hala geçerlidir:

* Bileşenler → Yeniden kullanılabilir yapı taşları.
* Props → Ebeveynden çocuğa geçirilen veri.
* Durum → Zaman içinde değişen veri.
* Hook'lar → Durum, efektler ve daha fazlası için mantık.
* Kompozisyon → UI parçalarını birleştirmek.

Örnek karşılaştırma:

| React                        | React Native                              |
| ---------------------------- | ----------------------------------------- |
| `jsx <div>Merhaba!</div> `   | `jsx <View><Text>Merhaba!</Text></View> ` |

React Native sadece web öğeleri için *yerel mobil* eşdeğerleri kullanır.

---

### **Pratikte Farklı Olan Neler**

| Alan              | React (Web)                | React Native                                             |
| ----------------- | -------------------------- | -------------------------------------------------------- |
| **Stillendirme**  | CSS, sınıf adları          | `StyleSheet.create()` veya inline stiller (JS nesneleri) |
| **Düzen**         | CSS box model, flexbox     | Flexbox (aynı kavram, `display: block` yok)              |
| **Navigasyon**    | React Router               | React Navigation (stack, tabs)                           |
| **Animasyonlar**  | CSS geçişleri              | React Native Animated / Reanimated                       |
| **Platform API'ları** | Tarayıcı API'ları      | Yerel API'lar (kamera, konum, sensörler)                 |

React Native'i "React + yerel mobil yetenekleri" olarak düşünün.

---

### **"React Native Zihniyeti"**

React Native'de başarılı olmak için şöyle düşünmeye başlayın:

* **Bileşenler Açısından:** ekranlar, kartlar, butonlar hepsi yeniden kullanılabilir parçalardır.
* **Durum Açısından:** uygulamanın verisi ekranda neyin olduğunu belirler.
* **Platform Terimleri Açısından:** DOM yok — gerçek yerel UI'lar oluşturuyorsunuz.
* **Sadelik Açısından:** bileşenleri küçük, mantığı temiz ve veri akışını tek yönlü tutun.

---

**Zaten React biliyorsunuz — sadece React Native'in araçlarını öğrenmeniz gerekiyor.**