// There are basically 3 types of answers (Yes, Doubtful, No) with 3 levels of emphasis
const sectionOne = 
['Yes, most definitely',
'Yes',
'Signs point to yes',
'Likely, but not certain',
'Not sure...',
'Unlikely, but possible',
'Outlook not so good',
'No',
'Nope, don\'t even think about it' ];
// This section defines the scope of the answer
const sectionTwo = 
['within the short term',
'within the middle term',
'within the long term'];
// This section gives notable trait to keep in mind
const sectionThree = 
['Adaptable', 'Adventurous', 'Agreeable', 'Athletic', 'Attractive', 'Balanced', 'Benevolent', 'Brilliant', 'Calm', 'Capable',
'Captivating', 'Caring', 'Charismatic', 'Charming', 'Cheerful', 'Clear-headed', 'Clever', 'Compassionate', 'Confident', 'Conscientious',
'Considerate', 'Constant', 'Contemplative', 'Cooperative', 'Courageous', 'Creative', 'Curious', 'Daring', 'Decisive', 'Dedicated',
'Deep', 'Directed', 'Disciplined', 'Discreet', 'Dramatic', 'Dutiful', 'Dynamic', 'Earnest', 'Educated', 'Efficient', 'Elegant',
'Eloquent', 'Empathetic', 'Energetic', 'Enthusiastic', 'Exciting', 'Extraordinary', 'Fair', 'Flexible', 'Focused', 'Forceful',
'Forgiving', 'Freethinking', 'Friendly', 'Fun-loving', 'Generous', 'Gentle', 'Genuine', 'Good-natured', 'Hardworking', 'Healthy', 'Helpful', 
'Heroic', 'Honest', 'Honorable', 'Humble', 'Humorous', 'Idealistic', 'Imaginative', 'Impressive', 'Incorruptible', 'Independent', 'Individualistic',
'Innovative', 'Insightful', 'Intelligent', 'Intuitive', 'Kind']

const answerRandomGenerator = (ansArray) => {
    console.log('hi')
    return ansArray[Math.floor(Math.random() * ansArray.length)]
}

const ansCompilerFunction = () => {
    let ansCompiler = document.getElementById("mixedMessageAnswer");
    
    ans = `${answerRandomGenerator(sectionOne)}. Improve your odds by being ${answerRandomGenerator(sectionThree)}. This answer is relevant ${answerRandomGenerator(sectionTwo)}.`
    console.log(ans)

    ansCompiler.innerHTML = ans;
}