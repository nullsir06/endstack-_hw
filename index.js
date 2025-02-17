require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Person = require('./models/person')

// 检查命令行参数
if (process.argv.length < 3) {
    console.log('give password as argument');
    process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

// const url = process.env.MONGODB_URI;

// mongoose.set('strictQuery', false);
// mongoose.connect(url);

// // 定义数据模型
// const personSchema = new mongoose.Schema({
//     name: String,
//     number: String,
// });

// const Person = mongoose.model('Person', personSchema);

// //格式化返回对象
// personSchema.set('toJSON', {
//     transform: (document, returnedObject) => {

//         delete returnedObject._id
//         delete returnedObject.__v
//     }
// })




// 查询所有
app.get('/api/persons', (request, response) => {
    Person.find({})
        .then(persons => {
            response.json(persons);
        })
        .catch(error => {
            console.error('Error fetching persons:', error);
            response.status(500).send('Internal Server Error');
        });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

