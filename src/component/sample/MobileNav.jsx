import React, { useState } from 'react';

const MobileNav = () => {
  const [activeBlock, setActiveBlock] = useState('aboutUs');

  const handleBlockToggle = (blockId) => {
    setActiveBlock(activeBlock === blockId ? '' : blockId);
  };

  const renderSubNavBlock = (blockId, label, items) => (
    <div
      id={blockId}
      className={`subnav__block css-19tzk90 ${activeBlock === blockId ? '--active' : ''}`}
      aria-expanded={activeBlock === blockId}
      aria-label={label}
      style={{
        opacity: activeBlock === blockId ? 1 : 0,
        flexShrink: activeBlock === blockId ? 1 : 0,
        display: activeBlock === blockId ? 'flex' : 'none',
        transform: activeBlock === blockId ? 'translateX(0%) translateZ(0px)' : 'translateX(-100%) translateZ(0px)',
      }}
    >
      <div className="css-wn7ubm">
        <button
          type="button"
          aria-label="Close"
          tabIndex="-1"
          className="closebutton css-1v7ljte"
          onClick={() => handleBlockToggle(blockId)}
        >
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="chakra-icon css-onkibi"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
            ></path>
          </svg>
        </button>
        <ul className="css-a9ugg7">
          {items.map((item) => (
            <li className="css-155za0w" key={item.href}>
              <a className="subnav__item" href={item.href}>
                <span className="css-1rr4qq7">
                  <span className="nav-text css-1drbkg9">{item.label}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="subnav__wrapper css-1oupbnk" style={{ opacity: 1, transform: 'translateX(0%)' }}>
      <div className="css-1l7c0cy"></div>
      <div className="content-wrapper css-nyypvk">
        <div className="subnav__inner css-1nrhuku" id="disclosure-:Rqjalal9knl:">
          {renderSubNavBlock('aboutUs', 'About us', [
            { href: '/en/about-us', label: 'About us' },
            {
              href: '/en/about-us/our-leadership',
              label: 'Our leadership',
              isButton: true,
              subItems: [
                { href: '/en/about-us/our-leadership/board-of-directors', label: 'Board of directors' },
                { href: '/en/about-us/our-leadership/amin-h-nasser', label: 'Amin H. Nasser' },
                { href: '/en/about-us/our-leadership/nasir-al-naimi', label: 'Nasir K. Al-Naimi' },
                { href: '/en/about-us/our-leadership/mohammed-y-al-qahtani', label: 'Mohammed Y. Al Qahtani' },
                { href: '/en/about-us/our-leadership/ziad-al-murshed', label: 'Ziad T. Al-Murshed' },
                { href: '/en/about-us/our-leadership/wail-a-aljaafari', label: 'Wail A. Al Jaafari' },
                { href: '/en/about-us/our-leadership/nabeel-a-al-mansour', label: 'Nabeel A. Al Mansour' },
                { href: '/en/about-us/our-leadership/nabeel-al-jama', label: 'Nabeel A. Al-Jama’' },
                { href: '/en/about-us/our-leadership/ashraf-al-ghazzawi', label: 'Ashraf A. Al Ghazzawi' },
                { href: '/en/about-us/our-leadership/ahmad-al-khowaiter', label: 'Ahmad O. Al-Khowaiter' },
              ],
            },
          ])}
          {renderSubNavBlock('ourGovernance', 'Our governance', [
            { href: '/en/about-us/our-governance', label: 'Our governance' },
          ])}
          {renderSubNavBlock('ourBrand', 'Our brand', [
            { href: '/en/about-us/our-brand', label: 'Our brand' },
            { href: '#', label: 'Powered by how', isButton: true },
            { href: '#', label: 'Real stories inspire', isButton: true },
          ])}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
