function camelize(str) {
  let arrChange = str.split('-');
  let arrNew = arrChange.map((item, index) =>
    index === 0
      ? item
      : item[0].toUpperCase() + item.slice(1)
  );
  return arrNew.join('');
}
