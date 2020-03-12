'use strict'

import users from './users.js';

// Задание 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
    return users.reduce((acc, user) => {
        acc.push(user.name);
        return acc;
    }, []);
};
console.log(getUserNames(users));

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue'));

// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => (users
    .filter(user => user.gender === gender)
    .reduce((acc, user) => {
        acc.push(user.name);
        return acc;
    }, [])
);

console.log(getUsersWithGender(users, 'male'));

// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
    return users.filter(user => {
        return !user.isActive;
    });
};
console.log(getInactiveUsers(users));

// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
    return users.find(user => {
        return user.email === email
    });
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// Задание 6
//Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
    return users.filter(user => {
        return user.age >= min && user.age <= max
    });
};
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
    return users.reduce((acc, user) => {
        return acc + user.balance
    }, 0);
};
console.log(calculateTotalBalance(users));

// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => users
    .filter(user => {
        for (let i = 0; i < user.friends.length; i += 1) {
            if (user.friends[i] === friendName) {
                return user
            }
        }
    })
    .reduce((acc, user) => {
        acc.push(user.name);
        return acc;
    }, []);

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => users
    .sort((userA, userB) => {
        return userA.friends.length - userB.friends.length
    })
    .reduce((acc, user) => {
        acc.push(user.name);
        return acc;
    }, []);

console.log(getNamesSortedByFriendsCount(users));

// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users =>
    users
    .reduce((acc, user) => {
        acc.push(...user.skills);
        return acc;
    }, [])
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .sort()

console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud' ]