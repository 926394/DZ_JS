// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
author: "John", // вывести этот текст
postId: 23,
comments: [
{
userId: 10,
userName: "Alex",
text: "lorem ipsum",
rating: {
likes: 10,
dislikes: 2, // вывести это число
},
},
{
userId: 5, // вывести это число
userName: "Jane",
text: "lorem ipsum 2", // вывести этот текст
rating: {
likes: 3,
dislikes: 1,
},
},
],
};

// РЕШЕНИЕ
const date = {};

// Выборка данных из объекта post и добавлене в объект date
date.name = post['author'];
date.dislikes = post.comments[0].rating['dislikes'];
date.userId = post.comments[1].userId;
date.text = post.comments[1].text;

// Вывод нового объекта с данными
console.log(date);
