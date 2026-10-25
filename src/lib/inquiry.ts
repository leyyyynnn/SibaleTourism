export const inquiryTopics = [
  "Boat schedules and getting there",
  "Accommodation",
  "Guides and tours",
  "Diving and snorkelling",
  "Events and culture",
  "Photography or media",
  "Something else",
] as const;

export type Inquiry = {
  name: string;
  email: string;
  topic: (typeof inquiryTopics)[number];
  travelDates?: string;
  groupSize?: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof Inquiry, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the browser form and the API route. */
export function validateInquiry(input: Record<string, unknown>): { data?: Inquiry; errors: FieldErrors } {
  const str = (k: string, max: number) => (typeof input[k] === "string" ? (input[k] as string).trim().slice(0, max) : "");
  const data = {
    name: str("name", 120),
    email: str("email", 200),
    topic: str("topic", 80) as Inquiry["topic"],
    travelDates: str("travelDates", 120) || undefined,
    groupSize: str("groupSize", 20) || undefined,
    message: str("message", 4000),
  };
  const errors: FieldErrors = {};
  if (data.name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL.test(data.email)) errors.email = "Enter a valid email address so we can reply.";
  if (!inquiryTopics.includes(data.topic)) errors.topic = "Choose a topic.";
  if (data.message.length < 10) errors.message = "Please write a little more (at least 10 characters).";
  if (data.groupSize && !/^\d{1,3}$/.test(data.groupSize)) errors.groupSize = "Use a number, e.g. 4.";
  return Object.keys(errors).length ? { errors } : { data, errors };
}
