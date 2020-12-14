import Link from 'next/link';

const linkStyle = {
  marginRight: '1rem',
};

const Header = () => {
  return (
    <div>
      <Link href='/'>
        <a style={linkStyle} href=''>
          홈
        </a>
      </Link>
      <Link href='/about'>
        <a style={linkStyle} href=''>
          소개
        </a>
      </Link>
    </div>
  );
};

export default Header;
