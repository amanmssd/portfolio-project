/* Aman Masod
970648196
IST 256 
DOM Activities
02-08-2026 */ 

function toggleSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const isHidden = getComputedStyle(el).display === "none";
  el.style.display = isHidden ? "block" : "none";
}

function toggleAboutSection() { toggleSection("about"); }
function toggleSkillsSection() { toggleSection("skills"); }
function toggleLeadershipSection() { toggleSection("leadership"); }
function toggleExperienceSection() { toggleSection("experience"); }



document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}, for your message!`);
    document.querySelector('form').reset();
});
