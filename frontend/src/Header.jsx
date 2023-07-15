import { Logo } from '@/components/header/logo';
import { Menu } from '@/components/header/menu';
import './Header.css'

export function Header () {
  return(
    <>
      <header className="container-header">
        <Logo />
        <Menu />
      </header>
    </>
  );
}
