function calculateAge() {
    const birthdayInput = document.getElementById('birthday').value;
    if (!birthdayInput) {
        alert('Please enter your birthday');
        return;
    }

    const birthday = new Date(birthdayInput);
    if (isNaN(birthday.getTime())) {
        alert('Please enter a valid date in YYYY-MM-DD format');
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
}
script.js
// document.getElementById('age-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const dob = document.getElementById('dob').value;
//     if (dob) {
//         const age = calculateAge(new Date(dob));
//         document.getElementById('result').textContent = `Your age is ${age} years.`;
//     } else {
//         document.getElementById('result').textContent = 'Please enter a valid date of birth.';
//     }
// });

// function calculateAge(dob) {
//     const diffMs = Date.now() - dob.getTime();
//     const ageDate = new Date(diffMs);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
