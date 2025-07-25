document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resume-form");
  const preview = document.getElementById("resume-preview");
  const themeSelect = document.getElementById("theme");

  themeSelect.addEventListener("change", () => {
    preview.className = "resume " + themeSelect.value;
  });

  form.addEventListener("input", updatePreview);

  function updatePreview() {
    const getVal = (id) => document.getElementById(id)?.value || "";

    const name = getVal("name");
    const email = getVal("email");
    const phone = getVal("phone");
    const address = getVal("address");
    const linkedIn = getVal("linkedin");
    const github = getVal("github");
    const objective = getVal("objective");
    const skills = getVal("skills");
    const experience = getVal("experience");
    const education = getVal("education");
    const projects = getVal("projects");
    const certifications = getVal("certifications");
    const achievements = getVal("achievements");

    preview.innerHTML = `
      <h2>${highlightKeywords(name)}</h2>
      <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>LinkedIn:</strong> <a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
      <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
      <hr>
      <section>
        <h3>Objective</h3>
        <p>${highlightKeywords(objective)}</p>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>${skills.split(",").map(skill => `<li>${highlightKeywords(skill.trim())}</li>`).join("")}</ul>
      </section>
      <section>
        <h3>Experience</h3>
        <p>${highlightKeywords(experience)}</p>
      </section>
      <section>
        <h3>Education</h3>
        <p>${highlightKeywords(education)}</p>
      </section>
      <section>
        <h3>Projects</h3>
        <p>${highlightKeywords(projects)}</p>
      </section>
      <section>
        <h3>Certifications</h3>
        <p>${highlightKeywords(certifications)}</p>
      </section>
      <section>
        <h3>Achievements</h3>
        <p>${highlightKeywords(achievements)}</p>
      </section>
    `;
  }

  function highlightKeywords(text) {
    if (!text) return "";
    const keywords = [
      "JavaScript", "Python", "HTML", "CSS", "React", "Developer", "Engineer",
      "API", "Team", "Project", "SQL", "Node", "Machine Learning", "AI"
    ];
    const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
  }
});
