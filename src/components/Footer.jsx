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
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-6">
        <h2 className="text-base font-bold text-gray-900 sm:text-xl">
          About the Team
        </h2>
        <div className="mt-1 text-sm text-gray-700 sm:mt-4 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex items-baseline justify-start gap-2 border-b border-gray-100 py-1.5 last:border-b-0 sm:block sm:space-y-1 sm:border-b-0 sm:py-0"
            >
              <div className="flex min-w-0 flex-wrap items-baseline gap-x-1.5 sm:block">
                <p className="font-semibold text-gray-900">{member.name}</p>
                {member.role && (
                  <p className="text-xs text-gray-600 sm:text-sm">
                    {member.role.trim()}
                  </p>
                )}
              </div>

              {(member.github || member.linkedin) && (
                <div className="flex shrink-0 gap-2.5 text-xs font-medium sm:gap-3 sm:pt-0.5 sm:text-sm">
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

        <div className="mt-2 flex flex-col items-start justify-start gap-1 border-t border-gray-200 pt-2.5 text-sm text-gray-600 sm:mt-6 sm:flex-row sm:items-center sm:gap-2 sm:pt-4">
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
