# **Mobil Programlama - Lab 04**

## **ReactJS Lab 1: todo list uygulaması**



## **Lab Projesi: Ultimate React Todo List Uygulaması** 

### **Proje Hedefi**

Tamamen işlevsel bir Todo List uygulaması oluşturun. Kullanıcılar görevleri görüntüleyebilecek, yeni görevler ekleyebilecek ve bunları tamamlanmış olarak işaretleyebilecekler. Bu proje bileşenler (components), props, durum, olay işleme ve koşullu renderlama pratiği yapmak için idealdir.

### **Kurulum**

1.  Tercih ettiğiniz aracı kullanarak yeni bir React projesi oluşturun:  
      * **Vite (Önerilen):**   
      `npm create vite@latest my-react-app -- --template react`  
2.  Proje dizinine gidin: `cd my-react-app`  
3.  Geliştirme sunucusunu başlatın: `npm run dev` (Vite için) veya.  
4.  `App.jsx` şablon içeriğini kaldırarak `src` klasörünü temizleyin.  

-----

### **Kısımm 1: Statik Todo Listesini Görüntüleme**

**Odak:** Yeniden kullanılabilir bileşenler oluşturma, JSX ile UI yapılandırma ve props kullanarak bileşen ağacında veri geçirme.

#### **Görevler:**

1.  **İlk Veriyi Oluştur:**  
      * `App.jsx` dosyası içinde `initialTodos` adında sabit bir dizi oluşturun.  
      * Bu dizi birkaç todo nesnesini tutacak. Her nesne bir `id` (örn. 1), `text` (örn. "React Öğren") ve `isCompleted` (boolean, `false`) özelliğine sahip olmalı.  
2.  **Bir `TodoItem` Bileşeni Oluştur:**  
      * Yeni dosya oluşturun: `src/components/TodoItem.jsx`.  
      * Bu bileşen **props** aracılığıyla tek bir todo nesnesi alacak.  
      * Todo'nun `text` özelliğini görüntüleyen bir liste öğesi (`<li>`) döndürmeli.  
3.  **Bir `TodoList` Bileşeni Oluştur:**  
      * Yeni dosya oluşturun: `src/components/TodoList.jsx`.  
      * Bu bileşen `initialTodos` dizisini prop olarak alacak.  
      * Dizi üzerinde iterasyon yapmak için `.map()` metodunu kullanmalı ve her todo için bir `TodoItem` bileşeni renderlamalı.  
      * **Önemli:** Listedeki her `TodoItem`'a benzersiz bir `key` prop'u geçmeyi unutmayın (örn. `key={todo.id}`).  
4.  **`App.jsx`'te Birleştir:**  
      * `App.jsx`'te `TodoList` bileşenini import edin.  
      * `TodoList`'i renderla, `initialTodos` dizinizi prop olarak geçirin.  

#### ** İlerlemenizi Test Edin (Kısımm 1)**

  * Tarayıcınız `initialTodos` dizinizdeki todo'ların statik, sırasız bir listesini görüntülemeli.  
  * Tarayıcının geliştirici konsolunu açın. Özellikle eksik `key` prop'ları hakkında **hata veya uyarı** olmamalı.  
  * `App.jsx`'teki `initialTodos` dizisindeki bir todo'nun metnini değiştirmeyi deneyin ve dosyayı kaydettiğinizde UI'ın otomatik olarak güncellendiğini doğrulayın.  

-----

### **Kısm 2: State ile Yeni Todo'lar Ekleme**

**Odak:** `useState` hook'u ile todo listesini yöneterek ve kullanıcı giriş olaylarını işleyerek uygulamayı dinamik hale getirme.

#### **Görevler:**

1.  **Todo'ları State ile Yönet:**  
      * `App.jsx`'te React'ten `useState` hook'unu import edin.  
      * Todo listesini yönetmek için bir state değişkeni oluşturun. `initialTodos` verisiyle başlatın:  
        ```jsx
        const [todos, setTodos] = useState(initialTodos);
        ```
2.  **Giriş Formu Oluştur:**  
      * `App.jsx`'te kullanıcıların yeni todo'lar eklemesine izin veren bir giriş alanı ve buton ekleyin. Bunun için `<form>` öğesi en iyisidir.  
      * Giriş alanının değerini yönetmek için başka bir state parçası oluşturun: `const [newTodoText, setNewTodoText] = useState('');`.  
3.  **Olay İşleyici Oluştur:**  
      * `addTodo(todoText)` fonksiyonu oluşturun. Bu fonksiyon:  
          * Benzersiz bir `id` (basit benzersiz ID için `Date.now()` kullanabilirsiniz), sağlanan `text` ve `isCompleted: false` ile yeni bir todo nesnesi oluşturacak.  
          * Mevcut diziye yeni todo'yu ekleyerek `todos` state'ini güncelleyecek. Bunu immutable şekilde yapmak için spread (`...`) operatörünü kullanın: `setTodos([...todos, newTodo]);`.  
