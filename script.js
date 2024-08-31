const users = [
    {
        name: "Davlat",
        age: 17,
        isMarried: true,
        wifes: ['malika', 'kamila', 'samir', 'miron']
    },
    {
        name: "Samir",
        age: 13,
        isMarried: false,
        wifes: []
    },
    {
        name: "Jasur",
        age: 17,
        isMarried: false,
        wifes: []
    },
    {
        name: "Islom",
        age: 16,
        isMarried: true,
        wifes: ["Davlat"]
    }
];
let total = 0;
let old = users[0];
let young = users[0];

users.forEach(user => {
    if (user.age > old.age) {
        old = user;
    }
    if (user.age < young.age) {
        young = user;
    }
});
console.table('Самый взрослый:', old);
console.table('Самый младший:', young);
