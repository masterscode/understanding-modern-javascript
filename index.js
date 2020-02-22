const getIDs = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([ 233, 225, 545, 555 ]);
	}, 1500);
});

const getRecipe = resID =>{
    return new Promise((resolve, reject)=>{
        setTimeout(id =>{
            const recipe = {
                title: 'fresh tomato pasta',
                publisher: 'jonas'
            };
            resolve(`${id}: ${recipe.title}`)
        }, 1500, resID)
    })
}

const getRelated = publisher =>{
 //code goes in here!!   
}

getIDs
	.then((data) => {
        console.log(data);
        return getRecipe(data[2]);
    })
    .then(returnedValue => console.log(returnedValue))
	.catch((error) => {
		console.log('error');
	});

/*
function getRecipe () {
    setTimeout(() => {
        const recipeID = [523, 888, 432, 974];
        console.log(recipeID);
   
    setTimeout((id)=>{
        const recipe = {
            title: 'fresh tomato pasta',
            publisher: 'jonas'
        };
        console.log(`${id} ${recipe.title}`)
        setTimeout((publisher) => {
            console.log(publisher)
        }, 1500, recipe.publisher);
    },1000, recipeID[2]);
}, 1500);
}

getRecipe();

*/

/*const second = ()=>{
    setTimeout(()=> console.log('async second func call'), 2000)
}

const first = () =>{
    console.log('first')
    second();
    console.log('the end')
}

first();
*/

/*
{
    let a = 'private value';
    let b = 'another private value';
}

console.log(a, b)// error: variabe a is not defined

*/

// es6 strings --template literals

// let firstName = 'john';
// let lastName = 'smith';
// const yearOfBirth = 1990;

// console.log(
// 	`this is ${firstName} ${lastName} he was born in ${yearOfBirth}. today he is ${2020 - yearOfBirth} years old`
// );
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName.startsWith('J'))
// console.log(fullName.endsWith('j'))
// console.log(fullName.includes(' '))
// console.log(fullName.repeat(4))
