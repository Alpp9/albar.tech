import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Header from '@/layouts/_header';
import { Sidebar } from '@/layouts/_layout-sidebar';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
const BottomNavigation = dynamic(() => import('@/layouts/_bottom-navigation'), {
  ssr: false,
});

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const breakpoint = useBreakpoint();
  const isMounted = useIsMounted();
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/650872000f2b18434fd930c6/1hakfroi5';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);

    return () => {
      s1.remove(); // Cleanup the script tag when the component unmounts
    };
  }, []);

  function toggleSidebar() {
    setCollapse((prev) => !prev);
  }

  return (
    <motion.div
      initial="exit"
      animate="enter"
      exit="exit"
      className="flex min-h-screen w-full flex-col bg-light-300 dark:bg-dark-100"
    >
      <Header
        isCollapse={collapse}
        showHamburger={true}
        onClickHamburger={toggleSidebar}
      />
      <div className="flex flex-1">
        <Sidebar isCollapse={collapse} />
        <main
          className={cn(
            'flex w-full flex-col',
            collapse
              ? 'ltr:sm:pl-60 rtl:sm:pr-60 ltr:xl:pl-[75px] rtl:xl:pr-[75px]'
              : 'ltr:sm:pl-[75px] rtl:sm:pr-[75px] ltr:xl:pl-60 rtl:xl:pr-60'
          )}
        >
          {children}
        </main>
      </div>
      {isMounted && breakpoint === 'xs' && <BottomNavigation />}
    </motion.div>
  );
}