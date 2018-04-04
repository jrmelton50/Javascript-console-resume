var name = "Jessie Melton";
var interests = ["Cats", "Coding", "Animals", "Tennis", "Cooking"];
var experience = ["Web Designer at Serenity Counseling Inc. - • Designed flyers and brochures  • Develop website layout and some backend software",
                "Kennel Technician at Tuscaloosa Metro Animal Shelter - • Prepared cages and carriers according to medical guidelines  • Maintained cleanliness and organization of entire kennel area",
                "Team Leader at Humame Society of West Alabama - • Administered medications to animals and managed animal shelter upkeep  • Assigned daily duties to other team members",
                "Cook and Cashier at Zaxby's Restaurant - • Enabled kitchen operations to run in a timely manner  • Provided excellent customer service"];
var skills = ["Python", "Java", "C", "Lisp", "Scheme", "SQL", "VHDL", "Javascript", "HTML", "CSS"];

console.log("Name: " + name.toUpperCase());
displayPosition("Covalence", "Student / Programmer", "I love to code!");
console.log("My Interests:");
displayInterests();
console.log("My Previous Experience:");
displayExperience();
console.log("My Skills:");
displayAllSkills();


function displayPosition(companyName, jobTitle, description) {
    console.log("Company: " + companyName);
    console.log("Career: " + jobTitle);
    console.log("Description: " + description);
}

function displaySkill(skillName, isCool) {
    if (isCool) {
        console.log("BAM: ");
    }
    console.log(skillName);
}

function displayAllSkills() {
    var cool = false;
    for (var i=0; i<skills.length; i++) {
        var random = Math.floor(Math.random() * 2);
        if (random == 1) {
            cool = true;
        }
        displaySkill(skills[i], cool);
        cool = false;
    }
}

function displayInterests(){
    for (var i=0; i<interests.length; i++) {
        console.log(interests[i]);
    }
}

function displayExperience() {
    for (var i=0; i<experience.length; i++) {
        console.log(experience[i]);
    }
}