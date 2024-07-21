import { BreadCrumbs } from '@/components/BreadCrumbs';
import { TopMenu } from '@/components/TopMenu';
import { Toaster } from '@/components/ui/toaster';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[80vw] max-w-[900px] m-auto">
      <TopMenu />
      <div className="mt-60px]">
        <BreadCrumbs />
        <main className="p-0">{children}</main>
      </div>
      <Toaster />
    </div>
  );
}
