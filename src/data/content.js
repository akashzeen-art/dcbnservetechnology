import {
  Activity,
  BadgeCheck,
  BookHeadphones,
  Bot,
  CalendarClock,
  ChartColumn,
  ChartLine,
  ChefHat,
  Clapperboard,
  Crosshair,
  Dumbbell,
  Gamepad2,
  Gift,
  Globe,
  Languages,
  Layers,
  LayoutGrid,
  MapPinned,
  Megaphone,
  MessageCircleQuestion,
  MousePointerClick,
  PenLine,
  Phone,
  Rocket,
  ShoppingBag,
  Smartphone,
  Tags,
  Target,
  Trophy,
  Users,
  Wallet,
} from 'lucide-react'

export const dcb = {
  id: 'dcb',
  number: '01',
  kicker: 'Payments',
  title: 'Direct Carrier Billing',
  text: 'Direct Carrier Billing (DCB) is an online mobile payment method that allows users to make purchases directly charged to their mobile phone bill or prepaid SIM card. DCB works across all mobile devices and is accessible to any user having a subscription or prepaid plan with a telecom operator.',
  highlights: ['Charged to the mobile bill', 'Works with prepaid SIM cards', 'Any mobile device'],
  steps: [
    {
      icon: ShoppingBag,
      title: 'Choose a purchase',
      text: 'The user picks a game, subscription, app or digital content online.',
    },
    {
      icon: Smartphone,
      title: 'Pay with mobile',
      text: 'They select their mobile number as the payment method and confirm.',
    },
    {
      icon: Wallet,
      title: 'Charged by the operator',
      text: 'The amount is added to the phone bill or deducted from prepaid balance.',
    },
  ],
  benefits: [
    {
      icon: Smartphone,
      title: 'Mobile-first user experience',
      text: 'Checkout built for the phone, paid with just a mobile number.',
    },
    {
      icon: Layers,
      title: 'Flexible delivery across channels',
      text: 'Reach subscribers wherever they are, across every digital channel.',
    },
    {
      icon: ChartLine,
      title: 'Measurable outcomes & performance tracking',
      text: 'Track every transaction and campaign with clear, measurable results.',
    },
  ],
}

export const nonData = {
  title: 'Products for non-data users',
  text: 'Not every subscriber is online. Our USSD products bring AI assistance, content and rewards to any handset with a simple dial code: no app, no internet, and billed straight to the operator account.',
  tags: ['No internet needed', 'Works on any phone', 'Operator billing'],
  videos: [
    {
      id: 'ginnie',
      label: 'AI Ginnie',
      code: '*786#',
      src: 'https://vz-a36f14d6-bf4.b-cdn.net/453e204c-ab78-4dd6-92b9-d54d7e4c5ee7/play_480p.mp4',
    },
    {
      id: 'rewards',
      label: 'Dial & win',
      code: '*345#',
      src: 'https://vz-a36f14d6-bf4.b-cdn.net/68681fe6-9e90-48fe-a80d-eb58a49a6dab/play_480p.mp4',
    },
  ],
  product: {
    name: 'AI Ginnie',
    code: '*786#',
    text: 'One friend shows another how easy it is: dial *786#, meet AI Ginnie and get helpful answers on health, learning, relationships and everyday life, right from the USSD menu.',
  },
  journey: [
    { icon: Phone, title: 'Dial *786#', text: 'Open AI Ginnie from any handset with one short code.' },
    { icon: Bot, title: 'Meet AI Ginnie', text: 'A friendly USSD menu introduces the assistant in seconds.' },
    {
      icon: LayoutGrid,
      title: 'Pick a category',
      text: 'Health, Wellness, Education, Relationships, Lifestyle and more.',
    },
    {
      icon: MessageCircleQuestion,
      title: 'Ask a real question',
      text: 'A health query gets a clear, simple answer on the spot.',
    },
    {
      icon: ChefHat,
      title: 'Explore more',
      text: 'Cooking tips, personal guidance, study help and wellness routines.',
    },
    { icon: CalendarClock, title: 'Choose a plan', text: 'Daily, weekly or monthly subscription options.' },
    { icon: BadgeCheck, title: 'Billed & activated', text: 'Charged by the operator and activated instantly.' },
    { icon: Gift, title: 'Get rewarded', text: 'Subscribers unlock gifts that keep them coming back.' },
  ],
  rewards: ['Motorcycle', 'Monthly bike', 'Smartphone', 'Cash', 'And more'],
  custom: [
    { icon: Tags, title: 'Flexible pricing' },
    { icon: Languages, title: 'Localised categories' },
    { icon: MapPinned, title: 'GEO & operator-based customisation' },
  ],
}

