import type { Option } from '@algolia/satellite';
import cx from 'classnames';
import type { FC, MouseEventHandler } from 'react';

import { SubPathTag, ClusterTag, type CustomTagProps, IndexTag, ApiTag } from 'components/Tags';
import { type ApiType } from 'utils';

export interface UrlOption extends Option {
  type: 'api' | 'apiSubPath' | 'cluster' | 'index';
  reversed: boolean;
}

interface UrlOptionItemComponentProps {
  option: UrlOption;
  deleteOption?: (option: UrlOption) => void;
  reverseOption?: (option: UrlOption) => void;
}

export const UrlOptionItemComponent: FC<UrlOptionItemComponentProps> = ({
  option,
  deleteOption,
  reverseOption,
}) => {
  const onDelete = deleteOption ? (): void => deleteOption(option as UrlOption) : undefined;
  const onClick: MouseEventHandler<HTMLSpanElement> | undefined = reverseOption
    ? (event): void => {
        event.stopPropagation();
        reverseOption(option as UrlOption);
      }
    : undefined;

  const props: CustomTagProps = {
    className: cx('mr-1', onClick && 'cursor-pointer'),
    reversed: onClick !== undefined && option.reversed,
    onDelete,
    onClick,
  };

  switch ((option as UrlOption).type) {
    case 'cluster':
      return <ClusterTag {...props} cluster={option.value as string} />;
    case 'index':
      return <IndexTag {...props} index={option.value as string | null} />;
    case 'apiSubPath':
      return <SubPathTag {...props} subPath={option.value as string | null} />;
    case 'api':
      return <ApiTag {...props} api={option.value as ApiType} />;
    default:
      return null;
  }
};
