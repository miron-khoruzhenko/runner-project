export const ItemBackground = ({ color }: { color: string }) => {
  return (
    <svg width="144" height="143" viewBox="0 0 144 143" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 8C0 3.58172 3.58172 0 8 0H136C140.418 0 144 3.58172 144 8V127H0V8Z" fill={color} />
      <path d="M0 127V128L15 143L144 143V127H142L2 127H0Z" fill={color} />
    </svg>
  );
}