export const content = {
  id: 'content',
  number: '02',
  kicker: 'Content',
  title: 'Content for a global audience',
  text: 'Apart from being technologically forward, we also keep on acquiring access and rights to communication that would find a global audience.',
  extra:
    'We have the channel, as well as the content, across so many categories. What’s more? We regularly update our content repositories to provide users with the latest and most interesting content for end users!',
  categories: [
    {
      icon: BookHeadphones,
      title: 'Audio Books',
      text: 'Curated audio books content designed for maximum engagement and user satisfaction.',
    },
    {
      icon: Globe,
      title: 'Global Content',
      text: 'Curated global content designed for maximum engagement and user satisfaction.',
    },
    {
      icon: Clapperboard,
      title: 'VOD (Video On Demand)',
      short: 'VOD',
      text: 'Curated video on demand content designed for maximum engagement and user satisfaction.',
    },
    {
      icon: Gamepad2,
      title: 'HD Games',
      text: 'Curated HD games content designed for maximum engagement and user satisfaction.',
    },
    {
      icon: Trophy,
      title: 'Contest',
      text: 'Exciting contests and competitions to engage users, reward participation, and drive platform growth.',
    },
    {
      icon: Dumbbell,
      title: 'Health and Fitness',
      short: 'Fitness',
      text: 'Curated health and fitness content designed for maximum engagement and user satisfaction.',
    },
  ],
  updates: {
    title: 'Regular Updates',
    text: 'Our content team works continuously to refresh and update our repositories with the latest and most interesting content. We ensure that our users always have access to trending and high-quality content across all categories.',
  },
}

export const marketing = {
  id: 'marketing',
  number: '03',
  kicker: 'Growth',
  title: 'Digital Marketing',
  text: 'Digital marketing involves leveraging online channels like social media, search engines, email, and websites to promote brands, engage audiences, and drive conversions. It uses strategies like SEO, content marketing, and paid ads to boost online visibility and attract potential customers.',
  extra:
    'We offer 360º digital marketing solutions to clients. We cover all aspects of digital marketing on all digital devices and offer various solutions to optimize your digital advertising spends.',
  solutions: [
    { icon: Megaphone, title: 'Campaign Management', text: 'Comprehensive digital campaign planning and execution' },
    { icon: ChartColumn, title: 'Analytics & Reporting', text: 'Real-time insights into campaign performance' },
    { icon: Crosshair, title: 'Ad Optimization', text: 'Advanced targeting and optimization techniques' },
    { icon: PenLine, title: 'Content Strategy', text: 'Data-driven content creation and distribution' },
    { icon: MousePointerClick, title: 'Conversion Optimization', text: 'Maximize ROI with proven conversion strategies' },
    {
      icon: Rocket,
      title: 'Google, Meta & TikTok Ads',
      text: 'Targeted paid campaigns that reach your audience where they search, scroll and watch',
      platforms: ['Google Ads', 'Meta Ads', 'TikTok Ads'],
    },
  ],
  outcomes: [
    { icon: Megaphone, title: 'Promote brands' },
    { icon: Users, title: 'Engage audiences' },
    { icon: MousePointerClick, title: 'Drive conversions' },
    { icon: Target, title: 'Attract customers' },
  ],
  why: {
    title: 'Why choose us?',
    stat: { value: 25, suffix: '+', label: 'years of combined industry experience' },
    points: [
      { icon: Trophy, text: 'Proven track record of successful campaigns' },
      { icon: Activity, text: 'Cutting-edge technology and tools' },
      { icon: Users, text: 'Dedicated account management' },
    ],
  },
}
