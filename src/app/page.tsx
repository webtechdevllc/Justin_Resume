import Image from 'next/image'

import { PrintButton } from './PrintButton'

// =============================================================================
// EDIT YOUR RESUME HERE — change anything below and the page updates.
// =============================================================================

const resume = {
  name: 'Justin Weber',
  photo: '/profile.jpg',
  title: 'Applications Programmer & Software Developer',
  tagline:
    'Hard-working, team-oriented professional with farm roots and industrial tech experience.',
  contact: {
    phone: '(712) 470-8697',
    phoneHref: 'tel:+17124708697',
    email: 'justweber951@gmail.com',
    emailHref: 'mailto:justweber951@gmail.com',
    location: 'Sioux Falls, SD area',
  },
  profile: [
    'Hard-working and passionate professional seeking a job with True North Feeds. Driven and team-oriented.',
    'I was born and raised in South Africa. I grew up on a farm, came to the US in 2018 on a farming visa, and in 2021 received a track and field scholarship to Garden City Community College in Kansas.',
    'I have been working as a farm hand and software developer since 2018.',
  ],
  education: [
    {
      school: 'Garden City Community College',
      focus: 'Computer Science',
    },
    {
      school: 'Northwest Iowa Community College',
      focus: 'Programmable Logic Controller Programming',
    },
  ],
  experience: [
    {
      company: 'Interstates',
      location: 'Sioux Falls, SD',
      dates: '2025 – 2026',
      role: 'Applications Programmer',
      highlights: [
        'Design human-machine interfaces (HMI) and program programmable logic controllers (PLCs) for industrial clients.',
        'Work as part of a team, solve problems, meet with clients, and develop solutions.',
      ],
    },
    {
      company: 'Astrocloud LLC',
      location: 'Sioux Falls, South Dakota',
      dates: '2024 – 2026',
      role: 'Software Developer',
      highlights: ['Build websites, applications, and software for clients.'],
    },
    {
      company: 'Tri-State Ag',
      location: 'Hull, Iowa',
      dates: '2018 – 2024',
      role: 'Farm Hand',
      highlights: [
        'Shop/equipment maintenance, driving truck, fertilizing, hauling seed, planting.',
        'Build grain bins and auger systems; dig and pour concrete foundations for grain bins.',
      ],
    },
  ],
  communityService: [
    {
      organization: 'Wallball and a Bible',
      activity: 'We do a workout and devotional with the inmates at Minnehaha County Jail every week.',
      dates: '2026 – Present',
    },
    {
      organization: 'Connection Church',
      activity: 'I serve as a volunteer at my local church, preparing facilities and the auditorium for our guests.',
      dates: '2024 – Present',
    },
  ],
  skills: [
    "Commercial Driver's License",
    'Teamwork',
    'Computer and PLC programming',
    'Decision Making',
    'Leadership',
    'Agriculture',
    'Problem Solving',
    'Loyal & Dependable',
  ],
  recommendation: {
    pdf: '/letter-of-recommendation.pdf',
    author: 'Collin Rumpca',
    role: 'Co-owner',
    organization: 'AstroCloud Software Development',
    phone: '(605) 377-3470',
    phoneHref: 'tel:+16053773470',
    email: 'collinrumpca@gmail.com',
    emailHref: 'mailto:collinrumpca@gmail.com',
    salutation: 'To whom it may concern,',
    paragraphs: [
      'As co-owner of AstroCloud Software Development, I am writing to formally recommend Justin Weber for any future endeavors he may pursue. Justin has been a valuable member of our software development team for over a year, during which time he has consistently demonstrated exceptional dedication and technical proficiency across numerous projects.',
      'Justin exhibits remarkable initiative and a profound commitment to excellence. He is well-known within our organization for his reliability and his willingness to go above and beyond to ensure that every task is completed to the highest standard. He possesses a tireless work ethic and an innate drive to tackle even the most demanding or repetitive tasks with a positive attitude. Whether he is working independently or as part of a team, Justin remains focused on the job at hand until it is done right. Furthermore, he possesses the humility to seek guidance when necessary and the integrity to credit his successes to the collective effort of the team and not him alone.',
      'In summary, Justin is a dependable, team-driven professional whose character and reliability have significantly benefited AstroCloud. His punctuality, stamina, and collaborative spirit make him an outstanding asset to any organization, regardless of the industry.',
    ],
    closing:
      'Please feel free to contact me if you require any further information regarding his tenure with us.',
  },
} as const

// =============================================================================
// Page layout (you usually don't need to edit below)
// =============================================================================

function IconMail() {
  return (
    <svg
      className="size-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg
      className="size-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.932 1.24c-.352.47-.91.75-1.5.75H9.75c-2.485 0-4.5-2.015-4.5-4.5V6.75Z"
      />
    </svg>
  )
}

function IconPin() {
  return (
    <svg
      className="size-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  )
}

const navItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'community-service', label: 'Service' },
  { id: 'recommendation', label: 'Reference' },
  { id: 'skills', label: 'Skills' },
] as const

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
      <span className="border-b-4 border-blue-600 pb-1">{children}</span>
    </h2>
  )
}

