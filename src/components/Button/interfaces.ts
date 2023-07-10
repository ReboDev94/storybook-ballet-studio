export type Variant = 'primary';

export interface IButton
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'className'
  > {
  /**
   * Is the variant button
   */
  variant?: Variant;
  /**
   * Is the button block
   */
  block?: boolean;
}
