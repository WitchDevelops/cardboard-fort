import { BreadCrumbs } from '@/components/BreadCrumbs';
import { Toaster } from '@/components/ui/toaster';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[80vw] mx-auto">
      <div>
        <BreadCrumbs />
      </div>
      <div>{children}</div>
      <Toaster />
    </div>
  );
}
