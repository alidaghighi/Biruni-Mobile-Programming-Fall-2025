# **Mobil Programlama - Lab 05**

## **ReactJS Lab 2: Student Dashboard**


## **Lab Projesi: Student Dashboard**

### **Proje Amacı**

Composition ve conditional rendering ile listeleri birleştiren bir **Dashboard** oluşturun. Component composition, state lifting, controlled inputs, conditional UI states, filtering, sorting ve hafif validation uygulayacaksınız. CSS sağlanmıştır — **class isimleri labda zorunludur**, bu yüzden styling değil React mantığına odaklanın.


### **Not**

Bu projede AI araçlarından yardım almak istiyorsanız, akademik dürüstlüğü ihlal edecek kodları hariç tuttuğunuzdan emin olun. Sadece genel React kavramları veya genel sözdizimi konularında yardım isteyin, tüm lab projesi için yardım istemeyin.  
AI araçlarından aldığınız yanıtları doğrudan kullanmadan önce en azından anlamaya çalışın!

---

\pagebreak

### **Oluşturacağınız dosyalar**

```
src/
  App.jsx
  index.css  <-------- sil
  main.jsx   <-------- index.css import'unu kaldır
  styles/
    lab-styles.css <-- sağlandı (kopyala/yapıştır)
  components/
    StudentList.jsx
    StudentItem.jsx
    StudentForm.jsx
    StudentControls.jsx
```

> Önemli: Yapı/görsel için **yeni** class isimleri uydurMAYIN. Bu labda belirtilen class isimlerini kullanın. Sağlanan CSS bunları hedefler.

---

### **Kurulum**

1. Yeni bir React projesi oluşturun (Vite önerilir):

   ```bash
   npm create vite@latest student-dashboard -- --template react
   cd student-dashboard
   npm install
   npm run dev
   ```
2. `src/App.jsx` dosyasını aşağıda açıklanan lab iskeletiyle değiştirin ve `styles/lab-styles.css` dosyasını ekleyin (içeriği sonunda verilmiştir). CSS'i `src/App.jsx` içinde `import './styles/lab-styles.css';` ile import edin.

---

### **Kılavuzlar ve Kısıtlamalar (dikkatle okuyun)**

* **Minimal kod sağlanmıştır** — öğrenciler state güncellemelerini, handler'ları ve composition'ı implement etmelidir. Küçük yardımcı kod parçacıkları sadece gerekli yerlerde gösterilmiştir.
* **Class isimleri zorunludur**. Öğrenci farklı isimler kullanırsa sağlanan CSS'i bozar ve puan kaybeder.
* **React davranışına** odaklanın: composition, props, state, conditional rendering, list keys ve controlled components. Layout CSS eklemeyin; sağlanan stylesheet'i kullanın.
* Functional components ve React hooks (`useState`) kullanın. Class components veya gelişmiş hooks yok.

---

## **Milestone 1 — İskelet ve Composition**


**Amaç:** Component dosyalarını oluşturun ve composition kullanarak statik liste render edin.

#### Görevler

1. `App.jsx` içinde `initialStudents` tanımlayın (minimal hazır kod):

```jsx
const initialStudents = [
  { id: 1, name: 'Ali', grade: 85 },
  { id: 2, name: 'Siti', grade: 72 },
  { id: 3, name: 'Rahim', grade: 55 },
];
```

2. Daha önce gösterilen tam dosya isimleriyle componentler oluşturun. Import'ların çalışması için minimal export'lar implement edin. Henüz iş mantığını implement **ETMEYİN** — sadece gerekli class isimleriyle yapı ve markup.  