4.  **Formu State ve İşleyicilere Bağla:**  
      * Kullanıcı yazdıkça `newTodoText`'i güncellemek için giriş alanında `onChange` olayını kullanın.  
      * Formda `onSubmit` olayını kullanın. Gönderim işleyici fonksiyonunda, mevcut `newTodoText` ile `addTodo()`'yu çağırın ve ardından `setNewTodoText('')` ayarlayarak giriş alanını temizleyin. Sayfanın yeniden yüklenmesini önlemek için `event.preventDefault()` çağırmayı unutmayın.  

#### ** İlerlemenizi Test Edin (Kısm 2)**

  * Artık sayfanızda bir giriş alanı ve buton görmelisiniz.  
  * Giriş alanına yazmayı deneyin. Metin görünmeli.  
  * Yeni bir todo ekleyin. Listenizin altında anında görünmeli.  

-----

### **Kısm 3: Todo'ları Tamamlanmış Olarak İşaretleme**

**Odak:** Çocuk bileşenlerdeki (child component) etkileşimleri işleme, fonksiyonları props olarak geçirme ("state'i yukarı taşıma") ve state'e bağlı olarak UI'ı değiştirmek için koşullu renderlama kullanma.  

#### **Görevler:**

1.  **Toggle Fonksiyonu Oluştur:**  
      * `App.jsx`'te `toggleTodo(idToToggle)` fonksiyonu oluşturun.  
      * Bu fonksiyon `todos` state'ini güncellemelidir. Bunu yapmak için mevcut `todos` dizisi üzerinde `.map()` kullanın. Her `todo` için `id`'sinin `idToToggle` ile eşleşip eşleşmediğini kontrol edin.  
      * Eşleşirse, `isCompleted` özelliği ters çevrilmiş *yeni* bir todo nesnesi döndürün (`...todo, isCompleted: !todo.isCompleted`).  
      * Eşleşmezse, orijinal `todo`'yu döndürün.  
      * Son olarak, oluşturduğunuz yeni dizi ile `setTodos()`'yu çağırın.  
2.  **Fonksiyonu Aşağıya Geçir:**  
      * `toggleTodo` fonksiyonunu `App`'ten `TodoList`'e ve ardından `TodoList`'ten her `TodoItem`'a prop olarak geçirin.  
3.  **Click Olayını İşle:**  
      * `TodoItem.jsx`'te `<li>` öğesine bir `onClick` olay dinleyicisi ekleyin.  
      * `<li>` tıklandığında, props'tan aldığı `toggleTodo` fonksiyonunu kendi `id`'sini geçirerek çağırmalıdır.  
4.  **Koşullu Stil Uygula:**  
      * `TodoItem.jsx`'te `<li>`'nin `style` prop'u veya `className` prop'u içinde **üçlü operatör** kullanın.  
      * `todo.isCompleted` `true` ise, metni çizmek için stil uygulayın (örn. `textDecoration: 'line-through'`). Aksi halde, özel stil uygulamayın.  

#### ** İlerlemenizi Test Edin (Kısm 3)**

  * Listedeki herhangi bir todo öğesine tıklayın. Üstü çizili hale gelmelidir.  
  * Tekrar tıklayın. Çizgi stili kaybolmalıdır.  
 

-----

### **Zorluk Bölümü**

1.  **Todo Silme:**

      * `App.jsx`'te `deleteTodo(idToDelete)` fonksiyonu oluşturun. Bu fonksiyon eşleşen ID'ye sahip olan dışında tüm todo'ları içeren yeni bir dizi oluşturmak için `.filter()` metodunu kullanmalıdır.  
      * Her `TodoItem.jsx` içine "Sil" butonu ekleyin.  
      * `deleteTodo` fonksiyonunu prop olarak geçirin ve buton tıklandığında çağırın.  

2.  **Bileşen Kompozisyonu (`TodoForm`):**

      * Yeni bileşen oluşturun: `src/components/TodoForm.jsx`.  
      * Yeni todo eklemek için `<form>`, `<input>` ve `<button>`'u bu yeni bileşene taşıyın.  
      * `App` bileşeni artık `addTodo` fonksiyonunu `TodoForm`'a prop olarak geçirecek. `TodoForm` bileşeni kendi giriş state'ini yönetmekten ve gönderimde prop fonksiyonunu çağırmaktan sorumlu olacak. Bu çok yaygın ve önemli bir React desenidir.  

3.  **Todo'ları Filtrele:**

      * `App.jsx`'e üç buton ekleyin: "Tümü", "Aktif" ve "Tamamlananlar".  
      * Mevcut filtreyi takip etmek için yeni bir state parçası oluşturun: `const [filter, setFilter] = useState('all');`.  
      * `todos`'u `TodoList`'e geçirmeden önce, yeni bir `filteredTodos` değişkeni oluşturun. Mevcut `filter` state'ine bağlı olarak `todos` dizisini filtrelemek için `if/else` veya `switch` ifadesi kullanın. Orijinal dizi yerine bu `filteredTodos` dizisini `TodoList`'e geçirin.
