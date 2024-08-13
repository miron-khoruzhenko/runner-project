interface ProfileIconProps {
  active: boolean;
}

export const ProfileIcon = ({ active }: ProfileIconProps) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 10.145 15.1558 12.0928 13.7816 13.5294C12.3302 15.0465 10.2877 15.9934 8.02388 16C8.01592 16 8.00797 16 8 16C7.99203 16 7.98408 16 7.97613 16C5.71234 15.9934 3.66978 15.0465 2.21843 13.5294C0.844182 12.0928 0 10.145 0 8C0 3.58173 3.58173 0 8 0C12.4183 0 16 3.58173 16 8ZM12.8489 12C11.6961 10.604 9.95193 9.71425 8 9.71425C6.04807 9.71425 4.30393 10.604 3.15103 12C4.30393 13.396 6.04807 14.2857 8 14.2857C9.95193 14.2857 11.6961 13.396 12.8489 12ZM8.00014 8.57139C9.57809 8.57139 10.8573 7.29221 10.8573 5.71425C10.8573 4.1363 9.57809 2.85711 8.00014 2.85711C6.42218 2.85711 5.14299 4.1363 5.14299 5.71425C5.14299 7.29221 6.42218 8.57139 8.00014 8.57139Z" fill={active ? "#FFF600" : "#FFFFFF"} />
    </svg>
  );
}