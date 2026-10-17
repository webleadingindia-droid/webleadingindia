export interface BlogSection { h: string; p: string[]; ul?: string[] }
export interface BlogPost {
  slug: string; title: string; excerpt: string; category: string;
  date: string; readTime: string; author: string; keywords: string[];
  sections: BlogSection[];
}

export const BLOG_CATEGORIES = ['SEO', 'Paid Ads', 'Web Design', 'Social Media', 'Reputation', 'Strategy'];

export const BLOGS: BlogPost[] = [
  {
    slug: 'healthcare-seo-guide-for-clinics',
    title: 'Healthcare SEO in 2026: A Practical Guide for Clinics and Hospitals',
    excerpt: 'How doctors and hospitals can rank for patient searches, build trust signals and turn organic traffic into booked appointments.',
    category: 'SEO', date: '2026-09-12', readTime: '7 min read', author: 'Web Leading India Team',
    keywords: ['healthcare seo', 'medical seo', 'clinic seo guide', 'hospital seo'],
    sections: [
      { h: 'Why SEO matters more for healthcare', p: ['Most patients begin their search for care on Google. They look up a symptom, compare treatments, and then search for a doctor or clinic near them. If your practice is missing at those moments, a competitor gets the call.', 'Unlike paid ads, SEO keeps working after the budget is spent. A well-optimised treatment page can bring patients for years.'] },
      { h: 'The four pillars of healthcare SEO', p: ['Healthcare is a “Your Money or Your Life” category, so Google expects higher standards of expertise and trust. Strong SEO therefore rests on four pillars.'], ul: ['Technical health: fast, mobile-friendly, secure pages that are easy to crawl', 'Treatment and condition content: detailed pages for each service you offer', 'Local signals: an optimised Google Business Profile, citations and reviews', 'Authority: doctor profiles, credentials and links from reputable sources'] },
      { h: 'Start with treatment pages, not just a blog', p: ['Many clinics publish general health tips but never create strong pages for the treatments they want to sell. Each major procedure deserves its own page covering who it is for, how it works, risks, recovery, cost factors and FAQs.', 'These pages capture people who are close to booking, so they usually convert better than informational articles.'] },
      { h: 'Show real expertise', p: ['Add the doctor’s name, qualifications, registration details and a short biography on every medical page. Have a clinician review the content and show the review date. These signals help both patients and search engines trust your site.'] },
      { h: 'Measure what matters', p: ['Rankings are only a means to an end. Track calls, form fills, WhatsApp taps and booked appointments from organic search. Review the data monthly and double down on pages that bring patients.'] },
    ],
  },
  {
    slug: 'google-business-profile-tips-for-doctors',
    title: '10 Google Business Profile Tips to Rank in the Maps Pack for “Doctor Near Me”',
    excerpt: 'A checklist to optimise your clinic’s Google Business Profile and win more local patient calls and direction requests.',
    category: 'SEO', date: '2026-08-28', readTime: '6 min read', author: 'Web Leading India Team',
    keywords: ['google business profile for doctors', 'local seo clinic', 'doctor near me', 'google maps ranking'],
    sections: [
      { h: 'Why your profile is your second homepage', p: ['For many local searches, patients never reach your website. They see your profile, read reviews, tap call or ask for directions. A complete, active profile can be as important as your site.'] },
      { h: 'The ten-point checklist', p: ['Work through these items and revisit them every month.'], ul: ['Choose the most accurate primary category, then add relevant secondary ones', 'Keep name, address and phone identical everywhere online', 'Write a clear description with your key services and location', 'List every treatment as a service with a short explanation', 'Upload real photos of the clinic, team and equipment regularly', 'Add accurate opening hours, including holidays', 'Enable messaging or booking links where possible', 'Publish weekly posts with health tips or announcements', 'Answer questions in the Q&A section yourself', 'Ask happy patients for reviews and reply to every one'] },
      { h: 'Reviews are the biggest lever', p: ['Review quantity, recency and quality all influence both rankings and trust. Make asking easy: send a short link by WhatsApp after a visit and train front-desk staff to mention it politely.', 'Never offer rewards for reviews, and never share patient details in replies.'] },
      { h: 'Track the right numbers', p: ['Watch calls, direction requests and website clicks from your profile insights. These actions show how many real patients your listing is producing.'] },
    ],
  },
  {
    slug: 'google-ads-for-clinics-how-to-lower-cost-per-lead',
    title: 'Google Ads for Clinics: How to Lower Your Cost per Patient Lead',
    excerpt: 'Practical ways to cut wasted ad spend and get more booked appointments from your Google Ads budget.',
    category: 'Paid Ads', date: '2026-08-10', readTime: '6 min read', author: 'Web Leading India Team',
    keywords: ['google ads for clinics', 'healthcare ppc', 'cost per lead', 'doctor google ads'],
    sections: [
      { h: 'Most wasted spend comes from three places', p: ['Clinics often burn budget on irrelevant searches, slow landing pages and untracked leads. Fixing these three areas usually reduces cost per lead quickly.'] },
      { h: 'Build campaigns around intent', p: ['Group keywords by treatment and intent, for example “dental implants cost” versus “dental implants near me”. Write ads that mirror the search and send each group to a matching page.', 'Add negative keywords weekly to block job seekers, students, free-service hunters and irrelevant conditions.'] },
      { h: 'Fix the landing page', p: ['A slow or confusing page wastes every click. Use a fast, mobile-first layout with a clear headline, doctor credentials, reviews, a short form and tap-to-call and WhatsApp buttons.'] },
      { h: 'Track beyond the click', p: ['Set up conversion tracking for calls, form fills and WhatsApp clicks. Better still, mark which leads become booked or completed appointments and feed that back to Google Ads. This lets the system optimise for patients, not just enquiries.'] },
      { h: 'Respond fast', p: ['The speed of your reply decides a surprising share of results. Set an internal rule to respond to every enquiry within five to ten minutes during working hours.'] },
    ],
  },
  {
    slug: 'healthcare-website-must-haves',
    title: '12 Things Every Hospital or Clinic Website Must Have',
    excerpt: 'From doctor profiles to booking flows, here is what a modern healthcare website needs to build trust and convert visitors.',
    category: 'Web Design', date: '2026-07-22', readTime: '5 min read', author: 'Web Leading India Team',
    keywords: ['healthcare website design', 'clinic website features', 'hospital website checklist'],
    sections: [
      { h: 'Your website is your first consultation', p: ['Patients judge your practice within seconds. A clear, fast and trustworthy site reassures them; a cluttered one sends them to a competitor.'] },
      { h: 'The essentials', p: ['Make sure your website includes the following.'], ul: ['Fast loading, mobile-first design', 'Prominent call, WhatsApp and appointment buttons', 'Detailed doctor profiles with qualifications and registration numbers', 'Dedicated pages for each treatment', 'Real clinic photos and virtual walkthroughs', 'Patient reviews and success stories used with consent', 'Clear location, timings and map directions', 'Transparent information on insurance and fees where possible', 'FAQs that answer common patient worries', 'A health blog with reviewed content', 'Privacy policy and consent notices', 'Analytics and conversion tracking'] },
      { h: 'Do not forget accessibility', p: ['Many patients are older or unwell. Use readable fonts, strong contrast and simple navigation so everyone can find information and book without help.'] },
      { h: 'Treat the site as a living asset', p: ['Update doctors, timings and offers promptly, review speed and security monthly, and keep publishing helpful content. A neglected site loses both rankings and trust.'] },
    ],
  },
  {
    slug: 'instagram-marketing-for-doctors',
    title: 'Instagram Marketing for Doctors: What to Post, What to Avoid',
    excerpt: 'A simple content framework for doctors who want to build trust and attract patients on Instagram without breaking advertising rules.',
    category: 'Social Media', date: '2026-07-05', readTime: '6 min read', author: 'Web Leading India Team',
    keywords: ['instagram for doctors', 'doctor social media', 'healthcare social media marketing'],
    sections: [
      { h: 'Why Instagram works for healthcare', p: ['Patients like to see the person behind the white coat. Short videos and simple carousels let you share expertise, show your approach and become familiar long before the first consultation.'] },
      { h: 'A five-pillar content plan', p: ['Rotate between these types of posts so your page stays useful and varied.'], ul: ['Education: myths, symptoms, prevention tips and explainers', 'Procedures: what happens during a treatment, step by step', 'Team and clinic: introductions and behind-the-scenes moments', 'Patient journeys: stories shared with written consent', 'Updates: camps, new services, awards and events'] },
      { h: 'Reels beat static posts', p: ['Short, captioned videos usually reach far more people than images. Keep them under 45 seconds, open with a hook such as a common question, and end with a clear next step like “book a consultation”.'] },
      { h: 'What to avoid', p: ['Do not share patient information or images without clear written consent. Avoid exaggerated promises, guaranteed results and fear-based messages. Follow the professional and advertising guidelines that apply to your specialty and platform.'] },
      { h: 'Consistency over perfection', p: ['Three or four quality posts a week for six months will do more than a burst of daily posts followed by silence. Plan content in batches and keep a simple monthly calendar.'] },
    ],
  },
  {
    slug: 'how-to-get-more-google-reviews-for-your-clinic',
    title: 'How to Get More Google Reviews for Your Clinic (Ethically)',
    excerpt: 'Simple, policy-compliant methods to collect more patient reviews and handle negative feedback professionally.',
    category: 'Reputation', date: '2026-06-18', readTime: '5 min read', author: 'Web Leading India Team',
    keywords: ['google reviews for clinics', 'patient reviews', 'healthcare reputation management'],
    sections: [
      { h: 'Why reviews decide choices', p: ['Most patients read reviews before booking. A higher rating, more reviews and recent feedback make your clinic the safer choice, and they also support local rankings.'] },
      { h: 'Make asking effortless', p: ['The best time to ask is right after a good experience. Share a direct review link through WhatsApp or SMS the same day, and place a QR code at the reception desk.'], ul: ['Train staff to ask politely at checkout', 'Keep the request short and personal', 'Follow up once, never repeatedly', 'Ask every patient, not only happy ones'] },
      { h: 'Replying to reviews', p: ['Thank positive reviewers briefly and sincerely. For negative reviews, respond calmly, apologise for the experience without confirming medical details, and invite the person to contact you offline.', 'Prospective patients read your replies as closely as the reviews themselves.'] },
      { h: 'What not to do', p: ['Never buy reviews, offer discounts for ratings or write fake feedback. It violates platform policies and can lead to penalties or removal of your profile.'] },
    ],
  },
  {
    slug: 'patient-acquisition-funnel-for-healthcare',
    title: 'The Patient Acquisition Funnel: From First Search to First Visit',
    excerpt: 'Understand each stage of the patient journey and the marketing that moves people from searching to booking.',
    category: 'Strategy', date: '2026-06-02', readTime: '7 min read', author: 'Web Leading India Team',
    keywords: ['patient acquisition', 'healthcare marketing strategy', 'patient journey'],
    sections: [
      { h: 'Think in stages, not channels', p: ['Many practices run ads, a blog and a social page separately. Patients, however, move through stages: they notice a problem, research options, compare providers and then book. Marketing works best when it supports each stage.'] },
      { h: 'The four stages', p: ['Use this simple model to plan your efforts.'], ul: ['Awareness: educational content, social posts and video reach people who have a concern', 'Consideration: treatment pages, doctor profiles and reviews help them compare', 'Decision: strong landing pages, clear pricing guidance and easy booking close the gap', 'Retention: reminders, follow-ups and newsletters bring patients back and generate referrals'] },
      { h: 'Where most practices leak patients', p: ['The biggest losses usually happen at the decision stage. Slow responses, hard-to-find phone numbers and confusing booking steps cause drop-offs. Fixing response time and booking flow often increases appointments without extra ad spend.'] },
      { h: 'Measure each stage', p: ['Track reach, enquiries, bookings, completed visits and repeat visits. Understanding where numbers fall helps you invest in the right fix rather than simply spending more.'] },
    ],
  },
  {
    slug: 'whatsapp-marketing-for-clinics',
    title: 'WhatsApp for Clinics: Reminders, Recalls and Replies That Reduce No-Shows',
    excerpt: 'How to use WhatsApp responsibly to remind patients, follow up after treatment and bring them back for check-ups.',
    category: 'Strategy', date: '2026-05-16', readTime: '5 min read', author: 'Web Leading India Team',
    keywords: ['whatsapp for clinics', 'appointment reminders', 'patient recall'],
    sections: [
      { h: 'Why WhatsApp works', p: ['Nearly every patient already uses WhatsApp, and messages are read quickly. For clinics, that makes it ideal for confirmations, reminders and follow-ups.'] },
      { h: 'Five high-value uses', p: ['Start with simple automations before building complex journeys.'], ul: ['Appointment confirmations and reminders', 'Pre-visit instructions such as fasting or documents', 'Post-treatment check-ins and care tips', 'Recall messages for vaccinations and annual check-ups', 'Quick answers to common questions using a chatbot'] },
      { h: 'Do it with consent', p: ['Collect permission before sending messages and always include an easy way to opt out. Use approved templates for notifications and keep promotional messages occasional and relevant.'] },
      { h: 'Keep it human', p: ['Use a friendly tone, address the patient by name and avoid sharing sensitive medical details in messages. Make sure a real person can step in when a patient replies with a concern.'] },
    ],
  },
];

export const getPost = (slug: string) => BLOGS.find((b) => b.slug === slug);
export const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
