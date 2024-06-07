type TwRecord<T extends string | undefined> = Record<NonNullable<T>, string>;

type Children =
  | React.ReactNode
  | React.ReactNode[]
  | JSX.Element
  | JSX.Element[];
