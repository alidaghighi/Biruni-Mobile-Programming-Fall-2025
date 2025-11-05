# **Mobil Programlama Laboratuvarı - 02**

## **JavaScript Lab 1: Otomat Makinesi**


### **Proje Hedefi**

Bir otomat makinesini simüle eden bir komut satırı uygulaması geliştirin. Kullanıcılar ürünleri görebilecek, bir öğe seçebilecek, para “yatırabilecek” ve seçtikleri ürünü para üstüyle birlikte alabilecekler. Bu proje, değişkenler (variables), veri yapıları (nesnelerden oluşan diziler / arrays of objects)  , fonksiyonlar, kontrol akışı ve mantıksal operatörleri pratik bir şekilde bütünleştirir.

### **Kurulum**

1. `vendingMachine.js` adında tek bir dosya oluşturun.
2. Tüm kod bu dosyada yazılacak.
3. Dosyayı terminalden `node vendingMachine.js` komutuyla çalıştırın.
4. Makinenin durumunu göstermek ve kullanıcıya geri bildirim vermek için `console.log()` fonksiyonunu bolca kullanın.

---


\pagebreak

### **Kısım 1: Makinenin Envanterini Hazırlama (Yaklaşık 20 dakika)**

Bu kısım, makinemizi çalıştıracak veri yapılarının kurulmasına odaklanır.

#### **Görevler:**

1. **Envanteri Oluşturun:**

   * `inventory` adında bir sabit değişken (const) tanımlayın.
   * Buna nesnelerden oluşan bir dizi atayın. Her nesne, otomat makinesindeki bir ürünü temsil edecek ve şu özelliklere sahip olmalıdır:

     * `id` (bir sayı, örn: 1)
     * `name` (bir string, örn: "Kola")
     * `price` (bir sayı, örn: 1.50)
     * `stock` (bir sayı, stokta kaç adet olduğu)
   * En az 5 farklı ürün oluşturun.

2. **Kullanıcı Cüzdanını Oluşturun:**

   * `userWallet` adında bir `let` değişkeni tanımlayın ve örneğin `10` değeri ile başlayın.

3. **İlk Gösterim Fonksiyonu:**

   * `displayInventory()` adında bir fonksiyon yazın.
   * Bu fonksiyon `inventory` dizisini döngüyle gezsin (loop).
   * Her ürün için `id`, `name`, `price` ve `stock` bilgilerini biçimlendirilmiş bir string ile `console.log` yapsın. Temiz bir format için template literal (` `` `) kullanın.
   * **İpucu:** Fiyatı iki ondalık basamakla göstermek için `.toFixed(2)` kullanın.
   * Örnek çıktı: `ID: 1 | İsim: Kola | Fiyat: $1.50 | Stok: 5`

4. **Test:**

   * Dosyanın en altına `displayInventory()` çağrısı ekleyin ve Node.js ile çalıştırarak envanter listenizi görün.

---

### **Kısım 2: Satış Mantığı (Yaklaşık 40 dakika)**

Bu kısımda kullanıcıların ürün seçtiği ve makinenin satın alımı kontrol ettiği kısım yazılacak.

#### **Görevler:**

1. **Satış Fonksiyonunu Yazın:**

   * `vend(itemId, moneyInserted)` adında ana fonksiyonu yazın. Bu fonksiyon satın alma mantığının tamamını içerecek.

2. **Ürünü Bulun:**

   * `vend()` içinde, `inventory` üzerinde `.find()` metodunu kullanarak `itemId` ile eşleşen ürünü bulun ve `selectedItem` adlı bir variable saklayın.

3. **Kontrolleri Uygulayın (Kontrol Akışı):**

   * `if/else if/else` yapısıyla şu durumları kontrol edin:

     * **Ürün bulunamadı:** `selectedItem` `undefined` ise, `"Geçersiz seçim. Lütfen geçerli bir ID girin."` mesajını yazdırın ve fonksiyondan çıkın.
     * **Stok bitti:** `selectedItem.stock` 0 ise, `"Üzgünüz, bu ürün stokta yok."` mesajını yazdırın ve çıkın.
     * **Yetersiz bakiye:** `moneyInserted` ürünün `price` değerinden az ise, `"Yetersiz bakiye. Yatırdığınız para: $[moneyInserted], ürün fiyatı: $[price]."` mesajını yazdırın ve çıkın.