* `StudentList.jsx` `students` prop'unu kabul etmeli ve `<ul className="student-list">` render etmeli, `students`'ı `<StudentItem>`'a map'lemeli.  
* `StudentItem.jsx` `student` prop'unu kabul etmeli ve class isimleri olan iki element içeren `<li className="student-item">` return etmeli: `.student-name` ve `.student-grade`.  
* `StudentForm.jsx` class ismi `student-form` olan küçük bir form render etmeli (input'lar `input` class'ına ve submit button `btn` class'ına sahip olmalı). Şimdilik, form `return null` yapabilir veya etkisiz olabilir — sonraki milestone'da bağlayacaksınız.  
* `StudentControls.jsx` daha sonra filter/sort kontrollerini barındıracak. Şimdilik `<div className="controls">` return eden iskelet component oluşturun.  

3. `App.jsx` içinde componentleri import edin ve bu sırayla root `<div className="app">` içinde render edin:


```jsx
<h1 className="header">Student Dashboard</h1>
<StudentForm />
<StudentControls />
<StudentList students={initialStudents} />
```

4. Markup'ın statik listeyi gösterdiğini doğrulayın. Henüz dinamik davranış yok.


---

## **Milestone 2 — State, Ekleme ve Validation**


**Amaç:** `App.jsx` içinde state ekleyin, öğrenci ekleme akışını controlled component olarak implement edin ve temel validation.

#### Görevler

1. `App.jsx`'i state tutacak şekilde dönüştürün:


```jsx
const [students, setStudents] = useState(initialStudents);
```

2. **`StudentForm.jsx` içinde** controlled input'ları implement edin (`App.jsx` içinde form state tutMAYIN):


* `StudentForm` `name` ve `grade`'i `useState` ile yönetmeli.  
* Submit'te validate edin: name boş olmamalı, grade 0 ile 100 arasında bir sayı olmalı.  
* Validation geçerse, `onAdd({ id: Date.now(), name, grade: Number(grade) })` çağırın — `App.jsx`'ten props ile sağlanır.  
* Başarılı submit'ten sonra input'ları temizleyin.  

3. `App.jsx` içinde `addStudent(newStudent)` implement edin ve `StudentForm`'a `onAdd` prop'u olarak geçirin.

4. **Edge cases:** Eğer aynı `name`'e sahip bir öğrenci zaten varsa (case-insensitive), form bunu reddetmeli ve class `form-error` olan küçük inline error mesajı elementi göstermeli (`StudentForm` içinde).  

---

## **Milestone 3 — Conditional Rendering + Lists**


**Amaç:** Geçti/kaldı gösterimini, boş state'i ve silme işlemini implement edin.

#### Görevler

1. **Pass/Fail UI (`StudentItem.jsx` içinde)**


* `passed = student.grade >= 60` hesaplayın.  
* Root `<li>` sonuca göre (`student-item`'a ek olarak) `student-pass` veya `student-fail` extra class'ına sahip olmalı. Bu sağlanan CSS kuralları için önemlidir.  
* Grade'in yanında class `student-status` olan element içinde `Pass` veya `Fail` gösterin.  

2. **Empty-state (`StudentList.jsx` içinde)**


* Eğer `students.length === 0` ise, `<ul>` yerine `<p className="no-data">Henüz öğrenci yok — yukarıdaki formu kullanın.</p>` render edin.  

3. **Öğrenci silme**

* Her `StudentItem` içine küçük bir delete `<button className="delete-btn">Delete</button>` ekleyin.  
* `StudentItem` bir `onDelete(id)` prop'u kabul etmeli ve button tıklandığında çağırmalı.  
* `App.jsx` içinde `.filter()` kullanarak `deleteStudent(id)` implement edin ve aşağı geçirin.  

---

## **Milestone 4 — Filters, Sorting ve Derived Data**


**Amaç:** Geçti/kaldı'ya göre filtreleme, isme göre arama ve grade'e göre sıralama kontrolleri ekleyin.

#### Görevler

1. **StudentControls.jsx** tam class isimleriyle aşağıdaki UI'ı render etmeli:  

* `<div className="controls">`  

* `all`, `pass`, `fail` değerlerine sahip üç `<button className="filter-btn">` elementi içeren `<div className="filters">`. Aktif filter button'u ek `active` class'ına sahip olmalı.  
* İsim araması için `<input className="input search" placeholder="Search by name" />` (`App.jsx` veya `StudentControls` tarafından kontrol edilir — birini seçin ve kodda comment olarak belgelendirin).  
* `<button className="btn sort-btn">Sort: High → Low</button>` yüksek→düşük ve düşük→yüksek arasında toggle yapar.  

2. **App-level derived list mantığı** (`App.jsx` içinde):

* `filter`, `search` ve `sort` state'lerini `App.jsx` içinde tutun.  
* Bu state'lere göre `.filter()` ve `.sort()` operasyonlarını zincirleyerek `visibleStudents` hesaplayın.  
* `visibleStudents`'ı `StudentList`'e geçirin.  

3. **Conditional mesajlar**

* Arama sonucu sıfır eşleşme varsa, `<p className="no-data">"<em>SEARCH_TERM</em>" ile eşleşen öğrenci yok</p>` gösterin.  

---

## **Milestone 5 — Final Kontroller ve Best Practices**


**Öğrencilerin göndermeden önce geçmesi gereken kontrol listesi:**

* Her liste öğesi `key={student.id}` kullanır.  
* Uncontrolled input yok — tüm form input'ları kontrol edilmeli.  
* Öğrenci silme ve ekleme `students` state'ini immutable şekilde günceller.  
* Filter ve search birlikte çalışır ve sıralamaya saygı gösterir.  
* Spec'teki CSS class isimleri tam olarak kullanılır.  

---

## **Sağlanan CSS (`src/styles/lab-styles.css`'e kopyalayın)**

```css
/* lab-styles.css - öğrenciler bu class isimlerini değiştirmemeli */

.app {
  max-width: 760px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
}
  
.header {
  text-align: center;
  margin-bottom: 12px;
}
.student-form {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
  width: inherit;
}
.input {
  padding: 8px 10px;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
}
.input-grade {
  width: 100px;
}
.btn {
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  background: #0b5cff;
  color: white;
  cursor: pointer;
}
.controls {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.filters { display: flex; gap: 6px; }
.filter-btn { padding: 6px 8px; border-radius: 6px; border: 1px solid #ccc; background: white; cursor: pointer; }
.filter-btn.active { background: #0b5cff; color: white; border-color: #084ecb; }
.student-list { list-style: none; padding: 0; margin: 0; width: 100%; }
.student-item { display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #eee; align-items: center; width: 100%; }
.student-name { font-weight: 600; }
.student-grade { margin-left: 12px; }
.student-status { font-size: 0.9em; margin-left: 8px; }
.student-pass { background: #f6ffef; }
.student-fail { background: #fff6f6; }
.delete-btn { background: transparent; border: 1px solid #ff6b6b; color: #ff6b6b; padding: 6px 8px; border-radius: 6px; cursor: pointer; }
.no-data { padding: 12px; text-align: center; color: #666; }
.form-error { color: #b00020; font-size: 0.9em; margin-left: 8px; }
.search { width: 220px; }
.sort-btn { padding: 6px 10px; }
.stats { margin-bottom: 8px; font-size: 0.95em; color: #333; }
```

---

## **Başlangıç ipuçları**

* `App.jsx` en üstte stylesheet'i import etmeli:

  ```js
  import './styles/lab-styles.css';
  ```
* `StudentForm`'a `onAdd` prop'u nasıl eklenir (sadece örnek imza — tam implementation'ı kopyalamayın):

  ```jsx
  <StudentForm onAdd={(student) => setStudents(prev => [...prev, student])} />
  ```
* `StudentItem` delete button basıldığında `onDelete(student.id)` çağırmalı.

---

## **Teslim**

Bu projeyi bir GitHub repo'suna push etmeniz ve repo URL'sini göndermeniz gerekiyor. Değerlendiriciler clone edip `npm install && npm run dev` çalıştırmalı. Bu yüzden sadece kod parçacıkları değil, tüm proje dahil edilmeli. `node_modules` klasörünü `.gitignore`'a eklemelisiniz.

---
