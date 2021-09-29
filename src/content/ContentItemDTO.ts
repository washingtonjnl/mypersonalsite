import { IconLinkProps } from '../components/IconLink';

export default interface ContentItemData {
  period: {
    in: string;
    out: string;
  };
  institution: string;
  context: string;
  description: string;
  link?: IconLinkProps;
}
