const footerData = [
  {
    section: 'about',
    elements: [
      'How Airbnb Works',
      'Newsroom',
      'Investors',
      'Airbnb Plus',
      'Airbnb Luxe',
    ],
  },
  {
    section: 'community',
    elements: [
      'Diversity & Belonging',
      'Against Discrimination',
      'Accessibility',
      'Airbnb Associates',
      'Frontline Stays',
      'Guest Referrals',
      'Gift cards',
      'Airbnb.org',
      'JPA Clones',
    ],
  },
  {
    section: 'host',
    elements: [
      'Host your home',
      'Host an Online Experience',
      'Host an Experience',
      'Responsible hosting',
      'Resource Center',
      'Community Center',
      'Its a pretty clone',
    ],
  },
  {
    section: 'support',
    elements: [
      'Our COVID-19 Response',
      'Help Center',
      'Cancellation options',
      'Neighborhood Support',
      'Trust & Safety',
      'This is no a real site',
    ],
  },
];
function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      {footerData.map((footerElem, idx) => (
        <div key={idx} className='space-y-3 text-xs text-gray-800'>
          <h5 className='font-bold uppercase'>{footerElem.section}</h5>
          {footerElem.elements.map((elem, eidx) => (
            <p key={eidx}>{elem}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Footer;
