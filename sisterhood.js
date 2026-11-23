// Add new confirmed members to this list. Keep images inside assets/.
const sisters = [
 {name:'Elairis', description:'Feminine fragrance and natural-inspired products.', logo:'elairis.png', url:'https://elairis.bigcartel.com/'},
 {name:'G.L.O.E.W Confectionery', description:'Bespoke cakes and sweet treats for celebrations and special occasions.', logo:'gloew-confectionery.png', url:'https://www.instagram.com/g.l.o.e.w.confectionery/'},
 {name:'RaliDigital', description:'Digital content and resources centred on feminine growth and personal development.', logo:'ralidigital.png', url:'https://website.beacons.ai/ralidigital'}
];
const grid = document.getElementById('sisterhood-grid');
if (grid) for (const s of sisters) {
 const card=document.createElement('article'); card.className='sister-card';
 const inner=document.createElement('div'); inner.className='sister-inner';
 const front=document.createElement('div'); front.className='sister-face sister-front';
 const img=document.createElement('img'); img.src='assets/'+s.logo; img.alt=s.name+' logo'; img.loading='lazy';
 const title=document.createElement('h3'); title.textContent=s.name;
 const hint=document.createElement('small'); hint.textContent='Tap to learn more';
 front.append(img,title,hint);
 const back=document.createElement('div'); back.className='sister-face sister-back';
 const backTitle=document.createElement('h3');backTitle.textContent=s.name;
 const desc=document.createElement('p');desc.textContent=s.description;
 const link=document.createElement('a');link.href=s.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=s.url.includes('instagram.com')?'Visit Instagram ↗':'Visit website ↗';
 back.append(backTitle,desc,link);inner.append(front,back);card.append(inner);
 card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label','Flip card for '+s.name);card.setAttribute('aria-pressed','false');
 const flip=()=>{card.classList.toggle('flipped');card.setAttribute('aria-pressed',String(card.classList.contains('flipped')))};
 card.addEventListener('click',e=>{if(!e.target.closest('a'))flip()});
 card.addEventListener('keydown',e=>{if(e.target.closest('a'))return;if(e.key==='Enter'||e.key===' '){e.preventDefault();flip()}});
 grid.append(card);
}
