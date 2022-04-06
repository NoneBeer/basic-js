const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let newMembers = [];
  members.forEach(element => {
    if (typeof element === 'string') {
      element = element.trim().toUpperCase();
      newMembers.push(element[0]);
    }
  });
  return (newMembers.sort().join(''));
}

module.exports = {
  createDreamTeam
};
