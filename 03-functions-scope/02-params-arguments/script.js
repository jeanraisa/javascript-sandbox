function loginUser(user) {
  return `the user ${user.name} with the id of ${user.id} is logged in `;
}

const user = {
  id: 1,
  name: "Jean",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "Raisa",
  })
);

function getRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  console.log(arr[index]);
}

getRandom([1, 2, 3, 4, 6, 8, 10, 15]);
