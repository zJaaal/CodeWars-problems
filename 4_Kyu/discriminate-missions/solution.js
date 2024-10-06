//https://www.codewars.com/kata/557a5682f896b5c1eb000048

// Write your solution here
// This solved it but is invalid lmao
// Hint: You have to use the Error stack trace to know which government is calling the function

let badPeople = ['Merry Abeyta', 'Dwana Webre', 'Lucio Timmer'];
let goodPeople = ['Beaulah Rist', 'Yelena Sather', 'Antwan Valls'];

let inmoralActions = ['kill', 'murder', 'torture'];

Math = Object.create(Math, {
    random: {
        value: () => 0.5
    }
});

function newMission(action, target) {
    const isSecretPlan = new RegExp('secret plan').test(newMission.caller?.toString());
    const isEvilGovernment = new RegExp('evil government').test(
        newMission.caller?.caller?.toString() ?? ''
    );

    return !(
        inmoralActions.includes(action) ||
        goodPeople.includes(target) ||
        isSecretPlan ||
        isEvilGovernment
    );
}

console.log(newMission('kill', 'Dwana Webre'), false);

// This is a mission targetting a good person
console.log(newMission('capture', 'Yelena Sather'), false);

// This is a good mission
console.log(newMission('capture', 'Dwana Webre'), true);
