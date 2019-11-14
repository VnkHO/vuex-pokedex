export const shuffle = function (array: any): any {
  const newArr = array.slice()
  for (let element = newArr.length - 1; element > 0; element--) {
    const index = Math.floor(Math.random() * (element + 1));
    [array[element], array[index]] = [array[index], array[element]];
  }
  return newArr
}
