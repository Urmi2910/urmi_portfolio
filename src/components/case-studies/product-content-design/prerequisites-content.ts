export interface PrerequisitesItem {
  text: string;
  link?: string;
}

export interface PrerequisitesCopy {
  title: string;
  items: PrerequisitesItem[];
}

export type PrerequisitesVariant = "existing" | "revised";

export const prerequisitesVariants: Record<PrerequisitesVariant, PrerequisitesCopy> = {
  existing: {
    title: "Prerequisites",
    items: [
      {
        text: "Business's facebook business manager page should be verified for full access. Business can still have restricted access for 30 days without their page being verified.",
        link: "URL link",
      },
      {
        text: "User proceeding with automated WhatsApp onboarding access should be admin of the Facebook Business manager page and should complete the process with desktop browser.",
      },
      {
        text: "The phone number being used to get access should preferably owned by business as this number will be visible to end user and can't be changed later. This number should not be active on personal WhatsApp or Business WhatsApp application. Additionally Number should be receiving OTP either via text or voice calls as users will be needed to enter the OTP to verify the number during the onboarding.",
      },
      {
        text: "Display should not be changed and ideally should match the business name mentioned Facebook business manager. If the display name doesn't match with business name, you need to provide the web URL to show the association between display and business name. Web url being provided should have mention of business name in footer/header if URL contains display or vice versa.",
        link: "Display Name Policy",
      },
      {
        text: "Your business should meet the Facebook's commerce policy else Facebook might reject the WABA access.",
        link: "Commerce Policy",
      },
    ],
  },
  revised: {
    title: "Required to onboard Whatsapp",
    items: [
      {
        text: "Verify your Facebook Business Manager page to get full access to WhatsApp BSP. Pre-verification message limit is upto 50 users. Your access will auto-disable after 30 days.",
        link: "URL link",
      },
      {
        text: "You have to be an admin on the Facebook Business Manager page to onboard WhatsApp.",
      },
      {
        text: "Use a business-owned mobile number as it's visible to end user. Number should not be active on personal or business WhatsApp. You can't change it later. Make sure the number is active as you will get a verification OTP via text or call during onboarding.",
      },
      {
        text: "Display Name should match Business Name on the Facebook Business Manager. If names don't match, provide web URL linking the two. Business name should be in the footer/header if the URL contains display name or vice versa.",
        link: "How Display Name Policy works",
      },
      {
        text: "Your business should meet Facebook's Commerce Policy for WABA access.",
        link: "How it works",
      },
    ],
  },
};

export function isPrerequisitesMockup(value?: string): value is PrerequisitesVariant {
  return value === "existing" || value === "revised";
}

export function toPrerequisitesMockupVariant(
  value: string | undefined,
  side: "before" | "after"
): PrerequisitesVariant | undefined {
  if (value === "prerequisites-before" || value === "existing") return "existing";
  if (value === "prerequisites-after" || value === "revised") return "revised";
  if (isPrerequisitesMockup(value)) return value;
  return side === "before" ? "existing" : "revised";
}

export function isPrerequisitesMockupId(value?: string): boolean {
  return (
    value === "prerequisites-before" ||
    value === "prerequisites-after" ||
    isPrerequisitesMockup(value)
  );
}
