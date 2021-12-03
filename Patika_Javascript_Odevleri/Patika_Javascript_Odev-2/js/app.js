// Site ilk yüklendiğinde local storaage da kayıtlı görevleri göster eğer yoksa "Şu an herhangi bir göreviniz bulunmamaktadır yazdır".
function showTodo() {
  if (!localStorage.length) {
    showElement("Herhangi bir göreviniz bulunmamaktadır.")
  } else {
    showElement(Object.entries(localStorage));
  };
};

const addButton = document.getElementById("liveToastBtn");
addButton.addEventListener("click", addTodo);

const input = document.getElementById("task")
input.addEventListener("keyup", function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    addButton.click();
  }
});
// Ekle butonuna basıldığında bu fonksiyonu çalıştır ve eklenilmeye çalışılan görevin geçerli olup olmadığını kontrol et.
function addTodo() {
  let itemId = Math.random().toString();
  let itemText = document.getElementById("task");
  if (itemText.value === "" || String(itemText.value).trim().length == 0) {
    $('.error').toast('show');
    itemText.value = "";
  } else {
    itemText.value = String(itemText.value).trim();
    localStorage.setItem(itemId, itemText.value);
    $('.success').toast('show');
    itemText.value = "";
    showTodo();
  };

};

// Eğer görev sil butonuna basıldıysa görevi local storage'dan sil sil.
function removeTodo(event) {
  localStorage.removeItem(event.target.parentElement.id);
  $('.delete-success').toast('show');
  showTodo();
};

function completeTodo(event) {
  if (event.target.classList.contains('checked')) {
    event.target.classList.remove('checked')
  } else {
    event.target.classList.add('checked')
  }
};

// Eğer görev geçerliyse addTodo() fonksiyonundan metni al ve yeni element oluştur ya da showTodo() fonksiyonundan gerekli itemları al ve sergile.
function showElement(todo) {
  let ulDom = document.getElementById("list");
  ulDom.innerHTML = "";
  if (typeof (todo) === "object") {
    for (todoItem of todo) {
      let liDom = document.createElement("li");
      liDom.setAttribute("onclick", "completeTodo(event)");
      liDom.setAttribute("id", todoItem[0]);
      liDom.innerHTML = `${todoItem[1]}<button class="btn btn-danger float-right py-0 px-2 m-0" type="button" onclick="removeTodo(event)">&times;</button>`;
      ulDom.appendChild(liDom);
    }
  } else {
    let h2Dom = document.createElement("h2");
    h2Dom.innerHTML = `${todo}`
    h2Dom.classList.add('text-center', 'lead', 'display-4')
    ulDom.appendChild(h2Dom)
  };
};
