import { RiVirusLine } from "react-icons/ri";
import { GiScalpel } from "react-icons/gi";
import { GiFemaleLegs } from "react-icons/gi";
import { GiKidneys } from "react-icons/gi";
import { LuBookOpenCheck } from "react-icons/lu";
import { FaHeadSideVirus } from "react-icons/fa";
import { IoFish } from "react-icons/io5";
import { FaBedPulse } from "react-icons/fa6";
import { GiHeartOrgan } from "react-icons/gi";
import { MdMedicationLiquid } from "react-icons/md";
import { GiBrokenBone } from "react-icons/gi";

import { FaUserDoctor } from "react-icons/fa6";
import { FcSmartphoneTablet } from "react-icons/fc";
import { GiProgression } from "react-icons/gi";
import { PiVectorThree } from "react-icons/pi";
import { GiTestTubes } from "react-icons/gi";
import { SiAdguard } from "react-icons/si";
import { GrCloudComputer } from "react-icons/gr";
import { TbHealthRecognition } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import first from '../img/01.png';
import second from '../img/02.png';
import third from '../img/03.png';
import fifth from '../img/05.png';
import seventh from '../img/07.png';

import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { MdNoFood } from "react-icons/md";

import { GiTumor } from "react-icons/gi";
import { RiSurgicalMaskLine } from "react-icons/ri";
import { GiBreastplate } from "react-icons/gi";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { GiLiver } from "react-icons/gi";

export const directions = [

  {
    id: 0,
    text: 'ОНКОЛОГИЯ',
    link: '/directions/Oncology',
    icon: RiVirusLine,
  },
  {
    id: 1,
    text: 'ОТДЕЛЕНИЕ ХИРУРГИИ',
    link: '/directions/DepartamentOfSurgery',
    icon: GiScalpel,
  },
  {
    id: 2,
    text: 'ГИНЕКОЛОГИЯ',
    link: '/directions/Gynecology',
    icon: GiFemaleLegs,
  },
  {
    id: 3,
    text: 'УРОЛОГИЯ',
    link: '/directions/Urolgia',
    icon: GiKidneys,
  },
  {
    id: 4,
    text: 'ДИАГНОСТИКА',
    link: '/directions/Diagnostic',
    icon: LuBookOpenCheck,
  },
  {
    id: 5,
    text: 'НЕВРОЛОГИЯ',
    link: '/directions/Neurology',
    icon: FaHeadSideVirus,
  },
  {
    id: 6,
    text: 'МАММОЛОГИЯ',
    link: '/directions/Mammology',
    icon: IoFish,
  },
  {
    id: 7,
    text: 'РЕАНИМАЦИННОЕ ОТДЕЛЕНИЕ',
    link: '/directions/ReanimationDepartment',
    icon: FaBedPulse,
  },
  {
    id: 8,
    text: 'ОТДЕЛЕНИЕ ЭНДОСКОПИИ',
    link: '/directions/Endoscopy',
    icon: GiHeartOrgan,
  },
  {
    id: 9,
    text: 'ТЕРАПИЯ',
    link: '/directions/Therapy',
    icon: MdMedicationLiquid,
  },
  {
    id: 10,
    text: 'ОНКООРТОПЕДИЯ',
    link: '/directions/Oncoorthopedics',
    icon: GiBrokenBone,
  }
];


