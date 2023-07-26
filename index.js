const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// Get a unique set of users from List1 which are not in List2
const uniqueUsersInList1 = new Set(list1.filter(user => !list2.includes(user)));

// Get a unique set of users from List2 which are not in List1
const uniqueUsersInList2 = new Set(list2.filter(user => !list1.includes(user)));

// Get a set of users who are present in List1 and List2 both (intersection of list1 & list2)
const intersectionUsers = new Set(list1.filter(user => list2.includes(user)));


const uniqueUsersInList1Array = Array.from(uniqueUsersInList1);
const uniqueUsersInList2Array = Array.from(uniqueUsersInList2);
const intersectionUsersArray = Array.from(intersectionUsers);

console.log('Unique users in List1:', uniqueUsersInList1Array);
console.log('Unique users in List2:', uniqueUsersInList2Array);
console.log('Intersection of List1 and List2:', intersectionUsersArray);
