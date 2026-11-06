// The home page's words. Every language file has this shape. Strings marked HTML may hold markup;
// `{privacy}` stands for the privacy policy's URL. The FAQ's structured data uses each answer
// without its markup, or `ld` where that should read differently.
export default {
  title: 'Faster: Intermittent Fasting Timer for iPhone',
  description: 'Faster is a simple, private intermittent fasting timer for iPhone. Follow your fast through digesting, fat burning and ketosis, with widgets, insights and no account. Supports 16:8, 18:6, 20:4 and OMAD.',
  social: 'Follow your fast phase by phase, from digesting to fat burning and ketosis. Simple, private, no account.',
  nav: { features: 'Features', privacy: 'Privacy', faq: 'FAQ' },
  store: 'Download Faster on the App Store',
  // Shown until the app is on the App Store (see src/release.ts).
  soon: { badge: 'Soon on the App Store', tag: 'Coming soon for iPhone', meta: 'Coming soon to the App Store.', q: 'When can I download Faster?', a: 'Faster is coming soon to the App Store for iPhone. As soon as it\'s available, you\'ll find the download link on this page.' },

  hero: {
    // HTML, split where the three tiles go.
    title: ['Your ', ' fast,<br>phase ', ' by<br>phase ', ''],
    lede: 'A simple, private intermittent fasting timer. Follow what typically happens in your body, from digestion to fat burning and ketosis.',
    note: 'Free · No account · No ads',
    alt: 'Faster on iPhone: a fast at 14 hours in the fat burning phase, with 1 hour 53 minutes to its 16-hour goal.',
  },

  goals: {
    title: 'Choose a goal. Look back on every fast.',
    text: 'Choose a shorter fast or a longer one, then look back at how long each fast lasted and whether you reached your goal. Your history is grouped by week and month, and you can sort it by date, duration or goal. Forgot to start or end the timer? You can adjust the times afterwards.',
    label: 'Fasting goals',
    custom: 'Custom, up to 72h',
    alt: "Faster's history, grouped into this week and last week: each fast with its times, duration and whether it reached its goal.",
  },
  phases: {
    title: "See what's going on inside.",
    text: "Depending on its length, your fast moves through up to five phases: digesting, settling, fat burning, ketosis and deep fast. Tap any phase to find out what's happening in your body.",
    alt: "Faster's phase sheet for Settling: blood sugar levels out and insulin drops, with time remaining in the phase.",
  },
  themes: {
    title: 'Make it your own.',
    text: 'Choose from five themes, each with a matching app icon and widgets. The app icon also shows your fasting goal. The Default theme is free, and a one-time purchase unlocks the other four.',
    night: 'Faster in the Night theme: cool blue and violet on dark.',
    fullphase: "Faster in the Full Phase theme: the whole screen in the current phase's colour.",
    pop: 'Faster in the Pop theme: flat, playful colour blocks.',
  },
  widgets: {
    title: 'On your Lock Screen and Home Screen.',
    text: 'Keep track of your fast with widgets, without opening the app. Between fasts, they show how much of your eating window is left.',
    home: "An iPhone Home Screen with Faster's widgets in different themes.",
    lock: "Faster's Lock Screen widgets, magnified: the fat burning phase with its timer and goal, and a ring showing 14 hours.",
  },
  stats: {
    title: 'Your progress at a glance.',
    text: 'See your streak, how often you reach your goal and how your fasts change over time. Insights explain those changes in simple terms, such as longer fasts or more regular start times.',
    alt: "Faster's stats: an insight about time spent in fat burning, the last 14 days of fasts and a trend.",
  },
  notifications: {
    title: 'Notifications, your way.',
    text: "Choose which reminders you'd like: when you reach your goal, halfway through your fast, with one hour to go or when a new phase begins. You can turn each notification on or off separately.",
    alt: "Faster's notification settings: reminders around the eating window and during a fast, like a new phase, halfway there and goal reached, each switched on or off.",
  },

  privacy: {
    title: 'Your fasts stay on your iPhone.',
    points: [
      { title: 'No account', text: "Open the app and start fasting. There's nothing to sign up for." },
      { title: 'No ads', text: 'Faster shows no ads and contains no advertising code.' },
      // HTML
      { title: 'No tracking', text: 'No analytics, and the app sends me no data. You can read more in the <a href="{privacy}">privacy policy</a>.' },
    ],
  },

  faq: {
    title: 'Questions about intermittent fasting with Faster',
    // Answers are HTML.
    items: [
      { q: 'What is the best app to track intermittent fasting on iPhone?', a: "Faster is a simple intermittent fasting tracker for iPhone. Start a fast with one tap, follow each fasting phase and check your progress with Lock Screen and Home Screen widgets. It's free to use, with no account and no ads." },
      { q: 'Which fasting schedules does Faster support?', a: 'Faster includes preset goals for 12:12, 14:10, 16:8, 18:6, 20:4 and one meal a day (OMAD, 23:1). You can also set a custom goal from 8 to 72 hours, including fasts of 24 hours or longer.' },
      { q: 'What are the phases of a fast?', a: "Faster follows five phases: digesting, settling, fat burning, ketosis and deep fast. The dial shows which one you're in, and you can tap any phase to read what's happening in your body. Timings are a general guide and vary from person to person." },
      { q: 'When does fat burning start during a fast?', a: 'For many people, the body leans more on stored fat after roughly 12 hours without food, once most glycogen has been used. Faster marks this as the fat burning phase on its dial. It\'s a rough guide, not a medical measurement.' },
      { q: 'Is Faster free?', a: 'Yes, Faster is free to use. An optional one-time purchase unlocks four additional themes with matching app icons and widgets. It also helps me keep improving the app.' },
      { q: 'Does Faster have widgets?', a: 'Yes. Faster has Lock Screen and Home Screen widgets. Keep track of your fast with widgets, without opening the app. Between fasts, they show how much of your eating window is left.' },
      { q: 'Does Faster need an account or collect my data?', a: 'No. There\'s no account, no analytics and no tracking. Your fasts are stored only on your iPhone and are never sent to me. See the <a href="{privacy}">privacy policy</a>.', ld: "No. There's no account, no analytics and no tracking. Your fasts are stored only on your iPhone and are never sent to the developer." },
      { q: 'Can I fix a fast if I forgot to start or end it?', a: 'Yes. You can change the start time while a fast is running, adjust both the start and end times when you finish, and edit or delete past fasts in History. Faster can also remind you if you forget to end a fast.' },
      { q: 'Which languages is Faster available in?', a: 'Faster is available in English, German, Spanish, French, Brazilian Portuguese and Japanese.' },
      { q: 'Who makes Faster?', a: 'I\'m Robin, and I make Faster on my own. If you like it, the optional theme purchase helps me keep working on it. Questions or ideas? Write to me at <a href="mailto:fasterfastingapp@proton.me">fasterfastingapp@proton.me</a>.', ld: 'Faster is made by Robin, an independent developer. Questions and ideas are welcome at fasterfastingapp@proton.me.' },
    ],
    disclaimer: "Faster is not a medical app. Talk to your doctor before you start fasting, especially if you're pregnant, have diabetes or have a history of eating disorders.",
  },

  final: { title: 'Ready for your next fast?', text: 'Free to download. Start your fast with one tap.' },

  footer: { tagline: 'A simple, private intermittent fasting timer for iPhone.', support: 'Support', privacy: 'Privacy', home: 'Home', credit: 'Site by', languages: 'Languages' },

  // Offered to visitors whose browser prefers this language while they read another version.
  banner: { text: 'Faster is also available in English.', link: 'Read in English', close: 'Close' },

  app: {
    name: 'Faster: Intermittent Fasting',
    description: 'A simple, private intermittent fasting timer that shows what your body is doing as your fast goes on, from digesting to fat burning and ketosis.',
    features: [
      'Fasting timer with five phases: digesting, settling, fat burning, ketosis and deep fast',
      'Goals for 12:12, 14:10, 16:8, 18:6, 20:4, one meal a day and custom fasts up to 72 hours',
      'Lock Screen and Home Screen widgets',
      'Stats, streaks, trends and plain-language insights',
      'Editable fasting history, sorted by date, length or goal',
      'Reminders for the eating window, each phase and the goal',
      'Five themes with matching app icons and widgets',
      'No account, no ads, no tracking',
    ],
  },
};
