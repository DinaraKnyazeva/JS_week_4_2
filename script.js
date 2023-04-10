let str =
  "бла бла бла,</br>еще раз бла бла бла,<col>и на последок бла бла бла<hr>";
console.log(str);
//добавляем функцию, которая ищет в строке html теги которые начинаются и заканчиваются на <> и удаляет их
function deleteTags(str) {
  const regex = /( |<([^>]+)>)/gi,
    result = str.replace(regex, " ");
  return result;
}

console.log(deleteTags(str));
