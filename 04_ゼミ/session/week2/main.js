const memo = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")
const hozonContainer = document.getElementById("memo-container")
//const remove = document.getElementById("remove-button")

addbutton.onclick = function () {
  //保存ボタンを押したらconsoleにmemo-inputで入力した文字列が反映される
  const text = memo.value

  const save = document.createElement("div")
  save.className = "save"
  save.textContent = text

  const removebutton = document.createElement("button")
  removebutton.textContent = "削除"
  removebutton.onclick = function () {
    save.remove()
  }

  console.dir(text)

  //保存ボタンを押したらmemo-inputで入力した内容がappend（保存）される
  hozonContainer.append(save)
  save.append(removebutton)

  memo.value = ""
}
