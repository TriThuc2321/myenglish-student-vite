import { useTranslation } from 'react-i18next';
import { type MetaFunction } from 'react-router';

import { pageMeta } from '@/utils/metadata';

export const meta: MetaFunction = () =>
  pageMeta('Online Tests', 'View your MyEnglish online tests.');

export default function OnlineTestsPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-surface">
      <h1 className="text-2xl font-bold">{t('onlineTests.title')}</h1>
    </div>
  );
}
