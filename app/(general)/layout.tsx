import Navbar from '@/components/navbar/Navbar';

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center p-24 justify-center">
        {children}
      </section>
    </>
  );
}
