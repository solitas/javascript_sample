// function 의 call, apply 학습

const bruce = { name: "bruce" };
const madeline = { name : "Madeline" };

function greet() {
    return `Hello. I'm ${this.name}!`;
}

greet();
greet.call(bruce);
greet.call(madeline);

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

//update.call(bruce, 1949, 'singer');
update.apply(bruce, [1955, 'actor']);

Math.min.apply(null, [2,3,-5,15,8]);

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // apply(bruce, newBruce);

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");

updateBruce.call(madeline, 1274, "king");
