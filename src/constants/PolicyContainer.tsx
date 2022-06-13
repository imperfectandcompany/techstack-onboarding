export type PolicyName = 'tos' | 'privacy' | 'cookie'

export enum Titles {
  tos = 'Terms of Service',
  privacy = 'Privacy Policy',
  cookie = 'Cookie Policy',
}

export enum SubTitles {
  tos = 'Please understand the following Terms of Service in which you are in agreement with by accessing or registering on Postogon.',
  privacy = 'This privacy policy governs the manner in which Postogon collects, uses, maintains and discloses information collected from users (each, a "User") of the https://www.postogon.com/ website ("Site"). This privacy policy applies to the Site and all products and services offered by Imperfect and Company.',
  cookie = 'Accessing this site means that you not only understand and accept, but also accept our Cookie policy. Cookies are an essential part of Postogon as it is how we manage our login sessions.',
}

export const TosSections = [
  {
    heading: 'Postogon',
    description:
      '“Postogon” refers to the platform on https://www.postogon.com and may not be confused as something else.',
  },
  {
    heading: 'Imperfect and Company',
    description:
      '"Us", "We", "Our", "The company", all refers to Imperfect and Company as a group, as a company. We are not responsible for any mistakes you may have made with our identity.',
  },
  {
    heading: 'Understand',
    description:
      'By being on our platform, you understand that you are accountable for your own mistakes. You understand that if you do not represent the values that the company stands for then your account will be dealt with accordingly and as fairly as possible across all branches owned by us.  You understand that since Imperfect and Company operates and is hosted in the United States that the Electronic Signatures in Global and International Commerce Act (ESGICA) is in effect and failure to follow these rules will result in permanent removal from all branches of Imperfect and Company.',
  },
  {
    heading: 'Acceptance',
    description:
      'You hereby agree that by accepting this TOS, you know that your contract with Postogon also correlates any service that is owned by us.',
  },
]

export const CookieSections = [
  {
    heading: 'Web browser cookies',
    description:
      'Our Site may use "cookies" to enhance User experience. Users web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.',
  },
  {
    heading: 'What is stored',
    description:
      "A randomly generated token is generated upon every successful login, this token is then stored in two places: (1) SQL Database, (2) User's device. In place (1), the token is associated to the User that it was generated for when they successfully logged in. In the latter, place (2), the token is stored a cookie on their device, whether that be through the browser, iOS application, or a Android application. We also store the user's desired client-side preferences as a cookie on the user's device. In total, we store three things, all are stored upon interaction with Postogon from the user and explained in the sections below.",
  },
  {
    heading: 'How it is used',
    description:
      "We check to see if a token exists on the User's device ever time our 'service', Postogon, is accessed by the User. If a token exists, Postogon checks to see if it also exists within our SQL Database. If the token exists, we then fetch the associated user's ID and deem them as a logged-in user. If a token does not exist, then the user is deemed as not logged in.",
  },
  {
    heading: 'How it affects you',
    description:
      'If you choose to disable Cookies on our website, you will be unable to save your log in session. This means you will not be able to log in.',
  },
  {
    heading: 'Cookie (1) POSTOGONID',
    description: 'This cookie is valid for 7 days and can be used to identify you as a user.',
  },
  {
    heading: 'Cookie (2) POSTOGONID_',
    description:
      "This cookie is valid for 3 days and cannot be used to identify you as a user. This token is created to force the first cookie (POSTOGONID) to expire without logging the user out. This way, the user won't even know they've been given a new login token. Basically, if the user is active after 3-7 days, the first cookie will be reset so that the expire date is increased, this way the user willbe logged out when they are inactive.",
  },
  {
    heading: 'Cookie (1) DARKMODE',
    description:
      'This cookie is a boolean (true or false) of whether the User has specified if they want to enable dark mode or not. Only generated if the User enables dark-mode. If the cookie is absent then the display for the User is assumed as light-mode by default.',
  },
  {
    heading: 'Understand',
    description:
      'You understand that we are not responsible for any service interruptions related to your account if you choose to disable cookies. Cookies are a core functionality for Postogon and thus are required for a peaceful user-experience.',
  },
]

export const PrivacySections = [
  {
    heading: 'Personal identification information',
    description:
      'We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, and in connection with other activities, services, features or resources we make available on our Site. Users may visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities. This Site uses the Steam Web APIs to retrieve data about users only when those users sync their Steam Account through the Steam OpenID provider in profile settings. The data we store from the Steam Web APIs include 64-bit Steam IDs, Steam Community names, and URLs to Steam Community avatar images. This data is used to integrate your profile from our other services database such as but not limited to Imperfect Gamers.',
  },
  {
    heading: 'How we use collected information',
    description:
      'Imperfect and Company may collect and use Users personal information for the following purposes: To process payments: We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.',
  },
  {
    heading: 'Sharing your personal information',
    description:
      'We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.',
  },
  {
    heading: 'Your acceptance of these terms',
    description:
      'By using this Site you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.',
  },
  {
    heading: 'Contacting us',
    description:
      'If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: inquiries@imperfectandcompany.com',
  },
]

export interface Sections {
  heading: string
  description: string
}

export interface PolicyInfo {
  Title: string
  Subtitle: string
  Sections: Sections[]
}

export const policy: Record<PolicyName, PolicyInfo> = {
  tos: { Title: Titles.tos, Subtitle: SubTitles.tos, Sections: TosSections },
  privacy: { Title: Titles.privacy, Subtitle: SubTitles.privacy, Sections: PrivacySections },
  cookie: { Title: Titles.cookie, Subtitle: SubTitles.cookie, Sections: CookieSections },
}
