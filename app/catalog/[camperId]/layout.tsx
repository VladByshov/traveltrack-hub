import css from './CamperPageLayout.module.css';

interface CamperPageLayoutProps {
  children: React.ReactNode;
}

export default function CamperPageLayout({ children }: CamperPageLayoutProps) {
  return (
      <div className={css.content}>
        {children}
      </div>
  );
}
