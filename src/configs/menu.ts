import type { IconType } from 'react-icons/lib';

import { IoDocumentTextOutline } from 'react-icons/io5';
import { LuHouse } from 'react-icons/lu';

import { SubjectName } from '@/types/auth';

type ISubMenu = {
  id: number;
  title: string;
  route: string;
  icon: IconType;
};

type IMenuItem = {
  id: number;
  title: string;
  route?: string;
  icon: IconType;
  object: SubjectName;
  subMenus?: ISubMenu[];
};

export type IMenuGroup = {
  label?: string;
  items: IMenuItem[];
};

export const MENU_GROUPS: IMenuGroup[] = [
  {
    items: [
      {
        id: 0,
        title: 'home',
        route: '/',
        icon: LuHouse,
        object: SubjectName.Dashboard,
      },
      {
        id: 1,
        title: 'onlineTests',
        route: '/online-tests',
        icon: IoDocumentTextOutline,
        object: SubjectName.Tests,
      },
    ],
  },
];
