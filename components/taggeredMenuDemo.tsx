import StaggeredMenu from './StaggeredMenu';

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About Us", ariaLabel: "Learn about us", link: "/" },
  { label: "Publications", ariaLabel: "View our publications", link: "/" },
  { label: "Text Books", ariaLabel: "Explore our text books", link: "/" },
  { label: "Case Center", ariaLabel: "Browse our case center", link: "/" },
  { label: "Join Editorial Board", ariaLabel: "Apply to join the editorial board", link: "/" },
  { label: "Contact", ariaLabel: "Get in touch with us", link: "/" },
  { label: "Login / Sign up", ariaLabel: "Access your account or sign up", link: "/" }
];

const socialItems = [
    { label: "Twitter", ariaLabel: "Follow us on Twitter", link: "https://twitter.com/" },
];

<div style={{ height: '100vh', background: '#1a1a1a' }}>
  <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#ff6b6b"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')} isFixed={false}  />
</div>