export const reasons = [
  {
    id: 0,
    title: 'Ведущие врачи',
    text: `
    Каждый наш специалист является 
    экспертом в своей сфере. О вашем 
    здоровье заботятся более 40 опытных 
    докторов.`,
    icon: FaUserDoctor,
  },

  {
    id: 1,
    title: 'Современные подходы',
    text: `
    Лечение в соответствии с актуальными 
    версиями российских клинических 
    рекомендаций и международных протоколов.`,
    icon: FcSmartphoneTablet,
  },

  {
    id: 2,
    title: 'На пике прогресса',
    text: `
    Следим за инновациями в различных 
    сферах медицины и оперативно внедряем 
    новые зарегистрированные препараты, 
    разработки.`,
    icon: GiProgression,
  },

  {
    id: 3,
    title: 'Более 15 направлений медицины',
    text: `
     Вы можете получить все виды
     медицинской помощи в одном месте, 
     быстро и удобно.`,
    icon: PiVectorThree,
  },

  {
    id: 4,
    title: 'Собственная клинико-диагностическая лаборатория',
    text: `
    позволяет оперативно выполнить 
    все виды анализов, в том числе редкие.`,
    icon: GiTestTubes,
  },

  {
    id: 5,
    title: 'Экспертность',
    text: `
     Знаем, как помочь в сложных случаях,
     если стандартные методы неэффективны. 
     Для многих ациентов наши врачи 
     становятся последней надеждой.`,
    icon: SiAdguard,
  },

  {
    id: 6,
    title: 'Новейшие технологии',
    text: `
    Выбираем лучшее медицинское оборудование
     последних поколений от лидирующих производителей.`,
    icon: GrCloudComputer,
  },

  {
    id: 7,
    title: 'В центре нашего внимания — всегда пациент',
    text: `
    Учитываем индивидуальные особенности
    каждого пациента. Проводим лечение 
    без боли, в комфортной и доброжелательной 
    обстановке.`,
    icon: TbHealthRecognition,
  },

  {
    id: 8,
    title: 'Идеальная репутация',
    text: `
    Лучший показатель качества нашей 
    работы – это доверие, многочисленные
    положительные отзывы и рекомендации 
    наших пациентов.`,
    icon: TiTick,
  },
];

export const doctors = [
  {
    id: 0,
    img: 'https://medcentre-mytishi.ru/uploads/010321/010221/23.png',
    title: 'Иванов Антон Александрович',
    text: `
    Медицинский директор, врач-онколог, хирург, 
    онкохирург, химиотерапевт.`
  },

  {
    id: 1,
    img: first,
    title: 'Титов Михаил Сергеевич',
    text: 'Врач-онколог, химиотерапевт.'
  },

  {
    id: 2,
    img: second,
    title: 'Шахнович Виктор Александрович',
    text: 'Врач-невролог.'
  },

  {
    id: 3,
    img: third,
    title: 'Шестакова Татьяна Николаевна',
    text: `
    Врач акушер-гинеколог, хирург, 
    врач - УЗИ, гинеколог-эстетист.`
  },

  {
    id: 4,
    img: 'https://static.tildacdn.com/tild6338-6166-4337-b862-633163383630/__5_1.png',
    title: 'Антонова Галина Васильевна',
    text: 'Врач-онколог, химиотерапевт.'
  },

  {
    id: 5,
    img: fifth,
    title: 'Базин Игорь Сергеевич',
    text: 'Врач-онколог, химиотеравпевт.'
  },

  {
    id: 6,
    img: 'https://i.pinimg.com/originals/00/f8/e6/00f8e62a60bba40c1cbc109b2a8c559a.png',
    title: 'Барагунов Мурат Асланбиевич',
    text: 'Врач-онколог, хирург.'
  },

  {
    id: 7,
    img: seventh,
    title: 'Нагорный Валерий Николаевич',
    text: 'Врач-невролог, нейрохирург.'
  },
];

export const sixthSecDiagnostic = [
  {
    id: '0',
    title: 'ДИАГНОСТИКА ОНКОЛОГИЧЕСКИХ ЗАБОЛЕВАНИЙ',
  },

  {
    id: '1',
    title: 'КОМПЬЮТЕРНАЯ ТОМОГРАФИЯ (КТ)',
  },

  {
    id: '2',
    title: 'МАММОГРАФИЯ',
  },

  {
    id: '3',
    title: 'УЗИ',
  },

  {
    id: '4',
    title: 'ОТДЕЛЕНИЕ ЭНДОСКОПИИ',
  },

  {
    id: '5',
    title: 'ВТОРОЕ ВРАЧЕБНОЕ МНЕНИЕ В ОНКОЛОГИИ',
  },

  {
    id: '6',
    title: 'ЗАОЧНАЯ КОНСУЛЬТАЦИЯ ОНКОЛОГА',
  },

  {
    id: '7',
    title: 'ПАЙПЕЛЬ-БИОПСИЯ',
  },

  {
    id: '8',
    title: 'ТЕЛЕМЕДИЦИНСКИЕ КОНСУЛЬТАЦИИ',
  },

  {
    id: '9',
    title: 'ЛУЧЕВАЯ ДИАГНОСТИКА',
  },
];

