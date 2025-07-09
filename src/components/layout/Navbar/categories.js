export const categories = [
  {
    name: 'About us',
    link: '/about',
  },
  {
    name: 'Robotic workstations',
    subcategories: [
      {
        name: 'Robotic workstation',
        items: [
          {
            name: 'Single Workstation',
            image: '/navbarProducts/single.svg',
            link: '/product/single',
          },
          {
            name: 'Dual Workstation',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/dual',
          },
          {
            name: 'Twin One-axis Workstation',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/twin-one-axis',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Machine and equipment automation',
            image: '/navbarProducts/automatyzacja.svg',
            link: '/automation',
          },
        ],
      },
      {
        name: 'Welding automation',
        items: [
          { name: 'ALW-1200', link: '/product/alw-1200' },
          { name: 'Flex Cobot Esab', link: '/product/flex-esab' },
          { name: 'Flex Cobot Fronius', link: '/product/flex-fronius' },
        ],
      },
    ],
  },
  {
    name: 'Products Machines',
    subcategories: [
      {
        name: '',
        items: [
          {
            name: 'Surface treatment',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/surface-treatment',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Vertical sheet metal storage',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/vertical-warehouse',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Chamber furnaces',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/furnace',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Wet and powder coating booths',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/paintshops-installation',
          },
        ],
      },
    ],
  },
  {
    name: 'Our machine park',
    subcategories: [
      {
        name: 'Metal processing department',
        items: [
          { name: 'Waterjet', link: '/product/waterjet' },
          { name: 'TruPunch 5000 | TRUMPF', link: '/product/trupunch-5000' },
          {
            name: 'TruLaser Tube 7000 fiber',
            link: '/product/trulaser-7000',
          },
          {
            name: 'TruLaser 3030 fiber | TRUMPF',
            link: '/product/trulaser-3030',
          },
          { name: 'Bending workstation', link: '/product/bending-station' },
          { name: 'ARC D600', link: '/product/arc-d600' },
          { name: 'ARC B250', link: '/product/arc-b250' },
          { name: 'ARC Trackmotion 2t', link: '/product/arc-trackmotion-2t' },
        ],
      },
      {
        name: 'CNC processing department',
        items: [
          { name: 'CLX 350', link: '/product/clx-350' },
          { name: 'DMU 75 monoBLOCK', link: '/product/dmu-75-monoblock' },
          { name: 'DMU 210 P', link: '/product/dmu-210-p' },
          { name: 'SPRINT 32I5', link: '/product/sprint-32I5' },
          { name: 'M1', link: '/product/m1' },
          { name: 'Waterjet', link: '/product/waterjet' },
          { name: 'LH', link: '/product/lh' },
          { name: '5-axis CNC', link: '/product/5-axis-cnc' },
          { name: 'NLX 2500', link: '/product/nlx-2500' },
        ],
      },
      /* {
        name: 'Lakiernie',
        items: [
          { name: 'Lakiernie mokre i proszkowe', link: '/product(usługi)/paintshops' },
        ],
      }, */
    ],
  },
  {
    name: 'Services',
    subcategories: [
      {
        name: '',
        items: [
          {
            name: 'Cutting quotation',
            image: '',
            link: '/calculator',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Powder and wet painting',
            image: '',
            link: '/product/service-paintshop',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Offer form',
            image: '',
            link: '/forms/form',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'MIG, MAG, TIG offert',
            image: '',
            link: '/offert',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Laser Services Offer',
            image: '',
            link: '/offert-laser',
          },
        ],
      },
    ],
  },
  {
    name: 'Contact',
    link: '/contact',
  },
]
