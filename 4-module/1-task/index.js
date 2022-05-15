function makeFriendsList(friends) {
  let list = document.createElement('UL');
  for (let item of friends) {
    let li = document.createElement('li');
    li.innerHTML = `${item.firstName} ${item.lastName}`;
    list.appendChild(li);
  }
  return list;
}
