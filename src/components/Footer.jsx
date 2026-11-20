const TEAM_MEMBERS = [
  {
    name: "Pauline Christelle",
    role: "Scrum Master",
    github: "https://github.com/pchristelle",
    linkedin: "https://www.linkedin.com/in/christelle-nemb/",
  },
  {
    name: "Suelen Roberto",
    role: " Product Owner",
    github: "https://github.com/robertosuelen",
    linkedin: "https://linkedin.com/in/suelen-silvapm",
  },
  {
    name: "Nandhini Ravichandran",
    role: "Web Developer",
    github: "https://github.com/Nandhini0123",
    linkedin: "https://www.linkedin.com/in/nan-ravi/",
  },
  {
    name: "Henrietta Dare",
    role: "Web Developer",
    github: "https://github.com/Henrietta-Dare",
    linkedin: "https://www.linkedin.com/in/henrietta-dare/",
  },
  {
    name: "Sandra Barbosa",
    role: "Web Developer",
    github: "https://github.com/sandra395",
    linkedin: "https://www.linkedin.com/in/sandragbarbosa",
  },
];

export default function Footer({
  repoUrl = "https://github.com/chingu-voyages/V63-tier2-team-21",
  repoLabel = "GitHub Repository",
  members = TEAM_MEMBERS,
}) {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
          About the Team
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-6 text-sm text-gray-700 sm:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="space-y-1">
              <p className="font-semibold text-gray-900">{member.name}</p>
              {member.role && <p className="text-gray-600">{member.role}</p>}
              {(member.github || member.linkedin) && (
                <div className="flex flex-wrap gap-3 pt-0.5 font-medium">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      GitHub
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-4 text-sm text-gray-600 sm:flex-row">
          <span>Built by Tier 2 Team 21</span>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 underline hover:text-blue-800"
          >
            {repoLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
