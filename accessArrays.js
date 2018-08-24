const data = [{
    accountNumber: 12375619,
    accounts: [{
        name: 'Jeff',
        age: 55
    },{
        name: 'Andy',
        age: 42
    }
    ]
}];

const arr = ['one', 'two', 'three', 'four'];

console.log(arr[0]);

const i = 2;

console.log(arr[i]);


for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
};
// console log accountNumber
const answer1 = data[0].accountNumber
console.log(answer1);

// console log the accounts array length
const answer2 = data[0].accounts.length;
console.log(answer2)

// console log the second acount's name
const answer3 = data[0].accounts[1].name
console.log(answer3)
