import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Title',
};

export default function AboutPage() {
  console.log('Hello world');
  return (
    <div>
      <h2>About PAge</h2>
      <span>{new Date().getTime()}</span>
    </div>
  );
}
