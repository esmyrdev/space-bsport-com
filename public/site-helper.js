const config = {
  defaultUrl: "https://space-bsport.com",
  brandKeyword: "b体育",
  cardTitle: "页面使用提示",
  badgeText: "关键词徽章",
  instructionTitle: "访问说明"
};

const sampleLinkData = [
  { label: "b体育首页", url: "https://space-bsport.com" },
  { label: "b体育活动", url: "https://space-bsport.com/events" },
  { label: "b体育帮助", url: "https://space-bsport.com/help" }
];

function createCard(title, description, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const card = document.createElement("div");
  card.className = "helper-card";

  const h3 = document.createElement("h3");
  h3.textContent = title;
  card.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = description;
  card.appendChild(p);

  container.appendChild(card);
}

function createBadge(keyword, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const badge = document.createElement("span");
  badge.className = "keyword-badge";
  badge.textContent = keyword;
  container.appendChild(badge);
}

function createInstructionList(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  container.appendChild(list);
}

function createLinkSection(links, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const section = document.createElement("div");
  section.className = "link-section";

  links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.label;
    a.className = "helper-link";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    section.appendChild(a);
  });

  container.appendChild(section);
}

function initPageHelper() {
  createCard(
    config.cardTitle,
    "此页面提供关于 b体育 平台的使用指引，包括关键词说明和访问方式。",
    "card-container"
  );

  createBadge(config.badgeText, "badge-container");

  createInstructionList(
    [
      "请确保网络环境稳定后再访问 b体育 相关页面。",
      "使用最新版本的浏览器以获得最佳体验。",
      "如有疑问，请参考帮助中心或联系客服。"
    ],
    "instruction-container"
  );

  createLinkSection(sampleLinkData, "link-container");
}

document.addEventListener("DOMContentLoaded", initPageHelper);