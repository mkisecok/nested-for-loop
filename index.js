function divider(input)
{
    console.log("\n" + "=".repeat(20), input, "=".repeat(20), "\n");
}

divider(' Task ');

const bobsFollower = ['Rich', 'Tim', 'Martin', 'Mahmut'];

const tinasFollower = ['Mahmut', 'Martin', 'Sedorf'];

const mutualFollower = [];

for (let i = 0 ; i < bobsFollower.length; i++)
{

    for (let t=0; t < tinasFollower.length; t++)
    {
        if ( bobsFollower[i] === tinasFollower[t])
        {
            mutualFollower.push(bobsFollower[i]);
         
        }
        
    }
        
}
console.log(mutualFollower);