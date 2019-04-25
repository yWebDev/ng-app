const md5 = require('md5');

const users = [
  {
    name: 'John Smith',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
       magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat.`,
    marked: false,
    id: 0,
    avatar: `https://www.gravatar.com/avatar/${md5(0)}?d=identicon`,
  }, {
    name: 'Marta Rebs',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
       magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat.`,
    marked: false,
    id: 1,
    avatar: `https://www.gravatar.com/avatar/${md5(1)}?d=identicon`,
  }, {
    name: 'Frank Solo',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
       magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat.`,
    marked: true,
    id: 2,
    avatar: `https://www.gravatar.com/avatar/${md5(2)}?d=identicon`,
  },
];

function getUsers() {
  return users;
}

function getUser(id) {
  return users.find(user => user.id === id);
}

function updateUser(id, updates) {
  let user = getUser(id);
  user = {
    ...user,
    ...updates,
  };
  return user;
}

module.exports = {
  getUser,
  getUsers,
  updateUser,
};
