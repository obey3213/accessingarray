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
//console log accountNumber
const response = data[0].accountNumber

console.log(response);

const answer2 = data[0].accounts.length;
console.log(answer2);

const answer3 = data[0].accounts[1].name;
console.log(answer3);
