import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div>
      <h2>Contact Page</h2>
      <span>{new Date().getTime()}</span>
    </div>
  );
}
