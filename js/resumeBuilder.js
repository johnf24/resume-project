var bio = {
    "name": "John Fox",
    "role": "Software Developer",
    "biopic": "images/two.jpg",
    "contacts": {
        "mobile": "N/A",
        "email": "john.fox@workmail.com",
        "github": "github.com/johnf24",
        "location": "Atlanta"
    },
    "welcomeMessage": "Welcome To My Resume",
    "skills": ["HTML5", "CSS3", "JavaScript", "Bootstrap", "JQuery", "TypeScript", "Angular", "Python"]
};

var education = {
    "schools": [{
            "name": "New School",
            "location": "New York, NY",
            "degree": "B.S.",
            "majors": ["General Studies"],
            "dates": "2006 - 2010",
            "url": "http://newschool.edu"
        }],
    "onlineCourses": [{
            "school": "Udacity",
            "location": "Online",
            "degree": "Nanodegree",
            "title": "Front-End Web Development",
            "dates": "2016",
            "url": "http://www.udacity.com"
        }]
};

var work = {
    "jobs": [{
        "employer": "Independent Contractor",
        "location": "Atlanta, GA",
        "title": "Web Developer",
        "dates": "January 2017 - June 2017",
        "description": "Collaborated with a development team and contributed to an interactive web app using Node.js, Angular, Typescript and Sass."
    }]
};

var projects = {
    "projects": [{
            "title": "Online Portfolio",
            "dates": "2016",
            "description": "Developed a responsive website using HTML, CSS and Bootstrap.",
            "images": ["images/three.jpg"]
        },
        {
            "title": "Interactive Resume",
            "dates": "2016",
            "description": "Developed an interactive resume using JavaScript and jQuery.",
            "images": ["images/four.jpg"]
        },
        {
            "title": "Classic Arcade Game",
            "dates": "2016",
            "description": "Recreated the classic arcade game Frogger by adding entities to a game loop engine.",
            "images": ["images/five.jpg"]
        },
        {
            "title": "Website Optimization",
            "dates": "2016",
            "description": "Optimized a website to achieve 60 frames per second performance.",
            "images": ["images/six.jpg"]
        },
        {
            "title": "Neighborhood Map",
            "dates": "2016",
            "description": "Developed an interactive application featuring a neighborhood map implementing third party API's.",
            "images": ["images/seven.jpg"]
        },
        {
            "title": "Feed Reader Test",
            "dates": "2016",
            "description": "Completed a test suite for a web-based application.",
            "images": ["images/eight.jpg"]
        },
        {
            "title": "Item Catalog",
            "dates": "2017",
            "description": "A dynamic application that provides a list of items with user registration and authentication.",
            "images": ["images/nine.jpg"]
        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedImage);

    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);

    var formattedGithub = HTMLcontactGeneric.replace("%contact%", "github").replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);

};


education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);

        var formattedURL = HTMLschoolURL.replace("%data%", education.schools[i].url);
        $(".education-entry:last").append(formattedURL);
    }

    for (var l = 0; l < education.onlineCourses.length; l++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.onlineCourses[l].school);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.onlineCourses[l].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.onlineCourses[l].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.onlineCourses[l].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.onlineCourses[l].title);
        $(".education-entry:last").append(formattedMajor);

        var formattedURL = HTMLschoolURL.replace("%data%", education.onlineCourses[l].url);
        $(".education-entry:last").append(formattedURL);
    }
};


work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);
    }
};


projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        for (var l = 0; l < projects.projects[i].images.length; l++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[l]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};


function locationizer(work_obj) {
    var locationArray = [];

    for (var i = 0; i < work_obj.jobs.length; i++) {
        var newLocation = work_obj.jobs[i].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

function inName(name) {
    name = name.trim().sprit(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);

bio.display();
education.display();
work.display();
projects.display();