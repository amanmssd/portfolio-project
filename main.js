/* Aman Masod
970648196
IST 256 
DOM Activities
02-08-2026 */ 


function toggleAboutSection() {
    const aboutSection = document.getElementById('about');
    if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
}

function toggleSkillsSection() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
}

function toggleLeadershipSection() {
    const leadershipSection = document.getElementById('leadership');
    if (leadershipSection.style.display === 'none' || leadershipSection.style.display === '') {
        leadershipSection.style.display = 'block';
    } else {
        leadershipSection.style.display = 'none';
    }
}

function toggleExperienceSection() {
    const experienceSection = document.getElementById('experience');
    if (experienceSection.style.display === 'none' || experienceSection.style.display === '') {
        experienceSection.style.display = 'block';
    } else {
        experienceSection.style.display = 'none';
    }
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}, for your message!`);
    document.querySelector('form').reset();
});
