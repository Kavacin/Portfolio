document.addEventListener('DOMContentLoaded', function () {
    const portfolioSection = document.getElementById('portfolioSection');
    const contactSection = document.getElementById('contactSection');
    const educationSection = document.getElementById('educationSection');
    const projectsSection = document.getElementById('projectsSection');
    const experienceSection = document.getElementById('experienceSection');
   
    document.getElementById('portfolioLink').addEventListener('click', function () {
        portfolioSection.style.display = 'block';
        contactSection.style.display = 'none';
        educationSection.style.display = 'none';
        projectsSection.style.display = 'none';
    });
   


    document.getElementById('contactLink').addEventListener('click', function () {
        portfolioSection.style.display = 'none';
        contactSection.style.display = 'block';
        educationSection.style.display = 'none';
        projectsSection.style.display = 'none';
    });

    document.getElementById('educationLink').addEventListener('click', function () {
        portfolioSection.style.display = 'none';
        contactSection.style.display = 'none';
        educationSection.style.display = 'block';
        projectsSection.style.display = 'none';
    });
    document.getElementById('experienceLink').addEventListener('click', function () {
        portfolioSection.style.display = 'none';
        contactSection.style.display = 'none';
        experienceSection.style.display='block'
        educationSection.style.display = 'none';
        projectsSection.style.display = 'none';
    });

    document.getElementById('projectsLink').addEventListener('click', function () {
        portfolioSection.style.display = 'none';
        contactSection.style.display = 'none';
        educationSection.style.display = 'none';
        projectsSection.style.display = 'block';
    });
});

                    function toggleSkills() {
                        var skillsBox = document.getElementById("skills-box");
                        if (skillsBox.classList.contains("active")) {
                            skillsBox.classList.remove("active");
                        } else {
                            skillsBox.classList.add("active");
                        }
                    }
                