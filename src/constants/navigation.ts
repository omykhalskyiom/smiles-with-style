export interface NavItem {
  label: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Послуги", id: "services" },
  { label: "Про нас", id: "about" },
  { label: "Відгуки", id: "testimonials" },
  { label: "Ціни", id: "pricing" },
  { label: "Контакти", id: "contacts" },
];
