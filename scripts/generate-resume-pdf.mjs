import PDFDocument from "pdfkit";
import { copyFileSync, createWriteStream, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPdf = join(root, "public", "resume.pdf");
const copyPdf = join(root, "Urmi-Shah-Resume.pdf");

const colors = {
  background: "#fffbfe",
  foreground: "#1c1b1f",
  primary: "#6750a4",
  secondary: "#e8def8",
  secondaryText: "#1d192b",
  surface: "#f3edf7",
  muted: "#49454f",
  border: "#d8d2dc",
};

const profile = {
  name: "Urmi Shah",
  title: "Content Engineer & Content Designer",
  tagline: "Curious writer and design thinker at large!",
  intro:
    "I've always loved turning complex ideas into simple ones—from board game rules as a kid to software today. With 7+ years in content design, I make products easier to use by creating content that balances user needs with business goals.",
  phone: "(+91) 9426804388",
  email: "shah.urmi2910@gmail.com",
  linkedin: "linkedin.com/in/urmi-shah/",
  skills: [
    "Content design",
    "UX writing",
    "Content systems",
    "Information architecture & taxonomy",
    "Localization",
    "Accessibility & inclusive content (WCAG)",
    "AI content engineering",
    "Conversation design",
    "Prompt engineering",
    "Content engineering",
    "Knowledge architecture for AI",
    "AI evaluation & governance",
  ],
  experience: [
    {
      company: "DreamStreet",
      logo: "dreamstreet.png",
      role: "Content Engineer & Content Designer - III",
      period: "October 2025 to Present",
      bullets: [
        "Designed end-to-end product content for a new finance app, covering onboarding, payments, FAQs, support emails, and Help Center experiences for Tier 2 to 4 users",
        "Established scalable content governance, creating UX writing guidelines, voice & tone, terminology, and review workflows that enabled cross-functional teams to ship consistent, high-quality content faster",
        "Designed for finance chatbot Veda AI, defining its personality, conversation design, compliance guardrails, and fallback flows to increase adoption while delivering consistent, trustworthy financial guidance",
        "Built AI-powered content systems, including prompt libraries, localization workflows, and structured content models, empowering Product, Design, Customer Support, Legal, and Compliance teams to create stronger first drafts and maintain a consistent brand voice",
        "Applied UX research, content testing, and user insights to validate content decisions, improve comprehension, and continuously refine the product's voice for diverse Indian audiences",
      ],
    },
    {
      company: "Dream11",
      logo: "dream11.png",
      role: "Content Designer - III",
      period: "September 2024 to October 2025",
      bullets: [
        "Led user-first content across Dream11 products, creating clear, accessible experiences for 260M+ users across diverse and multilingual audiences",
        "Partnered with Product, Design, and Research from discovery through delivery, using content to shape UX flows and simplify complex user journeys",
        "Built the Dream11 Content Design System, including content patterns, guidelines, AI tools, and reusable templates that enabled teams to create faster, more consistent content at scale",
        "Defined localization standards, terminology, and content patterns to deliver culturally relevant experiences while maintaining a consistent brand voice across languages",
        "Translated UX research, usability testing, and product insights into content improvements that reduced friction, increased clarity, and strengthened user trust",
      ],
    },
    {
      company: "CleverTap",
      logo: "clevertap.png",
      role: "Technical writer & UX Writer",
      period: "January 2023 to August 2024",
      bullets: [
        "Wrote clear copy for dashboards, notifications, and product flows",
        "Onboarded and trained new hires, created interview tests, and interviewed candidates",
        "Maintained a consistent voice and tone across projects while balancing user needs and business goals",
        "Contributed to the content design system by documenting patterns and principles",
        "Tested and refined copy with design, product, and research based on user feedback",
      ],
    },
    {
      company: "Appitsimple",
      logo: "appitsimple-96.png",
      role: "Sr. Content writer & Copy writer",
      period: "Jun 2021 to Oct 2022",
      bullets: [
        "Wrote across channels for product, website, blogs, and marketing, tailoring content to user intent",
        "Improved content performance by analysing clicks, feedback, and metrics, then iterating for results",
        "Created reusable templates, contributed to the style guide, and aligned tone across teams",
        "Guided freelance writers with briefs and reviews to keep blogs clear and consistent",
      ],
    },
    {
      company: "Gateway Group of Companies",
      logo: "gateway.png",
      role: "Sr. Content writer",
      period: "Mar 2020 to Mar 2021",
      bullets: [
        "Wrote blogs and product content for multiple technical products, simplifying complex ideas for wider audiences",
        "Applied AP style guide, SEO, and user-intent writing to make content clear and discoverable",
        "Built a foundation in user-friendly writing and consistent brand messaging",
      ],
    },
  ],
  education: [
    { title: "Advanced UX content for product", institution: "UX Content Collective", year: "2026" },
    { title: "Fundamentals on UX writing", institution: "UX Content Collective", year: "2022" },
    { title: "Content strategy", institution: "MICA", year: "2020" },
    { title: "BBA (Hons.) Marketing, Mass Communication", institution: "PDEU", year: "2018" },
  ],
};

const PAGE = { width: 595.28, height: 841.89, margin: 44, contentWidth: 595.28 - 88 };

function ensureSpace(doc, height) {
  if (doc.y + height > PAGE.height - PAGE.margin) {
    doc.addPage();
    doc.y = PAGE.margin;
  }
}

function drawSectionHeading(doc, title) {
  ensureSpace(doc, 44);
  const y = doc.y;
  doc.roundedRect(PAGE.margin, y, 28, 28, 8).fill(colors.secondary);
  doc
    .fillColor(colors.primary)
    .font("Helvetica-Bold")
    .fontSize(11)
    .text(title, PAGE.margin + 38, y + 7, { width: PAGE.contentWidth - 38 });
  doc
    .moveTo(PAGE.margin + 38, y + 24)
    .lineTo(PAGE.margin + 110, y + 24)
    .strokeColor(colors.primary)
    .lineWidth(2)
    .stroke();
  doc
    .circle(PAGE.margin + 118, y + 24, 2)
    .fillColor(colors.primary)
    .fill();
  doc.y = y + 38;
  doc.fillColor(colors.foreground);
}

function drawSkillPills(doc, skills) {
  const pillHeight = 22;
  const gap = 8;
  let x = PAGE.margin;
  let y = doc.y;

  doc.font("Helvetica").fontSize(9.5);

  for (const skill of skills) {
    const textWidth = doc.widthOfString(skill);
    const pillWidth = textWidth + 18;

    if (x + pillWidth > PAGE.margin + PAGE.contentWidth) {
      x = PAGE.margin;
      y += pillHeight + gap;
    }

    ensureSpace(doc, pillHeight + gap);
    if (y !== doc.y) y = doc.y;

    doc.roundedRect(x, y, pillWidth, pillHeight, 11).fill(colors.secondary);
    doc.fillColor(colors.secondaryText).text(skill, x + 9, y + 6, { lineBreak: false });

    x += pillWidth + gap;
  }

  doc.y = y + pillHeight + 14;
  doc.fillColor(colors.foreground);
}

function drawBullets(doc, bullets, startX, width) {
  const bulletX = startX;
  const textX = startX + 12;
  const textWidth = width - 12;

  doc.font("Helvetica").fontSize(9.5).fillColor(colors.muted);

  for (const bullet of bullets) {
    const blockHeight = doc.heightOfString(bullet, { width: textWidth, lineGap: 2 }) + 8;
    ensureSpace(doc, blockHeight);

    const y = doc.y + 4;
    doc.circle(bulletX + 2, y, 1.6).fillColor(colors.primary).fill();
    doc.fillColor(colors.muted).text(bullet, textX, doc.y, { width: textWidth, lineGap: 2 });
    doc.moveDown(0.35);
  }

  doc.fillColor(colors.foreground);
}

function drawExperienceCard(doc, job) {
  const cardX = PAGE.margin;
  const cardWidth = PAGE.contentWidth;
  const logoSize = 34;
  const textX = cardX + 16 + logoSize + 12;
  const textWidth = cardWidth - (textX - cardX) - 16;

  const bulletsHeight = job.bullets.reduce(
    (sum, bullet) =>
      sum +
      doc.heightOfString(bullet, { width: textWidth - 12, lineGap: 2 }) +
      8,
    0
  );
  const cardHeight = 58 + bulletsHeight;

  ensureSpace(doc, cardHeight + 12);
  const cardY = doc.y;

  doc.roundedRect(cardX, cardY, cardWidth, cardHeight, 12).fill(colors.surface);
  doc
    .roundedRect(cardX, cardY, cardWidth, cardHeight, 12)
    .lineWidth(1)
    .strokeColor(colors.border)
    .stroke();

  const logoPath = join(root, "public", "logos", job.logo);
  doc.save();
  doc.roundedRect(cardX + 16, cardY + 16, logoSize, logoSize, 6).clip();
  doc.image(logoPath, cardX + 16, cardY + 16, { width: logoSize, height: logoSize });
  doc.restore();

  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(colors.foreground)
    .text(job.role, textX, cardY + 16, { width: textWidth });

  const metaY = cardY + 32;
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(colors.primary).text(job.company, textX, metaY, {
    continued: true,
  });
  doc.fillColor(colors.muted).font("Helvetica-Bold").text("  ·  ", { continued: true });
  doc.font("Helvetica").text(job.period, { width: textWidth });

  doc.y = cardY + 52;
  drawBullets(doc, job.bullets, textX, textWidth);
  doc.y = cardY + cardHeight + 12;
}

function generate() {
  mkdirSync(join(root, "public"), { recursive: true });

  const doc = new PDFDocument({
    size: "A4",
    margins: { top: PAGE.margin, bottom: PAGE.margin, left: PAGE.margin, right: PAGE.margin },
    info: {
      Title: `${profile.name} — Resume`,
      Author: profile.name,
    },
  });

  const stream = createWriteStream(outPdf);
  doc.pipe(stream);

  const paintBackground = () => {
    doc.save();
    doc.rect(0, 0, PAGE.width, PAGE.height).fill(colors.background);
    doc.restore();
    doc.fillColor(colors.foreground);
  };

  paintBackground();
  doc.on("pageAdded", paintBackground);

  const headerY = PAGE.margin;
  const headerHeight = 132;
  doc.roundedRect(PAGE.margin, headerY, PAGE.contentWidth, headerHeight, 14).fill(colors.surface);
  doc
    .roundedRect(PAGE.margin, headerY, PAGE.contentWidth, headerHeight, 14)
    .lineWidth(1)
    .strokeColor(colors.border)
    .stroke();

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(colors.muted)
    .text(profile.title, PAGE.margin + 20, headerY + 18);

  doc
    .font("Helvetica-Bold")
    .fontSize(24)
    .fillColor(colors.foreground)
    .text(profile.name, PAGE.margin + 20, headerY + 34);

  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor(colors.primary)
    .text(profile.tagline, PAGE.margin + 20, headerY + 64, { width: PAGE.contentWidth - 40 });

  const contactY = headerY + 88;
  doc.font("Helvetica").fontSize(9.5).fillColor(colors.foreground);
  doc.text(profile.phone, PAGE.margin + 20, contactY);
  doc.text(profile.email, PAGE.margin + 170, contactY);
  doc.text(profile.linkedin, PAGE.margin + 20, contactY + 14);

  doc.y = headerY + headerHeight + 18;

  doc
    .font("Helvetica")
    .fontSize(10.5)
    .fillColor(colors.foreground)
    .text(profile.intro, PAGE.margin, doc.y, { width: PAGE.contentWidth, lineGap: 3 });
  doc.moveDown(1.2);

  drawSectionHeading(doc, "Skills");
  drawSkillPills(doc, profile.skills);

  drawSectionHeading(doc, "Experience & responsibilities");
  for (const job of profile.experience) {
    drawExperienceCard(doc, job);
  }

  drawSectionHeading(doc, "Continuous education");
  for (const [index, item] of profile.education.entries()) {
    ensureSpace(doc, 42);
    if (index > 0) {
      doc
        .moveTo(PAGE.margin, doc.y)
        .lineTo(PAGE.margin + PAGE.contentWidth, doc.y)
        .strokeColor(colors.border)
        .lineWidth(0.5)
        .stroke();
      doc.moveDown(0.5);
    }

    const rowY = doc.y;
    doc.font("Helvetica-Bold").fontSize(10.5).fillColor(colors.foreground).text(item.title, PAGE.margin, rowY, {
      width: PAGE.contentWidth - 50,
    });
    doc
      .font("Helvetica")
      .fontSize(9.5)
      .fillColor(colors.muted)
      .text(item.year, PAGE.margin + PAGE.contentWidth - 40, rowY, { width: 40, align: "right" });
    doc.font("Helvetica-Bold").fontSize(9.5).fillColor(colors.primary).text(item.institution, PAGE.margin, rowY + 16);
    doc.y = rowY + 34;
  }

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", () => {
      copyFileSync(outPdf, copyPdf);
      resolve(undefined);
    });
    stream.on("error", reject);
  });
}

generate()
  .then(() => {
    console.log(`Saved: ${outPdf}`);
    console.log(`Copy:  ${copyPdf}`);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
