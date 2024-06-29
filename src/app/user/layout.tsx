import { BreadCrumbs } from '@/components/BreadCrumbs';
import { Toaster } from '@/components/ui/toaster';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[900px] m-auto p-2">
      <div>
        <BreadCrumbs />
      </div>
      <div>{children}</div>
      <Toaster />
    </div>
  );
}