export default function Home() {
  return (
    <div className="min-h-full bg-slate-50 text-slate-900 print:bg-white">
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-sm print:border-slate-300 print:bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <p className="font-display text-lg font-bold tracking-tight text-slate-900">
            {resume.name}
          </p>
          <nav
            className="flex flex-wrap gap-1 print:hidden"
            aria-label="On this page"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <PrintButton />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 print:py-6">
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-800 via-blue-900 to-slate-900 px-8 py-12 text-white shadow-xl print:rounded-none print:bg-slate-900 print:shadow-none">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-blue-500/20 blur-3xl print:hidden" />
          <div className="absolute -bottom-16 -left-16 size-48 rounded-full bg-white/10 blur-2xl print:hidden" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-200/90">
                Resume
              </p>
              <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                {resume.name}
              </h1>
              <p className="mt-2 text-xl font-medium text-blue-100">{resume.title}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-50/90">
                {resume.tagline}
              </p>
              <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
                <li>
                  <a
                    href={resume.contact.phoneHref}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium transition hover:bg-white/20"
                  >
                    <IconPhone />
                    {resume.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={resume.contact.emailHref}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium transition hover:bg-white/20"
                  >
                    <IconMail />
                    {resume.contact.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2 px-3 py-2 text-sm text-blue-100/90">
                  <IconPin />
                  {resume.contact.location}
                </li>
              </ul>
            </div>
            <div className="mx-auto w-full max-w-xs shrink-0 lg:mx-0 lg:max-w-70">
              <div className="overflow-hidden rounded-2xl ring-4 ring-white/25 shadow-2xl print:ring-slate-300">
                <Image
                  src={resume.photo}
                  alt={`${resume.name} profile photo`}
                  width={560}
                  height={420}
                  sizes="(max-width: 1024px) 100vw, 280px"
                  priority
                  className="aspect-4/3 w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_280px] lg:gap-12">
          <div className="space-y-12">
            <section id="profile" className="scroll-mt-24">
              <SectionHeading>Profile</SectionHeading>
              <div className="mt-4 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-base leading-relaxed shadow-sm print:shadow-none">
                {resume.profile.map((paragraph, i) => (
                  <p
                    key={i}
                    className={i === 0 ? 'font-medium text-slate-900' : 'text-slate-700'}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section id="experience" className="scroll-mt-24">
              <SectionHeading>Work History</SectionHeading>
              <ol className="mt-6 space-y-8">
                {resume.experience.map((job) => (
                  <li
                    key={`${job.company}-${job.dates}`}
                    className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm print:break-inside-avoid print:shadow-none"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-bold text-slate-900">
                        {job.company}
                      </h3>
                      <time className="text-sm font-semibold text-blue-800">
                        {job.dates}
                      </time>
                    </div>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {job.role} · {job.location}
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                      {job.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>

            <section id="education" className="scroll-mt-24">
              <SectionHeading>Education</SectionHeading>
              <ul className="mt-6 space-y-4">
                {resume.education.map((edu) => (
                  <li
                    key={edu.school}
                    className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm print:shadow-none"
                  >
                    <p className="font-display text-lg font-bold text-slate-900">
                      {edu.school}
                    </p>
                    <p className="mt-1 text-slate-600">{edu.focus}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="community-service" className="scroll-mt-24">
              <SectionHeading>Community Service</SectionHeading>
              <ul className="mt-6 space-y-4">
                {resume.communityService.map((item) => (
                  <li
                    key={`${item.organization}-${item.dates}`}
                    className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm print:shadow-none"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-slate-900">
                        {item.organization}
                      </h3>
                      <time className="text-sm font-semibold text-blue-800">
                        {item.dates}
                      </time>
                    </div>
                    <p className="mt-2 text-slate-700">{item.activity}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="recommendation" className="scroll-mt-24">
              <SectionHeading>Letter of Recommendation</SectionHeading>
              <article className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm print:break-inside-avoid print:shadow-none">
                <header className="flex flex-col gap-4 border-b border-slate-100 bg-slate-50/80 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                      Professional reference
                    </p>
                    <p className="mt-1 font-display text-lg font-bold text-slate-900">
                      {resume.recommendation.author}
                    </p>
                    <p className="text-sm text-slate-600">
                      {resume.recommendation.role},{' '}
                      {resume.recommendation.organization}
                    </p>
                    <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      <a
                        href={resume.recommendation.phoneHref}
                        className="font-medium text-blue-700 hover:text-blue-900"
                      >
                        {resume.recommendation.phone}
                      </a>
                      <a
                        href={resume.recommendation.emailHref}
                        className="font-medium text-blue-700 hover:text-blue-900"
                      >
                        {resume.recommendation.email}
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 print:hidden">
                    <a
                      href={resume.recommendation.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-800"
                    >
                      View PDF
                    </a>
                    <a
                      href={resume.recommendation.pdf}
                      download="Justin-Weber-Letter-of-Recommendation.pdf"
                      className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      Download PDF
                    </a>
                  </div>
                </header>
                <div className="px-6 py-8 sm:px-8">
                  <p className="text-base font-medium text-slate-800">
                    {resume.recommendation.salutation}
                  </p>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
                    {resume.recommendation.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    <p>{resume.recommendation.closing}</p>
                  </div>
                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <p className="text-slate-800">Sincerely,</p>
                    <p className="mt-4 font-display text-lg font-bold text-slate-900">
                      {resume.recommendation.author}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {resume.recommendation.role}
                    </p>
                    <p className="text-sm text-slate-600">
                      {resume.recommendation.organization}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      <a
                        href={resume.recommendation.phoneHref}
                        className="text-blue-700 hover:text-blue-900"
                      >
                        {resume.recommendation.phone}
                      </a>
                      <span className="mx-2 text-slate-300">·</span>
                      <a
                        href={resume.recommendation.emailHref}
                        className="text-blue-700 hover:text-blue-900"
                      >
                        {resume.recommendation.email}
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>

          <aside
            id="skills"
            className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start"
          >
            <SectionHeading>Skills & Licenses</SectionHeading>
            <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-2">
              {resume.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-blue-200/80 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-950 lg:rounded-xl lg:text-left"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </main>
    </div>
  )
}
