/* Edit logo filenames and links below as you receive permission and confirm details.
   Logo images should be placed in assets/partners/ in your GitHub repository. */
const partners = [
  {group:'funders',name:'Blagrave Trust / Challenge & Change',description:'Funding and encouragement that helped G.L.O.E.W develop and deliver its programmes.',logo:'blagrave-trust.png',url:'https://www.blagravetrust.org/'},
  {group:'community',name:'YMCA London City and North',description:'Provided community space for G.L.O.E.W programme sessions at Crouch End.',logo:'ymca-london-city-north.png',url:'https://www.ymcalondoncan.org'},
  {group:'community',name:'Harringay Club',description:'Hosted a G.L.O.E.W dance workshop, providing space for movement and connection.',logo:'harringay-club.png',url:'https://harringayclub.org'},
  {group:'collaborators',name:'Empowered Movement',description:'Movement and empowerment workshops.',logo:'empowered-movement.png',url:'https://www.empoweredmovement.uk/'},
  {group:'collaborators',name:'Access by B',description:'Skills and personal-development workshop collaboration.',logo:'access-by-b.png',url:'https://www.instagram.com/accessbyb/'},
  {group:'collaborators',name:'Rastamamalocs',description:'Hair and locs skills-sharing workshops.',logo:'rastamamalocs.png',url:'https://rastamamalocs.com/'},
  {group:'collaborators',name:'Natlah',description:'Natural and vegan menstrual wellness products.',logo:'natlah.png',url:'https://www.natlah.com'},
  {group:'collaborators',name:'Tireni Art',description:'Art and creative expression.',logo:'tireni-art.png',url:'https://tireniart.com/'},
  {group:'collaborators',name:'Nails by Viccx',description:'Nail artistry and beauty skills.',logo:'nails-by-viccx.png',url:'https://www.instagram.com/nailsbyviccx/'},
  {group:'collaborators',name:'London Self Defence Academy',description:'Self-defence skills, safety and confidence.',logo:'london-self-defence-academy.png',url:'https://londonselfdefenceacademy.com/'},
  {group:'collaborators',name:'Radiant Beauty',description:'Beauty skills and training expertise.',logo:'radiant-beauty.png',url:'https://www.instagram.com/radiantbeauty_uk/'},
  {group:'collaborators',name:'The Lash Rouge',description:'Lash artistry and beauty expertise (previously Cel3stexco).',logo:'the-lash-rouge.png',url:'https://www.instagram.com/thelashrouge/'}
];
const escapeHTML = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for (const p of partners) {
  const grid=document.getElementById(p.group+'-grid'); if(!grid) continue;
  const card=document.createElement('article'); card.className='partner-card';
  const link=p.url ? `<a class="partner-visit" href="${escapeHTML(p.url)}" target="_blank" rel="noopener noreferrer">Visit ${p.url.includes('instagram.com')?'Instagram':'website'} ↗</a>` : '<span class="partner-pending">Link coming soon</span>';
  card.innerHTML=`<div class="partner-inner"><div class="partner-face partner-front"><div class="partner-logo-wrap"><img src="assets/${escapeHTML(p.logo)}" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="partner-logo-fallback" hidden>♡</span></div><h3>${escapeHTML(p.name)}</h3><span class="partner-hint">Tap or hover to learn more</span></div><div class="partner-face partner-back"><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.description)}</p>${link}</div></div>`;
  card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',`Flip card for ${p.name}`);card.setAttribute('aria-pressed','false');
  const flip=()=>{const on=card.classList.toggle('flipped');card.setAttribute('aria-pressed',String(on));};
  card.addEventListener('click',e=>{if(e.target.closest('a'))return;flip();});
  card.addEventListener('keydown',e=>{if(e.target.closest('a'))return;if(e.key==='Enter'||e.key===' '){e.preventDefault();flip();}});
  grid.append(card);
}
