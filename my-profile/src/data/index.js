import { HomeIcon, AcademicCapIcon, Cog6ToothIcon, DocumentDuplicateIcon, UserIcon} from "@heroicons/vue/24/outline";
import { 
  CodeBracketSquareIcon, 
  PaintBrushIcon, 
  ServerStackIcon, 
  ChartBarIcon, 
  CameraIcon, 
  VideoCameraIcon,
  FilmIcon,
  CodeBracketIcon,
  MegaphoneIcon,
  PhotoIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/vue/24/solid';

import ProjectImg1 from "../assets/img/project1.png";
import ProjectImg2 from "../assets/img/project2.png";
import ProjectImg3 from "../assets/img/project3.png";
import ProjectImg4 from "../assets/img/www.tinhnob70.com.png";
import ProjectImg5 from "../assets/img/property.tinhnob70.com_.png";
import ProjectImg6 from "../assets/img/www.sabaygift.com.png";
import Avatar1 from "../assets/img/avatar1.png";
import Avatar2 from "../assets/img/avatar2.png";
import Avatar3 from "../assets/img/avatar3.png";
import Avatar4 from "../assets/img/avatar4.png";

export const navItems = [
  {
    labelKey: "nav.home",
    href: "#home",
    icon: HomeIcon,
  },
  {
    labelKey: "nav.skills",
    href: "#skills",
    icon: AcademicCapIcon,
  },
  {
    labelKey: "nav.services",
    icon: Cog6ToothIcon,
  },
  {
    labelKey: "nav.projects",
    href: "#projects",
    icon: DocumentDuplicateIcon,
  },
  {
    labelKey: "nav.gallery",
    href: "#gallery",
    icon: PhotoIcon,
  },
  {
    labelKey: "nav.contact",
    href: "#contact",
    icon: UserIcon,
  },
];

export const projectsItems = [
  {
    id: 'tinhnobchet',
    image: ProjectImg4,
    link: '#',
    tags: ['Laravel', 'MySql', 'Chart.js'],
    titleKey: 'projects.items.tinhnobchet.title',
    descriptionKey: 'projects.items.tinhnobchet.desc'
  },
  {
    id: 'tinhnob_prop',
    image: ProjectImg5,
    link: '#',
    tags: ['Laravel', 'MySql', 'Chart.js'],
    titleKey: 'projects.items.tinhnob_prop.title',
    descriptionKey: 'projects.items.tinhnob_prop.desc'
  },
  {
    id: 'sabay_gift',
    image: ProjectImg6,
    link: '#',
    tags: ['Laravel', 'MySql', 'Vue.js'],
    titleKey: 'projects.items.sabay_gift.title',
    descriptionKey: 'projects.items.sabay_gift.desc'
  },
  {
    id: 'sas_website', 
    image: ProjectImg1,
    link: '#',
    tags: ['Vue.js', 'Tailwind CSS', 'Vite'],
    titleKey: 'projects.items.sas_website.title',
    descriptionKey: 'projects.items.sas_website.desc'
  },
  {
    id: 'social_media',
    image: ProjectImg2,
    link: '#',
    tags: ['Laravel', 'React', 'MySQL'],
    titleKey: 'projects.items.social_media.title',
    descriptionKey: 'projects.items.social_media.desc'
  },
  {
    id: 'admin_panel',
    image: ProjectImg3,
    link: '#',
    tags: ['Vue.js', 'Vuex', 'Chart.js'],
    titleKey: 'projects.items.admin_panel.title',
    descriptionKey: 'projects.items.admin_panel.desc'
  },
];

export const skillCategories = [
  {
    titleKey: 'skills.web_dev.title',
    skills: [
      { 
        nameKey: 'skills.web_dev.laravel_name', 
        descriptionKey: 'skills.web_dev.laravel_desc',
        icon: CodeBracketSquareIcon,
      },
      { 
        nameKey: 'skills.web_dev.vue_name', 
        descriptionKey: 'skills.web_dev.vue_desc',
        icon: PaintBrushIcon,
      },
      { 
        nameKey: 'skills.web_dev.deploy_name', 
        descriptionKey: 'skills.web_dev.deploy_desc',
        icon: ServerStackIcon,
      },
    ],
  },
  {
    titleKey: 'skills.media_prod.title',
    skills: [
      { 
        nameKey: 'skills.media_prod.photo_name', 
        descriptionKey: 'skills.media_prod.photo_desc',
        icon: CameraIcon,
      },
      { 
        nameKey: 'skills.media_prod.video_name', 
        descriptionKey: 'skills.media_prod.video_desc',
        icon: VideoCameraIcon,
      },
      { 
        nameKey: 'skills.media_prod.edit_name', 
        descriptionKey: 'skills.media_prod.edit_desc',
        icon: FilmIcon,
      },
    ],
  },
  {
    titleKey: 'skills.marketing.title',
    skills: [
      { 
        nameKey: 'skills.marketing.ads_name', 
        descriptionKey: 'skills.marketing.ads_desc',
        icon: ChartBarIcon,
      },
    ]
  }
];

export const services = [
  {
    titleKey: 'services.web_dev.title',
    descriptionKey: 'services.web_dev.desc',
    icon: CodeBracketIcon,
    subServiceKeys: [
      'services.web_dev.sub.backend',
      'services.web_dev.sub.frontend',
      'services.web_dev.sub.deploy',
      'services.web_dev.sub.db',
    ],
  },
  {
    titleKey: 'services.media_prod.title',
    descriptionKey: 'services.media_prod.desc',
    icon: CameraIcon,
    subServiceKeys: [
      'services.media_prod.sub.photo',
      'services.media_prod.sub.video',
      'services.media_prod.sub.edit',
      'services.media_prod.sub.motion',
    ],
  },
  {
    titleKey: 'services.marketing.title',
    descriptionKey: 'services.marketing.desc',
    icon: MegaphoneIcon,
    subServiceKeys: [
      'services.marketing.sub.campaigns',
      'services.marketing.sub.strategy',
      'services.marketing.sub.content',
      'services.marketing.sub.analytics',
    ],
  }
];

export const testimonialsItems = [
  {
    name: "Tony",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar1,
  },
  {
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar2,
  },
  {
    name: "Roddin",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar3,
  },
  {
    name: "Jane",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar4,
  },
];
export const contactDetails = [
  {
    icon: EnvelopeIcon,
    labelKey: 'contact.details.email_label',
    value: 'kumpheakmny.set@gmail.com',
    href: 'mailto:kumpheakmny.set@gmail.com'
  },
  {
    icon: PhoneIcon,
    labelKey: 'contact.details.phone_label',
    value: '+855 (15) 558-908',
    href: 'tel:+85515558908'
  },
  {
    icon: MapPinIcon,
    labelKey: 'contact.details.location_label',
    value: 'Phnom Penh, Cambodia',
    href: 'https://maps.app.goo.gl/5MhsTjzMDcXxCvmf9'
  }
];
