export const HandSign: React.FC<React.SVGAttributes<{}>> = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M8 13V4.5a1.5 1.5 0 013 0V12M11 11.5v-2a1.5 1.5 0 013 0V12M14 10.5a1.5 1.5 0 013 0V12" />
      <path d="M17 11.5a1.5 1.5 0 013 0V16a6 6 0 01-6 6h-2 .208a6 6 0 01-5.012-2.7L7 19c-.312-.479-1.407-2.388-3.286-5.728a1.5 1.5 0 01.536-2.022 1.867 1.867 0 012.28.28L8 13M5 3L4 2M4 7H3M14 3l1-1M15 6h1" />
    </svg>
  );
};