4. **Başarılı Satış Mantığı:**

   * Tüm kontroller geçtiyse işlem başarılıdır:

     * Para üstünü hesaplayın: `let change = moneyInserted - selectedItem.price;`
     * `selectedItem.stock` değerini 1 azaltın.
     * `userWallet` değerinden yatırılan parayı çıkarın, ardından `change` kadar geri ekleyin.
     * Başarılı mesaj yazdırın:

       ```js
       console.log("Ürün veriliyor... " + selectedItem.name + " aldınız!");
       console.log("Para üstünüz: $" + change.toFixed(2));
       ```

5. **Test:**

   * Aşağıdaki test çağrılarını yapın:

     ```js
     vend(1, 2.00);   // Başarılı satın alma
     vend(1, 1.00);   // Yetersiz bakiye
     vend(99, 5.00);  // Geçersiz ID
     displayInventory(); // Güncel stokları göster
     console.log("Cüzdan bakiyesi: $" + userWallet.toFixed(2));
     ```

---

### **Kısım 3: Callback’lerle Asenkron İşlemler (Yaklaşık 30 dakika)**

Makinemizi daha gerçekçi yapalım. Satış ve stok yenileme işlemleri anında gerçekleşmez. Bu bölümde ders notlarındaki callback kavramı kullanılacak.

#### **Görevler:**

1. **`vend` Fonksiyonunu Yeniden Yazın:**

   * `vend(itemId, moneyInserted, callback)` şeklinde üçüncü bir argüman (callback fonksiyonu) ekleyin.
   * Fonksiyonun tüm mantığını `setTimeout` içine alın ve 1 saniyelik gecikme (`1000 ms`) ekleyin.
   * Başarı veya hata durumunda sadece `console.log` yerine callback çağrısı yapın.
   * **Hata olduğunda:**

     ```js
     callback(new Error("Hata mesajı"), null);
     ```
   * **Başarılı olduğunda:**

     ```js
     callback(null, { item: selectedItem, change: change });
     ```

2. **Callback İşleyicisini Yazın:**

   * `handleVendResult(error, result)` adında ayrı bir fonksiyon yazın.
   * Eğer `error` doluysa, hatayı yazdırın:

     ```js
     console.error("SATIŞ HATASI: " + error.message);
     ```
   * Hata yoksa, `result` içindeki bilgileri yazdırın.

3. **Asenkron Akışı Test Edin:**

   ```js
   console.log("--- Yeni bir işlem başlatılıyor ---");
   vend(2, 5.00, handleVendResult);
   console.log("...makineden cevap bekleniyor...");
   ```

Bu çıktıda, `"bekleniyor..."` mesajı, satış sonucundan **önce** yazdırılacak. Bu da JavaScript’in asenkron yapısını gösterecek.

---

### **Zorlayıcı Görevler(Ekstra puan)**

1. **Stok Yenileme Fonksiyonu:**

   * `restockItem(itemId, quantity)` adında bir fonksiyon yazın.
   * Bu fonksiyon ilgili ürünü bulsun ve `stock` değerini `quantity` kadar arttırsın.
   * `setTimeout` ve hata-öncelikli callback kullanarak gecikmeli bir stok yenileme simülasyonu yapın.

2. **Toplu Satın Alma:**

   * `[1, 3, 3]` gibi ürün ID’lerinden oluşan bir dizi alabilen `buyMultiple(itemsArray)` fonksiyonunu yazın.
   * `.reduce()` metoduyla toplam maliyeti hesaplayın.
   * Tek işlemde satın alma yapın, başarılıysa her ürünün stok değerini güncelleyin.

3. **Dinamik Fiyatlandırma:**

   * `.map()` metodunu kullanarak yeni bir envanter dizisi döndüren `applyDiscount(discountPercentage)` fonksiyonunu yazın.
   * Tüm ürünlerin fiyatı belirli yüzde kadar indirilsin, fakat **orijinal `inventory` dizisi değiştirilmesin**.