export const Inpatient = [
  {
    id: 0,
    icon: FaBed,
    title: 'В клинике функционирует современный круглосуточный стационар с комфортабельными 1, 2 и 3-местными палатами.',
  },

  {
    id: 1,
    icon: FaBath,
    title: 'В каждой палате есть все удобства, в том числе ванные комнаты с туалетом, функциональные кровати, интернет и телевидение.',
  },

  {
    id: 2,
    icon: MdAddIcCall,
    title: 'Каждая кровать оснащена индивидуальной системой вызова медперсонала.',
  },

  {
    id: 3,
    icon: MdNoFood,
    title: 'Пациенты получают сбалансированное, вкусное и здоровое трехразовое питание.',
  },
];

export const OncologyText = [
  {
    id: 0,
    title: 'Точная диагностика.',
    text: 'Обследование на современном оборудовании, онкоскрининг, второе врачебное мнение.',
  },

  {
    id: 1,
    title: 'Хирургия.',
    text: 'Все виды операций, любого уровня сложности. Малоинвазивные, эндоскопические вмешательства.',
  },

  {
    id: 2,
    title: 'Противоопухолевая терапия',
    text: 'оригинальными препаратами по международным протоколам.',
  },

  {
    id: 3,
    title: 'Инновационные методики.',
    text: 'Гипертермическая интраперитонеальная химиотерапия (HIPEC), фотодинамическая терапия (ФДТ) , имплантация венозных и перитонеальных порт-систем.',
  },

  {
    id: 4,
    title: 'Лечение осложнений рака:',
    text: 'асцита, экссудативного плеврита, механической желтухи, кишечной непроходимости.',
  },
];

export const Oncology = [
  {
    id: 0,
    text: 'ПОРТ СИСТЕМА ДЛЯ ХИМИОТЕРАПИИ',
  },

  {
    id: 1,
    text: 'СТАЦИОНАР ДЛЯ ОНКОЛОГИЧЕКСКИХ ПАЦИЕНТОВ',
  },

  {
    id: 2,
    text: 'КОНСУЛЬТАЦИЯ ОНКОЛОГА',
  },

  {
    id: 3,
    text: 'ДИАГНОСТИКА ОНКОЛОГИЧЕКСКИХ ЗАБОЛЕВАНИЙ',
  },

  {
    id: 4,
    text: 'ИММУНОТЕРАПИЯ',
  },

  {
    id: 5,
    text: 'HIPEC',
  },

  {
    id: 6,
    text: 'ОНКОКОНСИЛИУМ',
  },

  {
    id: 7,
    text: 'ХИМИОТЕРАПИЯ',
  },

];

export const OncologyList = [
  {
    id: 0,
    icon: GiTumor,
    title: 'Онкохирургия',
  },

  {
    id: 1,
    icon: GiKidneys,
    title: 'Оперативная урология',
  },

  {
    id: 2,
    icon: RiSurgicalMaskLine,
    title: 'Интервенционная хирургия',
  },

  {
    id: 3,
    icon: GiBreastplate,
    title: 'Торакальная хирургия',
  },

  {
    id: 4,
    icon: MdOutlineVideogameAsset,
    title: 'Эндоскопическая хирургия',
  },

  {
    id: 5,
    icon: GiLiver,
    title: 'Биопсия печени',
  },
];